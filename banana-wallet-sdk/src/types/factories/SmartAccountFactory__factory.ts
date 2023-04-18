/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  SmartAccountFactory,
  SmartAccountFactoryInterface,
} from "../SmartAccountFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_basicImplementation",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "AccountCreation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "AccountCreationWithoutIndex",
    type: "event",
  },
  {
    inputs: [],
    name: "accountCreationCode",
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
    name: "basicImplementation",
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
        internalType: "uint256[2]",
        name: "_qValues",
        type: "uint256[2]",
      },
    ],
    name: "deployAccount",
    outputs: [
      {
        internalType: "address",
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
        internalType: "uint256[2]",
        name: "_qValues",
        type: "uint256[2]",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "deployCounterFactualAccount",
    outputs: [
      {
        internalType: "address",
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
        internalType: "uint256[2]",
        name: "_qValues",
        type: "uint256[2]",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getAddressForCounterFactualAccount",
    outputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minimalHandler",
    outputs: [
      {
        internalType: "contract DefaultCallbackHandler",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c034610129576001600160401b0390601f61162438819003918201601f1916830191848311848410176100ce5780849260209460405283398101031261012957516001600160a01b03811680820361012957156100e457608052604051906106b690818301908111838210176100ce578291610f6e833903906000f080156100c25760a052604051610e3f908161012f8239608051818181610361015281816104a4015281816106540152610758015260a05181818161019201526109200152f35b6040513d6000823e3d90fd5b634e487b7160e01b600052604160045260246000fd5b60405162461bcd60e51b815260206004820152601d60248201527f696d706c656d656e746174696f6e2063616e6e6f74206265207a65726f0000006044820152606490fd5b600080fdfe60806040526004361015610013575b600080fd5b6000803560e01c90816331c884df1461008e575080633b3cb1431461008557806347e536a91461007c5780638c46c69d14610073578063daf0dfc81461006a5763e72e09221461006257600080fd5b61000e610678565b5061000e610608565b5061000e61041c565b5061000e6102e6565b5061000e610146565b3461012057807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610120576101206100cb602082016101e6565b8060805261098a60a039604051602081526040817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f60805180602085015261011781868601610123565b01168101030190f35b80fd5b60005b82811061013557506000910152565b60a081015182820152602001610126565b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e57602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09101166080016080811067ffffffffffffffff82111761022857604052565b6102306101b6565b604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761022857604052565b906102846040519283610235565b565b806023121561000e57604051906040820182811067ffffffffffffffff8211176102d9575b60405281604491821161000e576004905b8282106102c95750505090565b81358152602091820191016102bc565b6102e16101b6565b6102ab565b503461000e5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5761031f36610286565b61012061032e60208201610276565b90808252610aaa60208301396103d3604051926103b78461038b73ffffffffffffffffffffffffffffffffffffffff95867f00000000000000000000000000000000000000000000000000000000000000001690602084016107d0565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101865285610235565b6103ce845160009560200186f09384161515610865565b6108ca565b80519081610401575b60405173ffffffffffffffffffffffffffffffffffffffff84168152602090f35b0390f35b8391602083920182855af1156104185781806103dc565b5080fd5b503461000e5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576103fd6105e16105c86104616103ce36610286565b610120906105ac602091610476838501610276565b93808552610bca8486013960405193846104cb8582019273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690846107d0565b03916104fd7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe093848101885287610235565b8051908501206040805180870192835260443560208401529061052a908290840103858101835282610235565b51902094519020926105a06040519485928301963088917fffffffffffffffffffffffffffffffffffffffff000000000000000000000000605594927fff00000000000000000000000000000000000000000000000000000000000000855260601b166001840152601583015260358201520190565b03908101835282610235565b51902073ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1690565b60405173ffffffffffffffffffffffffffffffffffffffff90911681529081906020820190565b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e57602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b503461000e5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576106b46103ce36610286565b8051906020918282019081209161079460405193846106e58782019260443590849091604092825260208201520190565b03946107177fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe096878101835282610235565b51902061012094610729878701610276565b95808752610cea8888013961078160405191826105a073ffffffffffffffffffffffffffffffffffffffff998a7f000000000000000000000000000000000000000000000000000000000000000016908c84016107d0565b8051906000970187f59384161515610800565b5190816107bc5760405173ffffffffffffffffffffffffffffffffffffffff84168152602090f35b8391829182855af1156104185781806103dc565b9291909283519060005b8281106107ed5750019081526020019150565b80602080928801015181840152016107da565b1561080757565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f437265617465322063616c6c206661696c6564000000000000000000000000006044820152fd5b1561086c57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f4372656174652063616c6c206661696c656400000000000000000000000000006044820152fd5b6040519060207fd878383e0000000000000000000000000000000000000000000000000000000081840152602483016000905b60028210610974575050505073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001660648201526064815260a0810181811067ffffffffffffffff821117610967575b60405290565b61096f6101b6565b610961565b828060019286518152019401910190926108fd56fe6080346100aa57601f61012038819003918201601f19168301916001600160401b038311848410176100af578084926020946040528339810103126100aa57516001600160a01b0381168082036100aa5715610065573055604051605a90816100c68239f35b60405162461bcd60e51b815260206004820152601e60248201527f496e76616c696420696d706c656d656e746174696f6e206164647265737300006044820152606490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe608060405230546000808092368280378136915af43d82803e156020573d90f35b3d90fdfea2646970667358221220c48750ee7e96a1a3159a3fc354570c917ce9c7cb9b4a0d076f5f2357d4c562f964736f6c634300081100336080346100aa57601f61012038819003918201601f19168301916001600160401b038311848410176100af578084926020946040528339810103126100aa57516001600160a01b0381168082036100aa5715610065573055604051605a90816100c68239f35b60405162461bcd60e51b815260206004820152601e60248201527f496e76616c696420696d706c656d656e746174696f6e206164647265737300006044820152606490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe608060405230546000808092368280378136915af43d82803e156020573d90f35b3d90fdfea2646970667358221220c48750ee7e96a1a3159a3fc354570c917ce9c7cb9b4a0d076f5f2357d4c562f964736f6c634300081100336080346100aa57601f61012038819003918201601f19168301916001600160401b038311848410176100af578084926020946040528339810103126100aa57516001600160a01b0381168082036100aa5715610065573055604051605a90816100c68239f35b60405162461bcd60e51b815260206004820152601e60248201527f496e76616c696420696d706c656d656e746174696f6e206164647265737300006044820152606490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe608060405230546000808092368280378136915af43d82803e156020573d90f35b3d90fdfea2646970667358221220c48750ee7e96a1a3159a3fc354570c917ce9c7cb9b4a0d076f5f2357d4c562f964736f6c634300081100336080346100aa57601f61012038819003918201601f19168301916001600160401b038311848410176100af578084926020946040528339810103126100aa57516001600160a01b0381168082036100aa5715610065573055604051605a90816100c68239f35b60405162461bcd60e51b815260206004820152601e60248201527f496e76616c696420696d706c656d656e746174696f6e206164647265737300006044820152606490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe608060405230546000808092368280378136915af43d82803e156020573d90f35b3d90fdfea2646970667358221220c48750ee7e96a1a3159a3fc354570c917ce9c7cb9b4a0d076f5f2357d4c562f964736f6c63430008110033a2646970667358221220994e9dfc05d7e33298129098d4fcf0115f9a4f9046e14b0129fc90a97111925364736f6c63430008110033608080604052346100165761069a908161001c8239f35b600080fdfe60806040908082526004918236101561001757600080fd5b600091823560e01c90816223de29146104b057816301ffc9a71461038e57508063150b7a0214610300578063a3f4df7e1461027b578063bc197c81146101ba578063f23a6e61146101295763ffa1ad741461007157600080fd5b3461012557817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610125578051918183019083821067ffffffffffffffff8311176100f957506100f593508152600582527f312e302e30000000000000000000000000000000000000000000000000000000602083015251918291826105cd565b0390f35b806041867f4e487b71000000000000000000000000000000000000000000000000000000006024945252fd5b5080fd5b5090346101b75760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101b757610162610554565b5061016b61057c565b506084359067ffffffffffffffff82116101b7575060209261018f9136910161059f565b5050517ff23a6e61000000000000000000000000000000000000000000000000000000008152f35b80fd5b5090346101b75760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101b7576101f3610554565b506101fc61057c565b5067ffffffffffffffff906044358281116101255761021e9036908601610633565b5050606435828111610125576102379036908601610633565b50506084359182116101b757506020926102539136910161059f565b5050517fbc197c81000000000000000000000000000000000000000000000000000000008152f35b503461012557817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610125578051918183019083821067ffffffffffffffff8311176100f957506100f593508152601882527f44656661756c742043616c6c6261636b2048616e646c65720000000000000000602083015251918291826105cd565b5090346101b75760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101b757610339610554565b5061034261057c565b506064359067ffffffffffffffff82116101b757506020926103669136910161059f565b5050517f150b7a02000000000000000000000000000000000000000000000000000000008152f35b839085346104ac5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104ac57357fffffffff0000000000000000000000000000000000000000000000000000000081168091036104ac57602092507f4e2312e0000000000000000000000000000000000000000000000000000000008114908115610482575b8115610459575b811561042f575b5015158152f35b7f01ffc9a70000000000000000000000000000000000000000000000000000000091501483610428565b7e23de290000000000000000000000000000000000000000000000000000000081149150610421565b7f150b7a02000000000000000000000000000000000000000000000000000000008114915061041a565b8280fd5b8385346101255760c07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610125576104e9610554565b506104f261057c565b5060443573ffffffffffffffffffffffffffffffffffffffff8116036101255767ffffffffffffffff9060843582811161055057610533903690830161059f565b505060a4359182116104ac5761054b9136910161059f565b505080f35b8380fd5b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361057757565b600080fd5b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361057757565b9181601f840112156105775782359167ffffffffffffffff8311610577576020838186019501011161057757565b60208082528251818301819052939260005b85811061061f575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006040809697860101520116010190565b8181018301518482016040015282016105df565b9181601f840112156105775782359167ffffffffffffffff8311610577576020808501948460051b0101116105775756fea2646970667358221220d8f7854cbe07671a33a001cb9b36159a669112e03fec7118c8392ba5346d8bff64736f6c63430008110033";

type SmartAccountFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SmartAccountFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SmartAccountFactory__factory extends ContractFactory {
  constructor(...args: SmartAccountFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _basicImplementation: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SmartAccountFactory> {
    return super.deploy(
      _basicImplementation,
      overrides || {}
    ) as Promise<SmartAccountFactory>;
  }
  override getDeployTransaction(
    _basicImplementation: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_basicImplementation, overrides || {});
  }
  override attach(address: string): SmartAccountFactory {
    return super.attach(address) as SmartAccountFactory;
  }
  override connect(signer: Signer): SmartAccountFactory__factory {
    return super.connect(signer) as SmartAccountFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SmartAccountFactoryInterface {
    return new utils.Interface(_abi) as SmartAccountFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SmartAccountFactory {
    return new Contract(address, _abi, signerOrProvider) as SmartAccountFactory;
  }
}
