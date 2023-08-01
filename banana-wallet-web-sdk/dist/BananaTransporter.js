"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BananaTransporter = void 0;
const uuid_1 = require("uuid");
const Constants_1 = require("./Constants");
const Controller_1 = require("./Controller");
const BananaCookie_1 = require("./BananaCookie");
const urlBuilder_1 = require("./utils/urlBuilder");
class BananaTransporter {
    constructor() {
        this.cookieInstance = new BananaCookie_1.BananaCookie();
    }
    async getWalletName() {
        const sessionId = (0, uuid_1.v4)();
        const finalUrl = (0, urlBuilder_1.default)(Constants_1.BANANA_APP_URL, {
            path: ['wallet', sessionId],
            queryParams: {
                dapp: window.location.hostname,
                isMobile: 'false',
            }
        });
        var walletNamePopUp = window.open('', "_blank");
        if (walletNamePopUp) {
            walletNamePopUp.location.href = finalUrl;
        }
        else {
            alert('Please make sure popup are enabled for providing username');
        }
        return new Promise((resolve, reject) => {
            const intervalId = setInterval(async () => {
                const username = await (0, Controller_1.getUsernameFromSessionId)(sessionId);
                //@ts-ignore
                if (username) {
                    clearInterval(intervalId);
                    resolve(username);
                }
            }, 1000);
        });
    }
    getMessageSignature(message) {
        const sessionId = (0, uuid_1.v4)();
        const walletName = this.cookieInstance.getCookie('bananaUser');
        const finalUrl = (0, urlBuilder_1.default)(Constants_1.BANANA_APP_URL, {
            path: ['wallet', 'sign', sessionId],
            queryParams: {
                message: message,
                walletname: walletName,
                isMobile: 'false'
            }
        });
        var walletNamePopUp = window.open('', "_blank");
        if (walletNamePopUp) {
            walletNamePopUp.location.href = finalUrl;
        }
        else {
            alert('Please enable popups for message and transaction signing');
        }
        return new Promise((resolve, reject) => {
            const intervalId = setInterval(async () => {
                const signature = await (0, Controller_1.getMessageSignConfirmation)(sessionId);
                //@ts-ignore
                if (signature) {
                    clearInterval(intervalId);
                    resolve(signature);
                }
            }, 1000);
        });
    }
    getUserOpSignature(txn, minBalance, userOpHash) {
        const sessionId = (0, uuid_1.v4)();
        const walletName = this.cookieInstance.getCookie('bananaUser');
        const walletMetaData = this.cookieInstance.getCookie(walletName);
        const finalUrl = (0, urlBuilder_1.default)(Constants_1.BANANA_APP_URL, {
            path: ['wallet', 'transact', sessionId],
            queryParams: {
                to: txn.to,
                from: walletMetaData.walletAddress,
                value: txn.value?.toString(),
                gas: minBalance,
                userOpHash: userOpHash,
                walletname: walletName,
                isMobile: 'false'
            }
        });
        var walletNamePopUp = window.open('', "_blank");
        if (walletNamePopUp) {
            walletNamePopUp.document.write('loading popup for transaction confirmation...');
            walletNamePopUp.location.href = finalUrl;
        }
        else {
            alert('Please enable popups for message and transaction signing');
        }
        return new Promise((resolve, reject) => {
            const intervalId = setInterval(async () => {
                const signature = await (0, Controller_1.getTransactionSignConfirmation)(sessionId);
                //@ts-ignore
                if (signature) {
                    clearInterval(intervalId);
                    resolve(signature);
                }
            }, 1000);
        });
    }
}
exports.BananaTransporter = BananaTransporter;
//# sourceMappingURL=BananaTransporter.js.map