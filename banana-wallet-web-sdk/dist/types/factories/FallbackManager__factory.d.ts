import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { FallbackManager, FallbackManagerInterface } from "../FallbackManager";
export declare class FallbackManager__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "handler";
            readonly type: "address";
        }];
        readonly name: "ChangedFallbackHandler";
        readonly type: "event";
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "handler";
            readonly type: "address";
        }];
        readonly name: "setFallbackHandler";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): FallbackManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FallbackManager;
}
