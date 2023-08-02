"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequestDataForPaymaster = void 0;
const ethers_1 = require("ethers");
const getRequestDataForPaymaster = async (userOp) => {
    userOp = {
        sender: await userOp?.sender,
        nonce: (await userOp?.nonce)._hex,
        initCode: userOp?.initCode,
        callData: userOp?.callData,
        callGasLimit: (await userOp?.callGasLimit)._hex,
        verificationGasLimit: ethers_1.ethers.BigNumber.from(userOp?.verificationGasLimit)._hex,
        preVerificationGas: (await userOp?.preVerificationGas)._hex,
        maxFeePerGas: (await userOp?.maxFeePerGas)._hex,
        maxPriorityFeePerGas: (await userOp?.maxPriorityFeePerGas)._hex,
        paymasterAndData: '0x',
        signature: "0x",
    };
    const requestData = [
        userOp,
        '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
        {}
    ];
    return requestData;
};
exports.getRequestDataForPaymaster = getRequestDataForPaymaster;
//# sourceMappingURL=getRequestData.js.map