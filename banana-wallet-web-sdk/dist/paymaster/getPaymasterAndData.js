"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaymasterAndData = void 0;
const ethers_1 = require("ethers");
const getPaymasterAndData = async (paymasterUrl, requestData) => {
    try {
        const pimlicoProvider = new ethers_1.ethers.providers.StaticJsonRpcProvider(paymasterUrl);
        const sponsorUserOperationResult = await pimlicoProvider.send("pm_sponsorUserOperation", requestData);
        return sponsorUserOperationResult;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.getPaymasterAndData = getPaymasterAndData;
//# sourceMappingURL=getPaymasterAndData.js.map