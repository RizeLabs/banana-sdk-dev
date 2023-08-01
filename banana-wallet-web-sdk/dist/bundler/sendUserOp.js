"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTransaction = void 0;
const ethers_1 = require("ethers");
const contracts_1 = require("@account-abstraction/contracts");
const Constants_1 = require("../Constants");
const sendTransaction = async (userOp, provider) => {
    //! Need to create service to for sending UserOp to ep
    const wallet = new ethers_1.ethers.Wallet(Constants_1.BUNDLER_EOA_PRIVATE_KEY, provider);
    const entrypoint = contracts_1.EntryPoint__factory.connect(Constants_1.ENTRYPOINT_ADDRESS, provider);
    const txnCall = await entrypoint.populateTransaction.handleOps([userOp], Constants_1.BENEFICIARY);
    const txn = {
        to: Constants_1.ENTRYPOINT_ADDRESS,
        from: Constants_1.BUNDLER_EOA_PUBLIC_KEY,
        data: txnCall.data,
        gasLimit: '0x989680'
    };
    const txnReceipt = await wallet.sendTransaction(txn);
    (await txnReceipt).wait();
    return txnReceipt;
};
exports.sendTransaction = sendTransaction;
//# sourceMappingURL=sendUserOp.js.map