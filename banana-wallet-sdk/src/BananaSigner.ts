import { Signer } from "@ethersproject/abstract-signer";
import { Provider, TransactionRequest } from "@ethersproject/abstract-provider";
import { Logger } from "@ethersproject/logger";
import {
  BaseProvider,
  JsonRpcProvider,
  TransactionResponse,
} from "@ethersproject/providers";
import { ethers } from "ethers";
import { Deferrable } from "@ethersproject/properties";
import { Bytes } from "@ethersproject/bytes";
import { verifyFingerprint } from "./WebAuthnContext";
import { PublicKey } from "./interfaces/Banana.interface";
import UserOperation from "./utils/userOperation";
import {
  ClientConfig,
  ERC4337EthersSigner,
  HttpRpcClient,
} from "@account-abstraction/sdk";
import { BaseAccountAPI } from "@account-abstraction/sdk/dist/src/BaseAccountAPI";
import { Banana4337Provider } from "./Banana4337Provider";

export class BananaSigner extends ERC4337EthersSigner {
  readonly provider: JsonRpcProvider;
  readonly publicKey: PublicKey;
  address!: string;
  encodedId!: string;

  constructor(
    readonly config: ClientConfig,
    readonly originalSigner: Signer,
    readonly erc4337provider: Banana4337Provider,
    readonly httpRpcClient: HttpRpcClient,
    readonly smartAccountAPI: BaseAccountAPI,
    provider: JsonRpcProvider,
    publicKey: PublicKey
  ) {
    super(
      config,
      originalSigner,
      erc4337provider,
      httpRpcClient,
      smartAccountAPI
    );
    this.provider = provider;
    this.publicKey = publicKey;
    this.encodedId = publicKey.encodedId;
    this.getAddress();
  }

  // need to do some changes in it
  async sendTransaction(
    transaction: Deferrable<TransactionRequest>
  ): Promise<TransactionResponse> {
    const tx: TransactionRequest = await this.populateTransaction(transaction);
    await this.verifyAllNecessaryFields(tx);
    let userOperation = await this.smartAccountAPI.createUnsignedUserOp({
      target: tx.to ?? "",
      data: tx.data?.toString() ?? "",
      value: tx.value,
      gasLimit: tx.gasLimit,
    });
    let processStatus = true;
    const message = await this.smartAccountAPI.getUserOpHash(userOperation);
    while (processStatus) {
      let minGasRequired = ethers.BigNumber.from(userOperation?.callGasLimit)
        .add(ethers.BigNumber.from(userOperation?.verificationGasLimit))
        .add(ethers.BigNumber.from(userOperation?.callGasLimit));
      let currentGasPrice = await this.provider.getGasPrice();
      let minBalanceRequired = minGasRequired.mul(currentGasPrice);
      //@ts-ignore
      let userBalance: BigNumber = await this.jsonRpcProvider.getBalance(
        userOperation?.sender
      );
      if (userBalance.lt(minBalanceRequired)) {
        throw new Error("ERROR: Insufficient balance in Wallet");
      }
      const { newUserOp, process } = await this.signUserOp(
        userOperation as any,
        message,
        this.encodedId
      );
      if (process === "success") {
        userOperation = newUserOp;
        processStatus = false;
      }
    }
    const transactionResponse =
      await this.erc4337provider.constructUserOpTransactionResponse(
        userOperation
      );
    try {
      await this.httpRpcClient.sendUserOpToBundler(userOperation);
    } catch (error: any) {
      // console.error('sendUserOpToBundler failed', error)
      throw this.unwrapError(error);
    }
    // TODO: handle errors - transaction that is "rejected" by bundler is _not likely_ to ever resolve its "wait()"
    return transactionResponse;
  }

  // Need to implement our own getAddress method
  getAddress(): Promise<string> {
    const uncompressedPublicKey = `0x04${this.publicKey.q0.slice(
      2
    )}${this.publicKey.q1.slice(2)}`;
    this.address = ethers.utils.computeAddress(uncompressedPublicKey);
    return Promise.resolve(this.address);
  }

  // need to override it with our own signing logic
  async signBananaMessage(message: Bytes | string) {
    const messageHash = ethers.utils.keccak256(
      ethers.utils.solidityPack(["string"], [message])
    );
    let process = true;
    let userOpWithSignatureAndMessage: any;
    try {
      while (process) {
        userOpWithSignatureAndMessage = await verifyFingerprint(
          {} as UserOperation,
          messageHash as string,
          this.encodedId
        );
        if (userOpWithSignatureAndMessage.process === "success") {
          process = false;
        }
      }
    } catch (err) {
      return Promise.reject(err);
    }
    const signatureAndMessage =
      userOpWithSignatureAndMessage.newUserOp.signature;
    const abi = ethers.utils.defaultAbiCoder;
    const decoded = abi.decode(
      ["uint256", "uint256", "uint256"],
      signatureAndMessage
    );
    const signedMessage = decoded[2];
    const rHex = decoded[0].toHexString();
    const sHex = decoded[1].toHexString();
    const finalSignature = rHex + sHex.slice(2);
    /**
     * Note:
     * the `message` is signed using secp256r1 instead of secp256k1, hence to verify
     * signedMessage we cannot use ecrecover!
     */
    return {
      messageSigned: signedMessage.toHexString(),
      signature: finalSignature,
    };
  }

  async signUserOp(userOp: UserOperation, reqId: string, encodedId: string) {
    const signedUserOp = await verifyFingerprint(
      userOp as any,
      reqId,
      encodedId
    );
    return signedUserOp;
  }
}
