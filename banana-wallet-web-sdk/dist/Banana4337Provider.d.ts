import { EntryPoint } from "@account-abstraction/contracts";
import { ClientConfig, ERC4337EthersProvider, HttpRpcClient } from "@account-abstraction/sdk";
import { BaseProvider, JsonRpcProvider } from "@ethersproject/providers";
import { Signer } from "ethers";
import { BananaSigner } from "./BananaSigner";
import { PublicKey } from "./interfaces/Banana.interface";
import { MyWalletApi } from "./MyWalletApi";
export declare class Banana4337Provider extends ERC4337EthersProvider {
    readonly chainId: number;
    readonly config: ClientConfig;
    readonly originalSigner: Signer;
    readonly originalProvider: BaseProvider;
    readonly httpRpcClient: HttpRpcClient;
    readonly entryPoint: EntryPoint;
    readonly smartAccountAPI: MyWalletApi;
    readonly publicKey: PublicKey;
    readonly jsonRpcProvider: JsonRpcProvider;
    readonly paymasterUrl: string | undefined;
    readonly signer: BananaSigner;
    constructor(chainId: number, config: ClientConfig, originalSigner: Signer, originalProvider: BaseProvider, httpRpcClient: HttpRpcClient, entryPoint: EntryPoint, smartAccountAPI: MyWalletApi, publicKey: PublicKey, jsonRpcProvider: JsonRpcProvider, paymasterUrl: string | undefined);
    getSigner(): BananaSigner;
}
