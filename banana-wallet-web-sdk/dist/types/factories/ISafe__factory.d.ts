import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISafe, ISafeInterface } from "../ISafe";
export declare class ISafe__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "getOwners";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ISafeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISafe;
}
