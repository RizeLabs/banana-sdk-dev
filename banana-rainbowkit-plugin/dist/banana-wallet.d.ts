import { Wallet } from '@rainbow-me/rainbowkit';
import { Chain } from "wagmi";
interface ConnectOptions {
    networkId: string | number;
    jsonRpcUrl: string;
}
export interface MyWalletOptions {
    chains: Chain[];
    connect?: ConnectOptions;
}
export declare const BananaWallet: ({ chains, connect }: MyWalletOptions) => Wallet;
export {};
