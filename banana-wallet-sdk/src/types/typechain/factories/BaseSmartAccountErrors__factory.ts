/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BaseSmartAccountErrors,
  BaseSmartAccountErrorsInterface,
} from "../BaseSmartAccountErrors";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "CallerIsNotAnEntryPoint",
    type: "error",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212204156edde02fa269ef5679b2dc3cff110bf814614beea57b952f78097bbeda86064736f6c63430008110033";

export class BaseSmartAccountErrors__factory extends ContractFactory {
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
  ): Promise<BaseSmartAccountErrors> {
    return super.deploy(overrides || {}) as Promise<BaseSmartAccountErrors>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BaseSmartAccountErrors {
    return super.attach(address) as BaseSmartAccountErrors;
  }
  connect(signer: Signer): BaseSmartAccountErrors__factory {
    return super.connect(signer) as BaseSmartAccountErrors__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseSmartAccountErrorsInterface {
    return new utils.Interface(_abi) as BaseSmartAccountErrorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseSmartAccountErrors {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BaseSmartAccountErrors;
  }
}
