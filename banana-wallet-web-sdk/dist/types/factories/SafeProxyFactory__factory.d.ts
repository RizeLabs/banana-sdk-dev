import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SafeProxyFactory, SafeProxyFactoryInterface } from "../SafeProxyFactory";
type SafeProxyFactoryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SafeProxyFactory__factory extends ContractFactory {
    constructor(...args: SafeProxyFactoryConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SafeProxyFactory>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SafeProxyFactory;
    connect(signer: Signer): SafeProxyFactory__factory;
    static readonly bytecode = "0x6080806040523461001657610ba8908161001c8239f35b600080fdfe60806040526004361015610013575b600080fd5b6000803560e01c9081631688f0b9146100ac5781633408e470146100715750806353e5d93514610068578063d18af54d1461005f5763ec9e80bb1461005757600080fd5b61000e61052f565b5061000e61037b565b5061000e610315565b346100a957807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100a9576020604051468152f35b80fd5b346100a9576100ed6100c66100c036610234565b916105e8565b60405173ffffffffffffffffffffffffffffffffffffffff90911681529081906020820190565b0390f35b73ffffffffffffffffffffffffffffffffffffffff81160361000e57565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b67ffffffffffffffff811161015357604052565b61015b61010f565b604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761015357604052565b906101af6040519283610160565b565b81601f8201121561000e5780359067ffffffffffffffff8211610227575b6040519261020560207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601160185610160565b8284526020838301011161000e57816000926020809301838601378301015290565b61022f61010f565b6101cf565b9060607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc83011261000e5760043561026b816100f1565b916024359067ffffffffffffffff821161000e5761028b916004016101b1565b9060443590565b600091031261000e57565b918091926000905b8282106102bd5750116102b6575050565b6000910152565b915080602091830151818601520182916102a5565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f60209361030e8151809281875287808801910161029d565b0116010190565b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576100ed6101846040519061035c6020820183610160565b80825261086b60208301396040519182916020835260208301906102d2565b503461000e5760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576004356103b7816100f1565b60243567ffffffffffffffff811161000e576103d79036906004016101b1565b9060443591606435916103e9836100f1565b73ffffffffffffffffffffffffffffffffffffffff61047e604051602081019061047481610448898b86906034927fffffffffffffffffffffffffffffffffffffffff00000000000000000000000091835260601b1660208201520190565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282610160565b51902084846105e8565b931693846104a8575b60405173ffffffffffffffffffffffffffffffffffffffff85168152602090f35b843b1561000e576100ed946104f29360008094604051968795869485937f1e52b5180000000000000000000000000000000000000000000000000000000085528b6004860161081d565b03925af18015610522575b610509575b8080610487565b8061051661051c9261013f565b80610292565b38610502565b61052a61085d565b6104fd565b503461000e5760207f4f51faf6c4561ff95f067657e43439f0f856d97c04d9ec9070a6199ad418e2358161056236610234565b6105c7829492959395518386012094604051928484019687526040840152466060840152606083526080830183811067ffffffffffffffff8211176105db575b60405273ffffffffffffffffffffffffffffffffffffffff9586935190209087610708565b1693849360405191168152a2604051908152f35b6105e361010f565b6105a2565b92919061063091815160208301209060405190602082019283526040820152604081526060810181811067ffffffffffffffff821117610678575b6040525190209084610708565b917f4f51faf6c4561ff95f067657e43439f0f856d97c04d9ec9070a6199ad418e23560206040519273ffffffffffffffffffffffffffffffffffffffff8091168452851692a2565b61068061010f565b610623565b602092919061069b84928281519485920161029d565b019081520190565b156106aa57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f437265617465322063616c6c206661696c6564000000000000000000000000006044820152fd5b929190833b156107bf5761079f61075f9261078b61018461072b602082016101a1565b908082526109ef602083013960405195869173ffffffffffffffffffffffffffffffffffffffff809a169060208401610685565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101865285610160565b835160009460200185f594851615156106a3565b805190816107ac57505050565b8291602083920182875af1156100a95750565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f53696e676c65746f6e20636f6e7472616374206e6f74206465706c6f796564006044820152fd5b9493926108589160609373ffffffffffffffffffffffffffffffffffffffff80921688521660208701526080604087015260808601906102d2565b930152565b506040513d6000823e3d90fdfe6080346100c957601f61018438819003918201601f19168301916001600160401b038311848410176100ce578084926020946040528339810103126100c957516001600160a01b038116908190036100c957801561007957600080546001600160a01b031916919091179055604051609f90816100e58239f35b60405162461bcd60e51b815260206004820152602260248201527f496e76616c69642073696e676c65746f6e20616464726573732070726f766964604482015261195960f21b6064820152608490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600073ffffffffffffffffffffffffffffffffffffffff815416907fa619486e00000000000000000000000000000000000000000000000000000000813514606257808092368280378136915af43d82803e15605e573d90f35b3d90fd5b6020918152f3fea264697066735822122009bb7c3f75c138652be0d43d766e9676ac1c5db5880f52fde6855ad2ed80487764736f6c634300080f00336080346100c957601f61018438819003918201601f19168301916001600160401b038311848410176100ce578084926020946040528339810103126100c957516001600160a01b038116908190036100c957801561007957600080546001600160a01b031916919091179055604051609f90816100e58239f35b60405162461bcd60e51b815260206004820152602260248201527f496e76616c69642073696e676c65746f6e20616464726573732070726f766964604482015261195960f21b6064820152608490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600073ffffffffffffffffffffffffffffffffffffffff815416907fa619486e00000000000000000000000000000000000000000000000000000000813514606257808092368280378136915af43d82803e15605e573d90f35b3d90fd5b6020918152f3fea264697066735822122009bb7c3f75c138652be0d43d766e9676ac1c5db5880f52fde6855ad2ed80487764736f6c634300080f0033a264697066735822122067bbd3a2c2da0aabcfb07dc2cc3509ae5c9ad26b81754963af4f3abcdae680c164736f6c634300080f0033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract SafeProxy";
            readonly name: "proxy";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "singleton";
            readonly type: "address";
        }];
        readonly name: "ProxyCreation";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
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
        readonly name: "createChainSpecificProxyWithNonce";
        readonly outputs: readonly [{
            readonly internalType: "contract SafeProxy";
            readonly name: "proxy";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
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
        }, {
            readonly internalType: "contract IProxyCreationCallback";
            readonly name: "callback";
            readonly type: "address";
        }];
        readonly name: "createProxyWithCallback";
        readonly outputs: readonly [{
            readonly internalType: "contract SafeProxy";
            readonly name: "proxy";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
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
        readonly name: "createProxyWithNonce";
        readonly outputs: readonly [{
            readonly internalType: "contract SafeProxy";
            readonly name: "proxy";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getChainId";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "proxyCreationCode";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): SafeProxyFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SafeProxyFactory;
}
export {};
