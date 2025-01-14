/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ReentrancyTransactionGuard,
  ReentrancyTransactionGuardInterface,
} from "../ReentrancyTransactionGuard";

const _abi = [
  {
    stateMutability: "nonpayable",
    type: "fallback",
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
        name: "",
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
    stateMutability: "nonpayable",
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
  "0x60808060405234610016576103fc908161001c8239f35b600080fdfe6080806040526004908136101561001f575b50503461001a57005b600080fd5b600091823560e01c91826301ffc9a71461025a5750816375f0bb52146100d957506393271368146100505780610011565b346100d65760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100d657602435801515036100d6577f7c1d45961c2d0298f999d2c3d4a7a5e0f688d137f4c32466e3056a97e673b83a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008154169055604051f35b80fd5b90503461024a576101607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261024a5773ffffffffffffffffffffffffffffffffffffffff8135818116036102565767ffffffffffffffff6044358181116102525761014a9036908501610316565b506002606435101561024e5760e4358281160361024e57610104358281160361024e576101243590811161024e576101859036908401610316565b50610144359081160361024a577f7c1d45961c2d0298f999d2c3d4a7a5e0f688d137f4c32466e3056a97e673b83a9081549060ff82166101ec57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055604051f35b6064906020604051917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601360248201527f5265656e7472616e6379206465746563746564000000000000000000000000006044820152fd5b5080fd5b8380fd5b8480fd5b8280fd5b9150346102565760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261025657357fffffffff00000000000000000000000000000000000000000000000000000000811680910361025657602092507fe6d7a83a0000000000000000000000000000000000000000000000000000000081149081156102ec575b5015158152f35b7f01ffc9a700000000000000000000000000000000000000000000000000000000915014386102e5565b81601f8201121561001a5780359067ffffffffffffffff9283831161039757604051937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81601f870116011685019085821090821117610397576040528284526020838301011161001a57816000926020809301838601378301015290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea264697066735822122076803221f9a7017d9c5be5d62809b815b51264e4ed2e2048ccb401c39b60b08764736f6c634300080f0033";

type ReentrancyTransactionGuardConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReentrancyTransactionGuardConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReentrancyTransactionGuard__factory extends ContractFactory {
  constructor(...args: ReentrancyTransactionGuardConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ReentrancyTransactionGuard> {
    return super.deploy(overrides || {}) as Promise<ReentrancyTransactionGuard>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ReentrancyTransactionGuard {
    return super.attach(address) as ReentrancyTransactionGuard;
  }
  override connect(signer: Signer): ReentrancyTransactionGuard__factory {
    return super.connect(signer) as ReentrancyTransactionGuard__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReentrancyTransactionGuardInterface {
    return new utils.Interface(_abi) as ReentrancyTransactionGuardInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReentrancyTransactionGuard {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ReentrancyTransactionGuard;
  }
}
