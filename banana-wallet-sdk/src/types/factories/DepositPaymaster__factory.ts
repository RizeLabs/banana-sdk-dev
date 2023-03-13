/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  DepositPaymaster,
  DepositPaymasterInterface,
} from "../DepositPaymaster";

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
    inputs: [],
    name: "COST_OF_POST",
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
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "addDepositFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "contract IOracle",
        name: "tokenPriceOracle",
        type: "address",
      },
    ],
    name: "addToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
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
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "depositInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_unlockBlock",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
    name: "lockTokenDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    name: "oracles",
    outputs: [
      {
        internalType: "contract IOracle",
        name: "",
        type: "address",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "unlockBlock",
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
    name: "unlockStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockTokenDeposit",
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
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTokensTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200329b3803806200329b833981810160405281019062000037919062000234565b80620000586200004c620000a460201b60201c565b620000ac60201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050506200009d6200017060201b60201c565b5062000266565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b43600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001e882620001bb565b9050919050565b6000620001fc82620001db565b9050919050565b6200020e81620001ef565b81146200021a57600080fd5b50565b6000815190506200022e8162000203565b92915050565b6000602082840312156200024d576200024c620001b6565b5b60006200025d848285016200021d565b91505092915050565b608051612fe8620002b3600039600081816104c40152818161055b01528181610acc01528181610af801528181610b8201528181610c3701528181610ead01526111ac0152612fe86000f3fe6080604052600436106101355760003560e01c8063addd5099116100ab578063c399ec881161006f578063c399ec88146103de578063cc9c837c14610409578063cd8f80c214610432578063d0e30db014610449578063f2fde38b14610453578063f465c77e1461047c57610135565b8063addd5099146102f9578063b0d691fe14610336578063bb9fe6bf14610361578063c23a5cea14610378578063c23f001f146103a157610135565b80635476bd72116100fd5780635476bd7214610223578063715018a61461024c578063796d4371146102635780638da5cb5b1461028e5780639ed0fb68146102b9578063a9a23409146102d057610135565b80630396cb601461013a578063205c287814610156578063382edd9e1461017f578063493b0170146101a85780634a6f84cf146101e6575b600080fd5b610154600480360381019061014f9190611ba5565b6104ba565b005b34801561016257600080fd5b5061017d60048036038101906101789190611c66565b610551565b005b34801561018b57600080fd5b506101a660048036038101906101a19190611d22565b6105ea565b005b3480156101b457600080fd5b506101cf60048036038101906101ca9190611d75565b6107b9565b6040516101dd929190611dc4565b60405180910390f35b3480156101f257600080fd5b5061020d60048036038101906102089190611ded565b610884565b60405161021a9190611e1a565b60405180910390f35b34801561022f57600080fd5b5061024a60048036038101906102459190611e73565b61089c565b005b34801561025857600080fd5b506102616109f4565b005b34801561026f57600080fd5b50610278610a08565b6040516102859190611e1a565b60405180910390f35b34801561029a57600080fd5b506102a3610a0e565b6040516102b09190611ec2565b60405180910390f35b3480156102c557600080fd5b506102ce610a37565b005b3480156102dc57600080fd5b506102f760048036038101906102f29190611f67565b610a7d565b005b34801561030557600080fd5b50610320600480360381019061031b9190611fdb565b610a97565b60405161032d9190612067565b60405180910390f35b34801561034257600080fd5b5061034b610aca565b60405161035891906120a3565b60405180910390f35b34801561036d57600080fd5b50610376610aee565b005b34801561038457600080fd5b5061039f600480360381019061039a91906120be565b610b78565b005b3480156103ad57600080fd5b506103c860048036038101906103c39190611d75565b610c0e565b6040516103d59190611e1a565b60405180910390f35b3480156103ea57600080fd5b506103f3610c33565b6040516104009190611e1a565b60405180910390f35b34801561041557600080fd5b50610430600480360381019061042b9190611d22565b610cd4565b005b34801561043e57600080fd5b50610447610e64565b005b610451610eab565b005b34801561045f57600080fd5b5061047a60048036038101906104759190611ded565b610f39565b005b34801561048857600080fd5b506104a3600480360381019061049e9190612146565b610fbc565b6040516104b1929190612245565b60405180910390f35b6104c2610fdf565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16630396cb6034836040518363ffffffff1660e01b815260040161051c9190612284565b6000604051808303818588803b15801561053557600080fd5b505af1158015610549573d6000803e3d6000fd5b505050505050565b610559610fdf565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663205c287883836040518363ffffffff1660e01b81526004016105b49291906122ae565b600060405180830381600087803b1580156105ce57600080fd5b505af11580156105e2573d6000803e3d6000fd5b505050505050565b6106173330838673ffffffffffffffffffffffffffffffffffffffff1661105d909392919063ffffffff16565b600073ffffffffffffffffffffffffffffffffffffffff16600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036106e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106dc90612334565b60405180910390fd5b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107719190612383565b925050819055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16036107b4576107b3610e64565b5b505050565b600080600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549150600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490509250929050565b60036020528060005260406000206000915090505481565b6108a4610fdf565b600073ffffffffffffffffffffffffffffffffffffffff16600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610972576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096990612403565b60405180910390fd5b80600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6109fc610fdf565b610a0660006110e6565b565b6188b881565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b43600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550565b610a856111aa565b610a918484848461123a565b50505050565b60016020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b610af6610fdf565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610b5e57600080fd5b505af1158015610b72573d6000803e3d6000fd5b50505050565b610b80610fdf565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663c23a5cea826040518263ffffffff1660e01b8152600401610bd99190612423565b600060405180830381600087803b158015610bf357600080fd5b505af1158015610c07573d6000803e3d6000fd5b5050505050565b6002602052816000526040600020602052806000526040600020600091509150505481565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610c8e9190611ec2565b602060405180830381865afa158015610cab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ccf9190612453565b905090565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414158015610d625750600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205443115b610da1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d98906124f2565b60405180910390fd5b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e2d9190612512565b92505081905550610e5f82828573ffffffffffffffffffffffffffffffffffffffff166114259092919063ffffffff16565b505050565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b760faf934306040518363ffffffff1660e01b8152600401610f059190611ec2565b6000604051808303818588803b158015610f1e57600080fd5b505af1158015610f32573d6000803e3d6000fd5b5050505050565b610f41610fdf565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610fb0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa7906125b8565b60405180910390fd5b610fb9816110e6565b50565b60606000610fc86111aa565b610fd38585856114ab565b91509150935093915050565b610fe761171f565b73ffffffffffffffffffffffffffffffffffffffff16611005610a0e565b73ffffffffffffffffffffffffffffffffffffffff161461105b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105290612624565b60405180910390fd5b565b6110e0846323b872dd60e01b85858560405160240161107e93929190612644565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611727565b50505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611238576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161122f906126c7565b60405180910390fd5b565b6000806000806000878781019061125191906126e7565b9450945094509450945060008183856188b861126d9190612762565b896112789190612383565b6112829190612762565b61128c91906127d3565b90506002808111156112a1576112a0612804565b5b8a60028111156112b4576112b3612804565b5b146112eb576112e68630838873ffffffffffffffffffffffffffffffffffffffff1661105d909392919063ffffffff16565b61137f565b80600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113779190612512565b925050819055505b80600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006113c9610a0e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546114129190612383565b9250508190555050505050505050505050565b6114a68363a9059cbb60e01b8484604051602401611444929190612833565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611727565b505050565b606060006188b88560a00135116114f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114ee906128ce565b60405180910390fd5b3660008680610120019061150b91906128fd565b9150915060288282905014611555576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161154c906129d2565b60405180910390fd5b60008282601490809261156a939291906129fc565b906115759190612a7b565b60601c90506000611585896117ee565b9050600061159383896117fe565b905060006115a08b611955565b90506000600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414611624576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161161b90612b4c565b60405180910390fd5b81600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156116e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116da90612bde565b60405180910390fd5b828482848c6040516020016116fc959493929190612c1f565b604051602081830303815290604052600097509750505050505050935093915050565b600033905090565b6000611789826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166119909092919063ffffffff16565b90506000815111156117e957808060200190518101906117a99190612caa565b6117e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117df90612d49565b60405180910390fd5b5b505050565b6000808235905080915050919050565b600080600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036118d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118c990612ddb565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1663d1eca9cf846040518263ffffffff1660e01b815260040161190b9190611e1a565b602060405180830381865afa158015611928573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061194c9190612453565b91505092915050565b6000808260e0013590506000836101000135905080820361197a57819250505061198b565b611986824883016119a8565b925050505b919050565b606061199f84846000856119c1565b90509392505050565b60008183106119b757816119b9565b825b905092915050565b606082471015611a06576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119fd90612e6d565b60405180910390fd5b611a0f85611ad5565b611a4e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a4590612ed9565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611a779190612f35565b60006040518083038185875af1925050503d8060008114611ab4576040519150601f19603f3d011682016040523d82523d6000602084013e611ab9565b606091505b5091509150611ac9828286611af8565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315611b0857829050611b58565b600083511115611b1b5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b4f9190612f90565b60405180910390fd5b9392505050565b600080fd5b600080fd5b600063ffffffff82169050919050565b611b8281611b69565b8114611b8d57600080fd5b50565b600081359050611b9f81611b79565b92915050565b600060208284031215611bbb57611bba611b5f565b5b6000611bc984828501611b90565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611bfd82611bd2565b9050919050565b611c0d81611bf2565b8114611c1857600080fd5b50565b600081359050611c2a81611c04565b92915050565b6000819050919050565b611c4381611c30565b8114611c4e57600080fd5b50565b600081359050611c6081611c3a565b92915050565b60008060408385031215611c7d57611c7c611b5f565b5b6000611c8b85828601611c1b565b9250506020611c9c85828601611c51565b9150509250929050565b6000611cb182611bd2565b9050919050565b6000611cc382611ca6565b9050919050565b611cd381611cb8565b8114611cde57600080fd5b50565b600081359050611cf081611cca565b92915050565b611cff81611ca6565b8114611d0a57600080fd5b50565b600081359050611d1c81611cf6565b92915050565b600080600060608486031215611d3b57611d3a611b5f565b5b6000611d4986828701611ce1565b9350506020611d5a86828701611d0d565b9250506040611d6b86828701611c51565b9150509250925092565b60008060408385031215611d8c57611d8b611b5f565b5b6000611d9a85828601611ce1565b9250506020611dab85828601611d0d565b9150509250929050565b611dbe81611c30565b82525050565b6000604082019050611dd96000830185611db5565b611de66020830184611db5565b9392505050565b600060208284031215611e0357611e02611b5f565b5b6000611e1184828501611d0d565b91505092915050565b6000602082019050611e2f6000830184611db5565b92915050565b6000611e4082611ca6565b9050919050565b611e5081611e35565b8114611e5b57600080fd5b50565b600081359050611e6d81611e47565b92915050565b60008060408385031215611e8a57611e89611b5f565b5b6000611e9885828601611ce1565b9250506020611ea985828601611e5e565b9150509250929050565b611ebc81611ca6565b82525050565b6000602082019050611ed76000830184611eb3565b92915050565b60038110611eea57600080fd5b50565b600081359050611efc81611edd565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112611f2757611f26611f02565b5b8235905067ffffffffffffffff811115611f4457611f43611f07565b5b602083019150836001820283011115611f6057611f5f611f0c565b5b9250929050565b60008060008060608587031215611f8157611f80611b5f565b5b6000611f8f87828801611eed565b945050602085013567ffffffffffffffff811115611fb057611faf611b64565b5b611fbc87828801611f11565b93509350506040611fcf87828801611c51565b91505092959194509250565b600060208284031215611ff157611ff0611b5f565b5b6000611fff84828501611ce1565b91505092915050565b6000819050919050565b600061202d61202861202384611bd2565b612008565b611bd2565b9050919050565b600061203f82612012565b9050919050565b600061205182612034565b9050919050565b61206181612046565b82525050565b600060208201905061207c6000830184612058565b92915050565b600061208d82612034565b9050919050565b61209d81612082565b82525050565b60006020820190506120b86000830184612094565b92915050565b6000602082840312156120d4576120d3611b5f565b5b60006120e284828501611c1b565b91505092915050565b600080fd5b60006101608284031215612107576121066120eb565b5b81905092915050565b6000819050919050565b61212381612110565b811461212e57600080fd5b50565b6000813590506121408161211a565b92915050565b60008060006060848603121561215f5761215e611b5f565b5b600084013567ffffffffffffffff81111561217d5761217c611b64565b5b612189868287016120f0565b935050602061219a86828701612131565b92505060406121ab86828701611c51565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b60005b838110156121ef5780820151818401526020810190506121d4565b60008484015250505050565b6000601f19601f8301169050919050565b6000612217826121b5565b61222181856121c0565b93506122318185602086016121d1565b61223a816121fb565b840191505092915050565b6000604082019050818103600083015261225f818561220c565b905061226e6020830184611db5565b9392505050565b61227e81611b69565b82525050565b60006020820190506122996000830184612275565b92915050565b6122a881611bf2565b82525050565b60006040820190506122c3600083018561229f565b6122d06020830184611db5565b9392505050565b600082825260208201905092915050565b7f756e737570706f7274656420746f6b656e000000000000000000000000000000600082015250565b600061231e6011836122d7565b9150612329826122e8565b602082019050919050565b6000602082019050818103600083015261234d81612311565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061238e82611c30565b915061239983611c30565b92508282019050808211156123b1576123b0612354565b5b92915050565b7f546f6b656e20616c726561647920736574000000000000000000000000000000600082015250565b60006123ed6011836122d7565b91506123f8826123b7565b602082019050919050565b6000602082019050818103600083015261241c816123e0565b9050919050565b6000602082019050612438600083018461229f565b92915050565b60008151905061244d81611c3a565b92915050565b60006020828403121561246957612468611b5f565b5b60006124778482850161243e565b91505092915050565b7f4465706f7369745061796d61737465723a206d75737420756e6c6f636b546f6b60008201527f656e4465706f7369740000000000000000000000000000000000000000000000602082015250565b60006124dc6029836122d7565b91506124e782612480565b604082019050919050565b6000602082019050818103600083015261250b816124cf565b9050919050565b600061251d82611c30565b915061252883611c30565b92508282039050818111156125405761253f612354565b5b92915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006125a26026836122d7565b91506125ad82612546565b604082019050919050565b600060208201905081810360008301526125d181612595565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061260e6020836122d7565b9150612619826125d8565b602082019050919050565b6000602082019050818103600083015261263d81612601565b9050919050565b60006060820190506126596000830186611eb3565b6126666020830185611eb3565b6126736040830184611db5565b949350505050565b7f53656e646572206e6f7420456e747279506f696e740000000000000000000000600082015250565b60006126b16015836122d7565b91506126bc8261267b565b602082019050919050565b600060208201905081810360008301526126e0816126a4565b9050919050565b600080600080600060a0868803121561270357612702611b5f565b5b600061271188828901611c1b565b955050602061272288828901611ce1565b945050604061273388828901611c51565b935050606061274488828901611c51565b925050608061275588828901611c51565b9150509295509295909350565b600061276d82611c30565b915061277883611c30565b925082820261278681611c30565b9150828204841483151761279d5761279c612354565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006127de82611c30565b91506127e983611c30565b9250826127f9576127f86127a4565b5b828204905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60006040820190506128486000830185611eb3565b6128556020830184611db5565b9392505050565b7f4465706f7369745061796d61737465723a2067617320746f6f206c6f7720666f60008201527f7220706f73744f70000000000000000000000000000000000000000000000000602082015250565b60006128b86028836122d7565b91506128c38261285c565b604082019050919050565b600060208201905081810360008301526128e7816128ab565b9050919050565b600080fd5b600080fd5b600080fd5b6000808335600160200384360303811261291a576129196128ee565b5b80840192508235915067ffffffffffffffff82111561293c5761293b6128f3565b5b602083019250600182023603831315612958576129576128f8565b5b509250929050565b7f4465706f7369745061796d61737465723a207061796d6173746572416e64446160008201527f7461206d757374207370656369667920746f6b656e0000000000000000000000602082015250565b60006129bc6035836122d7565b91506129c782612960565b604082019050919050565b600060208201905081810360008301526129eb816129af565b9050919050565b600080fd5b600080fd5b60008085851115612a1057612a0f6129f2565b5b83861115612a2157612a206129f7565b5b6001850283019150848603905094509492505050565b600082905092915050565b60007fffffffffffffffffffffffffffffffffffffffff00000000000000000000000082169050919050565b600082821b905092915050565b6000612a878383612a37565b82612a928135612a42565b92506014821015612ad257612acd7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000083601403600802612a6e565b831692505b505092915050565b7f4465706f7369745061796d61737465723a206465706f736974206e6f74206c6f60008201527f636b656400000000000000000000000000000000000000000000000000000000602082015250565b6000612b366024836122d7565b9150612b4182612ada565b604082019050919050565b60006020820190508181036000830152612b6581612b29565b9050919050565b7f4465706f7369745061796d61737465723a206465706f73697420746f6f206c6f60008201527f7700000000000000000000000000000000000000000000000000000000000000602082015250565b6000612bc86021836122d7565b9150612bd382612b6c565b604082019050919050565b60006020820190508181036000830152612bf781612bbb565b9050919050565b6000612c0982612034565b9050919050565b612c1981612bfe565b82525050565b600060a082019050612c346000830188611eb3565b612c416020830187612c10565b612c4e6040830186611db5565b612c5b6060830185611db5565b612c686080830184611db5565b9695505050505050565b60008115159050919050565b612c8781612c72565b8114612c9257600080fd5b50565b600081519050612ca481612c7e565b92915050565b600060208284031215612cc057612cbf611b5f565b5b6000612cce84828501612c95565b91505092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000612d33602a836122d7565b9150612d3e82612cd7565b604082019050919050565b60006020820190508181036000830152612d6281612d26565b9050919050565b7f4465706f7369745061796d61737465723a20756e737570706f7274656420746f60008201527f6b656e0000000000000000000000000000000000000000000000000000000000602082015250565b6000612dc56023836122d7565b9150612dd082612d69565b604082019050919050565b60006020820190508181036000830152612df481612db8565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b6000612e576026836122d7565b9150612e6282612dfb565b604082019050919050565b60006020820190508181036000830152612e8681612e4a565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000612ec3601d836122d7565b9150612ece82612e8d565b602082019050919050565b60006020820190508181036000830152612ef281612eb6565b9050919050565b600081905092915050565b6000612f0f826121b5565b612f198185612ef9565b9350612f298185602086016121d1565b80840191505092915050565b6000612f418284612f04565b915081905092915050565b600081519050919050565b6000612f6282612f4c565b612f6c81856122d7565b9350612f7c8185602086016121d1565b612f85816121fb565b840191505092915050565b60006020820190508181036000830152612faa8184612f57565b90509291505056fea2646970667358221220575bbd0d2ff645e486ce8076e2e65d4dbfe92ee77412343719ff079c6e43ef8764736f6c63430008110033";

type DepositPaymasterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DepositPaymasterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DepositPaymaster__factory extends ContractFactory {
  constructor(...args: DepositPaymasterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DepositPaymaster> {
    return super.deploy(
      _entryPoint,
      overrides || {}
    ) as Promise<DepositPaymaster>;
  }
  override getDeployTransaction(
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_entryPoint, overrides || {});
  }
  override attach(address: string): DepositPaymaster {
    return super.attach(address) as DepositPaymaster;
  }
  override connect(signer: Signer): DepositPaymaster__factory {
    return super.connect(signer) as DepositPaymaster__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DepositPaymasterInterface {
    return new utils.Interface(_abi) as DepositPaymasterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DepositPaymaster {
    return new Contract(address, _abi, signerOrProvider) as DepositPaymaster;
  }
}