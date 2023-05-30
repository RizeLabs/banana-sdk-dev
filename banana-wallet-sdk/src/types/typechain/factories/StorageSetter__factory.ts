/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StorageSetter, StorageSetterInterface } from "../StorageSetter";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes3",
        name: "data",
        type: "bytes3",
      },
    ],
    name: "setStorage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060db8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063a4b42cc314602d575b600080fd5b605c6038366004605e565b7f424242424242424242424242424242424242424242424242424242424242424255565b005b600060208284031215606f57600080fd5b81357fffffff000000000000000000000000000000000000000000000000000000000081168114609e57600080fd5b939250505056fea2646970667358221220e87f8466f581ec173bb7268b825f1a47f82b18d48dd340a5a9192c217dca8f3064736f6c63430008110033";

export class StorageSetter__factory extends ContractFactory {
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
  ): Promise<StorageSetter> {
    return super.deploy(overrides || {}) as Promise<StorageSetter>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): StorageSetter {
    return super.attach(address) as StorageSetter;
  }
  connect(signer: Signer): StorageSetter__factory {
    return super.connect(signer) as StorageSetter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StorageSetterInterface {
    return new utils.Interface(_abi) as StorageSetterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StorageSetter {
    return new Contract(address, _abi, signerOrProvider) as StorageSetter;
  }
}
