import { Wallet } from "@rainbow-me/rainbowkit";
import { Chain } from "wagmi";
import { ConnectOptions } from "@rize-labs/banana-wallet-sdk-test/dist";
export interface MyWalletOptions {
    chains: Chain[];
    connect?: ConnectOptions;
}
export declare const BananaWallet: ({ chains, connect }: MyWalletOptions) => Wallet;
