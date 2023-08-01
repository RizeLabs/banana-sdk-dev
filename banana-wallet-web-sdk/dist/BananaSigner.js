"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BananaSigner = void 0;
const ethers_1 = require("ethers");
const sdk_1 = require("@account-abstraction/sdk");
const sendUserOp_1 = require("./bundler/sendUserOp");
const BananaTransporter_1 = require("./BananaTransporter");
const Constants_1 = require("./Constants");
const getRequestData_1 = require("./paymaster/getRequestData");
const getPaymasterAndData_1 = require("./paymaster/getPaymasterAndData");
class BananaSigner extends sdk_1.ERC4337EthersSigner {
    constructor(config, originalSigner, erc4337provider, httpRpcClient, smartAccountAPI, provider, publicKey, _paymasterUrl) {
        super(config, originalSigner, erc4337provider, httpRpcClient, smartAccountAPI);
        this.config = config;
        this.originalSigner = originalSigner;
        this.erc4337provider = erc4337provider;
        this.httpRpcClient = httpRpcClient;
        this.smartAccountAPI = smartAccountAPI;
        this.jsonRpcProvider = provider;
        this.publicKey = publicKey;
        this.encodedId = publicKey.encodedId;
        this.paymasterUrl = _paymasterUrl;
        this.getAddress();
        this.bananaTransporterInstance = new BananaTransporter_1.BananaTransporter();
    }
    // need to do some changes in it
    async sendTransaction(transaction) {
        const tx = await this.populateTransaction(transaction);
        await this.verifyAllNecessaryFields(tx);
        let userOperation = await this.smartAccountAPI.createUnsignedUserOp({
            target: tx.to ?? "",
            data: tx.data?.toString() ?? "",
            value: tx.value,
            gasLimit: tx.gasLimit,
        });
        userOperation.verificationGasLimit = 1.5e6;
        userOperation.preVerificationGas = ethers_1.ethers.BigNumber.from(await userOperation.preVerificationGas).add(5000);
        let minGasRequired = ethers_1.ethers.BigNumber.from(userOperation?.callGasLimit)
            .add(ethers_1.ethers.BigNumber.from(userOperation?.verificationGasLimit))
            .add(ethers_1.ethers.BigNumber.from(userOperation?.callGasLimit))
            .add(ethers_1.ethers.BigNumber.from(userOperation?.preVerificationGas));
        let currentGasPrice = await this.jsonRpcProvider.getGasPrice();
        let minBalanceRequiredForGas = minGasRequired.mul(currentGasPrice);
        //@ts-ignore
        let userBalance = await this.jsonRpcProvider.getBalance(userOperation?.sender);
        if (this.paymasterUrl) {
            const requestData = await (0, getRequestData_1.getRequestDataForPaymaster)(userOperation);
            const paymasterAndData = await (0, getPaymasterAndData_1.getPaymasterAndData)(this.paymasterUrl, requestData);
            (userOperation || { paymasterAndData: null }).paymasterAndData =
                paymasterAndData || "";
        }
        if (!this.paymasterUrl && userBalance.lt(minBalanceRequiredForGas)) {
            throw new Error("ERROR: Insufficient balance in wallet for gas");
        }
        const message = await this.smartAccountAPI.getUserOpHash(userOperation);
        let signatureObtained;
        try {
            signatureObtained =
                await this.bananaTransporterInstance.getUserOpSignature(tx, parseInt(minBalanceRequiredForGas._hex).toString(), message);
            if (JSON.parse(signatureObtained) === Constants_1.CANCEL_ACTION) {
                return {};
            }
            userOperation.signature = JSON.parse(signatureObtained);
        }
        catch (err) {
            return Promise.reject(err);
        }
        let transactionResponse = await this.erc4337provider.constructUserOpTransactionResponse(userOperation);
        try {
            const networkInfo = await this.jsonRpcProvider.getNetwork();
            if (networkInfo.chainId === 81 || networkInfo.chainId === 592) {
                //! sending UserOp directly to ep for shibuya
                const receipt = await (0, sendUserOp_1.sendTransaction)(userOperation, this.jsonRpcProvider);
                transactionResponse = receipt;
            }
            else {
                await this.httpRpcClient.sendUserOpToBundler(userOperation);
            }
        }
        catch (error) {
            console.error("sendUserOpToBundler failed", error);
            throw this.unwrapError(error);
        }
        // TODO: handle errors - transaction that is "rejected" by bundler is _not likely_ to ever resolve its "wait()"
        return transactionResponse;
    }
    async sendBatchTransaction(transactions) {
        let txns = [];
        for (let i = 0; i < transactions.length; i++) {
            const txn = await this.populateTransaction(transactions[i]);
            await this.verifyAllNecessaryFields(txn);
            txns.push(txn);
        }
        const info = txns.map((txn) => {
            return {
                target: txn.to ?? "",
                data: txn.data?.toString() ?? "",
                value: txn.value,
                gasLimit: txn.gasLimit,
            };
        });
        let userOperation = await this.smartAccountAPI.createUnsignedUserOpForBatchedTransaction(info);
        let minGasRequired = ethers_1.ethers.BigNumber.from(userOperation?.callGasLimit)
            .add(ethers_1.ethers.BigNumber.from(userOperation?.verificationGasLimit))
            .add(ethers_1.ethers.BigNumber.from(userOperation?.callGasLimit));
        let currentGasPrice = await this.jsonRpcProvider.getGasPrice();
        let minBalanceRequiredForGas = minGasRequired.mul(currentGasPrice);
        //@ts-ignore
        let userBalance = await this.jsonRpcProvider.getBalance(userOperation?.sender);
        userOperation.preVerificationGas = ethers_1.ethers.BigNumber.from(await userOperation.preVerificationGas).add(20000);
        userOperation.verificationGasLimit = 1.5e6;
        userOperation.callGasLimit = await userOperation.callGasLimit;
        //@ts-ignore
        if (parseInt(userOperation.callGasLimit._hex) < 33100) {
            userOperation.callGasLimit = ethers_1.ethers.BigNumber.from(33100);
        }
        if (this.paymasterUrl) {
            const requestData = await (0, getRequestData_1.getRequestDataForPaymaster)(userOperation);
            const paymasterAndData = await (0, getPaymasterAndData_1.getPaymasterAndData)(this.paymasterUrl, requestData);
            (userOperation || { paymasterAndData: null }).paymasterAndData =
                paymasterAndData || "";
        }
        if (!this.paymasterUrl && userBalance.lt(minBalanceRequiredForGas)) {
            throw new Error("ERROR: Insufficient balance in wallet for gas");
        }
        const message = await this.smartAccountAPI.getUserOpHash(userOperation);
        let signatureObtained;
        try {
            signatureObtained =
                await this.bananaTransporterInstance.getUserOpSignature(txns[0], parseInt(minBalanceRequiredForGas._hex).toString(), message);
            if (JSON.parse(signatureObtained) === Constants_1.CANCEL_ACTION) {
                return {};
            }
            userOperation.signature = JSON.parse(signatureObtained);
        }
        catch (err) {
            return Promise.reject(err);
        }
        let transactionResponse = await this.erc4337provider.constructUserOpTransactionResponse(userOperation);
        try {
            const networkInfo = await this.jsonRpcProvider.getNetwork();
            if (networkInfo.chainId === 81 || networkInfo.chainId === 592) {
                //! sending UserOp directly to ep for shibuya
                const receipt = await (0, sendUserOp_1.sendTransaction)(userOperation, this.jsonRpcProvider);
                transactionResponse = receipt;
            }
            else {
                await this.httpRpcClient.sendUserOpToBundler(userOperation);
            }
        }
        catch (error) {
            console.error("sendUserOpToBundler failed", error);
            throw this.unwrapError(error);
        }
        // TODO: handle errors - transaction that is "rejected" by bundler is _not likely_ to ever resolve its "wait()"
        return transactionResponse;
    }
    async signBananaMessage(message) {
        const messageHash = ethers_1.ethers.utils.keccak256(ethers_1.ethers.utils.solidityPack(["string"], [message]));
        let signatureObtained;
        try {
            signatureObtained =
                await this.bananaTransporterInstance.getMessageSignature(messageHash);
        }
        catch (err) {
            return Promise.reject(err);
        }
        if (JSON.parse(signatureObtained) === Constants_1.CANCEL_ACTION) {
            return {};
        }
        const signatureAndMessage = JSON.parse(signatureObtained);
        /**
         * Note:
         * the `message` is signed using secp256r1 instead of secp256k1, hence to verify
         * signedMessage we cannot use ecrecover!
         */
        return {
            signature: signatureAndMessage,
        };
    }
}
exports.BananaSigner = BananaSigner;
//# sourceMappingURL=BananaSigner.js.map