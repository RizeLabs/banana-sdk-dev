import { providers, BigNumberish } from "ethers";
export declare enum ChainId {
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    GOERLI = 5,
    KOVAN = 42,
    POLYGON = 137,
    POLYGON_MUMBAI = 80001,
    BSC = 56,
    BSC_TESTNET = 97,
    OPTIMISM = 10,
    OPTIMISM_TESTNET = 69,
    ARBITRUM = 42161,
    ARBITRUM_TESTNET = 421611,
    ARBITRUM_NOVA = 42170,
    AVALANCHE = 43114,
    AVALANCHE_TESTNET = 43113,
    FANTOM = 250,
    FANTOM_TESTNET = 4002,
    GNOSIS = 100,
    AURORA = 1313161554,
    AURORA_TESTNET = 1313161556
}

export interface NetworkConfig {
    title?: string;
    name: string;
    chainId: number;
    testnet?: boolean;
    blockExplorer?: BlockExplorerConfig;
    rpcUrl?: string;
    provider?: providers.JsonRpcProvider;
    indexerUrl?: string;
    isDefaultChain?: boolean;
    isAuthChain?: boolean;
    disabled?: boolean;
}

export declare type BlockExplorerConfig = {
    name?: string;
    rootUrl: string;
    addressUrl?: string;
    txnHashUrl?: string;
};

export declare type ChainIdLike = NetworkConfig | BigNumberish;