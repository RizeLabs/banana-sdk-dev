/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Greeter, GreeterInterface } from "../Greeter";

const _abi = [
  {
    inputs: [],
    name: "addGreet",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "person",
        type: "address",
      },
    ],
    name: "getGreetCount",
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
        name: "person",
        type: "address",
      },
    ],
    name: "getGreets",
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
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "signatureData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawGreet",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061083d806100206000396000f3fe60806040526004361061004a5760003560e01c80630d0de4ac1461004f578063274a577f1461006b5780636ae674bf146100755780637bc86f6c1461009e57806398c2cb6c146100db575b600080fd5b610069600480360381019061006491906103e1565b610118565b005b610073610234565b005b34801561008157600080fd5b5061009c60048036038101906100979190610554565b6102e1565b005b3480156100aa57600080fd5b506100c560048036038101906100c091906105fb565b610306565b6040516100d29190610637565b60405180910390f35b3480156100e757600080fd5b5061010260048036038101906100fd91906105fb565b61034f565b60405161010f9190610637565b60405180910390f35b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541061023157806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546101a79190610681565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561022f573d6000803e3d6000fd5b505b50565b346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461028291906106b5565b9250508190555060018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102d891906106b5565b92505081905550565b6000806000838060200190518101906102fa9190610798565b92509250925050505050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6103be816103ab565b81146103c957600080fd5b50565b6000813590506103db816103b5565b92915050565b6000602082840312156103f7576103f66103a1565b5b6000610405848285016103cc565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61046182610418565b810181811067ffffffffffffffff821117156104805761047f610429565b5b80604052505050565b6000610493610397565b905061049f8282610458565b919050565b600067ffffffffffffffff8211156104bf576104be610429565b5b6104c882610418565b9050602081019050919050565b82818337600083830152505050565b60006104f76104f2846104a4565b610489565b90508281526020810184848401111561051357610512610413565b5b61051e8482856104d5565b509392505050565b600082601f83011261053b5761053a61040e565b5b813561054b8482602086016104e4565b91505092915050565b60006020828403121561056a576105696103a1565b5b600082013567ffffffffffffffff811115610588576105876103a6565b5b61059484828501610526565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006105c88261059d565b9050919050565b6105d8816105bd565b81146105e357600080fd5b50565b6000813590506105f5816105cf565b92915050565b600060208284031215610611576106106103a1565b5b600061061f848285016105e6565b91505092915050565b610631816103ab565b82525050565b600060208201905061064c6000830184610628565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061068c826103ab565b9150610697836103ab565b92508282039050818111156106af576106ae610652565b5b92915050565b60006106c0826103ab565b91506106cb836103ab565b92508282019050808211156106e3576106e2610652565b5b92915050565b6000815190506106f8816103b5565b92915050565b60005b8381101561071c578082015181840152602081019050610701565b60008484015250505050565b600061073b610736846104a4565b610489565b90508281526020810184848401111561075757610756610413565b5b6107628482856106fe565b509392505050565b600082601f83011261077f5761077e61040e565b5b815161078f848260208601610728565b91505092915050565b6000806000606084860312156107b1576107b06103a1565b5b60006107bf868287016106e9565b93505060206107d0868287016106e9565b925050604084015167ffffffffffffffff8111156107f1576107f06103a6565b5b6107fd8682870161076a565b915050925092509256fea26469706673582212207aab03c93568c32392c20ca103db8b280aa26feacbe83bdb1238fb815a09b5da64736f6c63430008110033";

type GreeterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GreeterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Greeter__factory extends ContractFactory {
  constructor(...args: GreeterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Greeter> {
    return super.deploy(overrides || {}) as Promise<Greeter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Greeter {
    return super.attach(address) as Greeter;
  }
  override connect(signer: Signer): Greeter__factory {
    return super.connect(signer) as Greeter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GreeterInterface {
    return new utils.Interface(_abi) as GreeterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Greeter {
    return new Contract(address, _abi, signerOrProvider) as Greeter;
  }
}
