var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Connector, ConnectorNotFoundError, UserRejectedRequestError } from 'wagmi';
import { Banana } from '@rize-labs/banana-wallet-sdk/src/BananaProvider';
import { Chains as BananSupportChains } from '@rize-labs/banana-wallet-sdk/src/Constants';
export class BananaConnector extends Connector {
    constructor({ chains, options }) {
        var _a, _b;
        super({ chains, options });
        this.id = 'banana';
        this.name = 'Banana';
        this.ready = true;
        this.provider = null;
        this.connected = false;
        if ((_a = options === null || options === void 0 ? void 0 : options.connect) === null || _a === void 0 ? void 0 : _a.networkId) {
            const chain = getChain((_b = options === null || options === void 0 ? void 0 : options.connect) === null || _b === void 0 ? void 0 : _b.networkId);
            this.chainId = getChainId(options.connect.networkId);
            const BananaInstance = new Banana(chain);
            this.BananaInstance = BananaInstance;
        }
        else {
            throw new UserRejectedRequestError("Need chainid and jsonRpcUrl");
        }
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            const walletName = this.BananaInstance.getWalletName();
            let walletAddress = '';
            if (walletName) {
                this.wallet = yield this.BananaInstance.connectWallet(walletName);
                if (!this.wallet) {
                    throw new UserRejectedRequestError("Wallet connection failed");
                }
                walletAddress = yield this.wallet.getAddress();
                this.provider = this.wallet.getProvider();
                this.connected = true;
                this.address = `0x${walletAddress.substring(2)}`;
            }
            else {
                // need to somehow create a way for getting walletName for now passing random name 
                this.wallet = yield this.BananaInstance.createWallet("walletName");
                if (!this.wallet) {
                    throw new UserRejectedRequestError("Wallet creation failed");
                }
                walletAddress = yield this.wallet.getAddress();
                this.provider = this.wallet.getProvider();
                this.connected = true;
                this.address = `0x${walletAddress.substring(2)}`;
            }
            return {
                account: `0x${walletAddress.substring(2)}`,
                chain: {
                    id: this.chainId,
                    unsupported: false
                },
                provider: this.provider
            };
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            // disconnected wallet means removing browser
            this.BananaInstance.resetWallet();
        });
    }
    getAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.address;
        });
    }
    getChainId() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.wallet.isConnected()) {
                return this.connect().then(() => this.wallet.getChainId());
            }
            return this.wallet.getChainId();
        });
    }
    getProvider() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.provider) {
                const provider = this.wallet.getProvider();
                if (!provider) {
                    throw new ConnectorNotFoundError('Failed to get Banana Wallet provider.');
                }
                this.provider = provider;
            }
            return this.provider;
        });
    }
    getSigner() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.provider) {
                // As our current wallet is single account wallet so this should work
                return this.wallet.getProvider().getSigner();
            }
            return (_a = this.provider) === null || _a === void 0 ? void 0 : _a.getSigner();
        });
    }
    //! Not sure what this method is for
    isAuthorized() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return !!this.address;
            }
            catch (_a) {
                return false;
            }
        });
    }
    //! Not supported yet
    onAccountsChanged(accounts) {
        throw new Error('Method not implemented.');
    }
    onChainChanged(chain) {
        // just need to check if chain is supported or not
        const id = normalizeChainId(chain);
        const isNewChainSupported = this.isChainUnsupported(id);
        if (!isNewChainSupported)
            throw new Error('Chain not supported.');
        const newBananaInstance = new Banana(getChain(chain));
        this.BananaInstance = newBananaInstance;
        this.connect();
    }
    onDisconnect(error) {
        this.BananaInstance.resetWallet();
    }
    switchChain(chainId) {
        return __awaiter(this, void 0, void 0, function* () {
            //! Need to figure out what's to be done here
            return { id: chainId };
        });
    }
    isChainUnsupported(chainId) {
        let isChainSupported = false;
        for (const chainName in BananSupportChains) {
            const chainValue = BananSupportChains[chainName];
            if (chainId.toString() == chainValue)
                isChainSupported = true;
        }
        return isChainSupported;
    }
}
function getChainId(networkId) {
    if (typeof networkId === 'string')
        return Number.parseInt(networkId, networkId.trim().substring(0, 2) === '0x' ? 16 : 10);
    return networkId;
}
function getChain(networkId) {
    let chainId;
    if (typeof networkId == 'number')
        chainId = networkId.toString();
    if (chainId == '5')
        return BananSupportChains.goerli;
    if (chainId == '80001')
        return BananSupportChains.mumbai;
    if (chainId === '420')
        return BananSupportChains.optimismTestnet;
    return BananSupportChains.arbitrumTestnet;
}
function normalizeChainId(chainId) {
    if (typeof chainId === 'string')
        return Number.parseInt(chainId, chainId.trim().substring(0, 2) === '0x' ? 16 : 10);
    if (typeof chainId === 'bigint')
        return Number(chainId);
    return chainId;
}
