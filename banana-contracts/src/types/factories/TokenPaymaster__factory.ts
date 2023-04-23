/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TokenPaymaster,
  TokenPaymasterInterface,
} from "../TokenPaymaster";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "accountFactory",
        type: "address",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
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
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mintTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "theFactory",
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
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
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
] as const;

const _bytecode =
  "0x604060c081523462000538576200241e803803806200001e8162000555565b92833981019060608183031262000538578051916001600160a01b03918284168403620005385760208181015190946001600160401b039390918481116200053857830194601f93828588011215620005385786518681116200052257601f1997620000908288018a168b0162000555565b948286528a838301011162000538578a92918a9160005b8281106200053d57505090600091860101520151908082168203620005385760008054336001600160a01b03198216811783559216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a360805280519380851162000522576004958654956001968781811c9116801562000517575b8a8210146200042957868111620004cc575b5080898782116001146200046a576000916200045e575b50600019600383901b1c191690871b1787555b8251918211620004495760059283548781811c911680156200043e575b8a821014620004295790818785949311620003d3575b5089918784116001146200036e575060009262000362575b5050600019600383901b1c191690851b1790555b60a05230156200032157506003548181018091116200030c576003553060005280835283600020818154019055835190815260007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef843093a33315620002c0575030600052600281528160002033600052815260001980836000205582519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92533923092a351611ea290816200057c82396080518181816109b101528181610ab901528181610b8f01528181610c5101528181610d01015281816114f90152818161177f0152611d74015260a0518181816101ed0152610fbd0152f35b915162461bcd60e51b815291820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b601183634e487b7160e01b6000525260246000fd5b905060649284519262461bcd60e51b845283015260248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b015190503880620001ad565b88949291921691856000528a6000209260005b8c828210620003bc5750508411620003a2575b505050811b019055620001c1565b015160001960f88460031b161c1916905538808062000394565b8385015186558b9790950194938401930162000381565b90919250846000528960002087808601871c8201928c87106200041f575b918a91879695949301881c01915b8281106200040f57505062000195565b600081558695508a9101620003ff565b92508192620003f1565b602289634e487b7160e01b6000525260246000fd5b90607f16906200017f565b604187634e487b7160e01b6000525260246000fd5b9050840151386200014f565b83899316908a6000528b6000209160005b8d828210620004b557505083116200049b575b5050811b01875562000162565b86015160001960f88460031b161c1916905538806200048e565b838a015185558c969094019392830192016200047b565b88600052896000208780840160051c8201928c85106200050d575b0160051c019088905b8281106200050057505062000138565b60008155018890620004f0565b92508192620004e7565b90607f169062000126565b634e487b7160e01b600052604160045260246000fd5b600080fd5b8181018401518882018501528d95508c9301620000a7565b6040519190601f01601f191682016001600160401b03811183821017620005225760405256fe6040608081526004908136101561001557600080fd5b600090813560e01c80630396cb601461172257806306fdde03146115f1578063095ea7b3146115aa57806318160ddd1461156e578063205c28781461149f57806323b872dd14611370578063313ce5671461133757806339509351146112bd57806370a0823114611278578063715018a6146111db578063796d4371146111a15780638da5cb5b1461115157806395d89b4114610fe15780639f5ca22114610f73578063a457c2d714610e6e578063a9059cbb14610e20578063a9a2340914610d25578063b0d691fe14610cb7578063bb9fe6bf14610c00578063c23a5cea14610b34578063c399ec8814610a40578063d0e30db01461096d578063dd62ed3e146108f7578063f0dda65c146107ea578063f2fde38b146105075763f465c77e1461013f57600080fd5b34610503577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc916060833601126105005767ffffffffffffffff9284358481116104fc576101608187019282360301126104fc5761019b611d5d565b604490606482350490613a9860a4820135111561047a5782016101be8185611dfa565b159050610402576101cf9084611dfa565b6014116103fe5773ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016903560601c0361037c5761024a61022384611e4b565b73ffffffffffffffffffffffffffffffffffffffff16600052600160205260406000205490565b106102fa575061025990611e4b565b9173ffffffffffffffffffffffffffffffffffffffff8151931660208401526020835280830193838510908511176102cc57837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0949550815284526102c160808301836117f4565b906060830152030190f35b6041857f4e487b71000000000000000000000000000000000000000000000000000000006000525260246000fd5b857f546f6b656e5061796d61737465723a206e6f2062616c616e636520287072652d60849260208751937f08c379a0000000000000000000000000000000000000000000000000000000008552840152602760248401528201527f63726561746529000000000000000000000000000000000000000000000000006064820152fd5b6084877f546f6b656e5061796d61737465723a2077726f6e67206163636f756e742066618460208951937f08c379a0000000000000000000000000000000000000000000000000000000008552840152602560248401528201527f63746f72790000000000000000000000000000000000000000000000000000006064820152fd5b8480fd5b5061040f61022384611e4b565b1061041e575061025990611e4b565b857f546f6b656e5061796d61737465723a206e6f2062616c616e636500000000000060649260208751937f08c379a0000000000000000000000000000000000000000000000000000000008552840152601a6024840152820152fd5b6084887f546f6b656e5061796d61737465723a2067617320746f6f206c6f7720666f72208560208a51937f08c379a0000000000000000000000000000000000000000000000000000000008552840152602660248401528201527f706f73744f7000000000000000000000000000000000000000000000000000006064820152fd5b8280fd5b80fd5b5080fd5b508290346104fc576020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126107e657610542611852565b9061054b611898565b73ffffffffffffffffffffffffffffffffffffffff808654169230156107655783156106e3578190306000526002845285600020856000528452600086812055855194600086527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259586863092a36105c1611898565b1694851561066157508490600054827fffffffffffffffffffffffff0000000000000000000000000000000000000000821617600055167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a33060005260028152826000208460005281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff92838160002055519283523092a380f35b608490838651917f08c379a0000000000000000000000000000000000000000000000000000000008352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152fd5b608486848751917f08c379a0000000000000000000000000000000000000000000000000000000008352820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152fd5b608486848751917f08c379a00000000000000000000000000000000000000000000000000000000083528201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152fd5b8380fd5b508290346104fc57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104fc57610823611852565b9073ffffffffffffffffffffffffffffffffffffffff60243592610845611898565b1692831561089b57506020827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92610880879560035461199b565b6003558585526001835280852082815401905551908152a380f35b602060649251917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b503461050357807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261050357602091610931611852565b8261093a611875565b9273ffffffffffffffffffffffffffffffffffffffff809316815260028652209116600052825280600020549051908152f35b50918192827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610a3c5773ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001691823b15610a3757839060248351809581937fb760faf9000000000000000000000000000000000000000000000000000000008352309083015234905af1908115610a2e5750610a1e5750f35b610a2790611917565b6105005780f35b513d84823e3d90fd5b505050fd5b5050fd5b508290346104fc57827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104fc578051917f70a08231000000000000000000000000000000000000000000000000000000008352309083015260208260248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa918215610b2a578392610af3575b6020838351908152f35b9091506020813d8211610b22575b81610b0e6020938361195a565b810103126104fc5760209250519083610ae9565b3d9150610b01565b81513d85823e3d90fd5b5091819234610a3c5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610a3c57610b6f611852565b610b77611898565b73ffffffffffffffffffffffffffffffffffffffff807f000000000000000000000000000000000000000000000000000000000000000016803b15610bfc57859283602492865197889586947fc23a5cea00000000000000000000000000000000000000000000000000000000865216908401525af1908115610a2e5750610a1e5750f35b8580fd5b5091819234610a3c57827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610a3c57610c3a611898565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001691823b15610a3757839283918351809581937fbb9fe6bf0000000000000000000000000000000000000000000000000000000083525af1908115610a2e5750610a1e5750f35b503461050357817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610503576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b5050346105005760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261050057600382351015610500576024359167ffffffffffffffff8084116104fc57366023850112156104fc57838201359081116104fc578301923660248501116104fc5760208160443595610da6611d5d565b03126104fc57602401359073ffffffffffffffffffffffffffffffffffffffff8216809203610e1b57613a988401809411610def57506064610dec9293049030906119d7565b80f35b8260116024927f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b600080fd5b503461050357807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261050357602090610e67610e5d611852565b60243590336119d7565b5160018152f35b5091903461050057827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261050057610ea7611852565b91836024359233815260026020522073ffffffffffffffffffffffffffffffffffffffff8416600052602052836000205490828210610ef057602085610e678585038733611be8565b60849060208651917f08c379a0000000000000000000000000000000000000000000000000000000008352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152fd5b503461050357817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610503576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50903461050057807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610500578151918160055492600184811c91818616958615611147575b602096878510811461111b578899509688969785829a5291826000146110d657505060011461107a575b505050611076929161106791038561195a565b519282849384528301906117f4565b0390f35b9190869350600583527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db05b8284106110be5750505082010181611067611076611054565b8054848a0186015288955087949093019281016110a5565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168782015293151560051b8601909301935084925061106791506110769050611054565b60248360228c7f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b92607f169261102a565b503461050357817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126105035773ffffffffffffffffffffffffffffffffffffffff60209254169051908152f35b503461050357817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126105035760209051613a988152f35b823461050057807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261050057611212611898565b600073ffffffffffffffffffffffffffffffffffffffff81547fffffffffffffffffffffffff000000000000000000000000000000000000000081168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b50346105035760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610503576020906112b6610223611852565b9051908152f35b503461050357807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261050357610e67602092826112fb611852565b91338152600286522073ffffffffffffffffffffffffffffffffffffffff82166000528452611330602435846000205461199b565b9033611be8565b503461050357817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610503576020905160128152f35b5091346105035760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610503576113a9611852565b6113b1611875565b91846044359473ffffffffffffffffffffffffffffffffffffffff84168152600260205220336000526020528460002054907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611419575b602086610e678787876119d7565b848210611442575091839161143760209695610e6795033383611be8565b91939481935061140b565b60649060208751917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b5091819234610a3c57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610a3c576114d9611852565b6114e1611898565b73ffffffffffffffffffffffffffffffffffffffff807f000000000000000000000000000000000000000000000000000000000000000016803b15610bfc57859283604492865197889586947f205c2878000000000000000000000000000000000000000000000000000000008652169084015260243560248401525af1908115610a2e5750610a1e5750f35b503461050357817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610503576020906003549051908152f35b503461050357807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261050357602090610e676115e7611852565b6024359033611be8565b50903461050057807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126105005781519181845492600184811c91818616958615611718575b602096878510811461111b579087899a92868b999a9b5291826000146116d0575050600114611675575b858861107689611067848a038561195a565b815286935091907f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b8284106116b8575050508201018161106761107638611663565b8054848a01860152889550879490930192810161169e565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168882015294151560051b8701909401945085935061106792506110769150389050611663565b92607f1692611639565b50829060207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104fc5782823563ffffffff811680910361050357611768611898565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001693843b156104fc57602490845195869384927f0396cb6000000000000000000000000000000000000000000000000000000000845283015234905af1908115610a2e57506117eb575080f35b610dec90611917565b919082519283825260005b84811061183e5750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006020809697860101520116010190565b6020818301810151848301820152016117ff565b6004359073ffffffffffffffffffffffffffffffffffffffff82168203610e1b57565b6024359073ffffffffffffffffffffffffffffffffffffffff82168203610e1b57565b73ffffffffffffffffffffffffffffffffffffffff6000541633036118b957565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b67ffffffffffffffff811161192b57604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761192b57604052565b919082018092116119a857565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff809116918215611b645716918215611ae05760008281526001602052604081205491808310611a5c57604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef95876020965260018652038282205586815220818154019055604051908152a3565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152fd5b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152fd5b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152fd5b73ffffffffffffffffffffffffffffffffffffffff809116918215611cda5716918215611c565760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260028252604060002085600052825280604060002055604051908152a3565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152fd5b60846040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152fd5b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163303611d9c57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f53656e646572206e6f7420456e747279506f696e7400000000000000000000006044820152fd5b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe181360301821215610e1b570180359067ffffffffffffffff8211610e1b57602001918136038313610e1b57565b3573ffffffffffffffffffffffffffffffffffffffff81168103610e1b579056fea26469706673582212202c55e4a6e3046632803fdfbf6b6d25d34d84a477c9302150ed897d083ab7a57a64736f6c63430008110033";

type TokenPaymasterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenPaymasterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenPaymaster__factory extends ContractFactory {
  constructor(...args: TokenPaymasterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    accountFactory: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenPaymaster> {
    return super.deploy(
      accountFactory,
      _symbol,
      _entryPoint,
      overrides || {}
    ) as Promise<TokenPaymaster>;
  }
  override getDeployTransaction(
    accountFactory: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      accountFactory,
      _symbol,
      _entryPoint,
      overrides || {}
    );
  }
  override attach(address: string): TokenPaymaster {
    return super.attach(address) as TokenPaymaster;
  }
  override connect(signer: Signer): TokenPaymaster__factory {
    return super.connect(signer) as TokenPaymaster__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenPaymasterInterface {
    return new utils.Interface(_abi) as TokenPaymasterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenPaymaster {
    return new Contract(address, _abi, signerOrProvider) as TokenPaymaster;
  }
}