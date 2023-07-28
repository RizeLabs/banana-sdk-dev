import { UserOperationStruct } from "@account-abstraction/contracts";

const getRequestDataForPaymaster = async (
  userOp: any,
) => {
  console.log('this is userOp', userOp)
  const requestData = {
    jsonrpc: "2.0",
    id: 1,
    method: "pm_sponsorUserOperation",
    params: [
      {
        sender: await userOp?.sender,
        nonce: (await userOp?.nonce)?.toString(),
        initCode: userOp?.initCode,
        callData: userOp?.callData,
        callGasLimit: (await userOp?.callGasLimit)?.toString(),
        verificationGasLimit: userOp?.verificationGasLimit,
        preVerificationGas: (await userOp?.preVerificationGas)?.toString(),
        maxFeePerGas: (await userOp?.maxFeePerGas)?.toString(),
        maxPriorityFeePerGas: (await userOp?.maxPriorityFeePerGas)?.toString(),
        paymasterAndData: '0x',
        signature: "0x602a8120299a727bbcfb59604acfe96c7debbde46c3ac13df79ef95eb86f0f1f",
      },
      "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789", 
      {
        "type": "payg"
      }
    ],
  };

  return requestData;
};

export { getRequestDataForPaymaster };
