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
export const ZKEVM_TESTNET_RPC = 'https://polygonzkevm-testnet.g.alchemy.com/v2/wEkYECwDd4ycMW5qmAcg6P48fJM0dmgr'
export const MANTLE_TESTNET_RPC = 'https://rpc.testnet.mantle.xyz'
export const LOCALNODE = "http://127.0.0.1:8545"

export enum Chains {
    goerli = 5,
    mumbai = 80001,
    optimismTestnet = 420,
    arbitrumTestnet = 421613,
    gnosis = 100,
    chiadoTestnet = 10200,
    polygonZkevmTestnet = 1442,
    mantleTestnet = 5001,
    localhost = 8545,
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
                "bundlerUrl": "http://0.0.0.0:14337/80001/"
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
        case Chains.polygonZkevmTestnet:
            return {
                // "entryPointAddress": "0x74CB3f9FFfFb1E50800af1694AB1d9F8b2D88B11",
                // "entryPointAddress": "0x309159662e2395293BEDC08c27d2818aD4b1A89d",
                // "entryPointAddress": "0xA9B2bd6D884F35392704595c0b18869DA436317d", // -- working
                "entryPointAddress": "0x3ab7eA73a17B5429598C8F27F9644A94B49FCFCA",
                "bundlerUrl": "http://localhost:3000/rpc"
            }
        case Chains.mantleTestnet:  
            return {
                "entryPointAddress": "0x8E43cAe055c8AaDe80B87a1a944646E1187a45A9",
                "bundlerUrl": "http://0.0.0.0:14337/5001/"
            }
        case Chains.localhost:
            return {
                "entryPointAddress": "0x8fC8CFB7f7362E44E472c690A6e025B80E406458",
                "bundlerUrl": "http://localhost:3000/rpc"
            }
     }
}

export function getChainSpecificAddress(chain: Chains): ChainConfig {
    switch (chain) {
        case Chains.goerli: //mi
        return {
            "Elliptic": "0xEA4d16E741E76E7a93b8f46650537855149efc48",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0xC69a1bfF74074BF4117CC39Be954a3d410a74Bec",
            "TouchIdSafeWalletContractSingletonAddress": "0x154Ccd13f501eE7Cad227c8eb888BBab96ffE78F",
            "fallBackHandlerAddress": "0x82Ee69Db954d9648fF8191bB831B9f679E5bAcb0"
        };
        case Chains.optimismTestnet: // mi
        return {
            "Elliptic": "0xEA4d16E741E76E7a93b8f46650537855149efc48",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0xC69a1bfF74074BF4117CC39Be954a3d410a74Bec",
            "TouchIdSafeWalletContractSingletonAddress": "0x154Ccd13f501eE7Cad227c8eb888BBab96ffE78F",
            "fallBackHandlerAddress": "0x82Ee69Db954d9648fF8191bB831B9f679E5bAcb0"
        };
        case Chains.mumbai: // mi
        return {
            "Elliptic": "0xEA4d16E741E76E7a93b8f46650537855149efc48",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0xC69a1bfF74074BF4117CC39Be954a3d410a74Bec",
            "TouchIdSafeWalletContractSingletonAddress": "0x154Ccd13f501eE7Cad227c8eb888BBab96ffE78F",
            "fallBackHandlerAddress": "0x82Ee69Db954d9648fF8191bB831B9f679E5bAcb0"
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
            "TouchIdSafeWalletContractProxyFactoryAddress": "0xEA4d16E741E76E7a93b8f46650537855149efc48",
            "TouchIdSafeWalletContractSingletonAddress": "0x8505F94693Dbd0756c733056924de3f71a020f2E",
            "fallBackHandlerAddress": "0x72892C35B8E1256F323DE365ADbB71E7C7948CDF"
        };
        case Chains.chiadoTestnet:
        return {
            "Elliptic": "0x200E1d8BC6d3F6ddB5a26bbbC5b839f2D5213407",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0x3AB5cB0d32665363559F2B8aff9Cbe9bC2193780",
            "TouchIdSafeWalletContractSingletonAddress": "0xF1Fae5392dce474fc1c2D98c645f438d6c760E78",
            "fallBackHandlerAddress": "0xB88902418706f095E831E80bA766c151d3E1848D"
        };
        case Chains.polygonZkevmTestnet: 
        return {
            "Elliptic": "0x824Eae34D5bB73FE97969dc80f01c5baf0D3f8D6",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0x3c18aEb27EDDB0349366C4448AA19f725d1BC1F8",
            "TouchIdSafeWalletContractSingletonAddress": "0xFa5aA09b01A97891dda68A27C42538514f50611d",
            "fallBackHandlerAddress": "0x9C0A83154846725446EF3907DaAb41951d2635A1"
        }
        case Chains.mantleTestnet:
        return {
            "Elliptic": "0xFd9878446Cd1D7A4EF4c923B6b9acE98dAcE3a06",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0x9EEbC5345A1796D06F493968d52f79949E904905",
            "TouchIdSafeWalletContractSingletonAddress": "0x94a083BAA1b160C64f32ad5496226FAf7Ef2140e",
            "fallBackHandlerAddress": "0x7E04a54255779229C2155E2c121EEE4CD02A6A14"
        }
        case Chains.localhost:
        return {
            "Elliptic": "0x87006e75a5B6bE9D1bbF61AC8Cd84f05D9140589",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0x7B4f352Cd40114f12e82fC675b5BA8C7582FC513",
            "TouchIdSafeWalletContractSingletonAddress": "0xcE0066b1008237625dDDBE4a751827de037E53D2",
            "fallBackHandlerAddress": "0x82EdA215Fa92B45a3a76837C65Ab862b6C7564a8"
        }
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
        case Chains.polygonZkevmTestnet:
        return {
            jsonRpcUrl: ZKEVM_TESTNET_RPC
        }
        case Chains.mantleTestnet:
        return {
            jsonRpcUrl: MANTLE_TESTNET_RPC
        }
        case Chains.localhost:
        return {
            jsonRpcUrl: LOCALNODE
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