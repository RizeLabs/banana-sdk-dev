import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ERC777TokensRecipient, ERC777TokensRecipientInterface } from "../ERC777TokensRecipient";
export declare class ERC777TokensRecipient__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "operatorData";
            readonly type: "bytes";
        }];
        readonly name: "tokensReceived";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ERC777TokensRecipientInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC777TokensRecipient;
}
