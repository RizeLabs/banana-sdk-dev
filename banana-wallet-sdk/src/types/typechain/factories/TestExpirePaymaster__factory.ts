/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestExpirePaymaster,
  TestExpirePaymasterInterface,
} from "../TestExpirePaymaster";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
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
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "unstakeDelaySec",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
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
    name: "owner",
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
        internalType: "enum IPaymaster.PostOpMode",
        name: "mode",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "actualGasCost",
        type: "uint256",
      },
    ],
    name: "postOp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "maxCost",
        type: "uint256",
      },
    ],
    name: "validatePaymasterUserOp",
    outputs: [
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
    ],
    name: "withdrawStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610c25380380610c2583398101604081905261002f9161009b565b806100393361004b565b6001600160a01b0316608052506100cb565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100ad57600080fd5b81516001600160a01b03811681146100c457600080fd5b9392505050565b608051610b0e6101176000396000818161017f015281816102710152818161030801528181610384015281816104180152818161048f0152818161051c01526106ee0152610b0e6000f3fe6080604052600436106100c75760003560e01c8063bb9fe6bf11610074578063d0e30db01161004e578063d0e30db0146101f9578063f2fde38b14610201578063f465c77e1461022157600080fd5b8063bb9fe6bf146101a1578063c23a5cea146101b6578063c399ec88146101d657600080fd5b80638da5cb5b116100a55780638da5cb5b14610116578063a9a234091461014d578063b0d691fe1461016d57600080fd5b80630396cb60146100cc578063205c2878146100e1578063715018a614610101575b600080fd5b6100df6100da366004610836565b61024f565b005b3480156100ed57600080fd5b506100df6100fc366004610878565b6102da565b34801561010d57600080fd5b506100df61034c565b34801561012257600080fd5b506000546001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b34801561015957600080fd5b506100df6101683660046108a4565b610360565b34801561017957600080fd5b506101307f000000000000000000000000000000000000000000000000000000000000000081565b3480156101ad57600080fd5b506100df61037a565b3480156101c257600080fd5b506100df6101d1366004610933565b6103f1565b3480156101e257600080fd5b506101eb610477565b604051908152602001610144565b6100df610507565b34801561020d57600080fd5b506100df61021c366004610933565b610569565b34801561022d57600080fd5b5061024161023c366004610950565b6105fe565b6040516101449291906109a4565b610257610621565b604051621cb65b60e51b815263ffffffff821660048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690630396cb609034906024016000604051808303818588803b1580156102be57600080fd5b505af11580156102d2573d6000803e3d6000fd5b505050505050565b6102e2610621565b60405163040b850f60e31b81526001600160a01b038381166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063205c287890604401600060405180830381600087803b1580156102be57600080fd5b610354610621565b61035e600061067b565b565b6103686106e3565b6103748484848461075b565b50505050565b610382610621565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156103dd57600080fd5b505af1158015610374573d6000803e3d6000fd5b6103f9610621565b60405163611d2e7560e11b81526001600160a01b0382811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063c23a5cea90602401600060405180830381600087803b15801561045c57600080fd5b505af1158015610470573d6000803e3d6000fd5b5050505050565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156104de573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050291906109f9565b905090565b60405163b760faf960e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063b760faf99034906024016000604051808303818588803b15801561045c57600080fd5b610571610621565b6001600160a01b0381166105f25760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6105fb8161067b565b50565b6060600061060a6106e3565b6106158585856107a3565b91509150935093915050565b6000546001600160a01b0316331461035e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105e9565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461035e5760405162461bcd60e51b815260206004820152601560248201527f53656e646572206e6f7420456e747279506f696e74000000000000000000000060448201526064016105e9565b60405162461bcd60e51b815260206004820152600d60248201527f6d757374206f766572726964650000000000000000000000000000000000000060448201526064016105e9565b6060600080806107b7610120880188610a12565b6107c5916014908290610a60565b8101906107d29190610aa5565b915091506107e2600082846107fe565b6040805160208101909152600081529890975095505050505050565b600060d08265ffffffffffff16901b60a08465ffffffffffff16901b85610826576000610829565b60015b60ff161717949350505050565b60006020828403121561084857600080fd5b813563ffffffff8116811461085c57600080fd5b9392505050565b6001600160a01b03811681146105fb57600080fd5b6000806040838503121561088b57600080fd5b823561089681610863565b946020939093013593505050565b600080600080606085870312156108ba57600080fd5b8435600381106108c957600080fd5b9350602085013567ffffffffffffffff808211156108e657600080fd5b818701915087601f8301126108fa57600080fd5b81358181111561090957600080fd5b88602082850101111561091b57600080fd5b95986020929092019750949560400135945092505050565b60006020828403121561094557600080fd5b813561085c81610863565b60008060006060848603121561096557600080fd5b833567ffffffffffffffff81111561097c57600080fd5b8401610160818703121561098f57600080fd5b95602085013595506040909401359392505050565b604081526000835180604084015260005b818110156109d257602081870181015160608684010152016109b5565b506000606082850101526060601f19601f8301168401019150508260208301529392505050565b600060208284031215610a0b57600080fd5b5051919050565b6000808335601e19843603018112610a2957600080fd5b83018035915067ffffffffffffffff821115610a4457600080fd5b602001915036819003821315610a5957600080fd5b9250929050565b60008085851115610a7057600080fd5b83861115610a7d57600080fd5b5050820193919092039150565b803565ffffffffffff81168114610aa057600080fd5b919050565b60008060408385031215610ab857600080fd5b610ac183610a8a565b9150610acf60208401610a8a565b9050925092905056fea26469706673582212204cc24b9b9416d6ac1f97881190e3b7d7495230043add973c4ecd1d73153643c464736f6c63430008110033";

export class TestExpirePaymaster__factory extends ContractFactory {
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
    _entryPoint: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestExpirePaymaster> {
    return super.deploy(
      _entryPoint,
      overrides || {}
    ) as Promise<TestExpirePaymaster>;
  }
  getDeployTransaction(
    _entryPoint: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_entryPoint, overrides || {});
  }
  attach(address: string): TestExpirePaymaster {
    return super.attach(address) as TestExpirePaymaster;
  }
  connect(signer: Signer): TestExpirePaymaster__factory {
    return super.connect(signer) as TestExpirePaymaster__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestExpirePaymasterInterface {
    return new utils.Interface(_abi) as TestExpirePaymasterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestExpirePaymaster {
    return new Contract(address, _abi, signerOrProvider) as TestExpirePaymaster;
  }
}
