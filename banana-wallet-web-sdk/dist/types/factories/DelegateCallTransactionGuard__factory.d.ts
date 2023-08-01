import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { DelegateCallTransactionGuard, DelegateCallTransactionGuardInterface } from "../DelegateCallTransactionGuard";
type DelegateCallTransactionGuardConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DelegateCallTransactionGuard__factory extends ContractFactory {
    constructor(...args: DelegateCallTransactionGuardConstructorParams);
    deploy(target: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<DelegateCallTransactionGuard>;
    getDeployTransaction(target: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): DelegateCallTransactionGuard;
    connect(signer: Signer): DelegateCallTransactionGuard__factory;
    static readonly bytecode = "0x60a03461007157601f6104a838819003918201601f19168301916001600160401b038311848410176100765780849260209460405283398101031261007157516001600160a01b03811681036100715760805260405161041b908161008d82396080518181816101d001526102550152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604081815260049182361015610021575b5050503461001c57005b600080fd5b600092833560e01c91826301ffc9a7146102795750816373a8c6821461020a57816375f0bb521461009d575063932713681461005d5780610012565b3461009957807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261009957602435801515036100995751f35b5080fd5b905034610206576101607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261020657803573ffffffffffffffffffffffffffffffffffffffff908181168091036102025767ffffffffffffffff6044358181116101fe576101119036908601610335565b506064359060028210156101fe5760e435848116036101fe5761010435848116036101fe57610124359081116101fe5761014e9036908601610335565b5061014435838116036101fa57600114918215926101ce575b505015610172575051f35b602060649251917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601760248201527f546869732063616c6c20697320726573747269637465640000000000000000006044820152fd5b7f0000000000000000000000000000000000000000000000000000000000000000161490503880610167565b8580fd5b8680fd5b8480fd5b8280fd5b50503461009957817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610099576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b8491346102065760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261020657357fffffffff00000000000000000000000000000000000000000000000000000000811680910361020657602092507fe6d7a83a00000000000000000000000000000000000000000000000000000000811490811561030b575b5015158152f35b7f01ffc9a70000000000000000000000000000000000000000000000000000000091501483610304565b81601f8201121561001c5780359067ffffffffffffffff928383116103b657604051937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81601f8701160116850190858210908211176103b6576040528284526020838301011161001c57816000926020809301838601378301015290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea2646970667358221220c209a53f52cb22568134ccb3e4816d0768fdd7d05845535bf174f68245aa2b0e64736f6c634300080f0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [];
        readonly name: "allowedTarget";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly name: "checkAfterExecution";
        readonly outputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "enum Enum.Operation";
            readonly name: "operation";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "checkTransaction";
        readonly outputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): DelegateCallTransactionGuardInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DelegateCallTransactionGuard;
}
export {};
