/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  SimpleAccountFactory,
  SimpleAccountFactoryInterface,
} from "../SimpleAccountFactory";

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
    inputs: [],
    name: "accountImplementation",
    outputs: [
      {
        internalType: "contract SimpleAccount",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "createAccount",
    outputs: [
      {
        internalType: "contract SimpleAccount",
        name: "ret",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
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
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161336238038061336283398101604081905261002f91610088565b8060405161003c9061007b565b6001600160a01b039091168152602001604051809103906000f080158015610068573d6000803e3d6000fd5b506001600160a01b0316608052506100b8565b6125dc80610d8683390190565b60006020828403121561009a57600080fd5b81516001600160a01b03811681146100b157600080fd5b9392505050565b608051610ca66100e060003960008181604b0152818161011401526102580152610ca66000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806311464fbe146100465780635fbfb9cf146100965780638cb84e18146100a9575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61006d6100a436600461039d565b6100bc565b61006d6100b736600461039d565b6101ee565b6000806100c984846101ee565b905073ffffffffffffffffffffffffffffffffffffffff81163b80156100f1575090506101e8565b60405173ffffffffffffffffffffffffffffffffffffffff8616602482015284907f000000000000000000000000000000000000000000000000000000000000000090604401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fc4d66de800000000000000000000000000000000000000000000000000000000179052516101b790610390565b6101c2929190610412565b8190604051809103906000f59050801580156101e2573d6000803e3d6000fd5b50925050505b92915050565b60006103578260001b6040518060200161020790610390565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f90910116604081905273ffffffffffffffffffffffffffffffffffffffff871660248201527f000000000000000000000000000000000000000000000000000000000000000090604401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fc4d66de800000000000000000000000000000000000000000000000000000000179052905161030093929101610412565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905261033c9291602001610480565b6040516020818303038152906040528051906020012061035e565b9392505050565b60006103578383306000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b6107c1806104b083390190565b600080604083850312156103b057600080fd5b823573ffffffffffffffffffffffffffffffffffffffff811681146103d457600080fd5b946020939093013593505050565b60005b838110156103fd5781810151838201526020016103e5565b8381111561040c576000848401525b50505050565b73ffffffffffffffffffffffffffffffffffffffff83168152604060208201526000825180604084015261044d8160608501602087016103e2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016060019392505050565b600083516104928184602088016103e2565b8351908301906104a68183602088016103e2565b0194935050505056fe60806040526040516107c13803806107c183398101604081905261002291610321565b61002e82826000610035565b505061043e565b61003e8361006b565b60008251118061004b5750805b156100665761006483836100ab60201b6100291760201c565b505b505050565b610074816100d7565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606100d0838360405180606001604052806027815260200161079a602791396101a9565b9392505050565b6100ea8161022260201b6100551760201c565b6101515760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101887f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61023160201b6100711760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060600080856001600160a01b0316856040516101c691906103ef565b600060405180830381855af49150503d8060008114610201576040519150601f19603f3d011682016040523d82523d6000602084013e610206565b606091505b50909250905061021886838387610234565b9695505050505050565b6001600160a01b03163b151590565b90565b606083156102a357825160000361029c576001600160a01b0385163b61029c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610148565b50816102ad565b6102ad83836102b5565b949350505050565b8151156102c55781518083602001fd5b8060405162461bcd60e51b8152600401610148919061040b565b634e487b7160e01b600052604160045260246000fd5b60005b838110156103105781810151838201526020016102f8565b838111156100645750506000910152565b6000806040838503121561033457600080fd5b82516001600160a01b038116811461034b57600080fd5b60208401519092506001600160401b038082111561036857600080fd5b818501915085601f83011261037c57600080fd5b81518181111561038e5761038e6102df565b604051601f8201601f19908116603f011681019083821181831017156103b6576103b66102df565b816040528281528860208487010111156103cf57600080fd5b6103e08360208301602088016102f5565b80955050505050509250929050565b600082516104018184602087016102f5565b9190910192915050565b602081526000825180602084015261042a8160408501602087016102f5565b601f01601f19169190910160400192915050565b61034d8061044d6000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610074565b6100b9565b565b606061004e83836040518060600160405280602781526020016102f1602791396100dd565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b90565b60006100b47f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b3660008037600080366000845af43d6000803e8080156100d8573d6000f35b3d6000fd5b60606000808573ffffffffffffffffffffffffffffffffffffffff16856040516101079190610283565b600060405180830381855af49150503d8060008114610142576040519150601f19603f3d011682016040523d82523d6000602084013e610147565b606091505b509150915061015886838387610162565b9695505050505050565b606083156101fd5782516000036101f65773ffffffffffffffffffffffffffffffffffffffff85163b6101f6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064015b60405180910390fd5b5081610207565b610207838361020f565b949350505050565b81511561021f5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ed919061029f565b60005b8381101561026e578181015183820152602001610256565b8381111561027d576000848401525b50505050565b60008251610295818460208701610253565b9190910192915050565b60208152600082518060208401526102be816040850160208701610253565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212201cd78ab6a31213989661cff2d7d05fc9b9c38b1a848e8249e2e398659a9eb7e364736f6c634300080f0033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122046ab3381fbf16af9d8aafb79a5aac258846369a7f1aaa7efc9c6a69415e3ddcf64736f6c634300080f003360c0604052306080523480156200001557600080fd5b50604051620025dc380380620025dc833981016040819052620000389162000118565b6001600160a01b03811660a0526200004f62000056565b506200014a565b600054610100900460ff1615620000c35760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff908116101562000116576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6000602082840312156200012b57600080fd5b81516001600160a01b03811681146200014357600080fd5b9392505050565b60805160a05161241f620001bd6000396000818161032f015281816108810152818161092801528181610d4c01528181610f9d01528181610fe40152818161133601526115f501526000818161066b0152818161071b015281816109ec01528181610a9c0152610be5015261241f6000f3fe60806040526004361061012c5760003560e01c806352d1902d116100a5578063bc197c8111610074578063c4d66de811610059578063c4d66de8146103d0578063d087d288146103f0578063f23a6e611461040557600080fd5b8063bc197c8114610373578063c399ec88146103bb57600080fd5b806352d1902d146102b35780638da5cb5b146102c8578063b0d691fe14610320578063b61d27f61461035357600080fd5b80633659cfe6116100fc5780634a58db19116100e15780634a58db19146102785780634d44560d146102805780634f1ef286146102a057600080fd5b80633659cfe61461022a5780633a871cdd1461024a57600080fd5b806223de291461013857806301ffc9a71461015f578063150b7a021461019457806318dfb3c71461020a57600080fd5b3661013357005b600080fd5b34801561014457600080fd5b5061015d610153366004611cbf565b5050505050505050565b005b34801561016b57600080fd5b5061017f61017a366004611d70565b61044b565b60405190151581526020015b60405180910390f35b3480156101a057600080fd5b506101d96101af366004611db2565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200161018b565b34801561021657600080fd5b5061015d610225366004611e6a565b610530565b34801561023657600080fd5b5061015d610245366004611ed6565b610654565b34801561025657600080fd5b5061026a610265366004611ef3565b610859565b60405190815260200161018b565b61015d61087f565b34801561028c57600080fd5b5061015d61029b366004611f47565b61091e565b61015d6102ae366004611fa2565b6109d5565b3480156102bf57600080fd5b5061026a610bcb565b3480156102d457600080fd5b506000546102fb9062010000900473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161018b565b34801561032c57600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006102fb565b34801561035f57600080fd5b5061015d61036e366004612084565b610cb7565b34801561037f57600080fd5b506101d961038e3660046120d4565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b3480156103c757600080fd5b5061026a610d06565b3480156103dc57600080fd5b5061015d6103eb366004611ed6565b610dbd565b3480156103fc57600080fd5b5061026a610f50565b34801561041157600080fd5b506101d9610420366004612172565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a020000000000000000000000000000000000000000000000000000000014806104de57507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b8061052a57507fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b610538610fcc565b8281146105a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b60005b8381101561064d5761063b8585838181106105c6576105c66121ee565b90506020020160208101906105db9190611ed6565b60008585858181106105ef576105ef6121ee565b9050602002810190610601919061221d565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061109592505050565b8061064581612282565b9150506105a9565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003610719576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c0000000000000000000000000000000000000000606482015260840161059d565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661078e7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610831576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f78790000000000000000000000000000000000000000606482015260840161059d565b61083a81611112565b604080516000808252602082019092526108569183919061111a565b50565b600061086361131e565b61086d84846113bd565b9050610878826114a3565b9392505050565b7f00000000000000000000000000000000000000000000000000000000000000006040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff919091169063b760faf99034906024016000604051808303818588803b15801561090a57600080fd5b505af115801561064d573d6000803e3d6000fd5b61092661150e565b7f00000000000000000000000000000000000000000000000000000000000000006040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b1580156109b957600080fd5b505af11580156109cd573d6000803e3d6000fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003610a9a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c0000000000000000000000000000000000000000606482015260840161059d565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610b0f7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610bb2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f78790000000000000000000000000000000000000000606482015260840161059d565b610bbb82611112565b610bc78282600161111a565b5050565b60003073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610c92576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c0000000000000000606482015260840161059d565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b610cbf610fcc565b610d00848484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061109592505050565b50505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a08231906024015b602060405180830381865afa158015610d94573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db891906122e1565b905090565b600054610100900460ff1615808015610ddd5750600054600160ff909116105b80610df75750303b158015610df7575060005460ff166001145b610e83576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840161059d565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558015610ee157600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b610eea8261159f565b8015610bc757600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b6040517f35567e1a0000000000000000000000000000000000000000000000000000000081523060048201526000602482018190529073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906335567e1a90604401610d77565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016148061102d575060005462010000900473ffffffffffffffffffffffffffffffffffffffff1633145b611093576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e74604482015260640161059d565b565b6000808473ffffffffffffffffffffffffffffffffffffffff1684846040516110be9190612326565b60006040518083038185875af1925050503d80600081146110fb576040519150601f19603f3d011682016040523d82523d6000602084013e611100565b606091505b50915091508161064d57805160208201fd5b61085661150e565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156111525761114d8361163e565b505050565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156111d7575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526111d4918101906122e1565b60015b611263576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f742055555053000000000000000000000000000000000000606482015260840161059d565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114611312576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c65555549440000000000000000000000000000000000000000000000606482015260840161059d565b5061114d838383611748565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614611093576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e7400000000604482015260640161059d565b600080611417836040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b905061146761142a61014086018661221d565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250859392505061176d9050565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff90811691161461149957600191505061052a565b5060009392505050565b80156108565760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d806000811461064d576040519150601f19603f3d011682016040523d82523d6000602084013e61064d565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff1633148061153957503330145b611093576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e657200000000000000000000000000000000000000000000604482015260640161059d565b600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff166201000073ffffffffffffffffffffffffffffffffffffffff8481168202929092178084556040519190048216927f0000000000000000000000000000000000000000000000000000000000000000909216917f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de91a350565b73ffffffffffffffffffffffffffffffffffffffff81163b6116e2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e747261637400000000000000000000000000000000000000606482015260840161059d565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b61175183611791565b60008251118061175e5750805b1561114d57610d0083836117de565b600080600061177c8585611803565b9150915061178981611848565b509392505050565b61179a8161163e565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606061087883836040518060600160405280602781526020016123c3602791396119fb565b60008082516041036118395760208301516040840151606085015160001a61182d87828585611a80565b94509450505050611841565b506000905060025b9250929050565b600081600481111561185c5761185c612342565b036118645750565b600181600481111561187857611878612342565b036118df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161059d565b60028160048111156118f3576118f3612342565b0361195a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161059d565b600381600481111561196e5761196e612342565b03610856576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f7565000000000000000000000000000000000000000000000000000000000000606482015260840161059d565b60606000808573ffffffffffffffffffffffffffffffffffffffff1685604051611a259190612326565b600060405180830381855af49150503d8060008114611a60576040519150601f19603f3d011682016040523d82523d6000602084013e611a65565b606091505b5091509150611a7686838387611b6f565b9695505050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611ab75750600090506003611b66565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611b0b573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116611b5f57600060019250925050611b66565b9150600090505b94509492505050565b60608315611c05578251600003611bfe5773ffffffffffffffffffffffffffffffffffffffff85163b611bfe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161059d565b5081611c0f565b611c0f8383611c17565b949350505050565b815115611c275781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059d9190612371565b73ffffffffffffffffffffffffffffffffffffffff8116811461085657600080fd5b60008083601f840112611c8f57600080fd5b50813567ffffffffffffffff811115611ca757600080fd5b60208301915083602082850101111561184157600080fd5b60008060008060008060008060c0898b031215611cdb57600080fd5b8835611ce681611c5b565b97506020890135611cf681611c5b565b96506040890135611d0681611c5b565b955060608901359450608089013567ffffffffffffffff80821115611d2a57600080fd5b611d368c838d01611c7d565b909650945060a08b0135915080821115611d4f57600080fd5b50611d5c8b828c01611c7d565b999c989b5096995094979396929594505050565b600060208284031215611d8257600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461087857600080fd5b600080600080600060808688031215611dca57600080fd5b8535611dd581611c5b565b94506020860135611de581611c5b565b935060408601359250606086013567ffffffffffffffff811115611e0857600080fd5b611e1488828901611c7d565b969995985093965092949392505050565b60008083601f840112611e3757600080fd5b50813567ffffffffffffffff811115611e4f57600080fd5b6020830191508360208260051b850101111561184157600080fd5b60008060008060408587031215611e8057600080fd5b843567ffffffffffffffff80821115611e9857600080fd5b611ea488838901611e25565b90965094506020870135915080821115611ebd57600080fd5b50611eca87828801611e25565b95989497509550505050565b600060208284031215611ee857600080fd5b813561087881611c5b565b600080600060608486031215611f0857600080fd5b833567ffffffffffffffff811115611f1f57600080fd5b84016101608187031215611f3257600080fd5b95602085013595506040909401359392505050565b60008060408385031215611f5a57600080fd5b8235611f6581611c5b565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060408385031215611fb557600080fd5b8235611fc081611c5b565b9150602083013567ffffffffffffffff80821115611fdd57600080fd5b818501915085601f830112611ff157600080fd5b81358181111561200357612003611f73565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561204957612049611f73565b8160405282815288602084870101111561206257600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b6000806000806060858703121561209a57600080fd5b84356120a581611c5b565b935060208501359250604085013567ffffffffffffffff8111156120c857600080fd5b611eca87828801611c7d565b60008060008060008060008060a0898b0312156120f057600080fd5b88356120fb81611c5b565b9750602089013561210b81611c5b565b9650604089013567ffffffffffffffff8082111561212857600080fd5b6121348c838d01611e25565b909850965060608b013591508082111561214d57600080fd5b6121598c838d01611e25565b909650945060808b0135915080821115611d4f57600080fd5b60008060008060008060a0878903121561218b57600080fd5b863561219681611c5b565b955060208701356121a681611c5b565b94506040870135935060608701359250608087013567ffffffffffffffff8111156121d057600080fd5b6121dc89828a01611c7d565b979a9699509497509295939492505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261225257600080fd5b83018035915067ffffffffffffffff82111561226d57600080fd5b60200191503681900382131561184157600080fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036122da577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b6000602082840312156122f357600080fd5b5051919050565b60005b838110156123155781810151838201526020016122fd565b83811115610d005750506000910152565b600082516123388184602087016122fa565b9190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60208152600082518060208401526123908160408501602087016122fa565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220670961b029bcbfe084405f383741e66079f9792a338bbc8fad1c74e9cd973b8a64736f6c634300080f0033";

type SimpleAccountFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleAccountFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleAccountFactory__factory extends ContractFactory {
  constructor(...args: SimpleAccountFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimpleAccountFactory> {
    return super.deploy(
      _entryPoint,
      overrides || {}
    ) as Promise<SimpleAccountFactory>;
  }
  override getDeployTransaction(
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_entryPoint, overrides || {});
  }
  override attach(address: string): SimpleAccountFactory {
    return super.attach(address) as SimpleAccountFactory;
  }
  override connect(signer: Signer): SimpleAccountFactory__factory {
    return super.connect(signer) as SimpleAccountFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleAccountFactoryInterface {
    return new utils.Interface(_abi) as SimpleAccountFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleAccountFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SimpleAccountFactory;
  }
}
