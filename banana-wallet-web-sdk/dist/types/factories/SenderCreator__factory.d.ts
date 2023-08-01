import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SenderCreator, SenderCreatorInterface } from "../SenderCreator";
type SenderCreatorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SenderCreator__factory extends ContractFactory {
    constructor(...args: SenderCreatorConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SenderCreator>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SenderCreator;
    connect(signer: Signer): SenderCreator__factory;
    static readonly bytecode = "0x6080806040523461001657610210908161001c8239f35b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c63570e1a361461002857600080fd5b346100c95760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100c95760043567ffffffffffffffff918282116100c957366023830112156100c95781600401359283116100c95736602484840101116100c9576100c561009e84602485016100fc565b60405173ffffffffffffffffffffffffffffffffffffffff90911681529081906020820190565b0390f35b80fd5b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90806014116101bb5767ffffffffffffffff917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec82018381116101cd575b604051937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81600b8701160116850190858210908211176101c0575b604052808452602084019036848401116101bb576020946000600c819682946014880187378301015251923560601c5af19060005191156101b557565b60009150565b600080fd5b6101c86100cc565b610178565b6101d56100cc565b61013a56fea2646970667358221220771ec17060f144d740ac9e938cd2eed9bc855787007aa0348fc820cbab6b0a7164736f6c634300080f0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initCode";
            readonly type: "bytes";
        }];
        readonly name: "createSender";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): SenderCreatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SenderCreator;
}
export {};
