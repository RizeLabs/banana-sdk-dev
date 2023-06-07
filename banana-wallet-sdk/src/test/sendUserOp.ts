import { ethers } from "ethers"
// import { EntryPoint__factory } from "@account-abstraction/contracts"
import { UserOperationStruct } from "@account-abstraction/contracts"
import { EntryPoint__factory } from "../updatedTypes"
import { Chains, getChainSpecificConfig } from "../Constants"
import { getClientConfigInfo } from "../Constants"

export const sendTransaction = async (userOp: UserOperationStruct) => {

    console.log('userOp here ', userOp);
    const privateKey = '0xed096a60e1af7c04519965c9e1fe105b2cd287afd49e4f1d77744f91ab5eb36e'
    const ZKEVM_TESTNET_RPC = 'https://polygonzkevm-testnet.g.alchemy.com/v2/wEkYECwDd4ycMW5qmAcg6P48fJM0dmgr'
    const provider = new ethers.providers.JsonRpcProvider(ZKEVM_TESTNET_RPC);
    const wallet = new ethers.Wallet(privateKey, provider)
    console.log('send Txn wallet here ', wallet);
    const ep = getClientConfigInfo(Chains.polygonZkevmTestnet)["entryPointAddress"].toString();
    console.log("ep ", ep);

    // const entrypoint = EntryPoint__factory.connect('0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789', provider);
    const entrypoint = EntryPoint__factory.connect(ep, provider);
    // 0x3ab7eA73a17B5429598C8F27F9644A94B49FCFCA

    const hash = await entrypoint.getUserOpHash(userOp);
    console.log('hash ', hash);
    const txnCall = await entrypoint.populateTransaction.handleOps([userOp], '0x288d1d682311018736B820294D22Ed0DBE372188');
    // const txnCall = await entrypoint.populateTransaction.simulateValidation(userOp);

    console.log('txn call ', txnCall)
    const txn = {
        // to: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
        // to: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
        to: getClientConfigInfo(Chains.polygonZkevmTestnet).entryPointAddress,
        from: '0x48701dF467Ba0efC8D8f34B2686Dc3b0A0b1cab5',
        data: txnCall.data,
        gasLimit: '0x2DC6C0'
    }

    console.log('txn data ', txn);
    const txnReceipt = await wallet.sendTransaction(txn);

    console.log('rceipt ', txnReceipt);
    (await txnReceipt).wait();

    console.log('rceipt again ', txnReceipt);

    return txnReceipt;
}

export const reallySendTransaction = async (userOp: UserOperationStruct) => {

    console.log('userOp here ', userOp);
    const privateKey = '0xed096a60e1af7c04519965c9e1fe105b2cd287afd49e4f1d77744f91ab5eb36e'
    const ZKEVM_TESTNET_RPC = 'https://polygonzkevm-testnet.g.alchemy.com/v2/wEkYECwDd4ycMW5qmAcg6P48fJM0dmgr'
    const provider = new ethers.providers.JsonRpcProvider(ZKEVM_TESTNET_RPC);
    const wallet = new ethers.Wallet(privateKey, provider)
    console.log('wallet here ', wallet);
    const ep = getClientConfigInfo(Chains.polygonZkevmTestnet)["entryPointAddress"].toString();
    console.log("ep ", ep);

    // const entrypoint = EntryPoint__factory.connect('0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789', provider);
    const entrypoint = EntryPoint__factory.connect(ep, provider);
    // 0x3ab7eA73a17B5429598C8F27F9644A94B49FCFCA

    const hash = await entrypoint.getUserOpHash(userOp);
    console.log('hash ', hash);
    const txnCall = await entrypoint.populateTransaction.executeOps([userOp], '0x288d1d682311018736B820294D22Ed0DBE372188');
    // const txnCall = await entrypoint.populateTransaction.simulateValidation(userOp);

    console.log('txn call ', txnCall)
    const txn = {
        // to: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
        // to: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
        to: getClientConfigInfo(Chains.polygonZkevmTestnet).entryPointAddress,
        from: '0x48701dF467Ba0efC8D8f34B2686Dc3b0A0b1cab5',
        data: txnCall.data,
        gasLimit: '0x2DC6C0'
    }

    console.log('txn data ', txn);
    const txnReceipt = await wallet.sendTransaction(txn);

    console.log('rceipt ', txnReceipt);
    (await txnReceipt).wait();

    console.log('rceipt again ', txnReceipt);

    return txnReceipt;
}