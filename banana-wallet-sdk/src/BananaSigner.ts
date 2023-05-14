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
import { BananaTransporter } from "./BananaTransporter";

export class BananaSigner extends ERC4337EthersSigner {
  jsonRpcProvider: JsonRpcProvider;
  publicKey: PublicKey;
  address!: string;
  encodedId: string;
  bananaTransporterInstance: BananaTransporter;

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
    console.log("Provider ", provider);
    this.jsonRpcProvider = provider;
    this.publicKey = publicKey;
    this.encodedId = publicKey.encodedId;
    this.getAddress();
    this.bananaTransporterInstance = new BananaTransporter();
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
    userOperation.verificationGasLimit = 1.5e6;
    userOperation.preVerificationGas = ethers.BigNumber.from(
      await userOperation.preVerificationGas
    ).add(5000);

    let minGasRequired = ethers.BigNumber.from(userOperation?.callGasLimit)
      .add(ethers.BigNumber.from(userOperation?.verificationGasLimit))
      .add(ethers.BigNumber.from(userOperation?.callGasLimit))
      .add(ethers.BigNumber.from(userOperation?.preVerificationGas));
    let currentGasPrice = await this.jsonRpcProvider.getGasPrice();
    let minBalanceRequired = minGasRequired.mul(currentGasPrice);
    //@ts-ignore
    let userBalance: BigNumber = await this.jsonRpcProvider.getBalance(
      userOperation?.sender
    );

    if (userBalance.lt(minBalanceRequired)) {
      throw new Error("ERROR: Insufficient balance in Wallet");
    }

    const message = await this.smartAccountAPI.getUserOpHash(userOperation);
    console.log((parseInt(minGasRequired._hex) / 10 ** 18).toString());
    console.log(' this is userOp formed ', userOperation);
    let signatureObtained: string;
    try {
      signatureObtained =
        await this.bananaTransporterInstance.getUserOpSignature(
          tx,
          parseInt(minGasRequired._hex).toString(),
          message
        );
      userOperation.signature = JSON.parse(signatureObtained);
      console.log("signature finally !!", signatureObtained);
      console.log(" parsing signatuat ", JSON.parse(signatureObtained));
    } catch (err) {
      return Promise.reject(err);
    }
    const transactionResponse =
      await this.erc4337provider.constructUserOpTransactionResponse(
        userOperation
      );
    try {
      await this.httpRpcClient.sendUserOpToBundler(userOperation);
    } catch (error: any) {
      console.error("sendUserOpToBundler failed", error);
      throw this.unwrapError(error);
    }
    // TODO: handle errors - transaction that is "rejected" by bundler is _not likely_ to ever resolve its "wait()"
    return transactionResponse;
  }

  async signBananaMessage(message: Bytes | string) {
    const messageHash = ethers.utils.keccak256(
      ethers.utils.solidityPack(["string"], [message])
    );

    let signatureObtained: string;
    try {
      signatureObtained =
        await this.bananaTransporterInstance.getMessageSignature(messageHash);
      console.log("signature finally !!", signatureObtained);
    } catch (err) {
      return Promise.reject(err);
    }

    const signatureAndMessage = signatureObtained;
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
