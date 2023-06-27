/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SafeProxy, SafeProxyInterface } from "../SafeProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_singleton",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
] as const;

const _bytecode =
  "0x6080346100c957601f61018438819003918201601f19168301916001600160401b038311848410176100ce578084926020946040528339810103126100c957516001600160a01b038116908190036100c957801561007957600080546001600160a01b031916919091179055604051609f90816100e58239f35b60405162461bcd60e51b815260206004820152602260248201527f496e76616c69642073696e676c65746f6e20616464726573732070726f766964604482015261195960f21b6064820152608490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600073ffffffffffffffffffffffffffffffffffffffff815416907fa619486e00000000000000000000000000000000000000000000000000000000813514606257808092368280378136915af43d82803e15605e573d90f35b3d90fd5b6020918152f3fea26469706673582212203d3ff9ec3d67f5ee870a9d473dfa9ae0dbc4792f84dbd997507413ac69bf15cb64736f6c634300080f0033";

type SafeProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SafeProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SafeProxy__factory extends ContractFactory {
  constructor(...args: SafeProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _singleton: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SafeProxy> {
    return super.deploy(_singleton, overrides || {}) as Promise<SafeProxy>;
  }
  override getDeployTransaction(
    _singleton: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_singleton, overrides || {});
  }
  override attach(address: string): SafeProxy {
    return super.attach(address) as SafeProxy;
  }
  override connect(signer: Signer): SafeProxy__factory {
    return super.connect(signer) as SafeProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SafeProxyInterface {
    return new utils.Interface(_abi) as SafeProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SafeProxy {
    return new Contract(address, _abi, signerOrProvider) as SafeProxy;
  }
}
