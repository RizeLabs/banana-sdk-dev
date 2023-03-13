/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  NewTouchIdAccount,
  NewTouchIdAccountInterface,
} from "../NewTouchIdAccount";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "anEntryPoint",
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
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IEntryPoint",
        name: "entryPoint",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "SimpleAccountInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "addDeposit",
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
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes[]",
        name: "func",
        type: "bytes[]",
      },
    ],
    name: "exec",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "dest",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "func",
        type: "bytes[]",
      },
    ],
    name: "execBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "func",
        type: "bytes",
      },
    ],
    name: "execFromEntryPoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "func",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "dest",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "func",
        type: "bytes[]",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "anOwner",
        type: "address",
      },
      {
        internalType: "uint256[2]",
        name: "_qValues",
        type: "uint256[2]",
      },
      {
        internalType: "address",
        name: "_ellipticCurve",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nonce",
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
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
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
        name: "missingAccountFunds",
        type: "uint256",
      },
    ],
    name: "validateUserOp",
    outputs: [
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
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawDepositTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60c0604052306080523480156200001557600080fd5b506040516200232c3803806200232c833981016040819052620000389162000118565b6001600160a01b03811660a0526200004f62000056565b506200014a565b600054610100900460ff1615620000c35760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff908116101562000116576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6000602082840312156200012b57600080fd5b81516001600160a01b03811681146200014357600080fd5b9392505050565b60805160a051612176620001b6600039600081816102bc0152818161070f015281816107b601528181610d2a01528181610e99015281816111f501526115ef015260008181610470015281816105200152818161087a0152818161092a0152610a7301526121766000f3fe6080604052600436106100f75760003560e01c806378cf75d71161008a578063b0d691fe11610059578063b0d691fe146102ad578063b61d27f6146102e0578063c399ec8814610300578063d0cb75fa1461031557600080fd5b806378cf75d7146101e857806380c5c7d0146102085780638da5cb5b14610228578063affed0e01461028a57600080fd5b80634a58db19116100c65780634a58db19146101985780634d44560d146101a05780634f1ef286146101c057806352d1902d146101d357600080fd5b806318dfb3c7146101035780633659cfe6146101255780633a871cdd146101455780633ef91dfb1461017857600080fd5b366100fe57005b600080fd5b34801561010f57600080fd5b5061012361011e3660046119e7565b610335565b005b34801561013157600080fd5b50610123610140366004611a75565b610459565b34801561015157600080fd5b50610165610160366004611a92565b61065e565b6040519081526020015b60405180910390f35b34801561018457600080fd5b50610123610193366004611ae6565b6106a3565b61012361070d565b3480156101ac57600080fd5b506101236101bb366004611b36565b6107ac565b6101236101ce366004611c09565b610863565b3480156101df57600080fd5b50610165610a59565b3480156101f457600080fd5b50610123610203366004611d1f565b610b45565b34801561021457600080fd5b50610123610223366004611d69565b610cdd565b34801561023457600080fd5b50600154610265906c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161016f565b34801561029657600080fd5b506001546bffffffffffffffffffffffff16610165565b3480156102b957600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610265565b3480156102ec57600080fd5b506101236102fb366004611d69565b610d1e565b34801561030c57600080fd5b50610165610d26565b34801561032157600080fd5b506101236103303660046119e7565b610dde565b61033d610e81565b8281146103ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b60005b83811015610452576104408585838181106103cb576103cb611df2565b90506020020160208101906103e09190611a75565b60008585858181106103f4576103f4611df2565b90506020028101906104069190611e21565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610f5492505050565b8061044a81611eb5565b9150506103ae565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016300361051e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c000000000000000000000000000000000000000060648201526084016103a2565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166105937f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610636576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f7879000000000000000000000000000000000000000060648201526084016103a2565b61063f81610fd1565b6040805160008082526020820190925261065b91839190610fd9565b50565b60006106686111dd565b610672848461127c565b90506106816040850185611e21565b90506000036106935761069384611377565b61069c82611440565b9392505050565b6106ab6114ab565b600080600080858560018181106106c4576106c4611df2565b90506020028101906106d69190611e21565b8101906106e39190611eed565b93509350935093506107038888888860008181106103f4576103f4611df2565b5050505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff919091169063b760faf99034906024016000604051808303818588803b15801561079857600080fd5b505af1158015610452573d6000803e3d6000fd5b6107b46114ab565b7f00000000000000000000000000000000000000000000000000000000000000006040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b15801561084757600080fd5b505af115801561085b573d6000803e3d6000fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003610928576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c000000000000000000000000000000000000000060648201526084016103a2565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661099d7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610a40576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f7879000000000000000000000000000000000000000060648201526084016103a2565b610a4982610fd1565b610a5582826001610fd9565b5050565b60003073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610b20576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c000000000000000060648201526084016103a2565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b600054610100900460ff1615808015610b655750600054600160ff909116105b80610b7f5750303b158015610b7f575060005460ff166001145b610c0b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016103a2565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558015610c6957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b610c74848484611546565b8015610cd757600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050565b610cd7848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610f5492505050565b610cdd610e81565b60007f00000000000000000000000000000000000000000000000000000000000000006040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff91909116906370a0823190602401602060405180830381865afa158015610db5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd99190611f8d565b905090565b610de66114ab565b828114610e4f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064016103a2565b60005b8381101561045257610e6f8585838181106103cb576103cb611df2565b80610e7981611eb5565b915050610e52565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480610eec57506001546c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff1633145b610f52576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e7460448201526064016103a2565b565b6000808473ffffffffffffffffffffffffffffffffffffffff168484604051610f7d9190611fd2565b60006040518083038185875af1925050503d8060008114610fba576040519150601f19603f3d011682016040523d82523d6000602084013e610fbf565b606091505b50915091508161045257805160208201fd5b61065b6114ab565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156110115761100c8361163b565b505050565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611096575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261109391810190611f8d565b60015b611122576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f74205555505300000000000000000000000000000000000060648201526084016103a2565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc81146111d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c6555554944000000000000000000000000000000000000000000000060648201526084016103a2565b5061100c838383611745565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610f52576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e740000000060448201526064016103a2565b600080808061128f610140870187611e21565b81019061129c9190611fee565b600480546040805180820182528681526020810186905290517f04e960d700000000000000000000000000000000000000000000000000000000815295985093965091945060009373ffffffffffffffffffffffffffffffffffffffff909216926304e960d792611313928792916002910161201a565b602060405180830381865afa158015611330573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611354919061207b565b905080611368576001945050505050611371565b60009450505050505b92915050565b600180546020830135916bffffffffffffffffffffffff90911690600061139d8361209d565b91906101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055506bffffffffffffffffffffffff161461065b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6163636f756e743a20696e76616c6964206e6f6e63650000000000000000000060448201526064016103a2565b801561065b5760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d8060008114610452576040519150601f19603f3d011682016040523d82523d6000602084013e610452565b6001546c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff163314806114e057503330145b610f52576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e65720000000000000000000000000000000000000000000060448201526064016103a2565b600180546bffffffffffffffffffffffff166c0100000000000000000000000073ffffffffffffffffffffffffffffffffffffffff86160217905561158d60028381611948565b50600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff838116919091179091556001546040516c010000000000000000000000009091048216917f000000000000000000000000000000000000000000000000000000000000000016907f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de90600090a3505050565b73ffffffffffffffffffffffffffffffffffffffff81163b6116df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e74726163740000000000000000000000000000000000000060648201526084016103a2565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b61174e8361176a565b60008251118061175b5750805b1561100c57610cd783836117b7565b6117738161163b565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606061069c838360405180606001604052806027815260200161211a6027913960606000808573ffffffffffffffffffffffffffffffffffffffff16856040516118019190611fd2565b600060405180830381855af49150503d806000811461183c576040519150601f19603f3d011682016040523d82523d6000602084013e611841565b606091505b50915091506118528683838761185c565b9695505050505050565b606083156118f25782516000036118eb5773ffffffffffffffffffffffffffffffffffffffff85163b6118eb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103a2565b50816118fc565b6118fc8383611904565b949350505050565b8151156119145781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a291906120c8565b8260028101928215611976579160200282015b8281111561197657825182559160200191906001019061195b565b50611982929150611986565b5090565b5b808211156119825760008155600101611987565b60008083601f8401126119ad57600080fd5b50813567ffffffffffffffff8111156119c557600080fd5b6020830191508360208260051b85010111156119e057600080fd5b9250929050565b600080600080604085870312156119fd57600080fd5b843567ffffffffffffffff80821115611a1557600080fd5b611a218883890161199b565b90965094506020870135915080821115611a3a57600080fd5b50611a478782880161199b565b95989497509550505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461065b57600080fd5b600060208284031215611a8757600080fd5b813561069c81611a53565b600080600060608486031215611aa757600080fd5b833567ffffffffffffffff811115611abe57600080fd5b84016101608187031215611ad157600080fd5b95602085013595506040909401359392505050565b60008060008060608587031215611afc57600080fd5b8435611b0781611a53565b935060208501359250604085013567ffffffffffffffff811115611b2a57600080fd5b611a478782880161199b565b60008060408385031215611b4957600080fd5b8235611b5481611a53565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611bb457611bb4611b62565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611c0157611c01611b62565b604052919050565b60008060408385031215611c1c57600080fd5b8235611c2781611a53565b915060208381013567ffffffffffffffff80821115611c4557600080fd5b818601915086601f830112611c5957600080fd5b813581811115611c6b57611c6b611b62565b611c9b847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611bba565b91508082528784828501011115611cb157600080fd5b80848401858401376000848284010152508093505050509250929050565b600082601f830112611ce057600080fd5b611ce8611b91565b806040840185811115611cfa57600080fd5b845b81811015611d14578035845260209384019301611cfc565b509095945050505050565b600080600060808486031215611d3457600080fd5b8335611d3f81611a53565b9250611d4e8560208601611ccf565b91506060840135611d5e81611a53565b809150509250925092565b60008060008060608587031215611d7f57600080fd5b8435611d8a81611a53565b935060208501359250604085013567ffffffffffffffff80821115611dae57600080fd5b818701915087601f830112611dc257600080fd5b813581811115611dd157600080fd5b886020828501011115611de357600080fd5b95989497505060200194505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611e5657600080fd5b83018035915067ffffffffffffffff821115611e7157600080fd5b6020019150368190038213156119e057600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611ee657611ee6611e86565b5060010190565b6000806000806101408587031215611f0457600080fd5b611f0e8686611ccf565b9350604086605f870112611f2157600080fd5b611f29611b91565b8060c0880189811115611f3b57600080fd5b8389015b81811015611f6057611f518b82611ccf565b84526020909301928401611f3f565b50819650611f6e8a82611ccf565b955050505050611f82866101008701611ccf565b905092959194509250565b600060208284031215611f9f57600080fd5b5051919050565b60005b83811015611fc1578181015183820152602001611fa9565b83811115610cd75750506000910152565b60008251611fe4818460208701611fa6565b9190910192915050565b60008060006060848603121561200357600080fd5b505081359360208301359350604090920135919050565b83815260a0810160208083018560005b60028110156120475781518352918301919083019060010161202a565b505050606083018460005b600281101561206f57815483529183019160019182019101612052565b50505050949350505050565b60006020828403121561208d57600080fd5b8151801515811461069c57600080fd5b60006bffffffffffffffffffffffff8083168181036120be576120be611e86565b6001019392505050565b60208152600082518060208401526120e7816040850160208701611fa6565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212201343ecd62c5d9c9941e927319f9233cf53d6e8403a47f485dab986c65c1f149564736f6c634300080f0033";

type NewTouchIdAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NewTouchIdAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NewTouchIdAccount__factory extends ContractFactory {
  constructor(...args: NewTouchIdAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    anEntryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NewTouchIdAccount> {
    return super.deploy(
      anEntryPoint,
      overrides || {}
    ) as Promise<NewTouchIdAccount>;
  }
  override getDeployTransaction(
    anEntryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(anEntryPoint, overrides || {});
  }
  override attach(address: string): NewTouchIdAccount {
    return super.attach(address) as NewTouchIdAccount;
  }
  override connect(signer: Signer): NewTouchIdAccount__factory {
    return super.connect(signer) as NewTouchIdAccount__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NewTouchIdAccountInterface {
    return new utils.Interface(_abi) as NewTouchIdAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NewTouchIdAccount {
    return new Contract(address, _abi, signerOrProvider) as NewTouchIdAccount;
  }
}
