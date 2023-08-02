import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { BananaAccountProxy, BananaAccountProxyInterface } from "../BananaAccountProxy";
type BananaAccountProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BananaAccountProxy__factory extends ContractFactory {
    constructor(...args: BananaAccountProxyConstructorParams);
    deploy(_singleton: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<BananaAccountProxy>;
    getDeployTransaction(_singleton: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): BananaAccountProxy;
    connect(signer: Signer): BananaAccountProxy__factory;
    static readonly bytecode = "0x6080346100c957601f61018438819003918201601f19168301916001600160401b038311848410176100ce578084926020946040528339810103126100c957516001600160a01b038116908190036100c957801561007957600080546001600160a01b031916919091179055604051609f90816100e58239f35b60405162461bcd60e51b815260206004820152602260248201527f496e76616c69642073696e676c65746f6e20616464726573732070726f766964604482015261195960f21b6064820152608490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600073ffffffffffffffffffffffffffffffffffffffff815416907fa619486e00000000000000000000000000000000000000000000000000000000813514606257808092368280378136915af43d82803e15605e573d90f35b3d90fd5b6020918152f3fea264697066735822122081865e72dbddd33b40afa4b5a2a8f31b4729265190bf2b9ba9e81b91e74e20ab64736f6c634300080f0033";
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
    static createInterface(): BananaAccountProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BananaAccountProxy;
}
export {};
