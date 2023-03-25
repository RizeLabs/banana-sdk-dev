import { UserOperationStruct } from "@account-abstraction/contracts";

const getRequestDataForPaymaster = async (userOp: any, entryPointAddress: string, referral: string) => {
    const requestData = {
        jsonrpc: '2.0',
        method: 'pm_sponsorUserOperation',
        params: [
            {
              "sender": await userOp?.sender,
                  "nonce": (await userOp?.nonce)?.toString(),
                    "initCode": userOp?.initCode,
                    "callData": userOp?.callData,
                    "callGasLimit": (await userOp?.callGasLimit)?.toString(),
                    "verificationGasLimit": userOp?.verificationGasLimit,
                    "preVerificationGas": (await userOp?.preVerificationGas)?.toString(),
                    "maxFeePerGas": (await userOp?.maxFeePerGas)?.toString(),
                    "maxPriorityFeePerGas": (await userOp?.maxPriorityFeePerGas)?.toString(),
                    "paymasterAndData": "",
                    "signature": "",
            },
            {
              entryPoint: entryPointAddress
            },
            {
              referralAddress: referral
            }
        ],
        id: '1'
    };

    return requestData;
}

export { getRequestDataForPaymaster }