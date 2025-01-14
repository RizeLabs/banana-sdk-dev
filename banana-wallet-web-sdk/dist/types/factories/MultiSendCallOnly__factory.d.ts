import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MultiSendCallOnly, MultiSendCallOnlyInterface } from "../MultiSendCallOnly";
type MultiSendCallOnlyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MultiSendCallOnly__factory extends ContractFactory {
    constructor(...args: MultiSendCallOnlyConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MultiSendCallOnly>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MultiSendCallOnly;
    connect(signer: Signer): MultiSendCallOnly__factory;
    static readonly bytecode = "0x60808060405234610016576101e6908161001c8239f35b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c638d80ff0a1461002857600080fd5b60207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010e5760043567ffffffffffffffff80821161010a573660238301121561010a57828260040135928284116100fd575b604051927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81601f8801160116840190848210908211176100f0575b60405283835236602485830101116100ec57836100e7946024602093018386013783010152610141565b604051f35b5080fd5b6100f8610111565b6100bd565b610105610111565b61007f565b8280fd5b80fd5b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b80519060205b82811061015357505050565b808201805160f81c600182015160601c91601581015191603582015180946000948593948560001461019f57505050505060011461019a575b1561019a5701605501610147565b600080fd5b605591929394955001915af161018c56fea2646970667358221220990a2e768835a5cea91335f503b2e86f7cb784850545194b2b8e4187da03872b64736f6c634300080f0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "transactions";
            readonly type: "bytes";
        }];
        readonly name: "multiSend";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): MultiSendCallOnlyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MultiSendCallOnly;
}
export {};
