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
// import  properties_1 from "@ethersproject/properties";
import { BaseAccountAPI } from "@account-abstraction/sdk/dist/src/BaseAccountAPI";
import { Banana4337Provider } from "./Banana4337Provider";

export class BananaSigner2 extends Signer {
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
        super();
        this.config = config;
        this.originalSigner = originalSigner;
        this.erc4337provider = erc4337provider;
        this.httpRpcClient = httpRpcClient;
        this.smartAccountAPI = smartAccountAPI;
        this.jsonRpcProvider = provider;
        this.publicKey = publicKey;
        this.encodedId = publicKey.encodedId;
        this.getAddress();
    }

    async getAddress() {
        if (this.address == null) {
            this.address = await this.erc4337provider.getSenderAccountAddress();
        }
        return this.address;
    }

    connect(provider) {
        throw new Error('changing providers is not supported');
    }

    async send(method: string, params: any[]): Promise<any> {

        switch (method) {
          case "eth_accounts":
            return this.sendTransaction(params[0]);
          case "eth_signMessage":
            return this.signMessage(params[0]);
          case "eth_signTransaction":
            return this.signTransaction(params[0]);

          default:
            return this.jsonRpcProvider.send(method, params);
        }
        // const res = await this.jsonRpcProvider.send("eth_blockNumber", []);
        // console.log("res inside send ", res);
        // return "0x";
        // throw new Error("Method not implemented.");
      }

    // need to do some changes in it
  async sendTransaction(
    transaction: Deferrable<TransactionRequest>
  ): Promise<TransactionResponse> {
    const tx: TransactionRequest = await this.populateTransaction(transaction);
    // TODO: verify all necessary fields are present
    await this.verifyAllNecessaryFields(tx);
    let userOperation = await this.smartAccountAPI.createUnsignedUserOp({
      target: tx.to ?? "",
      data: tx.data?.toString() ?? "",
      value: tx.value,
      gasLimit: tx.gasLimit,
    });
    let processStatus = true;
    while (processStatus) {
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
        throw new Error("ERROR: Insufficient balance in Wallet");
      }

      userOperation.preVerificationGas = ethers.BigNumber.from(await userOperation.preVerificationGas).add(5000);
      userOperation.verificationGasLimit = 1.5e6;
      const message = await this.smartAccountAPI.getUserOpHash(userOperation);
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

  unwrapError(errorIn: any) {
    var _a;
    if (errorIn.body != null) {
        const errorBody = JSON.parse(errorIn.body);
        let paymasterInfo = '';
        let failedOpMessage = (_a = errorBody === null || errorBody === void 0 ? void 0 : errorBody.error) === null || _a === void 0 ? void 0 : _a.message;
        if ((failedOpMessage === null || failedOpMessage === void 0 ? void 0 : failedOpMessage.includes('FailedOp')) === true) {
            // TODO: better error extraction methods will be needed
            const matched = failedOpMessage.match(/FailedOp\((.*)\)/);
            if (matched != null) {
                const split = matched[1].split(',');
                paymasterInfo = `(paymaster address: ${split[1]})`;
                failedOpMessage = split[2];
            }
        }
        const error = new Error(`The bundler has failed to include UserOperation in a batch: ${failedOpMessage} ${paymasterInfo})`);
        error.stack = errorIn.stack;
        return error;
    }
    return errorIn;
}

  async signMessage(message: string | Uint8Array): Promise<string> {
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
    // return (2).toString();
    return ("messageSigned:"+ signedMessage.toHexString() + "signature:"+ finalSignature).toString();
  }

  async signUserOp(userOp: UserOperation, reqId: string, encodedId: string) {
    const signedUserOp = await verifyFingerprint(
      userOp as any,
      reqId,
      encodedId
    );
    return signedUserOp;
  }

  async verifyAllNecessaryFields(transactionRequest: any) {
    if (transactionRequest.to == null) {
        throw new Error('Missing call target');
    }
    if (transactionRequest.data == null && transactionRequest.value == null) {
        // TBD: banning no-op UserOps seems to make sense on provider level
        throw new Error('Missing call data or value');
    }
}

async signUserOperation(userOperation: any) {
    const message = await this.smartAccountAPI.getUserOpHash(userOperation);
    return await this.originalSigner.signMessage(message);
}
}
