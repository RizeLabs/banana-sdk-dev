import { ClientConfig } from "@account-abstraction/sdk";
import { ChainConfig, ChainSpecificConfig } from "./interfaces/Banana.interface";

export const BANANA_APP = 'https://bananawallet.xyz';
export const BANANA_SERVER = 'https://banana-server.xyz'
export const OPTIMISM_TESTNET_RPC = 'https://opt-goerli.g.alchemy.com/v2/Q37EPFzF1O8kJt4oTob4ytwuUFTW0Gas';
export const MUMBAI_RPC = 'https://polygon-mumbai.g.alchemy.com/v2/cNkdRWeB8oylSQJSA2V3Xev2PYh5YGr4';
export const ARBITRUM_TESTNET_RPC = 'https://arb-goerli.g.alchemy.com/v2/i-ei4ue2tQfCNvYGJ63NWcv8U8nEl0dw';
export const GOERLI_RPC = 'https://eth-goerli.g.alchemy.com/v2/IaVkSX3wU98rK7vpVyFgIryaaHfYpoST';

export enum Chains {
    goerli = 5,
    mumbai = 80001,
    optimismTestnet = 420,
    arbitrumTestnet = 421613
}

export function getClientConfigInfo(chain: Chains): ClientConfig {
    switch (chain) {
        case Chains.goerli:
            return {
                "entryPointAddress": "0x0576a174D229E3cFA37253523E645A78A0C91B57",
                "bundlerUrl": "https://goerli.eip4337-banana-bundler.xyz/rpc" // goerli bundler 
            };
        case Chains.mumbai:
            return {
                "entryPointAddress": "0x0576a174D229E3cFA37253523E645A78A0C91B57",
                "bundlerUrl": "https://node.stackup.sh/v1/rpc/d976cb6c36d878479eb87494ad0301126fa87c2886325161fb3d455b484a9451" // mumbai bundler 
            };
        case Chains.optimismTestnet:
            return {
                "entryPointAddress": "0x0576a174D229E3cFA37253523E645A78A0C91B57",
                "bundlerUrl": "https://optimism.eip4337-bunder.xyz/rpc" // optimism bundler 
            }
        case Chains.arbitrumTestnet:
            return {
                "entryPointAddress": "0x0576a174D229E3cFA37253523E645A78A0C91B57",
                "bundlerUrl": "http://localhost:80/rpc" // arbitrum bundler 
            };
     }
}

export function getChainSpecificAddress(chain: Chains): ChainConfig {
    switch (chain) {
        case Chains.goerli: //mi
        return {
            "Elliptic": "0xDf6fFfB5Ec52A73F7C96e2818dBD46B7d4009b94",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0x51283946fbB01150B558159ea4B6F43Dedd253A4",
            "TouchIdSafeWalletContractSingletonAddress": "0xA0b3C7c163A17C0BC11939745cAd0C1EB82108E0",
            "fallBackHandlerAddress": "0x0ed1f75AA9A33ab0756725cE7f841b13Fde47B0C"
        };
        case Chains.optimismTestnet: // mi
        return {
            "Elliptic": "0xDf6fFfB5Ec52A73F7C96e2818dBD46B7d4009b94",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0x51283946fbB01150B558159ea4B6F43Dedd253A4",
            "TouchIdSafeWalletContractSingletonAddress": "0xA0b3C7c163A17C0BC11939745cAd0C1EB82108E0",
            "fallBackHandlerAddress": "0x0ed1f75AA9A33ab0756725cE7f841b13Fde47B0C"
        };
        case Chains.mumbai: // mi
        return {
            "Elliptic": "0xDf6fFfB5Ec52A73F7C96e2818dBD46B7d4009b94",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0x51283946fbB01150B558159ea4B6F43Dedd253A4",
            "TouchIdSafeWalletContractSingletonAddress": "0xA0b3C7c163A17C0BC11939745cAd0C1EB82108E0",
            "fallBackHandlerAddress": "0x0ed1f75AA9A33ab0756725cE7f841b13Fde47B0C"
        };
        case Chains.arbitrumTestnet: 
        return {
            "Elliptic": "0xDf6fFfB5Ec52A73F7C96e2818dBD46B7d4009b94",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0x9F21ECfD79A79d40d0B47005F1b7C217009594c5",
            "TouchIdSafeWalletContractSingletonAddress": "0x6001E203c53Df75A1b0bc44A9438e84628B95c12",
            "fallBackHandlerAddress": "0x6eAeD0C3429808DE0a6C177AC63aC46c594b283f"
        };
    }
}

// enabling multi network infra for arbitrum, mumbai, optimism
export function getChainSpecificConfig(chain: Chains): ChainSpecificConfig {
    switch (chain) {
        case Chains.goerli: 
        return {
            jsonRpcUrl: GOERLI_RPC
        };
        case Chains.optimismTestnet:
        return {
            jsonRpcUrl: OPTIMISM_TESTNET_RPC
        };
        case Chains.mumbai: 
        return {
            jsonRpcUrl: MUMBAI_RPC
        };
        case Chains.arbitrumTestnet:
        return {
            jsonRpcUrl: ARBITRUM_TESTNET_RPC
        }
    }
}

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