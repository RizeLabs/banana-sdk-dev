"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banana4337Provider = void 0;
const sdk_1 = require("@account-abstraction/sdk");
const BananaSigner_1 = require("./BananaSigner");
class Banana4337Provider extends sdk_1.ERC4337EthersProvider {
    constructor(chainId, config, originalSigner, originalProvider, httpRpcClient, entryPoint, smartAccountAPI, publicKey, jsonRpcProvider, paymasterUrl) {
        super(chainId, config, originalSigner, originalProvider, httpRpcClient, entryPoint, smartAccountAPI);
        this.chainId = chainId;
        this.config = config;
        this.originalSigner = originalSigner;
        this.originalProvider = originalProvider;
        this.httpRpcClient = httpRpcClient;
        this.entryPoint = entryPoint;
        this.smartAccountAPI = smartAccountAPI;
        this.publicKey = publicKey;
        this.jsonRpcProvider = jsonRpcProvider;
        this.paymasterUrl = paymasterUrl;
        this.signer = new BananaSigner_1.BananaSigner(config, originalSigner, this, httpRpcClient, smartAccountAPI, jsonRpcProvider, publicKey, paymasterUrl);
    }
    getSigner() {
        return this.signer;
    }
}
exports.Banana4337Provider = Banana4337Provider;
//# sourceMappingURL=Banana4337Provider.js.map