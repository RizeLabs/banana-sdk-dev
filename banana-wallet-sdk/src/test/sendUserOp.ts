import { ethers } from "ethers"
import { EntryPoint__factory, UserOperationStruct } from "@account-abstraction/contracts"
import { ENTRYPOINT_ADDRESS, SHIBUYA_TESTNET_RPC, BUNDLER_EOA_PUBLIC_KEY, BUNDLER_EOA_PRIVATE_KEY, BENEFICIARY } from "../Constants"

export const sendTransaction = async (userOp: UserOperationStruct) => {

    //! Need to create service to for sending UserOp to ep
    const provider = new ethers.providers.JsonRpcProvider(SHIBUYA_TESTNET_RPC);
    const wallet = new ethers.Wallet(BUNDLER_EOA_PRIVATE_KEY, provider)
    const entrypoint = EntryPoint__factory.connect(ENTRYPOINT_ADDRESS, provider);
    const txnCall = await entrypoint.populateTransaction.handleOps([userOp], BENEFICIARY);
    
    const txn = {
        to: ENTRYPOINT_ADDRESS,
        from: BUNDLER_EOA_PUBLIC_KEY,
        data: txnCall.data,
        gasLimit: '0x989680'
    }

    const txnReceipt = await wallet.sendTransaction(txn);
    (await txnReceipt).wait();
    return txnReceipt;
}