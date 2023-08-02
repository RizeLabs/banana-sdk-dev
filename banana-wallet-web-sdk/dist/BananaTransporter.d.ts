import { BananaCookie } from "./BananaCookie";
import { TransactionRequest } from "@ethersproject/providers";
export interface BananaTransportProvider {
    getWalletName(): Promise<string>;
    getUserOpSignature(txn: TransactionRequest, minBalance: string, userOpHash: string): Promise<string>;
    getMessageSignature(message: string): Promise<string>;
}
export declare class BananaTransporter implements BananaTransportProvider {
    cookieInstance: BananaCookie;
    constructor();
    getWalletName(): Promise<string>;
    getMessageSignature(message: string): Promise<string>;
    getUserOpSignature(txn: TransactionRequest, minBalance: string, userOpHash: string): Promise<string>;
}
