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
import { EntryPoint__factory } from "@account-abstraction/contracts";
import { BVM } from "./Constants";

export class BananaSigner extends ERC4337EthersSigner {
  jsonRpcProvider: JsonRpcProvider;
  publicKey: PublicKey;
  address!: string;
  encodedId: string;

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
  }

  // need to do some changes in it
  async sendTransaction(
    transaction: Deferrable<TransactionRequest>
  ): Promise<TransactionResponse> {
    console.log("Transaction ", transaction);
    const tx: TransactionRequest = await this.populateTransaction(transaction);
    await this.verifyAllNecessaryFields(tx);
    console.log("tx ", tx);
    let userOperation = await this.smartAccountAPI.createUnsignedUserOp({
      target: tx.to ?? "",
      data: tx.data?.toString() ?? "",
      value: tx.value,
      gasLimit: tx.gasLimit,
    });
    console.log("userOperation ", userOperation);
    let processStatus = true;
    while (processStatus) {
      console.log("processStatus ", processStatus);
      let minGasRequired = ethers.BigNumber.from(userOperation?.callGasLimit)
        .add(ethers.BigNumber.from(userOperation?.verificationGasLimit))
        .add(ethers.BigNumber.from(userOperation?.callGasLimit));
      let currentGasPrice = await this.jsonRpcProvider.getGasPrice();
      let minBalanceRequired = minGasRequired.mul(currentGasPrice);
      //@ts-ignore
      let userBalance: BigNumber = await this.jsonRpcProvider.getBalance(
        userOperation?.sender
      );

      if (userBalance.lt(minBalanceRequired)) {
        console.log("Insufficient balance in Wallet");
        throw new Error("ERROR: Insufficient balance in Wallet");
      }

      userOperation.preVerificationGas = ethers.BigNumber.from(await userOperation.preVerificationGas).add(5000);
      userOperation.verificationGasLimit = 1.5e6;

      // let ep = EntryPoint__factory.connect("0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789", this.originalSigner);
      // console.log("EP handleOps")
      // userOperation.sender = await userOperation.sender;
      // userOperation.nonce = await userOperation.nonce

      // console.log("UserOperation ", userOperation);
      // let callData = ep.interface.encodeFunctionData("handleOps", [[userOperation], "0x3e60B11022238Af208D4FAEe9192dAEE46D225a6"]);

      // console.log("Final call data ", callData);
      const ep = EntryPoint__factory.connect("0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789", this.provider as any);
      const message = await this.smartAccountAPI.getUserOpHash(userOperation);

      console.log("Hash generated ", message);

      userOperation.sender = await userOperation.sender;
      userOperation.nonce = await userOperation.nonce
      userOperation.signature = "0x";

      console.log("useroperation ", userOperation);
      const newMessage = await ep.getUserOpHash(userOperation);
      console.log(" new message ", newMessage);

      const { newUserOp, process } = await this.signUserOp(
        userOperation as any,
        newMessage,
        this.encodedId
      );
      if (process === "success") {
        userOperation = newUserOp;
        let signatureWithModuleAddress = ethers.utils.defaultAbiCoder.encode(
          ["bytes", "address"], 
          [userOperation.signature, BVM]
        );
        console.log("before sig", userOperation.signature)
        console.log("Signature with module address ", signatureWithModuleAddress);
        console.log("sig + add", ethers.utils.defaultAbiCoder.decode(["bytes", "address"], signatureWithModuleAddress))
        userOperation.signature = signatureWithModuleAddress;
        processStatus = false;
      }
    }
    const transactionResponse =
      await this.erc4337provider.constructUserOpTransactionResponse(
        userOperation
      );
    try {

      const ep = EntryPoint__factory.connect("0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789", this.originalSigner);
     
      console.log("EP handleOps")
      userOperation.sender = await userOperation.sender;
      userOperation.nonce = await userOperation.nonce

      console.log("UserOperation ", userOperation);
      let callData = ep.interface.encodeFunctionData("handleOps", [[userOperation], "0x3e60B11022238Af208D4FAEe9192dAEE46D225a6"]);

      const signer = new ethers.Wallet("a66cf2b4bad26d3c10c0d6fc748f91f3fda596db7b6bc289c38bb3d3ff711e74", this.jsonRpcProvider);

      const tx = await signer.sendTransaction({
        to: ep.address,
        data: callData,
        value: "0x0"
      })

      console.log("tx ", tx);
 
      console.log("Final call data ", callData);

      await this.httpRpcClient.sendUserOpToBundler(userOperation);
    } catch (error: any) {
      // console.error('sendUserOpToBundler failed', error)
      throw this.unwrapError(error);
    }
    // TODO: handle errors - transaction that is "rejected" by bundler is _not likely_ to ever resolve its "wait()"
    return transactionResponse;
  }

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
