/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Decoder, DecoderInterface } from "../Decoder";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "decode",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506102c0806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063785fb41114610030575b600080fd5b61004361003e36600461013a565b610059565b604051610050919061023b565b60405180910390f35b60606000808473ffffffffffffffffffffffffffffffffffffffff1684604051610083919061026e565b6000604051808303816000865af19150503d80600081146100c0576040519150601f19603f3d011682016040523d82523d6000602084013e6100c5565b606091505b5091509150811561011c5760405162461bcd60e51b815260206004820152600b60248201527f43616c6c206661696c6564000000000000000000000000000000000000000000604482015260640160405180910390fd5b949350505050565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561014d57600080fd5b823573ffffffffffffffffffffffffffffffffffffffff8116811461017157600080fd5b9150602083013567ffffffffffffffff8082111561018e57600080fd5b818501915085601f8301126101a257600080fd5b8135818111156101b4576101b4610124565b604051601f8201601f19908116603f011681019083821181831017156101dc576101dc610124565b816040528281528860208487010111156101f557600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60005b8381101561023257818101518382015260200161021a565b50506000910152565b602081526000825180602084015261025a816040850160208701610217565b601f01601f19169190910160400192915050565b60008251610280818460208701610217565b919091019291505056fea26469706673582212205af8f8026d4d57b0f2a94929765fcf707ed793117db92937eb024d8dc8ffcb4564736f6c63430008110033";

export class Decoder__factory extends ContractFactory {
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
  ): Promise<Decoder> {
    return super.deploy(overrides || {}) as Promise<Decoder>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Decoder {
    return super.attach(address) as Decoder;
  }
  connect(signer: Signer): Decoder__factory {
    return super.connect(signer) as Decoder__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DecoderInterface {
    return new utils.Interface(_abi) as DecoderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Decoder {
    return new Contract(address, _abi, signerOrProvider) as Decoder;
  }
}
