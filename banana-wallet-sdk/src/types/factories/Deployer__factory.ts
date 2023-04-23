/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Deployer, DeployerInterface } from "../Deployer";

const _abi = [
  {
    inputs: [],
    name: "ErrorCreatingContract",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrorCreatingProxy",
    type: "error",
  },
  {
    inputs: [],
    name: "TargetAlreadyExists",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "ContractDeployed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32",
      },
    ],
    name: "addressOf",
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
        name: "_salt",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_creationCode",
        type: "bytes",
      },
    ],
    name: "deploy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608080604052346100165761054e908161001c8239f35b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c8063bb34534c146100b15763cdcb760a1461003357600080fd5b346100ae5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ae5760243567ffffffffffffffff8082116100aa57366023830112156100aa5781600401359081116100aa5736602482840101116100aa5760246100a792016004356101ef565b80f35b8280fd5b80fd5b50346100ae5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ae5760206100ee6004356103c2565b73ffffffffffffffffffffffffffffffffffffffff60405191168152f35b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040810190811067ffffffffffffffff82111761015857604052565b61016061010c565b604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761015857604052565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f60209267ffffffffffffffff81116101e2575b01160190565b6101ea61010c565b6101dc565b90916101fa816101a6565b906102086040519283610165565b808252602082019036818601116103355780602095833760009485918401015261023061033a565b9261023a816103c2565b93843b61030b5760208151910186f59173ffffffffffffffffffffffffffffffffffffffff92838116156102e157859283809351925af1610279610392565b501580156102d8575b6102ae577f8ffcdc15a283d706d38281f500270d8b5a656918f555de0913d7455e3e6bc1bf91169180a2565b60046040517f53de54b9000000000000000000000000000000000000000000000000000000008152fd5b50813b15610282565b60046040517fbbd2fe87000000000000000000000000000000000000000000000000000000008152fd5b60046040517fcd43efa1000000000000000000000000000000000000000000000000000000008152fd5b600080fd5b604051906040820182811067ffffffffffffffff821117610385575b604052601082527f67363d3d37363d34f03d5260086018f3000000000000000000000000000000006020830152565b61038d61010c565b610356565b3d156103bd573d906103a3826101a6565b916103b16040519384610165565b82523d6000602084013e565b606090565b6104ef610508916040519060208201907fff0000000000000000000000000000000000000000000000000000000000000082523060601b602184015260358301527f21c35dbe1b344a2488cf3321d6ce542f8e9f305544ff09e4993a62319a497c1f6055830152605582527f010000000000000000000000000000000000000000000000000000000000000060b6608084019284841067ffffffffffffffff85111761050b575b8360405284519020937fffffffffffffffffffffffffffffffffffffffff00000000000000000000000060a08201957fd694000000000000000000000000000000000000000000000000000000000000875260601b1660a28201520152601781526104d38161013c565b51902073ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1690565b90565b61051361010c565b61046956fea2646970667358221220d46d2b3e5e737607e0e7ea61bfce24f4b0b1389aa26641af755542cdc3fb935264736f6c63430008110033";

type DeployerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DeployerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Deployer__factory extends ContractFactory {
  constructor(...args: DeployerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Deployer> {
    return super.deploy(overrides || {}) as Promise<Deployer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Deployer {
    return super.attach(address) as Deployer;
  }
  override connect(signer: Signer): Deployer__factory {
    return super.connect(signer) as Deployer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeployerInterface {
    return new utils.Interface(_abi) as DeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Deployer {
    return new Contract(address, _abi, signerOrProvider) as Deployer;
  }
}