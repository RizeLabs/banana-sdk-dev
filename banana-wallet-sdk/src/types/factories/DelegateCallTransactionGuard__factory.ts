/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  DelegateCallTransactionGuard,
  DelegateCallTransactionGuardInterface,
} from "../DelegateCallTransactionGuard";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "allowedTarget",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "checkAfterExecution",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "checkTransaction",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a03461007157601f6104a838819003918201601f19168301916001600160401b038311848410176100765780849260209460405283398101031261007157516001600160a01b03811681036100715760805260405161041b908161008d82396080518181816101d001526102550152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604081815260049182361015610021575b5050503461001c57005b600080fd5b600092833560e01c91826301ffc9a7146102795750816373a8c6821461020a57816375f0bb521461009d575063932713681461005d5780610012565b3461009957807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261009957602435801515036100995751f35b5080fd5b905034610206576101607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261020657803573ffffffffffffffffffffffffffffffffffffffff908181168091036102025767ffffffffffffffff6044358181116101fe576101119036908601610335565b506064359060028210156101fe5760e435848116036101fe5761010435848116036101fe57610124359081116101fe5761014e9036908601610335565b5061014435838116036101fa57600114918215926101ce575b505015610172575051f35b602060649251917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601760248201527f546869732063616c6c20697320726573747269637465640000000000000000006044820152fd5b7f0000000000000000000000000000000000000000000000000000000000000000161490503880610167565b8580fd5b8680fd5b8480fd5b8280fd5b50503461009957817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610099576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b8491346102065760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261020657357fffffffff00000000000000000000000000000000000000000000000000000000811680910361020657602092507fe6d7a83a00000000000000000000000000000000000000000000000000000000811490811561030b575b5015158152f35b7f01ffc9a70000000000000000000000000000000000000000000000000000000091501483610304565b81601f8201121561001c5780359067ffffffffffffffff928383116103b657604051937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81601f8701160116850190858210908211176103b6576040528284526020838301011161001c57816000926020809301838601378301015290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea2646970667358221220ab62ceb8e59d1a9b6fa325a713e82a1b15c97f8df7848635df7c829c951f58ff64736f6c634300080f0033";

type DelegateCallTransactionGuardConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DelegateCallTransactionGuardConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DelegateCallTransactionGuard__factory extends ContractFactory {
  constructor(...args: DelegateCallTransactionGuardConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    target: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DelegateCallTransactionGuard> {
    return super.deploy(
      target,
      overrides || {}
    ) as Promise<DelegateCallTransactionGuard>;
  }
  override getDeployTransaction(
    target: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(target, overrides || {});
  }
  override attach(address: string): DelegateCallTransactionGuard {
    return super.attach(address) as DelegateCallTransactionGuard;
  }
  override connect(signer: Signer): DelegateCallTransactionGuard__factory {
    return super.connect(signer) as DelegateCallTransactionGuard__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DelegateCallTransactionGuardInterface {
    return new utils.Interface(_abi) as DelegateCallTransactionGuardInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DelegateCallTransactionGuard {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DelegateCallTransactionGuard;
  }
}
