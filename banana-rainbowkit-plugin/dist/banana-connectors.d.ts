import { Connector, ConnectorData } from "wagmi";
import { Banana } from "@rize-labs/banana-wallet-sdk-test/dist";
import { Wallet } from "@rize-labs/banana-wallet-sdk-test/dist";
import { Banana4337Provider } from "@rize-labs/banana-wallet-sdk-test/dist";
import { BananaSigner } from "@rize-labs/banana-wallet-sdk-test/dist";
import { Chain } from "wagmi";
interface ConnectOptions {
    networkId: string | number;
}
interface Options {
    connect?: ConnectOptions;
}
export declare class BananaConnector extends Connector<Banana4337Provider, Options | undefined, BananaSigner> {
    id: string;
    name: string;
    ready: boolean;
    provider: Banana4337Provider | null;
    connected: boolean;
    BananaInstance: Banana;
    chainId: number;
    wallet: Wallet;
    address: string;
    constructor({ chains, options }: {
        chains?: Chain[];
        options?: Options;
    });
    connect(): Promise<Required<ConnectorData<Banana4337Provider>>>;
    disconnect(): Promise<void>;
    getAccount(): Promise<`0x${string}`>;
    getChainId(): Promise<number>;
    getProvider(): Promise<any>;
    getSigner(): Promise<BananaSigner>;
    isAuthorized(): Promise<boolean>;
    protected onAccountsChanged(accounts: string[]): void;
    protected onChainChanged(chain: string | number): void;
    protected onDisconnect(error: Error): void;
    switchChain(chainId: number): Promise<Chain>;
    isChainUnsupported(chainId: number): boolean;
}
export {};
