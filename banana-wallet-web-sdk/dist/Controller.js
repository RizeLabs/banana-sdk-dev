"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactionSignConfirmation = exports.getMessageSignConfirmation = exports.getUsernameFromSessionId = exports.checkIsWalletNameExist = exports.checkInitCodeStatus = exports.setWalletMetaData = exports.getWalletMetaData = void 0;
const axios_1 = require("axios");
const routes_1 = require("./routes");
const Constants_1 = require("./Constants");
axios_1.default.defaults.baseURL = "";
const getWalletMetaData = async (walletIdentifier) => {
    try {
        const walletCredentials = await (0, axios_1.default)({
            url: Constants_1.BANANA_SERVER + routes_1.GET_WALLETCRED_ROUTE,
            method: Constants_1.Methods.GET,
            params: {
                uniqueIdentifier: walletIdentifier,
            },
        });
        console.log("Wallet Metadata: ", walletCredentials);
        if (walletCredentials.data.data !== "") {
            return JSON.parse(walletCredentials.data.data);
        }
        return "";
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.getWalletMetaData = getWalletMetaData;
const setWalletMetaData = async (walletIdentifier, userCredentialObject) => {
    try {
        const updateUserCredentialStatus = await (0, axios_1.default)({
            url: Constants_1.BANANA_SERVER + routes_1.ADD_WALLETCRED_ROUTE,
            method: Constants_1.Methods.POST,
            data: {
                uniqueIdentifier: walletIdentifier,
                userCredentials: userCredentialObject,
            },
        });
        if (updateUserCredentialStatus)
            return {
                success: true,
            };
        return {
            success: false
        };
    }
    catch (err) {
        throw err;
    }
};
exports.setWalletMetaData = setWalletMetaData;
const checkInitCodeStatus = async (walletIdentifier) => {
    try {
        const initCodeStatus = await (0, axios_1.default)({
            url: Constants_1.BANANA_SERVER + routes_1.CHECK_INITCODE_ROUTE,
            method: Constants_1.Methods.GET,
            params: {
                uniqueIdentifier: walletIdentifier,
            },
        });
        if (initCodeStatus.data.isInitCode) {
            return {
                isInitCode: true,
            };
        }
        return {
            isInitCode: false,
        };
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.checkInitCodeStatus = checkInitCodeStatus;
const checkIsWalletNameExist = async (walletName) => {
    try {
        const isWalletUnique = await (0, axios_1.default)({
            url: Constants_1.BANANA_SERVER + routes_1.IS_WALLETNAME_UNIQUE_ROUTE,
            method: Constants_1.Methods.POST,
            data: {
                walletName: walletName,
            },
        });
        if (isWalletUnique.data.isUnique) {
            return true;
        }
        return false;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.checkIsWalletNameExist = checkIsWalletNameExist;
const getUsernameFromSessionId = async (sessionId) => {
    try {
        const usernameResponse = await (0, axios_1.default)({
            url: Constants_1.BANANA_SERVER + "/connect",
            method: Constants_1.Methods.GET,
            params: {
                sessionId: sessionId,
            },
        });
        // console.log("Username response ", usernameResponse);
        //@ts-ignore
        return usernameResponse.data.data;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.getUsernameFromSessionId = getUsernameFromSessionId;
const getMessageSignConfirmation = async (sessionId) => {
    try {
        const signConfirmationResp = await (0, axios_1.default)({
            url: Constants_1.BANANA_SERVER + "/message-sign-confirmation",
            method: Constants_1.Methods.GET,
            params: {
                sessionId: sessionId,
            },
        });
        return signConfirmationResp.data.signature;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.getMessageSignConfirmation = getMessageSignConfirmation;
const getTransactionSignConfirmation = async (sessionId) => {
    try {
        const signConfirmationResp = await (0, axios_1.default)({
            url: Constants_1.BANANA_SERVER + "/transaction-sign-confirmation",
            method: Constants_1.Methods.GET,
            params: {
                sessionId: sessionId,
            },
        });
        return signConfirmationResp.data.signature;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.getTransactionSignConfirmation = getTransactionSignConfirmation;
//# sourceMappingURL=Controller.js.map