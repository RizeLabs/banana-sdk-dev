/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  BananaAccountProxyFactory,
  BananaAccountProxyFactoryInterface,
} from "../BananaAccountProxyFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract BananaAccountProxy",
        name: "proxy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "singleton",
        type: "address",
      },
    ],
    name: "ProxyCreation",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_singleton",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "initializer",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "saltNonce",
        type: "uint256",
      },
    ],
    name: "createChainSpecificProxyWithNonce",
    outputs: [
      {
        internalType: "contract BananaAccountProxy",
        name: "proxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_singleton",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "initializer",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "saltNonce",
        type: "uint256",
      },
      {
        internalType: "contract IProxyCreationCallback",
        name: "callback",
        type: "address",
      },
    ],
    name: "createProxyWithCallback",
    outputs: [
      {
        internalType: "contract BananaAccountProxy",
        name: "proxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_singleton",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "initializer",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "saltNonce",
        type: "uint256",
      },
    ],
    name: "createProxyWithNonce",
    outputs: [
      {
        internalType: "contract BananaAccountProxy",
        name: "proxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_singleton",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_salt",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "initializer",
        type: "bytes",
      },
    ],
    name: "getAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_foo",
        type: "uint256",
      },
    ],
    name: "getBytecode",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxyCreationCode",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60808060405234610016576111c2908161001c8239f35b600080fdfe60806040526004361015610013575b600080fd5b60003560e01c80631688f0b91461009f5780633408e4701461009657806353e5d9351461008d5780635abb2d5b1461008457806381871cbc1461007b578063d18af54d146100725763ec9e80bb1461006a57600080fd5b61000e610844565b5061000e610690565b5061000e6105be565b5061000e6103ce565b5061000e610364565b5061000e61029e565b3461000e5760206100b86100b236610235565b91610905565b73ffffffffffffffffffffffffffffffffffffffff60405191168152f35b73ffffffffffffffffffffffffffffffffffffffff81160361000e57565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b67ffffffffffffffff811161013857604052565b6101406100f4565b604052565b6060810190811067ffffffffffffffff82111761013857604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761013857604052565b906101b06040519283610161565b565b81601f8201121561000e5780359067ffffffffffffffff8211610228575b6040519261020660207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601160185610161565b8284526020838301011161000e57816000926020809301838601378301015290565b6102306100f4565b6101d0565b9060607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc83011261000e5760043561026c816100d6565b916024359067ffffffffffffffff821161000e5761028c916004016101b2565b9060443590565b600091031261000e57565b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576020604051468152f35b918091926000905b8282106102f85750116102f1575050565b6000910152565b915080602091830151818601520182916102e0565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f602093610349815180928187528780880191016102d8565b0116010190565b90602061036192818152019061030d565b90565b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576103ca610184604051906103ab6020820183610161565b808252610b7d602083013960405191829160208352602083019061030d565b0390f35b503461000e5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5760043561040a816100d6565b6044359067ffffffffffffffff821161000e5761057e610597916104356103ca9436906004016101b2565b80516020918201206040805180840192835260243591810191909152466060808301919091528152610562917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09161048e608082610161565b519020936104d86104e46101846104a68782016101a2565b90808252610d018883013960405192839173ffffffffffffffffffffffffffffffffffffffff89840196169086610994565b03848101835282610161565b519020926105566040519485928301963088917fffffffffffffffffffffffffffffffffffffffff000000000000000000000000605594927fff00000000000000000000000000000000000000000000000000000000000000855260601b166001840152601583015260358201520190565b03908101835282610161565b51902073ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1690565b60405173ffffffffffffffffffffffffffffffffffffffff90911681529081906020820190565b503461000e576040807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5761066b6103ca91610686600435610605816100d6565b825160209161018461061984820184610161565b80835283830190610e85823961067a86519173ffffffffffffffffffffffffffffffffffffffff868401941684526024358884015287835261065a83610145565b8751988995518092888801906102d8565b840191518093868401906102d8565b01038085520183610161565b5191829182610350565b503461000e5760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576004356106cc816100d6565b60243567ffffffffffffffff811161000e576106ec9036906004016101b2565b9060443591606435916106fe836100d6565b73ffffffffffffffffffffffffffffffffffffffff61079360405160208101906107898161075d898b86906034927fffffffffffffffffffffffffffffffffffffffff00000000000000000000000091835260601b1660208201520190565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282610161565b5190208484610905565b931693846107bd575b60405173ffffffffffffffffffffffffffffffffffffffff85168152602090f35b843b1561000e576103ca946108079360008094604051968795869485937f1e52b5180000000000000000000000000000000000000000000000000000000085528b60048601610b2f565b03925af18015610837575b61081e575b808061079c565b8061082b61083192610124565b80610293565b38610817565b61083f610b6f565b610812565b503461000e5760206108b47f4f51faf6c4561ff95f067657e43439f0f856d97c04d9ec9070a6199ad418e2356108e461087c36610235565b81518783012060408051808a0192835260208301939093524690820152929592906108aa816060840161075d565b5190209085610a17565b6040805173ffffffffffffffffffffffffffffffffffffffff808416825290951660208601529093918291820190565b0390a173ffffffffffffffffffffffffffffffffffffffff60405191168152f35b929161095f7f4f51faf6c4561ff95f067657e43439f0f856d97c04d9ec9070a6199ad418e2359261098f928151602083012090604051906020820192835260408201526040815261095581610145565b5190209086610a17565b6040805173ffffffffffffffffffffffffffffffffffffffff808416825290961660208701529094918291820190565b0390a1565b60209291906109aa8492828151948592016102d8565b019081520190565b156109b957565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f437265617465322063616c6c206661696c6564000000000000000000000000006044820152fd5b929190833b15610ad157610aae610a6e92610a9a610184610a3a602082016101a2565b90808252611009602083013960405195869173ffffffffffffffffffffffffffffffffffffffff809a169060208401610994565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101865285610161565b835160009460200185f594851615156109b2565b80519081610abb57505050565b8291602083920182875af115610ace5750565b80fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f53696e676c65746f6e20636f6e7472616374206e6f74206465706c6f796564006044820152fd5b949392610b6a9160609373ffffffffffffffffffffffffffffffffffffffff809216885216602087015260806040870152608086019061030d565b930152565b506040513d6000823e3d90fdfe6080346100c957601f61018438819003918201601f19168301916001600160401b038311848410176100ce578084926020946040528339810103126100c957516001600160a01b038116908190036100c957801561007957600080546001600160a01b031916919091179055604051609f90816100e58239f35b60405162461bcd60e51b815260206004820152602260248201527f496e76616c69642073696e676c65746f6e20616464726573732070726f766964604482015261195960f21b6064820152608490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600073ffffffffffffffffffffffffffffffffffffffff815416907fa619486e00000000000000000000000000000000000000000000000000000000813514606257808092368280378136915af43d82803e15605e573d90f35b3d90fd5b6020918152f3fea26469706673582212201cd52797898f3e25f02d8f53105f52ef95b29e4dee70cedd556b23529cd8999d64736f6c634300080f00336080346100c957601f61018438819003918201601f19168301916001600160401b038311848410176100ce578084926020946040528339810103126100c957516001600160a01b038116908190036100c957801561007957600080546001600160a01b031916919091179055604051609f90816100e58239f35b60405162461bcd60e51b815260206004820152602260248201527f496e76616c69642073696e676c65746f6e20616464726573732070726f766964604482015261195960f21b6064820152608490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600073ffffffffffffffffffffffffffffffffffffffff815416907fa619486e00000000000000000000000000000000000000000000000000000000813514606257808092368280378136915af43d82803e15605e573d90f35b3d90fd5b6020918152f3fea26469706673582212201cd52797898f3e25f02d8f53105f52ef95b29e4dee70cedd556b23529cd8999d64736f6c634300080f00336080346100c957601f61018438819003918201601f19168301916001600160401b038311848410176100ce578084926020946040528339810103126100c957516001600160a01b038116908190036100c957801561007957600080546001600160a01b031916919091179055604051609f90816100e58239f35b60405162461bcd60e51b815260206004820152602260248201527f496e76616c69642073696e676c65746f6e20616464726573732070726f766964604482015261195960f21b6064820152608490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600073ffffffffffffffffffffffffffffffffffffffff815416907fa619486e00000000000000000000000000000000000000000000000000000000813514606257808092368280378136915af43d82803e15605e573d90f35b3d90fd5b6020918152f3fea26469706673582212201cd52797898f3e25f02d8f53105f52ef95b29e4dee70cedd556b23529cd8999d64736f6c634300080f00336080346100c957601f61018438819003918201601f19168301916001600160401b038311848410176100ce578084926020946040528339810103126100c957516001600160a01b038116908190036100c957801561007957600080546001600160a01b031916919091179055604051609f90816100e58239f35b60405162461bcd60e51b815260206004820152602260248201527f496e76616c69642073696e676c65746f6e20616464726573732070726f766964604482015261195960f21b6064820152608490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600073ffffffffffffffffffffffffffffffffffffffff815416907fa619486e00000000000000000000000000000000000000000000000000000000813514606257808092368280378136915af43d82803e15605e573d90f35b3d90fd5b6020918152f3fea26469706673582212201cd52797898f3e25f02d8f53105f52ef95b29e4dee70cedd556b23529cd8999d64736f6c634300080f0033a2646970667358221220cb79febaa91de5d88333e8be7ea4556a52e26e372e3499cf49b0eddff02c23b964736f6c634300080f0033";

type BananaAccountProxyFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BananaAccountProxyFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BananaAccountProxyFactory__factory extends ContractFactory {
  constructor(...args: BananaAccountProxyFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BananaAccountProxyFactory> {
    return super.deploy(overrides || {}) as Promise<BananaAccountProxyFactory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BananaAccountProxyFactory {
    return super.attach(address) as BananaAccountProxyFactory;
  }
  override connect(signer: Signer): BananaAccountProxyFactory__factory {
    return super.connect(signer) as BananaAccountProxyFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BananaAccountProxyFactoryInterface {
    return new utils.Interface(_abi) as BananaAccountProxyFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BananaAccountProxyFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BananaAccountProxyFactory;
  }
}