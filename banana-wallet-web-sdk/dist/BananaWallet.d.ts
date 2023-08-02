import { BananaSigner } from "./BananaSigner";
import { Chains } from "./Constants";
import { Banana4337Provider } from "./Banana4337Provider";
import { BananaCookie } from "./BananaCookie";
export interface WalletProvider {
    getAddress(): Promise<string>;
    getChainId(): Promise<number>;
    getProvider(): Banana4337Provider | undefined;
    getSigner(): BananaSigner;
    isConnected(): boolean;
}
export declare class Wallet implements WalletProvider {
    readonly walletAddress: string;
    readonly walletProvider: Banana4337Provider;
    readonly chainId: Chains;
    cookie: BananaCookie;
    constructor(walletAddress: string, walletProvider: Banana4337Provider, chainId: Chains);
    getProvider(): Banana4337Provider;
    getSigner(): BananaSigner;
    getChainId(): Promise<number>;
    getAddress(): Promise<string>;
    isConnected(): boolean;
}
