import { Signer } from "ethers";
import { registerFingerprint, signMessageViaPassKeys } from "./WebAuthnContext";
import UserOperation from "./utils/userOperation";
import { Logger } from "@ethersproject/logger";
const logger = new Logger("abstract-signer/5.7.0");
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Deferrable } from "@ethersproject/properties";
import { Bytes } from "@ethersproject/bytes";
import { ethers } from "ethers";

export class BananaEOASigner extends Signer {
  #q0Value!: string;
  #q1Value!: string;
  #encodedId!: string;
  readonly provider: Provider;

  async init() {
    const { q0, q1, encodedId } = await registerFingerprint();
    this.#q0Value = q0;
    this.#q1Value = q1;
    this.#encodedId = encodedId;
  }

  constructor(provider: Provider) {
    super();
    this.provider = provider;
  }

  connect(): Signer {
    return logger.throwError(
      "cannot alter JSON-RPC Signer connection",
      Logger.errors.UNSUPPORTED_OPERATION,
      {
        operation: "connect",
      }
    );
  }

  async getChainId(): Promise<number> {
    return (await this.provider.getNetwork()).chainId;
  }

  getAddress(): Promise<string> {
    const uncompressedPublicKey = `0x04${this.#q0Value.slice(
      2
    )}${this.#q1Value.slice(2)}`;
    const eoaAddress = ethers.utils.computeAddress(uncompressedPublicKey);
    return Promise.resolve(eoaAddress);
  }

  //! mainly signMessage is getting user not even sign transaction
  signTransaction(
    transaction: Deferrable<TransactionRequest>
  ): Promise<string> {
    return logger.throwError(
      "signing transactions is unsupported",
      Logger.errors.UNSUPPORTED_OPERATION,
      {
        operation: "signTransaction",
      }
    );
  }

  async signMessage(message: Bytes | string): Promise<string> {
    if (!this.#encodedId) {
      return Promise.reject(new Error("encoded ID not provided"));
    }
    const { signature } = await signMessageViaPassKeys(
      message as string,
      this.#encodedId
    );
    return signature;
  }
}
