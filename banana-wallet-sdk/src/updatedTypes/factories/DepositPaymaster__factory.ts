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
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162001fa938038062001fa98339810160408190526200003491620000bb565b8062000040336200006b565b6001600160a01b031660805262000064336000908152600360205260409020439055565b50620000ed565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215620000ce57600080fd5b81516001600160a01b0381168114620000e657600080fd5b9392505050565b608051611e6f6200013a600039600081816103b30152818161052b015281816105f50152818161089001528181610957015281816109e701528181610bb90152610ed70152611e6f6000f3fe6080604052600436106101755760003560e01c8063addd5099116100cb578063c399ec881161007f578063d0e30db011610059578063d0e30db014610499578063f2fde38b146104a1578063f465c77e146104c157600080fd5b8063c399ec8814610442578063cc9c837c14610457578063cd8f80c21461047757600080fd5b8063bb9fe6bf116100b0578063bb9fe6bf146103d5578063c23a5cea146103ea578063c23f001f1461040a57600080fd5b8063addd50991461035e578063b0d691fe146103a157600080fd5b80635476bd721161012d5780638da5cb5b116101075780638da5cb5b146102ce5780639ed0fb681461031a578063a9a234091461033e57600080fd5b80635476bd7214610283578063715018a6146102a3578063796d4371146102b857600080fd5b8063382edd9e1161015e578063382edd9e146101af578063493b0170146101cf5780634a6f84cf1461024857600080fd5b80630396cb601461017a578063205c28781461018f575b600080fd5b61018d610188366004611915565b6104ef565b005b34801561019b57600080fd5b5061018d6101aa36600461195d565b6105a1565b3480156101bb57600080fd5b5061018d6101ca366004611989565b610639565b3480156101db57600080fd5b5061022e6101ea3660046119ca565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260026020908152604080832093909416825291825282812054600390925291909120549091565b604080519283526020830191909152015b60405180910390f35b34801561025457600080fd5b50610275610263366004611a03565b60036020526000908152604090205481565b60405190815260200161023f565b34801561028f57600080fd5b5061018d61029e3660046119ca565b61076e565b3480156102af57600080fd5b5061018d610858565b3480156102c457600080fd5b506102756188b881565b3480156102da57600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161023f565b34801561032657600080fd5b5061018d336000908152600360205260409020439055565b34801561034a57600080fd5b5061018d610359366004611a20565b61086c565b34801561036a57600080fd5b506102f5610379366004611a03565b60016020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b3480156103ad57600080fd5b506102f57f000000000000000000000000000000000000000000000000000000000000000081565b3480156103e157600080fd5b5061018d610886565b3480156103f657600080fd5b5061018d610405366004611a03565b61090a565b34801561041657600080fd5b506102756104253660046119ca565b600260209081526000928352604080842090915290825290205481565b34801561044e57600080fd5b506102756109b6565b34801561046357600080fd5b5061018d610472366004611989565b610a6c565b34801561048357600080fd5b5061018d33600090815260036020526040812055565b61018d610b8b565b3480156104ad57600080fd5b5061018d6104bc366004611a03565b610c13565b3480156104cd57600080fd5b506104e16104dc366004611aaf565b610cca565b60405161023f929190611b79565b6104f7610ced565b6040517f0396cb6000000000000000000000000000000000000000000000000000000000815263ffffffff821660048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690630396cb609034906024016000604051808303818588803b15801561058557600080fd5b505af1158015610599573d6000803e3d6000fd5b505050505050565b6105a9610ced565b6040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063205c287890604401600060405180830381600087803b15801561058557600080fd5b61065b73ffffffffffffffffffffffffffffffffffffffff8416333084610d6e565b73ffffffffffffffffffffffffffffffffffffffff838116600090815260016020526040902054166106ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f756e737570706f7274656420746f6b656e00000000000000000000000000000060448201526064015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600090815260026020908152604080832093861683529290529081208054839290610732908490611bca565b909155505073ffffffffffffffffffffffffffffffffffffffff821633036107695761076933600090815260036020526040812055565b505050565b610776610ced565b73ffffffffffffffffffffffffffffffffffffffff8281166000908152600160205260409020541615610805576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f546f6b656e20616c72656164792073657400000000000000000000000000000060448201526064016106e5565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001691909216179055565b610860610ced565b61086a6000610e4a565b565b610874610ebf565b61088084848484610f5e565b50505050565b61088e610ced565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156108f657600080fd5b505af1158015610880573d6000803e3d6000fd5b610912610ced565b6040517fc23a5cea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063c23a5cea90602401600060405180830381600087803b15801561099b57600080fd5b505af11580156109af573d6000803e3d6000fd5b5050505050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610a43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a679190611be2565b905090565b3360009081526003602052604090205415801590610a9857503360009081526003602052604090205443115b610b24576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4465706f7369745061796d61737465723a206d75737420756e6c6f636b546f6b60448201527f656e4465706f736974000000000000000000000000000000000000000000000060648201526084016106e5565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260026020908152604080832033845290915281208054839290610b64908490611bfb565b90915550610769905073ffffffffffffffffffffffffffffffffffffffff841683836110d6565b6040517fb760faf90000000000000000000000000000000000000000000000000000000081523060048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063b760faf99034906024016000604051808303818588803b15801561099b57600080fd5b610c1b610ced565b73ffffffffffffffffffffffffffffffffffffffff8116610cbe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016106e5565b610cc781610e4a565b50565b60606000610cd6610ebf565b610ce185858561112c565b91509150935093915050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461086a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106e5565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526108809085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611475565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461086a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f53656e646572206e6f7420456e747279506f696e74000000000000000000000060448201526064016106e5565b600080808080610f7087890189611c12565b9450945094509450945060008183856188b8610f8c9190611c63565b610f96908a611bca565b610fa09190611c63565b610faa9190611ca0565b905060028a6002811115610fc057610fc0611cdb565b14610fec57610fe773ffffffffffffffffffffffffffffffffffffffff8616873084610d6e565b611036565b73ffffffffffffffffffffffffffffffffffffffff8086166000908152600260209081526040808320938a1683529290529081208054839290611030908490611bfb565b90915550505b73ffffffffffffffffffffffffffffffffffffffff85166000908152600260205260408120829161107c60005473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110c59190611bca565b909155505050505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107699084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401610dc8565b606060006188b88560a00135116111c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f4465706f7369745061796d61737465723a2067617320746f6f206c6f7720666f60448201527f7220706f73744f7000000000000000000000000000000000000000000000000060648201526084016106e5565b3660006111d6610120880188611d0a565b90925090506028811461126b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603560248201527f4465706f7369745061796d61737465723a207061796d6173746572416e64446160448201527f7461206d757374207370656369667920746f6b656e000000000000000000000060648201526084016106e5565b600061127a8260148186611d76565b61128391611da0565b60601c9050873560006112968389611581565b905060006112a38b6116cf565b73ffffffffffffffffffffffffffffffffffffffff841660009081526003602052604090205490915015611358576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4465706f7369745061796d61737465723a206465706f736974206e6f74206c6f60448201527f636b65640000000000000000000000000000000000000000000000000000000060648201526084016106e5565b73ffffffffffffffffffffffffffffffffffffffff80851660009081526002602090815260408083209387168352929052205482111561141a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4465706f7369745061796d61737465723a206465706f73697420746f6f206c6f60448201527f770000000000000000000000000000000000000000000000000000000000000060648201526084016106e5565b6040805173ffffffffffffffffffffffffffffffffffffffff948516602082015294909316848401526060840152608083015260a0808301979097528051808303909701875260c09091019052509295600095509350505050565b60006114d7826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166116f69092919063ffffffff16565b80519091501561076957808060200190518101906114f59190611de8565b610769576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016106e5565b73ffffffffffffffffffffffffffffffffffffffff80831660009081526001602052604081205490911680611638576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f4465706f7369745061796d61737465723a20756e737570706f7274656420746f60448201527f6b656e000000000000000000000000000000000000000000000000000000000060648201526084016106e5565b6040517fd1eca9cf0000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff82169063d1eca9cf90602401602060405180830381865afa1580156116a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116c79190611be2565b949350505050565b600060e08201356101008301358082036116ea575092915050565b6116c782488301611705565b60606116c7848460008561171d565b60008183106117145781611716565b825b9392505050565b6060824710156117af576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016106e5565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516117d89190611e0a565b60006040518083038185875af1925050503d8060008114611815576040519150601f19603f3d011682016040523d82523d6000602084013e61181a565b606091505b509150915061182b87838387611836565b979650505050505050565b606083156118cc5782516000036118c55773ffffffffffffffffffffffffffffffffffffffff85163b6118c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106e5565b50816116c7565b6116c783838151156118e15781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e59190611e26565b60006020828403121561192757600080fd5b813563ffffffff8116811461171657600080fd5b73ffffffffffffffffffffffffffffffffffffffff81168114610cc757600080fd5b6000806040838503121561197057600080fd5b823561197b8161193b565b946020939093013593505050565b60008060006060848603121561199e57600080fd5b83356119a98161193b565b925060208401356119b98161193b565b929592945050506040919091013590565b600080604083850312156119dd57600080fd5b82356119e88161193b565b915060208301356119f88161193b565b809150509250929050565b600060208284031215611a1557600080fd5b81356117168161193b565b60008060008060608587031215611a3657600080fd5b843560038110611a4557600080fd5b9350602085013567ffffffffffffffff80821115611a6257600080fd5b818701915087601f830112611a7657600080fd5b813581811115611a8557600080fd5b886020828501011115611a9757600080fd5b95986020929092019750949560400135945092505050565b600080600060608486031215611ac457600080fd5b833567ffffffffffffffff811115611adb57600080fd5b84016101608187031215611aee57600080fd5b95602085013595506040909401359392505050565b60005b83811015611b1e578181015183820152602001611b06565b838111156108805750506000910152565b60008151808452611b47816020860160208601611b03565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b604081526000611b8c6040830185611b2f565b90508260208301529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115611bdd57611bdd611b9b565b500190565b600060208284031215611bf457600080fd5b5051919050565b600082821015611c0d57611c0d611b9b565b500390565b600080600080600060a08688031215611c2a57600080fd5b8535611c358161193b565b94506020860135611c458161193b565b94979496505050506040830135926060810135926080909101359150565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611c9b57611c9b611b9b565b500290565b600082611cd6577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611d3f57600080fd5b83018035915067ffffffffffffffff821115611d5a57600080fd5b602001915036819003821315611d6f57600080fd5b9250929050565b60008085851115611d8657600080fd5b83861115611d9357600080fd5b5050820193919092039150565b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008135818116916014851015611de05780818660140360031b1b83161692505b505092915050565b600060208284031215611dfa57600080fd5b8151801515811461171657600080fd5b60008251611e1c818460208701611b03565b9190910192915050565b6020815260006117166020830184611b2f56fea2646970667358221220996628f9e2e03c5a101a891288fbd7f60edcc6885030a1c88031eb1902ef6add64736f6c634300080f0033";

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
