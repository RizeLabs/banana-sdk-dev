// import { Chain } from '@rainbow-me/rainbowkit';
import { Address, Connector, ConnectorData, ConnectorNotFoundError, UserRejectedRequestError } from 'wagmi';
// import { Web3Provider } from '@ethersproject/providers';
import { Banana } from './banana-wallet-sdk/src/BananaProvider'
import { Chains as BananSupportChains } from './banana-wallet-sdk/src/Constants'
// import { ConnectOptions } from './banana-wallet-sdk/src/interfaces/Banana.interface';
import { Wallet } from './banana-wallet-sdk/src/BananaWallet';
import { Banana4337Provider } from './banana-wallet-sdk/src/Banana4337Provider';
import { BananaSigner } from './banana-wallet-sdk/src/BananaSigner';
import { Chain } from 'wagmi';

interface ConnectOptions {
    networkId: string | number,
    jsonRpcUrl: string
}

interface Options {
    connect?: ConnectOptions;
}

export class BananaConnector extends Connector<Banana4337Provider, Options | undefined> {
    id = 'banana';
    name = 'Banana';
    ready = true;
    provider: Banana4337Provider | null = null;
    connected = false;
    BananaInstance: Banana
    address!: Address
    chainId: number
    wallet!: Wallet

    constructor({ chains, options }: { chains?: Chain[]; options?: Options }) {
        super({ chains, options });
        // by default creating wallet for mumbai
        if(options?.connect?.networkId && options.connect.jsonRpcUrl) {
            const chain = getChain(options?.connect?.networkId);
            //! Need to remove these or zero condition
            this.chainId = getChainId(options.connect.networkId) || 0;
            const BananaInstance = new Banana(chain, options.connect.jsonRpcUrl);
            this.BananaInstance = BananaInstance;
        } else {
            throw new UserRejectedRequestError("Need chainid and jsonRpcUrl");
        }
    }

    async connect(): Promise<Required<ConnectorData<Banana4337Provider>>> {
        const walletName = this.BananaInstance.getWalletName();
        let walletAddress = '';
        if(walletName) {
            this.wallet = await this.BananaInstance.connectWallet(walletName);
            if(!this.wallet) {
                throw new UserRejectedRequestError("Wallet connection failed");
            } 
            walletAddress = await this.wallet.getAddress();
            this.provider = await this.wallet.getProvider();
            this.connected = true;
            this.address = `0x${walletAddress.substring(2)}`;
        } else {
            // need to somehow create a way for getting walletName for now passing random name 
            this.wallet = await this.BananaInstance.createWallet("walletName");
            if(!this.wallet) {
                throw new UserRejectedRequestError("Wallet creation failed");
            }
            walletAddress = await this.wallet.getAddress();
            this.provider = await this.wallet.getProvider();
            this.connected = true;
            this.address = `0x${walletAddress.substring(2)}`;
        }

        return {
            account: `0x${walletAddress.substring(2)}`,
            chain: {
                id: this.chainId, // hardcoding for now
                unsupported: false
            },
            provider: this.provider
        }
    }

    async disconnect() {
        // you can't disconnect wallet for now        
    }

    async getAccount() {
        return this.address
    }

    async getChainId() {
        return this.chainId
    }

    async getProvider() {
        if(!this.provider) {
            const provider = await this.wallet.getProvider();
            if (!provider) {
                throw new ConnectorNotFoundError('Failed to get Banana Wallet provider.');
            }
            this.provider = provider;
        }
        return this.provider;
    }

    async getSigner(): Promise<BananaSigner> {
        if(!this.provider) {
            return this.wallet.getProvider().getSigner();
        }
        return this.provider?.getSigner();
    }

    async isAuthorized() {
        try {
            return !!this.address;
        } catch {
          return false;
        }
    }

    protected onAccountsChanged(accounts: `0x${string}`[]): void {
        throw new Error('Method not implemented.');
    }
    protected onChainChanged(chain: string | number): void {
        throw new Error('Method not implemented.');
    }
    protected onDisconnect(error: Error): void {
        this.BananaInstance.resetWallet();
    }

    // async switchChain(chainId: number): Promise<Chain> {
    //     // throw new Error('Method not implemented.');
    //     return { id: chainId } as Chain;
    // }
}

function getChainId(networkId: string | number) {
    if (typeof networkId === 'string') return Number.parseInt(networkId, networkId.trim().substring(0, 2) === '0x' ? 16 : 10);
    if (typeof networkId === 'bigint') return Number(networkId);
}

function getChain(networkId: string | number ) {
    let chainId;
    if (typeof networkId === 'string') chainId = Number.parseInt(networkId, networkId.trim().substring(0, 2) === '0x' ? 16 : 10);
    if (typeof networkId === 'bigint') chainId = Number(networkId);
    if(chainId == 5) {
        return BananSupportChains.goerli;
    }
    if(chainId == 80001) {
        return BananSupportChains.mumbai
    }

    // some default chain
    return BananSupportChains.optimismTestnet
}