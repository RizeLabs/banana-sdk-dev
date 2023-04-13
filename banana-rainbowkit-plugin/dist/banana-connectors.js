var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Connector, UserRejectedRequestError, } from "wagmi";
import { Banana } from "@rize-labs/banana-wallet-sdk-test/dist";
import { Chains as BananSupportChains } from "@rize-labs/banana-wallet-sdk-test/dist";
export class BananaConnector extends Connector {
    constructor({ chains, options }) {
        var _a, _b;
        super({ chains, options });
        this.id = "banana";
        this.name = "Banana";
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
            let provider;
            let walletAddress = "";
            //@ts-ignore
            this === null || this === void 0 ? void 0 : this.emit("message", { type: "connecting" });
            if (walletName) {
                this.wallet = yield this.BananaInstance.connectWallet(walletName);
                if (!this.wallet) {
                    throw new UserRejectedRequestError("Wallet connection failed");
                }
                walletAddress = yield this.wallet.getAddress();
                provider = this.wallet.getProvider();
            }
            else {
                // @ts-ignore-next-line
                this.wallet = yield this.BananaInstance.createWallet();
                if (!this.wallet) {
                    throw new UserRejectedRequestError("Wallet creation failed");
                }
                walletAddress = yield this.wallet.getAddress();
                provider = this.wallet.getProvider();
            }
            provider.on("accountsChanged", this.onAccountsChanged.bind(this));
            provider.on("disconnect", this.onDisconnect.bind(this));
            provider.on("chainChanged", this.onChainChanged.bind(this));
            this.address = yield this.wallet.getAddress();
            this.connected = true;
            console.log(`0x${walletAddress.substring(2)}`);
            console.log(this.chainId);
            console.log(provider);
            console.log({
                account: `0x${walletAddress.substring(2)}`,
                chain: {
                    id: this.chainId,
                    unsupported: false,
                },
                provider,
            });
            return {
                account: `0x${walletAddress.substring(2)}`,
                chain: {
                    id: this.chainId,
                    unsupported: false,
                },
                provider,
            };
        });
    }
    // for banana disconnecting == resetWallet
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('disconnect called');
            this.BananaInstance.resetWallet();
        });
    }
    getAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.wallet.getAddress();
        });
    }
    getChainId() {
        return __awaiter(this, void 0, void 0, function* () {
            // wallet not yet initialized
            if (!this.wallet)
                return this.chainId;
            return this.wallet.getChainId();
        });
    }
    getProvider() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("provider called ");
            if (this.provider)
                return this.provider;
            if (!this.provider) {
                if (this.wallet) {
                    const provider = this.wallet.getProvider();
                    this.provider = provider;
                    return this.provider;
                }
                yield this.connect();
                //@ts-ignore
                return this.wallet.getProvider();
            }
        });
    }
    getSigner() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("signer called");
            console.log(this.wallet.getSigner());
            if (!this.wallet) {
                throw new UserRejectedRequestError("Wallet not initialized");
            }
            return this.wallet.getSigner();
        });
    }
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
    //! Current Banana wallet has 1:1 mapping with accounts
    onAccountsChanged(accounts) {
        throw new Error("Method not implemented.");
    }
    onChainChanged(chain) {
        const id = normalizeChainId(chain);
        const isNewChainSupported = this.isChainUnsupported(id);
        // @ts-ignore-next-line
        this === null || this === void 0 ? void 0 : this.emit("change", { chain: { id, isNewChainSupported } });
    }
    onDisconnect(error) {
        console.log("disconnect called ");
        this.BananaInstance.resetWallet();
        // @ts-ignore-next-line
        this === null || this === void 0 ? void 0 : this.emit("disconnect");
    }
    switchChain(chainId) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const isNewChainSupported = this.isChainUnsupported(chainId);
            if (!isNewChainSupported)
                throw new Error(`Unsupported chainId: ${chainId}`);
            const bananaChain = getChain(chainId);
            this.chainId = getChainId(chainId);
            const BananaInstance = new Banana(bananaChain);
            this.BananaInstance = BananaInstance;
            // connect same wallet with new chain config
            yield this.connect();
            const chain = this.chains.find((x) => x.id === chainId);
            if (!chain)
                throw new Error(`Unsupported chainId: ${chainId}`);
            (_a = this.provider) === null || _a === void 0 ? void 0 : _a.emit("chainChanged", chainId);
            return chain;
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
    if (typeof networkId === "string")
        return Number.parseInt(networkId, networkId.trim().substring(0, 2) === "0x" ? 16 : 10);
    return networkId;
}
function getChain(networkId) {
    let chainId;
    if (typeof networkId == "number")
        chainId = networkId.toString();
    if (chainId == "5")
        return BananSupportChains.goerli;
    if (chainId == "80001")
        return BananSupportChains.mumbai;
    if (chainId === "420")
        return BananSupportChains.optimismTestnet;
    return BananSupportChains.arbitrumTestnet;
}
function normalizeChainId(chainId) {
    if (typeof chainId === "string")
        return Number.parseInt(chainId, chainId.trim().substring(0, 2) === "0x" ? 16 : 10);
    if (typeof chainId === "bigint")
        return Number(chainId);
    return chainId;
}
