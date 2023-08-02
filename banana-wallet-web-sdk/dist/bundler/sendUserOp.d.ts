import { ethers } from "ethers";
import { UserOperationStruct } from "@account-abstraction/contracts";
import { JsonRpcProvider } from "@ethersproject/providers";
export declare const sendTransaction: (userOp: UserOperationStruct, provider: JsonRpcProvider) => Promise<ethers.providers.TransactionResponse>;
