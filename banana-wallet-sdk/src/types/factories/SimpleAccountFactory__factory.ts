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
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200471938038062004719833981810160405281019062000037919062000136565b806040516200004690620000aa565b620000529190620001d3565b604051809103906000f0801580156200006f573d6000803e3d6000fd5b5073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505050620001f0565b6130f3806200162683390190565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000ea82620000bd565b9050919050565b6000620000fe82620000dd565b9050919050565b6200011081620000f1565b81146200011c57600080fd5b50565b600081519050620001308162000105565b92915050565b6000602082840312156200014f576200014e620000b8565b5b60006200015f848285016200011f565b91505092915050565b6000819050919050565b6000620001936200018d6200018784620000bd565b62000168565b620000bd565b9050919050565b6000620001a78262000172565b9050919050565b6000620001bb826200019a565b9050919050565b620001cd81620001ae565b82525050565b6000602082019050620001ea6000830184620001c2565b92915050565b60805161140d620002196000396000818160db015281816101450152610236015261140d6000f3fe60806040523480156200001157600080fd5b5060043610620000465760003560e01c806311464fbe146200004b5780635fbfb9cf146200006d5780638cb84e1814620000a3575b600080fd5b62000055620000d9565b604051620000649190620003fc565b60405180910390f35b6200008b60048036038101906200008591906200049e565b620000fd565b6040516200009a9190620003fc565b60405180910390f35b620000c16004803603810190620000bb91906200049e565b62000204565b604051620000d09190620004f6565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000081565b6000806200010c848462000204565b905060008173ffffffffffffffffffffffffffffffffffffffff163b905060008111156200013f578192505050620001fe565b8360001b7f000000000000000000000000000000000000000000000000000000000000000086604051602401620001779190620004f6565b60405160208183030381529060405263c4d66de860e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051620001ca9062000363565b620001d7929190620005ad565b8190604051809103906000f5905080158015620001f8573d6000803e3d6000fd5b50925050505b92915050565b6000620002fe8260001b60405180602001620002209062000363565b6020820181038252601f19601f820116604052507f000000000000000000000000000000000000000000000000000000000000000086604051602401620002689190620004f6565b60405160208183030381529060405263c4d66de860e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051602001620002c0929190620005ad565b604051602081830303815290604052604051602001620002e292919062000623565b6040516020818303038152906040528051906020012062000306565b905092915050565b6000620003158383306200031d565b905092915050565b60008060ff60f81b8386866040516020016200033d94939291906200071b565b6040516020818303038152906040528051906020012090508060001c9150509392505050565b610c66806200077283390190565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000620003bc620003b6620003b08462000371565b62000391565b62000371565b9050919050565b6000620003d0826200039b565b9050919050565b6000620003e482620003c3565b9050919050565b620003f681620003d7565b82525050565b6000602082019050620004136000830184620003eb565b92915050565b600080fd5b60006200042b8262000371565b9050919050565b6200043d816200041e565b81146200044957600080fd5b50565b6000813590506200045d8162000432565b92915050565b6000819050919050565b620004788162000463565b81146200048457600080fd5b50565b60008135905062000498816200046d565b92915050565b60008060408385031215620004b857620004b762000419565b5b6000620004c8858286016200044c565b9250506020620004db8582860162000487565b9150509250929050565b620004f0816200041e565b82525050565b60006020820190506200050d6000830184620004e5565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156200054f57808201518184015260208101905062000532565b60008484015250505050565b6000601f19601f8301169050919050565b6000620005798262000513565b6200058581856200051e565b9350620005978185602086016200052f565b620005a2816200055b565b840191505092915050565b6000604082019050620005c46000830185620004e5565b8181036020830152620005d881846200056c565b90509392505050565b600081905092915050565b6000620005f98262000513565b620006058185620005e1565b9350620006178185602086016200052f565b80840191505092915050565b6000620006318285620005ec565b91506200063f8284620005ec565b91508190509392505050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b6200069662000690826200064b565b62000677565b82525050565b60008160601b9050919050565b6000620006b6826200069c565b9050919050565b6000620006ca82620006a9565b9050919050565b620006e6620006e0826200041e565b620006bd565b82525050565b6000819050919050565b6000819050919050565b620007156200070f82620006ec565b620006f6565b82525050565b600062000729828762000681565b6001820191506200073b8286620006d1565b6014820191506200074d828562000700565b6020820191506200075f828462000700565b6020820191508190509594505050505056fe608060405260405162000c6638038062000c66833981810160405281019062000029919062000560565b6200003d828260006200004560201b60201c565b5050620007dd565b62000056836200008860201b60201c565b600082511180620000645750805b156200008357620000818383620000df60201b620000371760201c565b505b505050565b62000099816200011560201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b60606200010d838360405180606001604052806027815260200162000c3f60279139620001eb60201b60201c565b905092915050565b6200012b81620002cf60201b620000641760201c565b6200016d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000164906200064d565b60405180910390fd5b80620001a77f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b620002f260201b620000871760201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6060620001fe84620002cf60201b60201c565b62000240576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200023790620006e5565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff16856040516200026a919062000754565b600060405180830381855af49150503d8060008114620002a7576040519150601f19603f3d011682016040523d82523d6000602084013e620002ac565b606091505b5091509150620002c4828286620002fc60201b60201c565b925050509392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000819050919050565b606083156200030e5782905062000361565b600083511115620003225782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003589190620007b9565b60405180910390fd5b9392505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003a9826200037c565b9050919050565b620003bb816200039c565b8114620003c757600080fd5b50565b600081519050620003db81620003b0565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200043682620003eb565b810181811067ffffffffffffffff82111715620004585762000457620003fc565b5b80604052505050565b60006200046d62000368565b90506200047b82826200042b565b919050565b600067ffffffffffffffff8211156200049e576200049d620003fc565b5b620004a982620003eb565b9050602081019050919050565b60005b83811015620004d6578082015181840152602081019050620004b9565b60008484015250505050565b6000620004f9620004f38462000480565b62000461565b905082815260208101848484011115620005185762000517620003e6565b5b62000525848285620004b6565b509392505050565b600082601f830112620005455762000544620003e1565b5b815162000557848260208601620004e2565b91505092915050565b600080604083850312156200057a576200057962000372565b5b60006200058a85828601620003ca565b925050602083015167ffffffffffffffff811115620005ae57620005ad62000377565b5b620005bc858286016200052d565b9150509250929050565b600082825260208201905092915050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b600062000635602d83620005c6565b91506200064282620005d7565b604082019050919050565b60006020820190508181036000830152620006688162000626565b9050919050565b7f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60008201527f6e74726163740000000000000000000000000000000000000000000000000000602082015250565b6000620006cd602683620005c6565b9150620006da826200066f565b604082019050919050565b600060208201905081810360008301526200070081620006be565b9050919050565b600081519050919050565b600081905092915050565b60006200072a8262000707565b62000736818562000712565b935062000748818560208601620004b6565b80840191505092915050565b60006200076282846200071d565b915081905092915050565b600081519050919050565b600062000785826200076d565b620007918185620005c6565b9350620007a3818560208601620004b6565b620007ae81620003eb565b840191505092915050565b60006020820190508181036000830152620007d5818462000778565b905092915050565b61045280620007ed6000396000f3fe6080604052366100135761001161001d565b005b61001b61001d565b005b610025610091565b610035610030610093565b6100a2565b565b606061005c83836040518060600160405280602781526020016103f6602791396100c8565b905092915050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000819050919050565b565b600061009d610195565b905090565b3660008037600080366000845af43d6000803e80600081146100c3573d6000f35b3d6000fd5b60606100d384610064565b610112576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610109906102d6565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff168560405161013a9190610367565b600060405180830381855af49150503d8060008114610175576040519150601f19603f3d011682016040523d82523d6000602084013e61017a565b606091505b509150915061018a8282866101ec565b925050509392505050565b60006101c37f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b610087565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606083156101fc5782905061024c565b60008351111561020f5782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024391906103d3565b60405180910390fd5b9392505050565b600082825260208201905092915050565b7f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60008201527f6e74726163740000000000000000000000000000000000000000000000000000602082015250565b60006102c0602683610253565b91506102cb82610264565b604082019050919050565b600060208201905081810360008301526102ef816102b3565b9050919050565b600081519050919050565b600081905092915050565b60005b8381101561032a57808201518184015260208101905061030f565b60008484015250505050565b6000610341826102f6565b61034b8185610301565b935061035b81856020860161030c565b80840191505092915050565b60006103738284610336565b915081905092915050565b600081519050919050565b6000601f19601f8301169050919050565b60006103a58261037e565b6103af8185610253565b93506103bf81856020860161030c565b6103c881610389565b840191505092915050565b600060208201905081810360008301526103ed818461039a565b90509291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220a817cf5c0402208b66e1636210b9b4dbe1cc9a177ab6a9f445cfd5c1928c318d64736f6c63430008110033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220a736e25c93550c07a5a706b59662cd110e078c53f3677fb8822f452541a5272c64736f6c6343000811003360c06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff168152503480156200004457600080fd5b50604051620030f3380380620030f383398181016040528101906200006a9190620001fa565b8073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1681525050620000ae620000b560201b60201c565b5062000310565b600060019054906101000a900460ff161562000108576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000ff90620002b3565b60405180910390fd5b60ff801660008054906101000a900460ff1660ff1610156200017a5760ff6000806101000a81548160ff021916908360ff1602179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860ff604051620001719190620002f3565b60405180910390a15b565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001ae8262000181565b9050919050565b6000620001c282620001a1565b9050919050565b620001d481620001b5565b8114620001e057600080fd5b50565b600081519050620001f481620001c9565b92915050565b6000602082840312156200021357620002126200017c565b5b60006200022384828501620001e3565b91505092915050565b600082825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320696e69746960008201527f616c697a696e6700000000000000000000000000000000000000000000000000602082015250565b60006200029b6027836200022c565b9150620002a8826200023d565b604082019050919050565b60006020820190508181036000830152620002ce816200028c565b9050919050565b600060ff82169050919050565b620002ed81620002d5565b82525050565b60006020820190506200030a6000830184620002e2565b92915050565b60805160a051612d9a620003596000396000818161090001526112720152600081816103ed0152818161047b015281816106b30152818161074101526107f10152612d9a6000f3fe6080604052600436106100c65760003560e01c806352d1902d1161007f578063b0d691fe11610059578063b0d691fe14610231578063b61d27f61461025c578063c399ec8814610285578063c4d66de8146102b0576100cd565b806352d1902d146101b05780638da5cb5b146101db578063affed0e014610206576100cd565b806318dfb3c7146100d25780633659cfe6146100fb5780633a871cdd146101245780634a58db19146101615780634d44560d1461016b5780634f1ef28614610194576100cd565b366100cd57005b600080fd5b3480156100de57600080fd5b506100f960048036038101906100f491906119ce565b6102d9565b005b34801561010757600080fd5b50610122600480360381019061011d9190611aad565b6103eb565b005b34801561013057600080fd5b5061014b60048036038101906101469190611b6b565b610573565b6040516101589190611be9565b60405180910390f35b6101696105bc565b005b34801561017757600080fd5b50610192600480360381019061018d9190611c42565b610631565b005b6101ae60048036038101906101a99190611dc3565b6106b1565b005b3480156101bc57600080fd5b506101c56107ed565b6040516101d29190611e2e565b60405180910390f35b3480156101e757600080fd5b506101f06108a6565b6040516101fd9190611e58565b60405180910390f35b34801561021257600080fd5b5061021b6108cc565b6040516102289190611be9565b60405180910390f35b34801561023d57600080fd5b506102466108fc565b6040516102539190611ed2565b60405180910390f35b34801561026857600080fd5b50610283600480360381019061027e9190611f43565b610924565b005b34801561029157600080fd5b5061029a610981565b6040516102a79190611be9565b60405180910390f35b3480156102bc57600080fd5b506102d760048036038101906102d29190611aad565b610a09565b005b6102e1610b49565b818190508484905014610329576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032090612014565b60405180910390fd5b60005b848490508110156103e4576103d185858381811061034d5761034c612034565b5b90506020020160208101906103629190611aad565b600085858581811061037757610376612034565b5b90506020028101906103899190612072565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610c18565b80806103dc90612104565b91505061032c565b5050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1603610479576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610470906121be565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166104b8610c9c565b73ffffffffffffffffffffffffffffffffffffffff161461050e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050590612250565b60405180910390fd5b61051781610cf3565b61057081600067ffffffffffffffff81111561053657610535611c98565b5b6040519080825280601f01601f1916602001820160405280156105685781602001600182028036833780820191505090505b506000610cfe565b50565b600061057d610e6c565b6105878484610ee3565b9050600084806040019061059b9190612072565b9050036105ac576105ab84610fc1565b5b6105b58261106f565b9392505050565b6105c46108fc565b73ffffffffffffffffffffffffffffffffffffffff1663b760faf934306040518363ffffffff1660e01b81526004016105fd9190611e58565b6000604051808303818588803b15801561061657600080fd5b505af115801561062a573d6000803e3d6000fd5b5050505050565b61063961110b565b6106416108fc565b73ffffffffffffffffffffffffffffffffffffffff1663205c287883836040518363ffffffff1660e01b815260040161067b92919061227f565b600060405180830381600087803b15801561069557600080fd5b505af11580156106a9573d6000803e3d6000fd5b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff160361073f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610736906121be565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661077e610c9c565b73ffffffffffffffffffffffffffffffffffffffff16146107d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107cb90612250565b60405180910390fd5b6107dd82610cf3565b6107e982826001610cfe565b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161461087d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108749061231a565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b6001600c9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160009054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff16905090565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b61092c610b49565b61097b848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610c18565b50505050565b600061098b6108fc565b73ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016109c39190611e58565b602060405180830381865afa1580156109e0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a04919061234f565b905090565b60008060019054906101000a900460ff16159050808015610a3a5750600160008054906101000a900460ff1660ff16105b80610a675750610a49306111d3565b158015610a665750600160008054906101000a900460ff1660ff16145b5b610aa6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9d906123ee565b60405180910390fd5b60016000806101000a81548160ff021916908360ff1602179055508015610ae3576001600060016101000a81548160ff0219169083151502179055505b610aec826111f6565b8015610b455760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024986001604051610b3c9190612456565b60405180910390a15b5050565b610b516108fc565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610bd757506001600c9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610c16576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0d906124bd565b60405180910390fd5b565b6000808473ffffffffffffffffffffffffffffffffffffffff168484604051610c41919061254e565b60006040518083038185875af1925050503d8060008114610c7e576040519150601f19603f3d011682016040523d82523d6000602084013e610c83565b606091505b509150915081610c9557805160208201fd5b5050505050565b6000610cca7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b6112d6565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610cfb61110b565b50565b610d2a7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd914360001b6112e0565b60000160009054906101000a900460ff1615610d4e57610d49836112ea565b610e67565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610db657506040513d601f19601f82011682018060405250810190610db3919061257a565b60015b610df5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dec90612619565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b8114610e5a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e51906126ab565b60405180910390fd5b50610e668383836113a3565b5b505050565b610e746108fc565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ee1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ed890612717565b60405180910390fd5b565b600080610eef836113cf565b9050610f5784806101400190610f059190612072565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050826113ff90919063ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff166001600c9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610fb5576001915050610fbb565b60009150505b92915050565b80602001356001600081819054906101000a90046bffffffffffffffffffffffff1680929190610ff09061274f565b91906101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055506bffffffffffffffffffffffff161461106c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611063906127cf565b60405180910390fd5b50565b600081146111085760003373ffffffffffffffffffffffffffffffffffffffff16827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff906040516110bf90612815565b600060405180830381858888f193505050503d80600081146110fd576040519150601f19603f3d011682016040523d82523d6000602084013e611102565b606091505b50509050505b50565b6001600c9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061119257503073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b6111d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111c890612876565b60405180910390fd5b565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b806001600c6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600c9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff167f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de60405160405180910390a350565b6000819050919050565b6000819050919050565b6112f3816111d3565b611332576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161132990612908565b60405180910390fd5b8061135f7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b6112d6565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6113ac83611426565b6000825111806113b95750805b156113ca576113c88383611475565b505b505050565b6000816040516020016113e291906129a0565b604051602081830303815290604052805190602001209050919050565b600080600061140e85856114a2565b9150915061141b816114f3565b819250505092915050565b61142f816112ea565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b606061149a8383604051806060016040528060278152602001612d3e602791396116bf565b905092915050565b60008060418351036114e35760008060006020860151925060408601519150606086015160001a90506114d78782858561178c565b945094505050506114ec565b60006002915091505b9250929050565b60006004811115611507576115066129c6565b5b81600481111561151a576115196129c6565b5b03156116bc5760016004811115611534576115336129c6565b5b816004811115611547576115466129c6565b5b03611587576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161157e90612a41565b60405180910390fd5b6002600481111561159b5761159a6129c6565b5b8160048111156115ae576115ad6129c6565b5b036115ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115e590612aad565b60405180910390fd5b60036004811115611602576116016129c6565b5b816004811115611615576116146129c6565b5b03611655576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161164c90612b3f565b60405180910390fd5b600480811115611668576116676129c6565b5b81600481111561167b5761167a6129c6565b5b036116bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116b290612bd1565b60405180910390fd5b5b50565b60606116ca846111d3565b611709576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161170090612c63565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1685604051611731919061254e565b600060405180830381855af49150503d806000811461176c576040519150601f19603f3d011682016040523d82523d6000602084013e611771565b606091505b5091509150611781828286611898565b925050509392505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c11156117c757600060039150915061188f565b601b8560ff16141580156117df5750601c8560ff1614155b156117f157600060049150915061188f565b6000600187878787604051600081526020016040526040516118169493929190612c92565b6020604051602081039080840390855afa158015611838573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036118865760006001925092505061188f565b80600092509250505b94509492505050565b606083156118a8578290506118f8565b6000835111156118bb5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118ef9190612d1b565b60405180910390fd5b9392505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f84011261193857611937611913565b5b8235905067ffffffffffffffff81111561195557611954611918565b5b6020830191508360208202830111156119715761197061191d565b5b9250929050565b60008083601f84011261198e5761198d611913565b5b8235905067ffffffffffffffff8111156119ab576119aa611918565b5b6020830191508360208202830111156119c7576119c661191d565b5b9250929050565b600080600080604085870312156119e8576119e7611909565b5b600085013567ffffffffffffffff811115611a0657611a0561190e565b5b611a1287828801611922565b9450945050602085013567ffffffffffffffff811115611a3557611a3461190e565b5b611a4187828801611978565b925092505092959194509250565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611a7a82611a4f565b9050919050565b611a8a81611a6f565b8114611a9557600080fd5b50565b600081359050611aa781611a81565b92915050565b600060208284031215611ac357611ac2611909565b5b6000611ad184828501611a98565b91505092915050565b600080fd5b60006101608284031215611af657611af5611ada565b5b81905092915050565b6000819050919050565b611b1281611aff565b8114611b1d57600080fd5b50565b600081359050611b2f81611b09565b92915050565b6000819050919050565b611b4881611b35565b8114611b5357600080fd5b50565b600081359050611b6581611b3f565b92915050565b600080600060608486031215611b8457611b83611909565b5b600084013567ffffffffffffffff811115611ba257611ba161190e565b5b611bae86828701611adf565b9350506020611bbf86828701611b20565b9250506040611bd086828701611b56565b9150509250925092565b611be381611b35565b82525050565b6000602082019050611bfe6000830184611bda565b92915050565b6000611c0f82611a4f565b9050919050565b611c1f81611c04565b8114611c2a57600080fd5b50565b600081359050611c3c81611c16565b92915050565b60008060408385031215611c5957611c58611909565b5b6000611c6785828601611c2d565b9250506020611c7885828601611b56565b9150509250929050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611cd082611c87565b810181811067ffffffffffffffff82111715611cef57611cee611c98565b5b80604052505050565b6000611d026118ff565b9050611d0e8282611cc7565b919050565b600067ffffffffffffffff821115611d2e57611d2d611c98565b5b611d3782611c87565b9050602081019050919050565b82818337600083830152505050565b6000611d66611d6184611d13565b611cf8565b905082815260208101848484011115611d8257611d81611c82565b5b611d8d848285611d44565b509392505050565b600082601f830112611daa57611da9611913565b5b8135611dba848260208601611d53565b91505092915050565b60008060408385031215611dda57611dd9611909565b5b6000611de885828601611a98565b925050602083013567ffffffffffffffff811115611e0957611e0861190e565b5b611e1585828601611d95565b9150509250929050565b611e2881611aff565b82525050565b6000602082019050611e436000830184611e1f565b92915050565b611e5281611a6f565b82525050565b6000602082019050611e6d6000830184611e49565b92915050565b6000819050919050565b6000611e98611e93611e8e84611a4f565b611e73565b611a4f565b9050919050565b6000611eaa82611e7d565b9050919050565b6000611ebc82611e9f565b9050919050565b611ecc81611eb1565b82525050565b6000602082019050611ee76000830184611ec3565b92915050565b60008083601f840112611f0357611f02611913565b5b8235905067ffffffffffffffff811115611f2057611f1f611918565b5b602083019150836001820283011115611f3c57611f3b61191d565b5b9250929050565b60008060008060608587031215611f5d57611f5c611909565b5b6000611f6b87828801611a98565b9450506020611f7c87828801611b56565b935050604085013567ffffffffffffffff811115611f9d57611f9c61190e565b5b611fa987828801611eed565b925092505092959194509250565b600082825260208201905092915050565b7f77726f6e67206172726179206c656e6774687300000000000000000000000000600082015250565b6000611ffe601383611fb7565b915061200982611fc8565b602082019050919050565b6000602082019050818103600083015261202d81611ff1565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b6000808335600160200384360303811261208f5761208e612063565b5b80840192508235915067ffffffffffffffff8211156120b1576120b0612068565b5b6020830192506001820236038313156120cd576120cc61206d565b5b509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061210f82611b35565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612141576121406120d5565b5b600182019050919050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f64656c656761746563616c6c0000000000000000000000000000000000000000602082015250565b60006121a8602c83611fb7565b91506121b38261214c565b604082019050919050565b600060208201905081810360008301526121d78161219b565b9050919050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f6163746976652070726f78790000000000000000000000000000000000000000602082015250565b600061223a602c83611fb7565b9150612245826121de565b604082019050919050565b600060208201905081810360008301526122698161222d565b9050919050565b61227981611c04565b82525050565b60006040820190506122946000830185612270565b6122a16020830184611bda565b9392505050565b7f555550535570677261646561626c653a206d757374206e6f742062652063616c60008201527f6c6564207468726f7567682064656c656761746563616c6c0000000000000000602082015250565b6000612304603883611fb7565b915061230f826122a8565b604082019050919050565b60006020820190508181036000830152612333816122f7565b9050919050565b60008151905061234981611b3f565b92915050565b60006020828403121561236557612364611909565b5b60006123738482850161233a565b91505092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b60006123d8602e83611fb7565b91506123e38261237c565b604082019050919050565b60006020820190508181036000830152612407816123cb565b9050919050565b6000819050919050565b600060ff82169050919050565b600061244061243b6124368461240e565b611e73565b612418565b9050919050565b61245081612425565b82525050565b600060208201905061246b6000830184612447565b92915050565b7f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e74600082015250565b60006124a7602083611fb7565b91506124b282612471565b602082019050919050565b600060208201905081810360008301526124d68161249a565b9050919050565b600081519050919050565b600081905092915050565b60005b838110156125115780820151818401526020810190506124f6565b60008484015250505050565b6000612528826124dd565b61253281856124e8565b93506125428185602086016124f3565b80840191505092915050565b600061255a828461251d565b915081905092915050565b60008151905061257481611b09565b92915050565b6000602082840312156125905761258f611909565b5b600061259e84828501612565565b91505092915050565b7f45524331393637557067726164653a206e657720696d706c656d656e7461746960008201527f6f6e206973206e6f742055555053000000000000000000000000000000000000602082015250565b6000612603602e83611fb7565b915061260e826125a7565b604082019050919050565b60006020820190508181036000830152612632816125f6565b9050919050565b7f45524331393637557067726164653a20756e737570706f727465642070726f7860008201527f6961626c65555549440000000000000000000000000000000000000000000000602082015250565b6000612695602983611fb7565b91506126a082612639565b604082019050919050565b600060208201905081810360008301526126c481612688565b9050919050565b7f6163636f756e743a206e6f742066726f6d20456e747279506f696e7400000000600082015250565b6000612701601c83611fb7565b915061270c826126cb565b602082019050919050565b60006020820190508181036000830152612730816126f4565b9050919050565b60006bffffffffffffffffffffffff82169050919050565b600061275a82612737565b91506bffffffffffffffffffffffff8203612778576127776120d5565b5b600182019050919050565b7f6163636f756e743a20696e76616c6964206e6f6e636500000000000000000000600082015250565b60006127b9601683611fb7565b91506127c482612783565b602082019050919050565b600060208201905081810360008301526127e8816127ac565b9050919050565b50565b60006127ff6000836124e8565b915061280a826127ef565b600082019050919050565b6000612820826127f2565b9150819050919050565b7f6f6e6c79206f776e657200000000000000000000000000000000000000000000600082015250565b6000612860600a83611fb7565b915061286b8261282a565b602082019050919050565b6000602082019050818103600083015261288f81612853565b9050919050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b60006128f2602d83611fb7565b91506128fd82612896565b604082019050919050565b60006020820190508181036000830152612921816128e5565b9050919050565b600081905092915050565b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000600082015250565b6000612969601c83612928565b915061297482612933565b601c82019050919050565b6000819050919050565b61299a61299582611aff565b61297f565b82525050565b60006129ab8261295c565b91506129b78284612989565b60208201915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000612a2b601883611fb7565b9150612a36826129f5565b602082019050919050565b60006020820190508181036000830152612a5a81612a1e565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000612a97601f83611fb7565b9150612aa282612a61565b602082019050919050565b60006020820190508181036000830152612ac681612a8a565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000612b29602283611fb7565b9150612b3482612acd565b604082019050919050565b60006020820190508181036000830152612b5881612b1c565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202776272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000612bbb602283611fb7565b9150612bc682612b5f565b604082019050919050565b60006020820190508181036000830152612bea81612bae565b9050919050565b7f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60008201527f6e74726163740000000000000000000000000000000000000000000000000000602082015250565b6000612c4d602683611fb7565b9150612c5882612bf1565b604082019050919050565b60006020820190508181036000830152612c7c81612c40565b9050919050565b612c8c81612418565b82525050565b6000608082019050612ca76000830187611e1f565b612cb46020830186612c83565b612cc16040830185611e1f565b612cce6060830184611e1f565b95945050505050565b600081519050919050565b6000612ced82612cd7565b612cf78185611fb7565b9350612d078185602086016124f3565b612d1081611c87565b840191505092915050565b60006020820190508181036000830152612d358184612ce2565b90509291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220221266bdfdc53fc2d08bd71b69566b17b27e7bca67b22aa30a0c588bb258dedd64736f6c63430008110033";

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
