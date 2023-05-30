/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SingletonPaymasterErrors,
  SingletonPaymasterErrorsInterface,
} from "../SingletonPaymasterErrors";

const _abi = [
  {
    inputs: [],
    name: "CanNotWithdrawToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "DepositCanNotBeZero",
    type: "error",
  },
  {
    inputs: [],
    name: "EntryPointCannotBeZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountRequired",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentBalance",
        type: "uint256",
      },
    ],
    name: "InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "sigLength",
        type: "uint256",
      },
    ],
    name: "InvalidPaymasterSignatureLength",
    type: "error",
  },
  {
    inputs: [],
    name: "PaymasterIdCannotBeZero",
    type: "error",
  },
  {
    inputs: [],
    name: "VerifyingSignerCannotBeZero",
    type: "error",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea264697066735822122011eef06aa449f7f766b00c3542cdc9049e8b86f3f5475c61a996bd87edf729bf64736f6c63430008110033";

export class SingletonPaymasterErrors__factory extends ContractFactory {
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
  ): Promise<SingletonPaymasterErrors> {
    return super.deploy(overrides || {}) as Promise<SingletonPaymasterErrors>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SingletonPaymasterErrors {
    return super.attach(address) as SingletonPaymasterErrors;
  }
  connect(signer: Signer): SingletonPaymasterErrors__factory {
    return super.connect(signer) as SingletonPaymasterErrors__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SingletonPaymasterErrorsInterface {
    return new utils.Interface(_abi) as SingletonPaymasterErrorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SingletonPaymasterErrors {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SingletonPaymasterErrors;
  }
}
