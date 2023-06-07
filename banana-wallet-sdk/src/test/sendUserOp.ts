import { ethers } from "ethers"
import { EntryPoint__factory } from "@account-abstraction/contracts"
import { UserOperationStruct } from "@account-abstraction/contracts"

export const sendTransaction = async (userOp: UserOperationStruct) => {

    //! Need to create service to for sending UserOp to ep
    const privateKey = '0xed096a60e1af7c04519965c9e1fe105b2cd287afd49e4f1d77744f91ab5eb36e'
    const SHIBUYA_TESTNET_RPC = 'https://evm.shibuya.astar.network';
    const provider = new ethers.providers.JsonRpcProvider(SHIBUYA_TESTNET_RPC);
    const wallet = new ethers.Wallet(privateKey, provider)
    const entrypoint = EntryPoint__factory.connect('0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789', provider);
    const txnCall = await entrypoint.populateTransaction.handleOps([userOp], '0x288d1d682311018736B820294D22Ed0DBE372188');
    const txn = {
        to: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
        from: '0x48701dF467Ba0efC8D8f34B2686Dc3b0A0b1cab5',
        data: txnCall.data,
        gasLimit: '0x989680'
    }

    const txnReceipt = await wallet.sendTransaction(txn);
    (await txnReceipt).wait();
    console.log("txn receipt ", txnReceipt);
    return txnReceipt;
}