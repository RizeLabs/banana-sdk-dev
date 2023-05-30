/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ModuleManagerNew,
  ModuleManagerNewInterface,
} from "../ModuleManagerNew";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "CallerIsNotSelf",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "DisabledModule",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "EnabledModule",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "txGas",
        type: "uint256",
      },
    ],
    name: "ExecutionFailure",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "ExecutionFromModuleFailure",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "ExecutionFromModuleSuccess",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "txGas",
        type: "uint256",
      },
    ],
    name: "ExecutionSuccess",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "prevModule",
        type: "address",
      },
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "disableModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "enableModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
    ],
    name: "execTransactionFromModule",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
    ],
    name: "execTransactionFromModuleReturnData",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "start",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "pageSize",
        type: "uint256",
      },
    ],
    name: "getModulesPaginated",
    outputs: [
      {
        internalType: "address[]",
        name: "array",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "next",
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
        name: "module",
        type: "address",
      },
    ],
    name: "isModuleEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526001805460ff19168117905534801561001c57600080fd5b50610ae08061002c6000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063610b592511610050578063610b5925146100d3578063cc2f8452146100e8578063e009cfde1461010957600080fd5b80632d9ad53d14610077578063468721a71461009f5780635229073f146100b2575b600080fd5b61008a6100853660046107d2565b61011c565b60405190151581526020015b60405180910390f35b61008a6100ad366004610819565b610157565b6100c56100c0366004610819565b6102a4565b604051610096929190610919565b6100e66100e13660046107d2565b6102da565b005b6100fb6100f6366004610955565b610440565b60405161009692919061097f565b6100e66101173660046109dc565b610539565b600060016001600160a01b0383161480159061015157506001600160a01b038281166000908152602081905260409020541615155b92915050565b6001805460009160ff9091161515146101b75760405162461bcd60e51b815260206004820152600860248201527f64697361626c656400000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b336001148015906101df5750336000908152602081905260409020546001600160a01b031615155b61022b5760405162461bcd60e51b815260206004820152600660248201527f425341313034000000000000000000000000000000000000000000000000000060448201526064016101ae565b610238858585855a61068b565b905080156102705760405133907f6895c13664aa4f67288b25d7a21d7aaa34916e355fb9b6fae0a139a9085becb890600090a261029c565b60405133907facd2c8702804128fdb0db2bb49f6d127dd0181c13fd45dbfe16de0930e2bd37590600090a25b949350505050565b600060606102b486868686610157565b915060405160203d0181016040523d81523d6000602083013e8091505094509492505050565b6102e2610792565b6001600160a01b0381161580159061030457506001600160a01b038116600114155b6103395760405162461bcd60e51b815260206004820152600660248201526542534131303160d01b60448201526064016101ae565b6001600160a01b0381811660009081526020819052604090205416156103a15760405162461bcd60e51b815260206004820152600660248201527f425341313032000000000000000000000000000000000000000000000000000060448201526064016101ae565b600060208181527fada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d80546001600160a01b03858116808652604080872080549390941673ffffffffffffffffffffffffffffffffffffffff199384161790935560019095528254168417909155519182527fecdf3a3effea5783a3c4c2140e677577666428d44ed9d474a0b3a4c9943f8440910160405180910390a150565b606060008267ffffffffffffffff81111561045d5761045d6107f4565b604051908082528060200260200182016040528015610486578160200160208202803683370190505b506001600160a01b0380861660009081526020819052604081205492945091165b6001600160a01b038116158015906104c957506001600160a01b038116600114155b80156104d457508482105b1561052b57808483815181106104ec576104ec610a0f565b6001600160a01b03928316602091820292909201810191909152918116600090815291829052604090912054168161052381610a25565b9250506104a7565b908352919491935090915050565b610541610792565b6001600160a01b0381161580159061056357506001600160a01b038116600114155b6105985760405162461bcd60e51b815260206004820152600660248201526542534131303160d01b60448201526064016101ae565b6001600160a01b038281166000908152602081905260409020548116908216146106045760405162461bcd60e51b815260206004820152600660248201527f425341313033000000000000000000000000000000000000000000000000000060448201526064016101ae565b6001600160a01b038181166000818152602081815260408083208054888716855282852080549190971673ffffffffffffffffffffffffffffffffffffffff199182161790965592849052825490941690915591519081527faab4fa2b463f581b2b32cb3b7e3b704b9ce37cc209b5fb4d77e593ace4054276910160405180910390a15050565b600060018360018111156106a1576106a1610a4c565b036106b9576000808551602087018986f490506106c9565b600080855160208701888a87f190505b801561072e57836040516106dd9190610a62565b604051809103902085876001600160a01b03167f81d12fffced46c214dfae8ab8fa0b9f7b69f70c9d500e33f612f2105deb261ee8686604051610721929190610a7e565b60405180910390a4610789565b8360405161073c9190610a62565b604051809103902085876001600160a01b03167f3ddd038f78c876172d5dbfd730b14c9f8692dfa197ef104eaac6df3f85a0874a8686604051610780929190610a7e565b60405180910390a45b95945050505050565b3330146107b4576040516301478e3360e21b81523360048201526024016101ae565b565b80356001600160a01b03811681146107cd57600080fd5b919050565b6000602082840312156107e457600080fd5b6107ed826107b6565b9392505050565b634e487b7160e01b600052604160045260246000fd5b8035600281106107cd57600080fd5b6000806000806080858703121561082f57600080fd5b610838856107b6565b935060208501359250604085013567ffffffffffffffff8082111561085c57600080fd5b818701915087601f83011261087057600080fd5b813581811115610882576108826107f4565b604051601f8201601f19908116603f011681019083821181831017156108aa576108aa6107f4565b816040528281528a60208487010111156108c357600080fd5b8260208601602083013760006020848301015280965050505050506108ea6060860161080a565b905092959194509250565b60005b838110156109105781810151838201526020016108f8565b50506000910152565b821515815260406020820152600082518060408401526109408160608501602087016108f5565b601f01601f1916919091016060019392505050565b6000806040838503121561096857600080fd5b610971836107b6565b946020939093013593505050565b604080825283519082018190526000906020906060840190828701845b828110156109c15781516001600160a01b03168452928401929084019060010161099c565b5050506001600160a01b039490941692019190915250919050565b600080604083850312156109ef57600080fd5b6109f8836107b6565b9150610a06602084016107b6565b90509250929050565b634e487b7160e01b600052603260045260246000fd5b600060018201610a4557634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052602160045260246000fd5b60008251610a748184602087016108f5565b9190910192915050565b6040810160028410610aa057634e487b7160e01b600052602160045260246000fd5b928152602001529056fea26469706673582212202664691f884202e41e9ce6d7f3d7079129d0f1b36ef32f70f4d11a058ac96e1564736f6c63430008110033";

export class ModuleManagerNew__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ModuleManagerNew> {
    return super.deploy(overrides || {}) as Promise<ModuleManagerNew>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ModuleManagerNew {
    return super.attach(address) as ModuleManagerNew;
  }
  connect(signer: Signer): ModuleManagerNew__factory {
    return super.connect(signer) as ModuleManagerNew__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ModuleManagerNewInterface {
    return new utils.Interface(_abi) as ModuleManagerNewInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ModuleManagerNew {
    return new Contract(address, _abi, signerOrProvider) as ModuleManagerNew;
  }
}
