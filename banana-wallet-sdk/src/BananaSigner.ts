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
import { PublicKey } from "./interfaces/Banana.interface";
import UserOperation from "./utils/userOperation";
import {
  ClientConfig,
  ERC4337EthersSigner,
  HttpRpcClient,
} from "@account-abstraction/sdk";
import { MyWalletApi } from "./MyWalletApi";
import { Banana4337Provider } from "./Banana4337Provider";
import { sendTransaction } from "./bundler/sendUserOp";
import { BananaTransporter } from "./BananaTransporter";
import { CANCEL_ACTION } from "./Constants";
import { getRequestDataForPaymaster } from "./paymaster/getRequestData";
import { getPaymasterAndData } from "./paymaster/getPaymasterAndData";

export class BananaSigner extends ERC4337EthersSigner {
  jsonRpcProvider: JsonRpcProvider;
  publicKey: PublicKey;
  address!: string;
  encodedId: string;
  bananaTransporterInstance: BananaTransporter;
  paymasterUrl: string | undefined;

  constructor(
    readonly config: ClientConfig,
    readonly originalSigner: Signer,
    readonly erc4337provider: Banana4337Provider,
    readonly httpRpcClient: HttpRpcClient,
    readonly smartAccountAPI: MyWalletApi,
    provider: JsonRpcProvider,
    publicKey: PublicKey,
    _paymasterUrl: string | undefined
  ) {
    super(
      config,
      originalSigner,
      erc4337provider,
      httpRpcClient,
      smartAccountAPI
    );
    this.jsonRpcProvider = provider;
    this.publicKey = publicKey;
    this.encodedId = publicKey.encodedId;
    this.paymasterUrl = _paymasterUrl;
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
    let minBalanceRequiredForGas = minGasRequired.mul(currentGasPrice);
    //@ts-ignore
    let userBalance: BigNumber = await this.jsonRpcProvider.getBalance(
      userOperation?.sender
    );

    if (this.paymasterUrl) {
      const requestData = await getRequestDataForPaymaster(userOperation);
      const paymasterAndData = await getPaymasterAndData(
        this.paymasterUrl,
        requestData
      );
      (userOperation || { paymasterAndData: null }).paymasterAndData =
        paymasterAndData || "";
    }

    if (!this.paymasterUrl && userBalance.lt(minBalanceRequiredForGas)) {
      throw new Error("ERROR: Insufficient balance in wallet for gas");
    }

    const message = await this.smartAccountAPI.getUserOpHash(userOperation);

    let signatureObtained: string;
    try {
      signatureObtained =
        await this.bananaTransporterInstance.getUserOpSignature(
          tx,
          parseInt(minBalanceRequiredForGas._hex).toString(),
          message
        );

      if (JSON.parse(signatureObtained) === CANCEL_ACTION) {
        return {} as TransactionResponse;
      }
      userOperation.signature = JSON.parse(signatureObtained);
    } catch (err) {
      return Promise.reject(err);
    }
    let transactionResponse =
      await this.erc4337provider.constructUserOpTransactionResponse(
        userOperation
      );
    try {
      const networkInfo = await this.jsonRpcProvider.getNetwork();
      if (networkInfo.chainId === 81 || networkInfo.chainId === 592) {
        //! sending UserOp directly to ep for shibuya
        const receipt = await sendTransaction(
          userOperation,
          this.jsonRpcProvider
        );
        transactionResponse = receipt;
      } else {
        await this.httpRpcClient.sendUserOpToBundler(userOperation);
      }
    } catch (error: any) {
      console.error("sendUserOpToBundler failed", error);
      throw this.unwrapError(error);
    }
    // TODO: handle errors - transaction that is "rejected" by bundler is _not likely_ to ever resolve its "wait()"
    return transactionResponse;
  }

  async sendBatchTransaction(transactions: Deferrable<TransactionRequest>[]) {
    let txns = [];
    for (let i = 0; i < transactions.length; i++) {
      const txn = await this.populateTransaction(transactions[i]);
      await this.verifyAllNecessaryFields(txn);
      txns.push(txn);
    }

    const info = txns.map((txn) => {
      return {
        target: txn.to ?? "",
        data: txn.data?.toString() ?? "",
        value: txn.value,
        gasLimit: txn.gasLimit,
      };
    });

    let userOperation =
      await this.smartAccountAPI.createUnsignedUserOpForBatchedTransaction(
        info
      );

    let minGasRequired = ethers.BigNumber.from(userOperation?.callGasLimit)
      .add(ethers.BigNumber.from(userOperation?.verificationGasLimit))
      .add(ethers.BigNumber.from(userOperation?.callGasLimit));
    let currentGasPrice = await this.jsonRpcProvider.getGasPrice();
    let minBalanceRequiredForGas = minGasRequired.mul(currentGasPrice);
    //@ts-ignore
    let userBalance: BigNumber = await this.jsonRpcProvider.getBalance(
      userOperation?.sender
    );

    userOperation.preVerificationGas = ethers.BigNumber.from(
      await userOperation.preVerificationGas
    ).add(20000);
    userOperation.verificationGasLimit = 1.5e6;
    userOperation.callGasLimit = await userOperation.callGasLimit;

    //@ts-ignore
    if (parseInt(userOperation.callGasLimit._hex) < 33100) {
      userOperation.callGasLimit = ethers.BigNumber.from(33100);
    }

    if (this.paymasterUrl) {
      const requestData = await getRequestDataForPaymaster(userOperation);
      const paymasterAndData = await getPaymasterAndData(
        this.paymasterUrl,
        requestData
      );
      (userOperation || { paymasterAndData: null }).paymasterAndData =
        paymasterAndData || "";
    }

    if (!this.paymasterUrl && userBalance.lt(minBalanceRequiredForGas)) {
      throw new Error("ERROR: Insufficient balance in wallet for gas");
    }

    const message = await this.smartAccountAPI.getUserOpHash(userOperation);

    let signatureObtained: string;
    try {
      signatureObtained =
        await this.bananaTransporterInstance.getUserOpSignature(
          txns[0],
          parseInt(minBalanceRequiredForGas._hex).toString(),
          message
        );

      if (JSON.parse(signatureObtained) === CANCEL_ACTION) {
        return {} as TransactionResponse;
      }
      userOperation.signature = JSON.parse(signatureObtained);
    } catch (err) {
      return Promise.reject(err);
    }
    let transactionResponse =
      await this.erc4337provider.constructUserOpTransactionResponse(
        userOperation
      );
    try {
      const networkInfo = await this.jsonRpcProvider.getNetwork();
      if (networkInfo.chainId === 81 || networkInfo.chainId === 592) {
        //! sending UserOp directly to ep for shibuya
        const receipt = await sendTransaction(
          userOperation,
          this.jsonRpcProvider
        );
        transactionResponse = receipt;
      } else {
        await this.httpRpcClient.sendUserOpToBundler(userOperation);
      }
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
    } catch (err) {
      return Promise.reject(err);
    }

    if (JSON.parse(signatureObtained) === CANCEL_ACTION) {
      return {};
    }

    const signatureAndMessage = JSON.parse(signatureObtained);
    /**
     * Note:
     * the `message` is signed using secp256r1 instead of secp256k1, hence to verify
     * signedMessage we cannot use ecrecover!
     */
    return {
      signature: signatureAndMessage,
    };
  }
}
