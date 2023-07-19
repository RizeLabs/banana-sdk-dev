import { UserOperationStruct } from "@account-abstraction/contracts";

const getRequestDataForPaymaster = async (
  userOp: any,
) => {
  console.log('this is userOp', userOp)
  // const requestData = {
  //   jsonrpc: "2.0",
  //   id: 1,
  //   method: "pm_sponsorUserOperation",
  //   params: [
      // {
      //   sender: await userOp?.sender,
      //   nonce: (await userOp?.nonce)?.toString(),
      //   initCode: userOp?.initCode,
      //   callData: userOp?.callData,
      //   callGasLimit: (await userOp?.callGasLimit)?.toString(),
      //   verificationGasLimit: userOp?.verificationGasLimit,
      //   preVerificationGas: (await userOp?.preVerificationGas)?.toString(),
      //   maxFeePerGas: (await userOp?.maxFeePerGas)?.toString(),
      //   maxPriorityFeePerGas: (await userOp?.maxPriorityFeePerGas)?.toString(),
      //   paymasterAndData: '0x',
      //   signature: userOp.signature,
      // },
  //     "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789", 
  //     {
  //       "type": "payg"
  //     }
  //   ],
  // };
  // userOp.nonce = (await userOp?.nonce)?.toString()
  // userOp.sender = await userOp.sender;

  userOp = {
    sender: await userOp?.sender,
    nonce: (await userOp?.nonce), // -
    initCode: userOp?.initCode,
    callData: userOp?.callData,
    callGasLimit: (await userOp?.callGasLimit), // -
    verificationGasLimit: userOp?.verificationGasLimit,
    preVerificationGas: (await userOp?.preVerificationGas), // -
    maxFeePerGas: (await userOp?.maxFeePerGas), // -
    maxPriorityFeePerGas: (await userOp?.maxPriorityFeePerGas), // -
    paymasterAndData: '0x',
    signature: '',
  }
  console.log('updated userOp', userOp)

  const requestData = [
    userOp,
    {
      entryPoint: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789'
    }
  ];

  return requestData;
};

export { getRequestDataForPaymaster };
