import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CreateCall, CreateCallInterface } from "../CreateCall";
type CreateCallConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CreateCall__factory extends ContractFactory {
    constructor(...args: CreateCallConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CreateCall>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CreateCall;
    connect(signer: Signer): CreateCall__factory;
    static readonly bytecode = "0x608080604052346100165761032c908161001c8239f35b600080fdfe60806040526004361015610013575b600080fd5b6000803560e01c9081634847be6f1461003e5750634c8c9ea11461003657600080fd5b61000e6101e4565b346101145760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610114576024359067ffffffffffffffff8211610114576101106100903660048501610147565b805160443591602001600435f57f4db17dd5e4732fb6da34a148104a592783ca119a1e7bb8829eba6cbadef0b511602073ffffffffffffffffffffffffffffffffffffffff83166100e2811515610291565b604051908152a160405173ffffffffffffffffffffffffffffffffffffffff90911681529081906020820190565b0390f35b80fd5b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b81601f8201121561000e5780359067ffffffffffffffff928383116101d7575b604051937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81601f8701160116850190858210908211176101ca575b6040528284526020838301011161000e57816000926020809301838601378301015290565b6101d2610117565b6101a5565b6101df610117565b610167565b503461000e5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5760243567ffffffffffffffff811161000e5773ffffffffffffffffffffffffffffffffffffffff61024b6020923690600401610147565b8281519101600435f016610260811515610291565b7f4db17dd5e4732fb6da34a148104a592783ca119a1e7bb8829eba6cbadef0b51182604051838152a1604051908152f35b1561029857565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f436f756c64206e6f74206465706c6f7920636f6e7472616374000000000000006044820152fdfea26469706673582212206bb5d8c45a14b954ac01aca58b02d4dcac17174aaf27da42900fd32f1f5eb0e164736f6c634300080f0033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newContract";
            readonly type: "address";
        }];
        readonly name: "ContractCreation";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "deploymentData";
            readonly type: "bytes";
        }];
        readonly name: "performCreate";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "newContract";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "deploymentData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }];
        readonly name: "performCreate2";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "newContract";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): CreateCallInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CreateCall;
}
export {};
