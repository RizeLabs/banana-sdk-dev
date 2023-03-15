import { getGasFee } from './utils/GetGasFee'
import { BytesLike, ethers } from 'ethers';
const SAMPLE_SIGNATURE = '0xdc0bc40749e7cc0c9f7c990a05253aae7d733cc9d3aa1d2e4f9653e1dcf8129376500a9d9d69acd309e36f78c826ba7efa652a35e08ad74c0fe6672ebe1053be1c'

const constructUserOpWithInitCode = async (jsonRpcProvider: ethers.providers.JsonRpcProvider, walletAddress: string, callData: BytesLike, initCode: BytesLike) => {
    const gasFees = await getGasFee(jsonRpcProvider);
    let partialUserOp = {
        sender: walletAddress,
        nonce: 0,
        initCode: initCode,
        callData: callData,
        callGasLimit: 1e5,
        verificationGasLimit: 10e6,
        maxFeePerGas: gasFees.maxFeePerGas,
        maxPriorityFeePerGas: gasFees.maxPriorityFeePerGas,
        preVerificationGas: 210000,
        paymasterAndData: '0x',
        signature: SAMPLE_SIGNATURE
    };

    return partialUserOp;
}

export default constructUserOpWithInitCode;