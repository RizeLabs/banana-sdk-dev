// import { JsonRpcProvider } from "@ethersproject/providers";
// import { TransactionDetailsForUserOp } from "../interfaces/Banana.interface";
// import { ethers, BigNumber, BigNumberish } from "ethers";
// import { NewTouchIdAccountSafe__factory } from '../types/factories'

// let Provider: JsonRpcProvider;

// const encodeExecute  = (target: string, value: BigNumberish, data: string): Promise<string> => {
//     const accountContract = NewTouchIdAccountSafe__factory.connect(target || "", Provider);
//     const delegateCall = ethers.BigNumber.from("1")
//     //@ts-ignore
//     return accountContract.interface.encodeFunctionData(
//       'execTransactionFromEntrypoint',
//       [
//         target,
//         value,
//         data,
//         delegateCall
//       ])
//   }
// const encodeUserOpCallDataAndGasLimit = async (detailsForUserOp: TransactionDetailsForUserOp, entryPoint: string): Promise<{ callData: string, callGasLimit: BigNumber }> => {
//     function parseNumber (a: any): BigNumber | null {
//       if (a == null || a === '') return null
//       return BigNumber.from(a.toString())
//     }

//     const value = parseNumber(detailsForUserOp.value) ?? BigNumber.from(0)
//     const callData = await encodeExecute(detailsForUserOp.target, value, detailsForUserOp.data)

//     const callGasLimit = parseNumber(detailsForUserOp.gasLimit) ?? await Provider.estimateGas({
//       from: entryPoint,
//       to: detailsForUserOp.target,
//       data: callData
//     })

//     return {
//       callData,
//       callGasLimit
//     }
//   }

// const estimateCreationGas = async (initCode) => {
//     if (initCode == null || initCode === '0x')
//         return 0;
//     const deployerAddress = initCode.substring(0, 42);
//     const deployerCallData = '0x' + initCode.substring(42);
//     return await this.provider.estimateGas({ to: deployerAddress, data: deployerCallData });
// }

// const createUnsignedUserOp = async (userOpEssentials: TransactionDetailsForUserOp, provider: JsonRpcProvider, entryPoint: string) => {
//     Provider = provider;
//     const { target, data, maxFeePerGas, maxPriorityFeePerGas } = userOpEssentials;
//     const { callData, callGasLimit } = await encodeUserOpCallDataAndGasLimit(userOpEssentials, provider, entryPoint);
//     const initCode = await this.getInitCode()

//     const initGas = await this.estimateCreationGas(initCode)
//     const verificationGasLimit = BigNumber.from(await this.getVerificationGasLimit())
//       .add(initGas)
//     console.log("Calldata; ", callData)
//     console.log("limit: ", callGasLimit);
// }

// export { createUnsignedUserOp };