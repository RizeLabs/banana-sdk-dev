import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISignatureValidator, ISignatureValidatorInterface } from "../ISignatureValidator";
export declare class ISignatureValidator__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "_signature";
            readonly type: "bytes";
        }];
        readonly name: "isValidSignature";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ISignatureValidatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISignatureValidator;
}
