import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { StorageAccessible, StorageAccessibleInterface } from "../StorageAccessible";
export declare class StorageAccessible__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "offset";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "length";
            readonly type: "uint256";
        }];
        readonly name: "getStorageAt";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "targetContract";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "calldataPayload";
            readonly type: "bytes";
        }];
        readonly name: "simulateAndRevert";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): StorageAccessibleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StorageAccessible;
}
