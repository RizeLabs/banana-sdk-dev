"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
const BananaCookie_1 = require("./BananaCookie");
class Wallet {
    constructor(walletAddress, walletProvider, chainId) {
        this.walletAddress = walletAddress;
        this.walletProvider = walletProvider;
        this.chainId = chainId;
        this.cookie = new BananaCookie_1.BananaCookie();
    }
    getProvider() {
        return this.walletProvider;
    }
    getSigner() {
        return this.walletProvider.getSigner();
    }
    async getChainId() {
        return this.chainId;
    }
    getAddress() {
        return Promise.resolve(this.walletAddress);
    }
    // for us wallet connection means there should be a cookie in browser
    isConnected() {
        const walletName = this.cookie.getCookie("bananaUser");
        return walletName != '';
    }
}
exports.Wallet = Wallet;
//# sourceMappingURL=BananaWallet.js.map