/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BananaVerificationModule,
  BananaVerificationModuleInterface,
} from "../BananaVerificationModule";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "smartAccount",
        type: "address",
      },
    ],
    name: "AlreadyInitedForSmartAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "smartAccount",
        type: "address",
      },
    ],
    name: "NoOwnerRegisteredForSmartAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongSignatureLength",
    type: "error",
  },
  {
    inputs: [],
    name: "NAME",
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
    name: "VERSION",
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
    inputs: [
      {
        internalType: "uint256[2]",
        name: "publicKey",
        type: "uint256[2]",
      },
    ],
    name: "initForSmartAccount",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ethSignedDataHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "moduleSignature",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ethSignedDataHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "moduleSignature",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "smartAccount",
        type: "address",
      },
    ],
    name: "isValidSignatureForAddress",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nn",
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
    name: "pp",
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "smartAccountOwners",
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
        internalType: "bytes32",
        name: "data",
        type: "bytes32",
      },
    ],
    name: "toHex",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
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
    ],
    name: "validateUserOp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611af5806100206000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c806391327ec611610076578063f44c339d1161005b578063f44c339d146101e8578063ffa1ad74146101fb578063fff35b721461023757600080fd5b806391327ec614610191578063a3f4df7e146101ac57600080fd5b8063653bf785116100a7578063653bf7851461011457806372a4c30f1461014c57806382f5c5e41461017e57600080fd5b80631626ba7e146100c357806349e894d8146100f4575b600080fd5b6100d66100d13660046116a2565b61024a565b6040516001600160e01b031990911681526020015b60405180910390f35b6101076101023660046116e9565b610260565b6040516100eb9190611702565b610127610122366004611750565b6102ac565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100eb565b6101707bffffffff00000000000000004319055258e8617b0c46353d039cdaae1981565b6040519081526020016100eb565b61017061018c3660046117f5565b610322565b6101706ffffffffeffffffffffffffffffffffff60601b1981565b6101076040518060400160405280601a81526020017f42616e616e6120566572696669636174696f6e204d6f64756c6500000000000081525081565b6100d66101f6366004611821565b610347565b6101076040518060400160405280600581526020017f302e302e3100000000000000000000000000000000000000000000000000000081525081565b61017061024536600461187c565b610358565b6000610257838333610347565b90505b92915050565b606061026b8261043e565b610278608084901b61043e565b60405161060f60f31b6020820152602281019290925260428201526062016040516020818303038152906040529050919050565b33600090815260208190526040812054158015906102db57503360009081526020819052604090206001015415155b156102ff57604051632c4dfb7d60e21b815233600482015260240160405180910390fd5b33600090815260208190526040902061031a908360026115b5565b503092915050565b6000602052816000526040600020816002811061033e57600080fd5b01549150829050565b6001600160e01b03195b9392505050565b6000806103696101408501856118cf565b810190610376919061191d565b50905060008060008084806020019051810190610393919061196f565b935093509350935060006103ae6103a989610260565b61060e565b905060006103bb82610688565b9050828180519060200120146103db57600197505050505050505061025a565b604080518082018252878152602080820188905233600090815290819052829020825180840193849052610430938893929060029082845b8154815260200190600101908083116104135750505050506109c0565b9a9950505050505050505050565b7aff00000000000000ff00000000000000ff00000000000000ff00006bffffffff0000000000000000604083901c9081167bffffffff00000000000000000000000000000000000000000000000084161760201c6fffffffff000000000000000000000000919091166001600160e01b031984161717601081901c9182167eff00000000000000ff00000000000000ff00000000000000ff000000000000821617600890811c7bff00000000000000ff00000000000000ff00000000000000ff000000939093167fff00000000000000ff00000000000000ff00000000000000ff000000000000009290921691909117919091179081901c7e0f000f000f000f000f000f000f000f000f000f000f000f000f000f000f000f167f0f000f000f000f000f000f000f000f000f000f000f000f000f000f000f000f00600492831c1617906105aa827f06060606060606060606060606060606060606060606060606060606060606066119bb565b901c7f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f1660076105da91906119ce565b610604827f30303030303030303030303030303030303030303030303030303030303030306119bb565b61025a91906119bb565b60608160005b815181101561068157610646828281518110610632576106326118b9565b01602001516001600160f81b0319166109e4565b828281518110610658576106586118b9565b60200101906001600160f81b031916908160001a90535080610679816119e5565b915050610614565b5092915050565b6060600082905060006003825161069f9190611a14565b9050600060036106af8382611a28565b6106b99190611a14565b6003845160026106c991906119bb565b6106d39190611a3b565b6106de9060046119ce565b6106e89190611a28565b905060008167ffffffffffffffff811115610705576107056115ff565b6040519080825280601f01601f19166020018201604052801561072f576020820181803683370190505b5090506000805b85516107438360036119bb565b1161088d576107b286838151811061075d5761075d6118b9565b016020015160f81c876107718560016119bb565b81518110610781576107816118b9565b016020015160f81c886107958660026119bb565b815181106107a5576107a56118b9565b016020015160f81c610a33565b8685815181106107c4576107c46118b9565b01602001876107d48760016119bb565b815181106107e4576107e46118b9565b01602001886107f48860026119bb565b81518110610804576108046118b9565b01602001896108148960036119bb565b81518110610824576108246118b9565b6001600160f81b0319861660001a9101602001536001600160f81b0319851660001a90536001600160f81b0319851660001a90536001600160f81b0319851660001a90535050505060048161087991906119bb565b90506108866003836119bb565b9150610736565b84156109b4576000868688516108a39190611a28565b815181106108b3576108b36118b9565b016020015160f81c9050600060028790036108f25787600189516108d79190611a28565b815181106108e7576108e76118b9565b016020015160f81c90505b60008060008061090a8660ff168660ff166000610a33565b935093509350935083898881518110610925576109256118b9565b60200101906001600160f81b031916908160001a90535082896109498960016119bb565b81518110610959576109596118b9565b60200101906001600160f81b031916908160001a9053508a6002036109ad5781896109858960026119bb565b81518110610995576109956118b9565b60200101906001600160f81b031916908160001a9053505b5050505050505b50909695505050505050565b60006109cd848484610b4e565b156109da57506000610351565b5060019392505050565b6000604160f81b6001600160f81b0319831610801590610a125750602d60f91b6001600160f81b0319831611155b15610a2f57610a2660f883901c6020611a4f565b60f81b92915050565b5090565b60408051606081018252818152600091829182918291601089901b600889901b17871791603f601284901c811692600c85901c821692600686901c83169286169190611a8060208301398481518110610a8e57610a8e6118b9565b602001015160f81c60f81b9850604051806060016040528060408152602001611a80604091398381518110610ac557610ac56118b9565b602001015160f81c60f81b9750604051806060016040528060408152602001611a80604091398281518110610afc57610afc6118b9565b602001015160f81c60f81b9650604051806060016040528060408152602001611a80604091398181518110610b3357610b336118b9565b602001015160f81c60f81b9550505050505093509350935093565b81516020830151600091907bffffffff00000000000000004319055258e8617b0c46353d039cdaae1982101580610ba257507bffffffff00000000000000004319055258e8617b0c46353d039cdaae198110155b15610bb257600092505050610351565b6000610bdb827bffffffff00000000000000004319055258e8617b0c46353d039cdaae19610c52565b905060007bffffffff00000000000000004319055258e8617b0c46353d039cdaae19828909905060007bffffffff00000000000000004319055258e8617b0c46353d039cdaae19838609875160208901519192506000918291610c3f918686610c69565b50969096149a9950505050505050505050565b600061025783610c63600285611a28565b84610c9f565b6000806000806000610c7d89898989610cf5565b91945092509050610c8f838383610df2565b9450945050505094509492505050565b600081841115610caf5781840693505b60405160208152602080820152602060408201528460608201528360808201528260a082015260208160c083600060056105dcf18080156100be57505051949350505050565b6000808080808060808180610d0a8d8d610e88565b90505b8215610dde578315610d3e57610d248686866112fa565b91975095509350610d368686866112fa565b919750955093505b600c60fc8c901c1660fe8b901c1791508115610dc157610db9868686848681518110610d6c57610d6c6118b9565b602002602001015160000151858781518110610d8a57610d8a6118b9565b602002602001015160200151868881518110610da857610da86118b9565b6020026020010151604001516113b5565b919750955093505b60029a8b1b9a9990991b9882610dd681611a68565b935050610d0d565b50939b929a50909850909650505050505050565b60008082600003610e0857506000905080610e80565b6000610e28846ffffffffeffffffffffffffffffffffff60601b19610c52565b905060006ffffffffeffffffffffffffffffffffff60601b1982830990506ffffffffeffffffffffffffffffffffff60601b1981880993506ffffffffeffffffffffffffffffffffff60601b19808383098709925050505b935093915050565b6040805160108082526102208201909252606091816020015b610ec560405180606001604052806000815260200160008152602001600081525090565b815260200190600190039081610ea157905050905060405180606001604052806000815260200160008152602001600081525081600081518110610f0b57610f0b6118b9565b60200260200101819052506040518060600160405280848152602001838152602001600181525081600181518110610f4557610f456118b9565b6020026020010181905250610f7381600181518110610f6657610f666118b9565b60200260200101516114e1565b81600281518110610f8657610f866118b9565b6020026020010181905250610fcf81600181518110610fa757610fa76118b9565b602002602001015182600281518110610fc257610fc26118b9565b6020026020010151611543565b81600381518110610fe257610fe26118b9565b602002602001018190525060405180606001604052807f6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c29681526020017f4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5815260200160018152508160048151811061105c5761105c6118b9565b60200260200101819052506110988160048151811061107d5761107d6118b9565b602002602001015182600181518110610fc257610fc26118b9565b816005815181106110ab576110ab6118b9565b60200260200101819052506110cc81600481518110610fa757610fa76118b9565b816006815181106110df576110df6118b9565b602002602001018190525061111b81600481518110611100576111006118b9565b602002602001015182600381518110610fc257610fc26118b9565b8160078151811061112e5761112e6118b9565b602002602001018190525061114f81600481518110610f6657610f666118b9565b81600881518110611162576111626118b9565b60200260200101819052506111838160088151811061107d5761107d6118b9565b81600981518110611196576111966118b9565b60200260200101819052506111b781600881518110610fa757610fa76118b9565b81600a815181106111ca576111ca6118b9565b60200260200101819052506111eb81600881518110611100576111006118b9565b81600b815181106111fe576111fe6118b9565b602002602001018190525061123a8160048151811061121f5761121f6118b9565b602002602001015182600881518110610fc257610fc26118b9565b81600c8151811061124d5761124d6118b9565b602002602001018190525061126e81600c8151811061107d5761107d6118b9565b81600d81518110611281576112816118b9565b60200260200101819052506112a281600c81518110610fa757610fa76118b9565b81600e815181106112b5576112b56118b9565b60200260200101819052506112d681600c81518110611100576111006118b9565b81600f815181106112e9576112e96118b9565b602002602001018190525092915050565b60008060006ffffffffeffffffffffffffffffffffff60601b198085860981828283097fffffffff00000001000000000000000000000000fffffffffffffffffffffffc099050818788098283828b0960040983848384096008099150838385868d8e09600309089250838160020984848509818110156113785785015b039650868110156113865783015b8387820384099550508085101561139c57938201935b9093039250808086880960020991505093509350939050565b6000806000866000036113cf5750849150839050826114d5565b836000036113e45750879150869050856114d5565b6ffffffffeffffffffffffffffffffffff60601b19808889098186870982818d0983838b0984858a85098e0985868e87098c09868b8f088484101561142857928701925b84840393508784600209888182099050888186098484101561144957928901925b898585036002099350898485099c50898288099650898a8860020982089150818d1015611475579b89019b5b818d039c5089818b87600209099450508b86101561149257948801945b888c870384099a50838b10156114a757998801995b838b039a50888789089750888283099050878110156114c35788015b88858983030999505050505050505050505b96509650969350505050565b61150560405180606001604052806000815260200160008152602001600081525090565b60008060006115218560000151866020015187604001516112fa565b6040805160608101825293845260208401929092529082015295945050505050565b61156760405180606001604052806000815260200160008152602001600081525090565b6000806000611592866000015187602001518860400151886000015189602001518a604001516113b5565b604080516060810182529384526020840192909252908201529695505050505050565b82600281019282156115e3579160200282015b828111156115e35782518255916020019190600101906115c8565b50610a2f9291505b80821115610a2f57600081556001016115eb565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261162657600080fd5b813567ffffffffffffffff80821115611641576116416115ff565b604051601f8301601f19908116603f01168101908282118183101715611669576116696115ff565b8160405283815286602085880101111561168257600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156116b557600080fd5b82359150602083013567ffffffffffffffff8111156116d357600080fd5b6116df85828601611615565b9150509250929050565b6000602082840312156116fb57600080fd5b5035919050565b600060208083528351808285015260005b8181101561172f57858101830151858201604001528201611713565b506000604082860101526040601f19601f8301168501019250505092915050565b60006040828403121561176257600080fd5b82601f83011261177157600080fd5b6040516040810181811067ffffffffffffffff82111715611794576117946115ff565b80604052508060408401858111156117ab57600080fd5b845b818110156117c55780358352602092830192016117ad565b509195945050505050565b73ffffffffffffffffffffffffffffffffffffffff811681146117f257600080fd5b50565b6000806040838503121561180857600080fd5b8235611813816117d0565b946020939093013593505050565b60008060006060848603121561183657600080fd5b83359250602084013567ffffffffffffffff81111561185457600080fd5b61186086828701611615565b9250506040840135611871816117d0565b809150509250925092565b6000806040838503121561188f57600080fd5b823567ffffffffffffffff8111156118a657600080fd5b8301610160818603121561181357600080fd5b634e487b7160e01b600052603260045260246000fd5b6000808335601e198436030181126118e657600080fd5b83018035915067ffffffffffffffff82111561190157600080fd5b60200191503681900382131561191657600080fd5b9250929050565b6000806040838503121561193057600080fd5b823567ffffffffffffffff81111561194757600080fd5b61195385828601611615565b9250506020830135611964816117d0565b809150509250929050565b6000806000806080858703121561198557600080fd5b505082516020840151604085015160609095015191969095509092509050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561025a5761025a6119a5565b808202811582820484141761025a5761025a6119a5565b6000600182016119f7576119f76119a5565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082611a2357611a236119fe565b500690565b8181038181111561025a5761025a6119a5565b600082611a4a57611a4a6119fe565b500490565b60ff818116838216019081111561025a5761025a6119a5565b600081611a7757611a776119a5565b50600019019056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392d5fa2646970667358221220118409ccf1578ef1d3f9a4f16636f0b3eae862d89318b0c73c3ee6662bb7594a64736f6c63430008110033";

export class BananaVerificationModule__factory extends ContractFactory {
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
  ): Promise<BananaVerificationModule> {
    return super.deploy(overrides || {}) as Promise<BananaVerificationModule>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BananaVerificationModule {
    return super.attach(address) as BananaVerificationModule;
  }
  connect(signer: Signer): BananaVerificationModule__factory {
    return super.connect(signer) as BananaVerificationModule__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BananaVerificationModuleInterface {
    return new utils.Interface(_abi) as BananaVerificationModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BananaVerificationModule {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BananaVerificationModule;
  }
}
