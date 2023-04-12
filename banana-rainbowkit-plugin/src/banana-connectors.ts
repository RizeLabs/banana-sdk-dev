import { Address, Connector, ConnectorData, ConnectorNotFoundError, UserRejectedRequestError } from 'wagmi';
import { Banana } from '@rize-labs/banana-wallet-sdk/src/BananaProvider'
import { Chains as BananSupportChains } from '@rize-labs/banana-wallet-sdk/src/Constants'
import { Wallet } from '@rize-labs/banana-wallet-sdk/src/BananaWallet';
import { Banana4337Provider } from '@rize-labs/banana-wallet-sdk//src/Banana4337Provider';
import { BananaSigner } from '@rize-labs/banana-wallet-sdk/src/BananaSigner';
import { Chain } from 'wagmi';

interface ConnectOptions {
    networkId: string | number,
}

interface Options {
    connect?: ConnectOptions;
}

export class BananaConnector extends Connector<Banana4337Provider, Options | undefined, BananaSigner> {
    id = 'banana';
    name = 'Banana';
    ready = true;
    provider: Banana4337Provider | null = null;
    connected = false;
    BananaInstance: Banana
    chainId: number
    wallet!: Wallet
    address!: string

    constructor({ chains, options }: { chains?: Chain[]; options?: Options }) {
        console.log('constructor called');
        super({ chains, options });
        if(options?.connect?.networkId) {
            const chain = getChain(options?.connect?.networkId);
            this.chainId = getChainId(options.connect.networkId);
            const BananaInstance = new Banana(chain);
            this.BananaInstance = BananaInstance;
        } else {
            throw new UserRejectedRequestError("Need chainid and jsonRpcUrl");
        }
    }

    async connect(): Promise<Required<ConnectorData<Banana4337Provider>>> {
        console.log('connect called');
        const walletName = this.BananaInstance.getWalletName();
        let provider;
        let walletAddress = '';
        //@ts-ignore
        this?.emit('message', { type: 'connecting' })
        if(walletName) {
            this.wallet = await this.BananaInstance.connectWallet(walletName);
            if(!this.wallet) {
                throw new UserRejectedRequestError("Wallet connection failed");
            } 
            walletAddress = await this.wallet.getAddress();
            provider = this.wallet.getProvider();
        } else {
            // @ts-ignore-next-line
            // need to somehow create a way for getting walletName for now passing random name 
            this.wallet = await this.BananaInstance.createWallet();
            if(!this.wallet) {
                throw new UserRejectedRequestError("Wallet creation failed");
            }
            walletAddress = await this.wallet.getAddress();
            provider = this.wallet.getProvider();
        }

        provider.on("accountsChanged", this.onAccountsChanged.bind(this));
        provider.on('disconnect', this.onDisconnect.bind(this));
        provider.on("chainChanged", this.onChainChanged.bind(this));
        this.address = await this.wallet.getAddress();
        this.connected = true;

        console.log(" things reaching herer ");
        console.log(`0x${walletAddress.substring(2)}`)
        console.log(this.chainId)
        console.log(provider)
        console.log( {
            account: `0x${walletAddress.substring(2)}`,
            chain: {
                id: this.chainId, // hardcoding for now
                unsupported: false
            },
            provider
        })
        return {
            account: `0x${walletAddress.substring(2)}`,
            chain: {
                id: this.chainId, // hardcoding for now
                unsupported: false
            },
            provider
        }
    }

    async disconnect() {
        console.log('disconnect called')
        // disconnected wallet means removing browser
        this.BananaInstance.resetWallet(); 
    }

    async getAccount() {
        console.log('get account called');
        return this.wallet.getAddress() as Promise<Address>
    }

    async getChainId() {
        if(!this.wallet) return this.chainId;
        return this.wallet.getChainId();
    }

    async getProvider() {
        console.log('provider called ')
        if(this.provider) return this.provider;

        if(!this.provider) {
            if(this.wallet) {
                const provider = this.wallet.getProvider();
                this.provider = provider;
                return this.provider;
            }
            await this.connect()
            //@ts-ignore
            return this.wallet.getProvider();
        }
    }

    async getSigner(): Promise<BananaSigner> {
        console.log('signer called');
        console.log(this.wallet.getSigner());
        return this.wallet.getSigner();
    }

    //! Not sure what this method is for
    async isAuthorized() {
        console.log('authority')
        try {
            return !!this.address;
        } catch {
          return false;
        }
    }

    //! Not supported yet
    protected onAccountsChanged(accounts: string[]): void {
        console.log('acc called ')
        throw new Error('Method not implemented.');
    }

    protected onChainChanged(chain: string | number): void {
        console.log('chain change');
        console.log(" cahin id ", chain);
        // just need to check if chain is supported or not
        const id = normalizeChainId(chain);
        const isNewChainSupported = this.isChainUnsupported(id);
        console.log("new chain supporte ", isNewChainSupported);
        // if(!isNewChainSupported)
        // throw new Error('Chain not supported.');

        // @ts-ignore-next-line
        this?.emit('change', { chain: { id, isNewChainSupported } })
    }

    protected onDisconnect(error: Error): void {
        console.log('disconnect called ');
        // @ts-ignore-next-line
        this?.emit('disconnect')
        this.BananaInstance.resetWallet();
    }

    async switchChain(chainId: number): Promise<Chain> {

        const bananaChain = getChain(chainId);
        this.chainId = getChainId(chainId);
        const BananaInstance = new Banana(bananaChain);
        this.BananaInstance = BananaInstance;
        await this.connect();
        console.log("switch chain ", chainId)
        //@ts-ignore
        console.log('chain switch ');
        //! Need to figure out what's to be done here
        // this.chains
        const chain = this.chains.find((x) => x.id === chainId);
        if (!chain) throw new Error(`Unsupported chainId: ${chainId}`);
        this.provider?.emit('chainChanged', chainId);
        console.log(" these is return ", chain);
        // this.onChainChanged(chainId);
        return chain;
    }

    isChainUnsupported(chainId: number): boolean {
        console.log('chain support');
        let isChainSupported = false;
        for (const chainName in BananSupportChains) {
            const chainValue = BananSupportChains[chainName];
            if(chainId.toString() == chainValue) isChainSupported = true;
        }   
        console.log("chain support ", isChainSupported);
        return isChainSupported;
    }
}

function getChainId(networkId: string | number) {
    if (typeof networkId === 'string') return Number.parseInt(networkId, networkId.trim().substring(0, 2) === '0x' ? 16 : 10);
    return networkId;
}

function getChain(networkId: string | number): BananSupportChains {
    let chainId;
    if(typeof networkId == 'number')
    chainId = networkId.toString();
    if(chainId == '5') return BananSupportChains.goerli;
    if(chainId == '80001') return BananSupportChains.mumbai
    if(chainId === '420') return BananSupportChains.optimismTestnet
    return BananSupportChains.arbitrumTestnet
}

function normalizeChainId(chainId: string | number | bigint) {
    if (typeof chainId === 'string') return Number.parseInt(chainId, chainId.trim().substring(0, 2) === '0x' ? 16 : 10);
    if (typeof chainId === 'bigint') return Number(chainId);
    return chainId;
  }