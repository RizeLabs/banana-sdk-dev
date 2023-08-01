import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IProxyCreationCallback, IProxyCreationCallbackInterface } from "../IProxyCreationCallback";
export declare class IProxyCreationCallback__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract BananaAccountProxy";
            readonly name: "proxy";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_singleton";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "initializer";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "saltNonce";
            readonly type: "uint256";
        }];
        readonly name: "proxyCreated";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IProxyCreationCallbackInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IProxyCreationCallback;
}
