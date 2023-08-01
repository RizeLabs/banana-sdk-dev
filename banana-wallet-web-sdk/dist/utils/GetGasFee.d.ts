import { BigNumberish } from "ethers";
import { JsonRpcProvider } from "@ethersproject/providers";
interface Gas {
    maxFeePerGas: BigNumberish;
    maxPriorityFeePerGas: BigNumberish;
}
export declare function getGasFee(provider: JsonRpcProvider): Promise<Gas>;
export {};
