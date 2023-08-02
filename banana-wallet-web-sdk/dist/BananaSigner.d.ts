import { Signer } from "@ethersproject/abstract-signer";
import { TransactionRequest } from "@ethersproject/abstract-provider";
import { JsonRpcProvider, TransactionResponse } from "@ethersproject/providers";
import { Deferrable } from "@ethersproject/properties";
import { Bytes } from "@ethersproject/bytes";
import { PublicKey } from "./interfaces/Banana.interface";
import { ClientConfig, ERC4337EthersSigner, HttpRpcClient } from "@account-abstraction/sdk";
import { MyWalletApi } from "./MyWalletApi";
import { Banana4337Provider } from "./Banana4337Provider";
import { BananaTransporter } from "./BananaTransporter";
export declare class BananaSigner extends ERC4337EthersSigner {
    readonly config: ClientConfig;
    readonly originalSigner: Signer;
    readonly erc4337provider: Banana4337Provider;
    readonly httpRpcClient: HttpRpcClient;
    readonly smartAccountAPI: MyWalletApi;
    jsonRpcProvider: JsonRpcProvider;
    publicKey: PublicKey;
    address: string;
    encodedId: string;
    bananaTransporterInstance: BananaTransporter;
    paymasterUrl: string | undefined;
    constructor(config: ClientConfig, originalSigner: Signer, erc4337provider: Banana4337Provider, httpRpcClient: HttpRpcClient, smartAccountAPI: MyWalletApi, provider: JsonRpcProvider, publicKey: PublicKey, _paymasterUrl: string | undefined);
    sendTransaction(transaction: Deferrable<TransactionRequest>): Promise<TransactionResponse>;
    sendBatchTransaction(transactions: Deferrable<TransactionRequest>[]): Promise<TransactionResponse>;
    signBananaMessage(message: Bytes | string): Promise<{
        signature?: undefined;
    } | {
        signature: any;
    }>;
}
