import { Address, Connector, ConnectorData } from 'wagmi';
import { Banana } from '@rize-labs/banana-wallet-sdk/src/BananaProvider';
import { Wallet } from '@rize-labs/banana-wallet-sdk/src/BananaWallet';
import { Banana4337Provider } from '@rize-labs/banana-wallet-sdk//src/Banana4337Provider';
import { BananaSigner } from '@rize-labs/banana-wallet-sdk/src/BananaSigner';
import { Chain } from 'wagmi';
interface ConnectOptions {
    networkId: string | number;
}
interface Options {
    connect?: ConnectOptions;
}
export declare class BananaConnector extends Connector<Banana4337Provider, Options | undefined> {
    id: string;
    name: string;
    ready: boolean;
    provider: Banana4337Provider | null;
    connected: boolean;
    BananaInstance: Banana;
    address: Address;
    chainId: number;
    wallet: Wallet;
    constructor({ chains, options }: {
        chains?: Chain[];
        options?: Options;
    });
    connect(): Promise<Required<ConnectorData<Banana4337Provider>>>;
    disconnect(): Promise<void>;
    getAccount(): Promise<`0x${string}`>;
    getChainId(): Promise<number>;
    getProvider(): Promise<Banana4337Provider>;
    getSigner(): Promise<BananaSigner>;
    isAuthorized(): Promise<boolean>;
    protected onAccountsChanged(accounts: `0x${string}`[]): void;
    protected onChainChanged(chain: string | number): void;
    protected onDisconnect(error: Error): void;
    switchChain(chainId: number): Promise<Chain>;
    isChainUnsupported(chainId: number): boolean;
}
export {};
