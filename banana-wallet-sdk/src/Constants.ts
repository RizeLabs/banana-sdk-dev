import { ClientConfig } from "@account-abstraction/sdk";
import { ChainConfig, ChainSpecificConfig } from "./interfaces/Banana.interface";

export const BANANA_APP = 'https://bananawallet.xyz';
export const BANANA_SERVER = 'https://banana-server.xyz'
export const OPTIMISM_TESTNET_RPC = 'https://opt-goerli.g.alchemy.com/v2/Q37EPFzF1O8kJt4oTob4ytwuUFTW0Gas';
export const MUMBAI_RPC = 'https://polygon-mumbai.g.alchemy.com/v2/cNkdRWeB8oylSQJSA2V3Xev2PYh5YGr4';
export const ARBITRUM_TESTNET_RPC = 'https://arb-goerli.g.alchemy.com/v2/i-ei4ue2tQfCNvYGJ63NWcv8U8nEl0dw';
export const GOERLI_RPC = 'https://eth-goerli.g.alchemy.com/v2/IaVkSX3wU98rK7vpVyFgIryaaHfYpoST';
export const GNOSIS_RPC = 'https://rpc.gnosischain.com/';
export const CHIADO_TESTNET_RPC = 'https://rpc.chiado.gnosis.gateway.fm';

export enum Chains {
    goerli = 5,
    mumbai = 80001,
    optimismTestnet = 420,
    arbitrumTestnet = 421613,
    gnosis = 100,
    chiadoTestnet = 10200,
}

export function getClientConfigInfo(chain: Chains): ClientConfig {
    switch (chain) {
        case Chains.goerli:
            return {
                "entryPointAddress": "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
                "bundlerUrl": "https://api.pimlico.io/v1/goerli/rpc?apikey=1849c85d-46c8-4bee-8a6d-d6a0cba4d445" // goerli bundler 
            };
        case Chains.mumbai:
            return {
                "entryPointAddress": "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
                "bundlerUrl": "https://api.stackup.sh/v1/node/4bdce488aaada61f31c31315a18106eda076b12836a9ab44158fbf7a5c6cbea9"
            };
        case Chains.optimismTestnet:
            return {
                "entryPointAddress": "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
                "bundlerUrl": "https://api.pimlico.io/v1/optimism-goerli/rpc?apikey=1849c85d-46c8-4bee-8a6d-d6a0cba4d445" // optimism bundler 
            }
        case Chains.arbitrumTestnet:
            return {
                "entryPointAddress": "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
                "bundlerUrl": "http://localhost:80/rpc" // arbitrum bundler 
            };
        case Chains.gnosis: 
            return {
                "entryPointAddress": "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
                "bundlerUrl": "https://api.pimlico.io/v1/gnosis/rpc?apikey=1849c85d-46c8-4bee-8a6d-d6a0cba4d445"
            };
        case Chains.chiadoTestnet: 
            return {
                "entryPointAddress": "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
                "bundlerUrl": "https://api.pimlico.io/v1/chiado-testnet/rpc?apikey=1849c85d-46c8-4bee-8a6d-d6a0cba4d445"
            }
     }
}

export function getChainSpecificAddress(chain: Chains): ChainConfig {
    switch (chain) {
        case Chains.goerli: //mi
        return {
            "Elliptic": "0xEA4d16E741E76E7a93b8f46650537855149efc48",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0xF1Fae5392dce474fc1c2D98c645f438d6c760E78",
            "TouchIdSafeWalletContractSingletonAddress": "0x33FF9B2A40810fA6B0cA5824fd2C189953ffD5D9",
            "fallBackHandlerAddress": "0x414Ce649934a1b3cAE1903411e325E4159C46474"
        };
        case Chains.optimismTestnet: // mi
        return {
            "Elliptic": "0xEA4d16E741E76E7a93b8f46650537855149efc48",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0xF1Fae5392dce474fc1c2D98c645f438d6c760E78",
            "TouchIdSafeWalletContractSingletonAddress": "0x33FF9B2A40810fA6B0cA5824fd2C189953ffD5D9",
            "fallBackHandlerAddress": "0x414Ce649934a1b3cAE1903411e325E4159C46474"
        };
        case Chains.mumbai: // mi
        return {
            "Elliptic": "0xEA4d16E741E76E7a93b8f46650537855149efc48",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0xF1Fae5392dce474fc1c2D98c645f438d6c760E78",
            "TouchIdSafeWalletContractSingletonAddress": "0x33FF9B2A40810fA6B0cA5824fd2C189953ffD5D9",
            "fallBackHandlerAddress": "0x414Ce649934a1b3cAE1903411e325E4159C46474"
        };
        case Chains.arbitrumTestnet: 
        return {
            "Elliptic": "0xEA4d16E741E76E7a93b8f46650537855149efc48",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0xF1Fae5392dce474fc1c2D98c645f438d6c760E78",
            "TouchIdSafeWalletContractSingletonAddress": "0x33FF9B2A40810fA6B0cA5824fd2C189953ffD5D9",
            "fallBackHandlerAddress": "0x414Ce649934a1b3cAE1903411e325E4159C46474"
        };
        case Chains.gnosis:
        return {
            "Elliptic": "0xC29fDf5544312E23d9cDa9fB67388d040Fdbf434",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0x50E499307bE4EDc700c7B61AaDfE2dbC0FB00e1e",
            "TouchIdSafeWalletContractSingletonAddress": "0x19eEc1aE90bdC20C1c52DeD3273eEb78A08696A5",
            "fallBackHandlerAddress": "0x6075D9f2B9bF149fF2539fA5F1bcc8F3ed47F7A6"
        };
        case Chains.chiadoTestnet:
        return {
            "Elliptic": "0x200E1d8BC6d3F6ddB5a26bbbC5b839f2D5213407",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0xb4Eb7011ec66c47eE9629bC51B7DAEadB0f6c584",
            "TouchIdSafeWalletContractSingletonAddress": "0xD957539B0fA14feEeeD447F40cc2686D16d97688",
            "fallBackHandlerAddress": "0xB88902418706f095E831E80bA766c151d3E1848D"
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
        case Chains.gnosis:
        return {
            jsonRpcUrl: GNOSIS_RPC
        }
        case Chains.chiadoTestnet:
        return {
            jsonRpcUrl: CHIADO_TESTNET_RPC
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