import { EntryPoint } from "@account-abstraction/contracts";
import {
  ClientConfig,
  ERC4337EthersProvider,
  ERC4337EthersSigner,
  HttpRpcClient,
} from "@account-abstraction/sdk";
import { BaseAccountAPI } from "@account-abstraction/sdk/dist/src/BaseAccountAPI";
import { BaseProvider, JsonRpcProvider } from "@ethersproject/providers";
import { Signer } from "ethers";
import { BananaSigner } from "./BananaSigner";
import { PublicKey } from "./interfaces/Banana.interface";

export class Banana4337Provider extends ERC4337EthersProvider {
  readonly signer: BananaSigner;

  constructor(
    readonly chainId: number,
    readonly config: ClientConfig,
    readonly originalSigner: Signer,
    readonly originalProvider: BaseProvider,
    readonly httpRpcClient: HttpRpcClient,
    readonly entryPoint: EntryPoint,
    readonly smartAccountAPI: BaseAccountAPI,
    readonly publicKey: PublicKey,
    readonly jsonRpcProvider: JsonRpcProvider
  ) {
    super(
      chainId,
      config,
      originalSigner,
      originalProvider,
      httpRpcClient,
      entryPoint,
      smartAccountAPI
    );
    this.signer = new BananaSigner(
      config,
      originalSigner,
      this,
      httpRpcClient,
      smartAccountAPI,
      jsonRpcProvider,
      publicKey
    );
  }

  getSigner(): BananaSigner {
    return this.signer;
  }
}
