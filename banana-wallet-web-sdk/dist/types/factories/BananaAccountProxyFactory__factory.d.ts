import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { BananaAccountProxyFactory, BananaAccountProxyFactoryInterface } from "../BananaAccountProxyFactory";
type BananaAccountProxyFactoryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BananaAccountProxyFactory__factory extends ContractFactory {
    constructor(...args: BananaAccountProxyFactoryConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<BananaAccountProxyFactory>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): BananaAccountProxyFactory;
    connect(signer: Signer): BananaAccountProxyFactory__factory;
    static readonly bytecode = "0x60808060405234610016576111d8908161001c8239f35b600080fdfe60806040526004361015610013575b600080fd5b60003560e01c80631688f0b91461009f5780633408e4701461009657806353e5d9351461008d5780635abb2d5b1461008457806381871cbc1461007b578063d18af54d146100725763ec9e80bb1461006a57600080fd5b61000e610838565b5061000e610684565b5061000e6105b2565b5061000e6103ce565b5061000e610364565b5061000e61029e565b3461000e5760206100b86100b236610235565b91610916565b73ffffffffffffffffffffffffffffffffffffffff60405191168152f35b73ffffffffffffffffffffffffffffffffffffffff81160361000e57565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b67ffffffffffffffff811161013857604052565b6101406100f4565b604052565b6060810190811067ffffffffffffffff82111761013857604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761013857604052565b906101b06040519283610161565b565b81601f8201121561000e5780359067ffffffffffffffff8211610228575b6040519261020660207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601160185610161565b8284526020838301011161000e57816000926020809301838601378301015290565b6102306100f4565b6101d0565b9060607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc83011261000e5760043561026c816100d6565b916024359067ffffffffffffffff821161000e5761028c916004016101b2565b9060443590565b600091031261000e57565b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576020604051468152f35b918091926000905b8282106102f85750116102f1575050565b6000910152565b915080602091830151818601520182916102e0565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f602093610349815180928187528780880191016102d8565b0116010190565b90602061036192818152019061030d565b90565b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576103ca610184604051906103ab6020820183610161565b808252610b93602083013960405191829160208352602083019061030d565b0390f35b503461000e5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5760043561040a816100d6565b6044359067ffffffffffffffff821161000e5761057261058b916104356103ca9436906004016101b2565b80516020918201206040805180840192835260243581830152908152610556917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe091610482606082610161565b519020936104cc6104d861018461049a8782016101a2565b90808252610d178883013960405192839173ffffffffffffffffffffffffffffffffffffffff898401961690866109aa565b03848101835282610161565b5190209261054a6040519485928301963088917fffffffffffffffffffffffffffffffffffffffff000000000000000000000000605594927fff00000000000000000000000000000000000000000000000000000000000000855260601b166001840152601583015260358201520190565b03908101835282610161565b51902073ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1690565b60405173ffffffffffffffffffffffffffffffffffffffff90911681529081906020820190565b503461000e576040807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5761065f6103ca9161067a6004356105f9816100d6565b825160209161018461060d84820184610161565b80835283830190610e9b823961066e86519173ffffffffffffffffffffffffffffffffffffffff868401941684526024358884015287835261064e83610145565b8751988995518092888801906102d8565b840191518093868401906102d8565b01038085520183610161565b5191829182610350565b503461000e5760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576004356106c0816100d6565b60243567ffffffffffffffff811161000e576106e09036906004016101b2565b9060443591606435916106f2836100d6565b73ffffffffffffffffffffffffffffffffffffffff610787604051602081019061077d81610751898b86906034927fffffffffffffffffffffffffffffffffffffffff00000000000000000000000091835260601b1660208201520190565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282610161565b5190208484610916565b931693846107b1575b60405173ffffffffffffffffffffffffffffffffffffffff85168152602090f35b843b1561000e576103ca946107fb9360008094604051968795869485937f1e52b5180000000000000000000000000000000000000000000000000000000085528b60048601610b45565b03925af1801561082b575b610812575b8080610790565b8061081f61082592610124565b80610293565b3861080b565b610833610b85565b610806565b503461000e5760206108b87f4f51faf6c4561ff95f067657e43439f0f856d97c04d9ec9070a6199ad418e2356108e861087036610235565b81959295518783012090604051908882019283526040820152466060820152606081526080810181811067ffffffffffffffff821117610909575b6040525190209085610a2d565b6040805173ffffffffffffffffffffffffffffffffffffffff808416825290951660208601529093918291820190565b0390a173ffffffffffffffffffffffffffffffffffffffff60405191168152f35b6109116100f4565b6108ab565b92916109757f4f51faf6c4561ff95f067657e43439f0f856d97c04d9ec9070a6199ad418e235926109a59261075161096b83516020850120926040519283916020830195869091604092825260208201520190565b5190209086610a2d565b6040805173ffffffffffffffffffffffffffffffffffffffff808416825290961660208701529094918291820190565b0390a1565b60209291906109c08492828151948592016102d8565b019081520190565b156109cf57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f437265617465322063616c6c206661696c6564000000000000000000000000006044820152fd5b929190833b15610ae757610ac4610a8492610ab0610184610a50602082016101a2565b9080825261101f602083013960405195869173ffffffffffffffffffffffffffffffffffffffff809a1690602084016109aa565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101865285610161565b835160009460200185f594851615156109c8565b80519081610ad157505050565b8291602083920182875af115610ae45750565b80fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f53696e676c65746f6e20636f6e7472616374206e6f74206465706c6f796564006044820152fd5b949392610b809160609373ffffffffffffffffffffffffffffffffffffffff809216885216602087015260806040870152608086019061030d565b930152565b506040513d6000823e3d90fdfe6080346100c957601f61018438819003918201601f19168301916001600160401b038311848410176100ce578084926020946040528339810103126100c957516001600160a01b038116908190036100c957801561007957600080546001600160a01b031916919091179055604051609f90816100e58239f35b60405162461bcd60e51b815260206004820152602260248201527f496e76616c69642073696e676c65746f6e20616464726573732070726f766964604482015261195960f21b6064820152608490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600073ffffffffffffffffffffffffffffffffffffffff815416907fa619486e00000000000000000000000000000000000000000000000000000000813514606257808092368280378136915af43d82803e15605e573d90f35b3d90fd5b6020918152f3fea264697066735822122081865e72dbddd33b40afa4b5a2a8f31b4729265190bf2b9ba9e81b91e74e20ab64736f6c634300080f00336080346100c957601f61018438819003918201601f19168301916001600160401b038311848410176100ce578084926020946040528339810103126100c957516001600160a01b038116908190036100c957801561007957600080546001600160a01b031916919091179055604051609f90816100e58239f35b60405162461bcd60e51b815260206004820152602260248201527f496e76616c69642073696e676c65746f6e20616464726573732070726f766964604482015261195960f21b6064820152608490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600073ffffffffffffffffffffffffffffffffffffffff815416907fa619486e00000000000000000000000000000000000000000000000000000000813514606257808092368280378136915af43d82803e15605e573d90f35b3d90fd5b6020918152f3fea264697066735822122081865e72dbddd33b40afa4b5a2a8f31b4729265190bf2b9ba9e81b91e74e20ab64736f6c634300080f00336080346100c957601f61018438819003918201601f19168301916001600160401b038311848410176100ce578084926020946040528339810103126100c957516001600160a01b038116908190036100c957801561007957600080546001600160a01b031916919091179055604051609f90816100e58239f35b60405162461bcd60e51b815260206004820152602260248201527f496e76616c69642073696e676c65746f6e20616464726573732070726f766964604482015261195960f21b6064820152608490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600073ffffffffffffffffffffffffffffffffffffffff815416907fa619486e00000000000000000000000000000000000000000000000000000000813514606257808092368280378136915af43d82803e15605e573d90f35b3d90fd5b6020918152f3fea264697066735822122081865e72dbddd33b40afa4b5a2a8f31b4729265190bf2b9ba9e81b91e74e20ab64736f6c634300080f00336080346100c957601f61018438819003918201601f19168301916001600160401b038311848410176100ce578084926020946040528339810103126100c957516001600160a01b038116908190036100c957801561007957600080546001600160a01b031916919091179055604051609f90816100e58239f35b60405162461bcd60e51b815260206004820152602260248201527f496e76616c69642073696e676c65746f6e20616464726573732070726f766964604482015261195960f21b6064820152608490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600073ffffffffffffffffffffffffffffffffffffffff815416907fa619486e00000000000000000000000000000000000000000000000000000000813514606257808092368280378136915af43d82803e15605e573d90f35b3d90fd5b6020918152f3fea264697066735822122081865e72dbddd33b40afa4b5a2a8f31b4729265190bf2b9ba9e81b91e74e20ab64736f6c634300080f0033a264697066735822122004c1572a64e5c2dd96b6d1115518b8469a2a02c052d98eaccc155bc61383325264736f6c634300080f0033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "contract BananaAccountProxy";
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
            readonly internalType: "contract BananaAccountProxy";
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
            readonly internalType: "contract BananaAccountProxy";
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
            readonly internalType: "contract BananaAccountProxy";
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
            readonly internalType: "uint256";
            readonly name: "_salt";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "initializer";
            readonly type: "bytes";
        }];
        readonly name: "getAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_owner";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_foo";
            readonly type: "uint256";
        }];
        readonly name: "getBytecode";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
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
    static createInterface(): BananaAccountProxyFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BananaAccountProxyFactory;
}
export {};
