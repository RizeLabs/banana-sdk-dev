import { BigNumberish, BytesLike } from 'ethers';
import UserOperation from '../utils/userOperation'
export interface ClientConfig {
    bundlerUrl: string;
    entryPointAddress: string;
}

export interface PublicKey {
    q0: string;
    q1: string;
    encodedId: string;
}

export interface UserCredentialObject {
    q0: string;
    q1: string;
    walletAddress: string;
    initcode: boolean;
    encodedId: string;
    username: string
    saltNonce: string
}

export interface CookieObject {
    q0: string;
    q1: string;
    scwAddress: string;
    initContract: boolean;
}

export interface ChainConfig {
    Elliptic: string;
    TouchIdSafeWalletContractProxyFactoryAddress: string;
    TouchIdSafeWalletContractSingletonAddress: string;
    fallBackHandlerAddress: string;
}

export interface TransactionDetailsForUserOp {
    target: string
    data: string
    value?: BigNumberish
    gasLimit?: BigNumberish
    maxFeePerGas?: BigNumberish
    maxPriorityFeePerGas?: BigNumberish
}

export interface ChainSpecificConfig {
    jsonRpcUrl: string
}

export interface ConnectOptions {
    networkId: string | number
}

export type NativeCurrency = {
    name: string;
    /** 2-6 characters long */
    symbol: string;
    decimals: number;
};

export type RpcUrls = {
    http: string[];
    webSocket?: string[];
};

export type BlockExplorer = {
    name: string;
    url: string;
};

export type Address = `0x${string}`;

export type Contract = {
    address: Address;
    blockCreated?: number;
};

export type Chain = {
    /** ID in number form */
    id: number;
    /** Human-readable name */
    name: string;
    /** Internal network name */
    network: string;
    /** Currency used by chain */
    nativeCurrency: NativeCurrency;
    /** Collection of RPC endpoints */
    rpcUrls: {
        [key: string]: RpcUrls;
        default: RpcUrls;
        public: RpcUrls;
    };
    /** Collection of block explorers */
    blockExplorers?: {
        [key: string]: BlockExplorer;
        default: BlockExplorer;
    };
    /** Collection of contracts */
    contracts?: {
        ensRegistry?: Contract;
        multicall3?: Contract;
    };
    /** Flag for test networks */
    testnet?: boolean;
};