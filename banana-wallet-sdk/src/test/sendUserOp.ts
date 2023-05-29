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

    const entrypoint = EntryPoint__factory.connect('0xCBd3e6f218324fE98497A071f8ADf508BC685d7b', provider);

    const hash = await entrypoint.getUserOpHash(userOp);
    console.log('hash ', hash);
    const txnCall = await entrypoint.populateTransaction.handleOps([userOp], '0x288d1d682311018736B820294D22Ed0DBE372188');
    // const txnCall = await entrypoint.populateTransaction.simulateValidation(userOp);

    console.log('txn call ', txnCall)
    const txn = {
        to: '0x7fA04b71591619C8701530aDb5be868E3b43e6FF',
        from: '0xF9ca16Fb8D6F38d36505961dAd69d2011C4695cF',
        data: txnCall.data,
        gasLimit: '0x989680'
    }

    console.log('txn data ', txn);
    const txnReceipt = await wallet.sendTransaction(txn);

    console.log('rceipt ', txnReceipt);
    (await txnReceipt).wait();

    console.log('rceipt again ', txnReceipt);

    return txnReceipt;
}