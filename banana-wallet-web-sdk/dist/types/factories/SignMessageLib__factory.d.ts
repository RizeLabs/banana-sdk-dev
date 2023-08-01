import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SignMessageLib, SignMessageLibInterface } from "../SignMessageLib";
type SignMessageLibConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SignMessageLib__factory extends ContractFactory {
    constructor(...args: SignMessageLibConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SignMessageLib>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SignMessageLib;
    connect(signer: Signer): SignMessageLib__factory;
    static readonly bytecode = "0x60808060405234610016576103b7908161001c8239f35b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c80630a1028c4146100ef576385a5affe1461003357600080fd5b346100ec5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ec5760043567ffffffffffffffff8082116100e857366023830112156100e85781600401359081116100e85736602482840101116100e8576100af916100aa9160243692016101cc565b610236565b808252600760205260016040832055604051907fe7f4675038f4f6034dfcbbb24c4dc08e4ebf10eb9d257d3d02c0f38d122ac6e48383a2f35b8280fd5b80fd5b50346100ec5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ec576004359067ffffffffffffffff82116100ec57366023830112156100ec5760206101546100aa366004860135602487016101cc565b604051908152f35b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761019d57604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b92919267ffffffffffffffff821161019d576040519161021460207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116018461015c565b829481845281830111610231578281602093846000960137010152565b600080fd5b805160208092012090604091825192828401917f60b3cbf8b4a223d68d641b3b6ddf9a298e7f33710cf3d3a9d1146b5a6150fbca8352818501528084526060840167ffffffffffffffff928582108483111761019d5781835285519020907ff698da250000000000000000000000000000000000000000000000000000000081528481600481305afa95861561037657600096610344575b50508151938401947f190000000000000000000000000000000000000000000000000000000000000086527f01000000000000000000000000000000000000000000000000000000000000006021860152602285015260428401526042835260808301918383109083111761019d575251902090565b859081979293973d831161036f575b61035d818661015c565b810103126100ec5750519338806102ce565b503d610353565b83513d6000823e3d90fdfea26469706673582212206b1c488de540ec843e9ca85659f741159551badbcc4b6d2f47c2f1c336847c7064736f6c634300080f0033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "msgHash";
            readonly type: "bytes32";
        }];
        readonly name: "SignMsg";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "getMessageHash";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "signMessage";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): SignMessageLibInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SignMessageLib;
}
export {};
