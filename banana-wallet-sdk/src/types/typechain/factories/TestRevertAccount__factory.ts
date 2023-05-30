/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestRevertAccount,
  TestRevertAccountInterface,
} from "../TestRevertAccount";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_ep",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "revertLong",
    outputs: [],
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
        name: "",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "",
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
];

const _bytecode =
  "0x608060405260405161021538038061021583398101604081905261002291610047565b600080546001600160a01b0319166001600160a01b0392909216919091179055610077565b60006020828403121561005957600080fd5b81516001600160a01b038116811461007057600080fd5b9392505050565b61018f806100866000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80633a871cdd1461003b578063be76c6ef14610060575b600080fd5b61004e6100493660046100ec565b610075565b60405190815260200160405180910390f35b61007361006e366004610140565b806000fd5b005b6000805460405163b760faf960e01b815230600482015273ffffffffffffffffffffffffffffffffffffffff9091169063b760faf99084906024016000604051808303818588803b1580156100c957600080fd5b505af11580156100dd573d6000803e3d6000fd5b50600098975050505050505050565b60008060006060848603121561010157600080fd5b833567ffffffffffffffff81111561011857600080fd5b8401610160818703121561012b57600080fd5b95602085013595506040909401359392505050565b60006020828403121561015257600080fd5b503591905056fea2646970667358221220c6b31e7d1688827493b940b7fe394b86ee044023802362527d21dd935930996764736f6c63430008110033";

export class TestRevertAccount__factory extends ContractFactory {
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
    _ep: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<TestRevertAccount> {
    return super.deploy(_ep, overrides || {}) as Promise<TestRevertAccount>;
  }
  getDeployTransaction(
    _ep: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_ep, overrides || {});
  }
  attach(address: string): TestRevertAccount {
    return super.attach(address) as TestRevertAccount;
  }
  connect(signer: Signer): TestRevertAccount__factory {
    return super.connect(signer) as TestRevertAccount__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestRevertAccountInterface {
    return new utils.Interface(_abi) as TestRevertAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestRevertAccount {
    return new Contract(address, _abi, signerOrProvider) as TestRevertAccount;
  }
}
