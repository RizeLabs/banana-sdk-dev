// @ts-nocheck
import { Signer } from "@ethersproject/abstract-signer";
import { Provider, TransactionRequest, TransactionResponse } from "@ethersproject/abstract-provider";
import { Logger } from "@ethersproject/logger";
import {JsonRpcProvider} from "@ethersproject/providers"
import { ethers } from "ethers";
import {  Deferrable } from "@ethersproject/properties";
import { Bytes} from "@ethersproject/bytes";
import { verifyFingerprint } from "./WebAuthnContext";
import { PublicKey } from "./interfaces/Banana.interface";
import UserOperation from './utils/userOperation'
const logger = new Logger("abstract-signer/5.7.0");


export class BananaSigner extends Signer {
    readonly provider: JsonRpcProvider;
    readonly publicKey: PublicKey
    address!: string

    constructor( provider: JsonRpcProvider, publicKey: PublicKey) {
        super();
        this.provider = provider
        this.publicKey = publicKey
        this.getAddress()
    }

    connect(provider: Provider): Signer {
        return logger.throwError("cannot alter JSON-RPC Signer connection", Logger.errors.UNSUPPORTED_OPERATION, {
            operation: "connect"
        });
    }

    getAddress(): Promise<string> {
        const uncompressedPublicKey = `0x04${this.publicKey.q0.slice(2)}${this.publicKey.q1.slice(2)}`;
        this.address = ethers.utils.computeAddress(uncompressedPublicKey)
        return Promise.resolve(this.address)
    }

    signTransaction(transaction: Deferrable<TransactionRequest>): Promise<string> {
        return logger.throwError("signing transactions is unsupported", Logger.errors.UNSUPPORTED_OPERATION, {
            operation: "signTransaction"
        });
    }

    async signMessage(message: Bytes | string, encodedId?: string): Promise<string> {
        if(!encodedId){
            return Promise.reject(new Error("encoded ID not provided"))
        }
        let userOpWithSignatureAndMessage: any
        try {
            userOpWithSignatureAndMessage = await verifyFingerprint({} as UserOperation, message as string, encodedId as string);
          } catch (err) {
            return Promise.reject(err);
          }
        return Promise.resolve(userOpWithSignatureAndMessage.newUserOp.signature)
    }

    async signUserOp(userOp: UserOperation, reqId: string, encodedId: string) {
        const signedUserOp = await verifyFingerprint(userOp as any, reqId, encodedId)
        return signedUserOp
    }
}