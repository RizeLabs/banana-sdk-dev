"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyWalletApi = void 0;
// @ts-nocheck
const ethers_1 = require("ethers");
const utils_1 = require("ethers/lib/utils");
const sdk_1 = require("@account-abstraction/sdk");
const factories_1 = require("./types/factories");
const ethers_2 = require("ethers");
const contracts_1 = require("@account-abstraction/contracts");
/**
 * An implementation of the BaseWalletAPI using the MyWallet contract.
 * - contract deployer gets "entrypoint", "owner" addresses and "index" nonce
 * - owner signs requests using normal "Ethereum Signed Message" (ether's signer.signMessage())
 * - nonce method is "nonce()"
 * - execute method is "execFromEntryPoint()"
 */
class MyWalletApi extends sdk_1.SimpleAccountAPI {
    constructor(params) {
        super(params);
        this.getTouchIdSafeWalletContractInitializer = () => {
            const TouchIdSafeWalletContractSingleton = factories_1.BananaAccount__factory.connect(this.singletonTouchIdSafeAddress, this.provider);
            const TouchIdSafeWalletContractQValuesArray = [
                this.qValues[0],
                this.qValues[1],
            ];
            //@ts-ignore
            const TouchIdSafeWalletContractInitializer = TouchIdSafeWalletContractSingleton.interface.encodeFunctionData("setupWithEntrypoint", [
                [this.ownerAddress],
                1,
                "0x0000000000000000000000000000000000000000",
                "0x",
                this.fallBackHandleraddress,
                "0x0000000000000000000000000000000000000000",
                0,
                "0x0000000000000000000000000000000000000000",
                this.entryPointAddress,
                this.encodedIdHash,
                // @ts-ignore
                TouchIdSafeWalletContractQValuesArray, // q values
            ]);
            return TouchIdSafeWalletContractInitializer;
        };
        this.qValues = params._qValues;
        this.singletonTouchIdSafeAddress = params._singletonTouchIdSafeAddress;
        this.ownerAddress = params._ownerAddress;
        this.fallBackHandleraddress = params._fallBackHandler;
        this.saltNonce = params._saltNonce;
        this.encodedIdHash = params._encodedIdHash;
    }
    /**
     *
     * @param requestId - the has that your wallet must sign
     * @returns the string that will used in userOp.signature & will be send to validateUserOp in your wallet's function
     */
    async signRequestId(requestId) {
        return await this.owner.signMessage((0, utils_1.arrayify)(requestId));
    }
    async _getAccountContract() {
        if (this.accountContract == null) {
            this.accountContract = factories_1.BananaAccount__factory.connect(await this.getAccountAddress(), this.provider);
        }
        return this.accountContract;
    }
    /**
     * @method getTouchIdSafeWalletContractInitCode
     * @params none
     * @returns { string } TouchIdSafeWalletContractInitCode
     * create initCode for TouchIdSafeWalletContract
     *
     * return the value to put into the "initCode" field, if the account is not yet deployed.
     * this value holds the "factory" address, followed by this account's information
     */
    async getAccountInitCode() {
        if (this.factory == null) {
            if (this.factoryAddress != null && this.factoryAddress !== "") {
                this.factory = factories_1.BananaAccountProxyFactory__factory.connect(this.factoryAddress, this.provider);
            }
            else {
                throw new Error("no factory to get initCode");
            }
        }
        return (0, utils_1.hexConcat)([
            this.factory.address,
            this.factory.interface.encodeFunctionData("createProxyWithNonce", [
                this.singletonTouchIdSafeAddress,
                this.getTouchIdSafeWalletContractInitializer(),
                this.saltNonce,
            ]),
        ]);
    }
    async getNonce() {
        if (await this.checkAccountPhantom()) {
            return ethers_1.BigNumber.from(0);
        }
        const entryPoint = contracts_1.EntryPoint__factory.connect(this.entryPointAddress, this.provider);
        return await entryPoint.getNonce(this.getAccountAddress(), 0);
    }
    /**
     * encode a method call from entryPoint to our contract
     * @param target
     * @param value
     * @param data
     */
    async encodeExecute(target, value, data) {
        const accountContract = await this._getAccountContract();
        const delegateCall = ethers_2.ethers.BigNumber.from("0");
        return accountContract.interface.encodeFunctionData("execTransactionFromEntrypoint", [target, value, data, delegateCall]);
    }
    async encodeBatchExecute(info) {
        const accountContract = await this._getAccountContract();
        const delegateCall = ethers_2.ethers.BigNumber.from("0");
        const target = info.map((data) => data.target);
        const value = info.map((data) => data.value);
        const data = info.map((data) => data.data);
        return accountContract.interface.encodeFunctionData("execBatchTransactionFromEntrypoint", [target, value, data, delegateCall]);
    }
    async encodeUserOpCallDataAndGasLimitForBatchedTransaction(detailsForUserOp) {
        function parseNumber(a) {
            if (a == null || a === "")
                return null;
            return ethers_1.BigNumber.from(a.toString());
        }
        // const value = parseNumber(detailsForUserOp.value) ?? BigNumber.from(0)
        detailsForUserOp.map((op) => parseNumber(op.value) ?? ethers_1.BigNumber.from(0));
        // const callData = await this.encodeExecute(detailsForUserOp.target, value, detailsForUserOp.data)
        const callData = await this.encodeBatchExecute(detailsForUserOp);
        let callGasLimit;
        try {
            callGasLimit =
                parseNumber(detailsForUserOp.gasLimit) ??
                    (await this.provider.estimateGas({
                        from: this.entryPointAddress,
                        to: this.getAccountAddress(),
                        data: callData,
                    }));
        }
        catch (err) {
            callGasLimit = ethers_2.ethers.BigNumber.from(1e6);
            console.log("getting error here", err);
        }
        return {
            callData,
            callGasLimit,
        };
    }
    async createUnsignedUserOpForBatchedTransaction(info) {
        const { callData, callGasLimit } = await this.encodeUserOpCallDataAndGasLimitForBatchedTransaction(info);
        console.log("this is calldata and allgaslimit", callData, callGasLimit);
        const initCode = await this.getInitCode();
        const initGas = await this.estimateCreationGas(initCode);
        const verificationGasLimit = ethers_1.BigNumber.from(await this.getVerificationGasLimit()).add(initGas);
        let { maxFeePerGas, maxPriorityFeePerGas } = info;
        if (maxFeePerGas == null || maxPriorityFeePerGas == null) {
            const feeData = await this.provider.getFeeData();
            if (maxFeePerGas == null) {
                maxFeePerGas = feeData.maxFeePerGas ?? undefined;
            }
            if (maxPriorityFeePerGas == null) {
                maxPriorityFeePerGas = feeData.maxPriorityFeePerGas ?? undefined;
            }
        }
        const partialUserOp = {
            sender: this.getAccountAddress(),
            nonce: info.nonce ?? this.getNonce(),
            initCode,
            callData,
            callGasLimit,
            verificationGasLimit,
            maxFeePerGas,
            maxPriorityFeePerGas,
            paymasterAndData: "0x",
        };
        let paymasterAndData;
        if (this.paymasterAPI != null) {
            // fill (partial) preVerificationGas (all except the cost of the generated paymasterAndData)
            const userOpForPm = {
                ...partialUserOp,
                preVerificationGas: await this.getPreVerificationGas(partialUserOp),
            };
            paymasterAndData = await this.paymasterAPI.getPaymasterAndData(userOpForPm);
        }
        partialUserOp.paymasterAndData = paymasterAndData ?? "0x";
        return {
            ...partialUserOp,
            preVerificationGas: this.getPreVerificationGas(partialUserOp),
            signature: "",
        };
    }
    async signUserOpHash(userOpHash) {
        return await this.owner.signMessage((0, utils_1.arrayify)(userOpHash));
    }
    async getAccountAddress() {
        const TouchIdSafeWalletContractProxyFactory = factories_1.BananaAccountProxyFactory__factory.connect(this.factoryAddress, this.provider);
        const TouchIdSafeWalletContractInitializer = this.getTouchIdSafeWalletContractInitializer();
        const TouchIdSafeWalletContractAddress = await TouchIdSafeWalletContractProxyFactory.getAddress(this.singletonTouchIdSafeAddress, this.saltNonce, TouchIdSafeWalletContractInitializer);
        return TouchIdSafeWalletContractAddress;
    }
}
exports.MyWalletApi = MyWalletApi;
//# sourceMappingURL=MyWalletApi.js.map