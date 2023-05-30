import { ethers } from "ethers"
import { EntryPoint__factory } from "@account-abstraction/contracts"
import { UserOperationStruct } from "@account-abstraction/contracts"

export const sendTransaction = async (userOp: UserOperationStruct) => {

    console.log('userOp here ', userOp);
    const privateKey = '0x4da13661e1deb6598ccc0f0963d86c1f5e1cfb748ccd66753fd7fa1339c92616'
    // const ZKEVM_TESTNET_RPC = 'https://polygonzkevm-testnet.g.alchemy.com/v2/wEkYECwDd4ycMW5qmAcg6P48fJM0dmgr'
    const SHIBUYA_TESTNET_RPC = 'https://evm.shibuya.astar.network';
    const provider = new ethers.providers.JsonRpcProvider(SHIBUYA_TESTNET_RPC);
    const wallet = new ethers.Wallet(privateKey, provider)
    console.log('wallet here ', wallet);

    const entrypoint = EntryPoint__factory.connect('0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789', provider);

    const hash = await entrypoint.getUserOpHash(userOp);
    console.log('hash ', hash);
    const txnCall = await entrypoint.populateTransaction.handleOps([userOp], '0x288d1d682311018736B820294D22Ed0DBE372188');
    // const txnCall = await entrypoint.populateTransaction.simulateValidation(userOp);

    console.log('txn call ', txnCall)
    const txn = {
        // to: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
        to: '0xA7cc3550BA16c786ca5Ce2C8bE97b24b5194A41e',
        from: '0x48701dF467Ba0efC8D8f34B2686Dc3b0A0b1cab5',
        data: txnCall.data,
        gasLimit: '0x989680'
    }

    console.log('txn data ', txn);
    const txnReceipt = wallet.sendTransaction(txn);

    console.log('rceipt ', txnReceipt);
    (await txnReceipt).wait();

    console.log('rceipt again ', txnReceipt);

    return txnReceipt;
}