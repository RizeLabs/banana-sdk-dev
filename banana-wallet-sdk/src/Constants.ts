import { ClientConfig } from "@account-abstraction/sdk";
import { ChainConfig, ChainSpecificConfig } from "./interfaces/Banana.interface";

export const OPTIMISM_TESTNET_RPC = 'https://opt-goerli.g.alchemy.com/v2/Q37EPFzF1O8kJt4oTob4ytwuUFTW0Gas';
export const MUMBAI_RPC = 'https://polygon-mumbai.g.alchemy.com/v2/cNkdRWeB8oylSQJSA2V3Xev2PYh5YGr4';
export const ARBITRUM_TESTNET_RPC = 'https://arb-goerli.g.alchemy.com/v2/i-ei4ue2tQfCNvYGJ63NWcv8U8nEl0dw';
export const GOERLI_RPC = 'https://eth-goerli.g.alchemy.com/v2/V5p1PckEwUqIq5s5rA2zvwRKH0V9Hslr';

export enum Chains {
    goerli,
    mumbai,
    optimismTestnet,
    arbitrumTestnet
}

export function getClientConfigInfo(chain: Chains): ClientConfig {
    switch (chain) {
        case Chains.goerli:
            return {
                "entryPointAddress": "0x0576a174D229E3cFA37253523E645A78A0C91B57",
                "bundlerUrl": "https://goerli.eip4337-banana-bundler.xyz/" // goerli bundler 
            };
        case Chains.mumbai:
            return {
                "entryPointAddress": "0x0576a174D229E3cFA37253523E645A78A0C91B57",
                "bundlerUrl": "https://eip4337-banana-bundler.xyz/rpc" // mumbai bundler 
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
        case Chains.goerli: 
        return {
            "Elliptic": "0xDf6fFfB5Ec52A73F7C96e2818dBD46B7d4009b94",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0xaa6bBbA9Cde638e58b4F01b4f98D73011FaB2b23",
            "TouchIdSafeWalletContractSingletonAddress": "0xdD230e4F566178739B999c1dF4F7362240887E46",
            "fallBackHandlerAddress": "0x668299a3cAB0821b6A9A6AA401a0Fe7f16cB0642"
        };
        case Chains.optimismTestnet:
        return {
            "Elliptic": "0xDf6fFfB5Ec52A73F7C96e2818dBD46B7d4009b94",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0xF6C1fBE5016602EB0f7dea83cDD39C4c934feea6",
            "TouchIdSafeWalletContractSingletonAddress": "0xdD230e4F566178739B999c1dF4F7362240887E46",
            "fallBackHandlerAddress": "0x668299a3cAB0821b6A9A6AA401a0Fe7f16cB0642"
        };
        case Chains.mumbai: 
        return {
            "Elliptic": "0xDf6fFfB5Ec52A73F7C96e2818dBD46B7d4009b94",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0xF6C1fBE5016602EB0f7dea83cDD39C4c934feea6",
            "TouchIdSafeWalletContractSingletonAddress": "0xdD230e4F566178739B999c1dF4F7362240887E46",
            "fallBackHandlerAddress": "0x668299a3cAB0821b6A9A6AA401a0Fe7f16cB0642"
        };
        case Chains.arbitrumTestnet: 
        return {
            "Elliptic": "0xDf6fFfB5Ec52A73F7C96e2818dBD46B7d4009b94",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0xaa6bBbA9Cde638e58b4F01b4f98D73011FaB2b23",
            "TouchIdSafeWalletContractSingletonAddress": "0xdD230e4F566178739B999c1dF4F7362240887E46",
            "fallBackHandlerAddress": "0x668299a3cAB0821b6A9A6AA401a0Fe7f16cB0642"
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