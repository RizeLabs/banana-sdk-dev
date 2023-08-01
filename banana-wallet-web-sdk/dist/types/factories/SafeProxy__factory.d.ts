import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SafeProxy, SafeProxyInterface } from "../SafeProxy";
type SafeProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SafeProxy__factory extends ContractFactory {
    constructor(...args: SafeProxyConstructorParams);
    deploy(_singleton: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SafeProxy>;
    getDeployTransaction(_singleton: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SafeProxy;
    connect(signer: Signer): SafeProxy__factory;
    static readonly bytecode = "0x6080346100c957601f61018438819003918201601f19168301916001600160401b038311848410176100ce578084926020946040528339810103126100c957516001600160a01b038116908190036100c957801561007957600080546001600160a01b031916919091179055604051609f90816100e58239f35b60405162461bcd60e51b815260206004820152602260248201527f496e76616c69642073696e676c65746f6e20616464726573732070726f766964604482015261195960f21b6064820152608490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600073ffffffffffffffffffffffffffffffffffffffff815416907fa619486e00000000000000000000000000000000000000000000000000000000813514606257808092368280378136915af43d82803e15605e573d90f35b3d90fd5b6020918152f3fea264697066735822122009bb7c3f75c138652be0d43d766e9676ac1c5db5880f52fde6855ad2ed80487764736f6c634300080f0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_singleton";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }];
    static createInterface(): SafeProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SafeProxy;
}
export {};
