import { ClientConfig } from "@account-abstraction/sdk";
import { ChainConfig } from "./interfaces/Banana.interface";

export enum Chains {
    goerli,
    mumbai,
    optimismTestnet,
    arbitrum,
    zkevm,
    hyperspaceFVM,
    moonbaseAlpha
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
        case Chains.arbitrum: 
            return {
                "entryPointAddress": "0x0576a174D229E3cFA37253523E645A78A0C91B57",
                "bundlerUrl": "http://localhost:80/rpc" // arbitrum bundler 
            };
        case Chains.zkevm:
            return {
                "entryPointAddress": "0x1F88d74aD5C91bc9E7A04622b3B81918C9d4D958",
                "bundlerUrl": "http://localhost:80/rpc" // zkevm testnet
            }
        case Chains.hyperspaceFVM:
            return {
                "entryPointAddress": "0x0Bd06f21d952C63be8A2fb5d02d09F817F529Cb9",
                "bundlerUrl": "http://localhost:80/rpc" // zkevm testnet
            }
        case Chains.moonbaseAlpha:
            return {
                "entryPointAddress": "0x0Bd06f21d952C63be8A2fb5d02d09F817F529Cb9",
                "bundlerUrl": "http://localhost:80/rpc" // zkevm testnet
            }
     }
}

export function getChainSpecificAddress(chain: Chains): ChainConfig {
    switch (chain) {
        case Chains.goerli: 
        return {
            "Elliptic": "0xa5d0D7e820F6f8A0DC68722e41801a1dcfAE2403",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0x2cB39E2248251f104DbF5fdE528b77aE7415fD99",
            "TouchIdSafeWalletContractSingletonAddress": "0xfB988d2047526761cb34485AD519761278cE596D",
            "fallBackHandlerAddress": "0xc1d4982E6126BF76959Fe21b53189bc2a717e243"
        };
        case Chains.optimismTestnet:
        return {
            "Elliptic": "0x91703a4b78A084B479294634F37A0eA5924D1Ad0",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0xf2DA9326F95c5aD195BC6ED366289E0F95d7Bc42",
            "TouchIdSafeWalletContractSingletonAddress": "0xb0A0Efe6a5b2B03F75F0bF7e2e0EdEee214e9D90",
            "fallBackHandlerAddress": "0xED5F8EDAD5a78ca55FB491615a228EAf30645d75"
        };
        case Chains.mumbai: 
        return {
            "Elliptic": "0x7efd1b4C0469f43AbbE1a5946eBD4A1734d1b79E",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0xe5b37ba779d21d8aB5A2DFa2DfDBA7a41f3Adc77",
            "TouchIdSafeWalletContractSingletonAddress": "0x66D61387800d62695Df91A2018f54Eec3b832a34",
            "fallBackHandlerAddress": "0xFcB4caE05f6F47Ef8EDEF98375Cd5180E03ad575"
        };
        case Chains.arbitrum:
        return {
            "Elliptic": "0x3b8bC8DFaF8122Bc5701c504A92B8008FE3efbf7",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0xC731C32AD4aE5b83593424f0ba2a9bA9173474b8",
            "TouchIdSafeWalletContractSingletonAddress": "0xb861F1E9b978c81763a2fB66D6b79Ea4a13fbF0c",
            "fallBackHandlerAddress": "0xFd9878446Cd1D7A4EF4c923B6b9acE98dAcE3a06"
        }
        case Chains.zkevm:
        return {
            "Elliptic": "0x7E04a54255779229C2155E2c121EEE4CD02A6A14",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0x94a083BAA1b160C64f32ad5496226FAf7Ef2140e",
            "TouchIdSafeWalletContractSingletonAddress": "0xC731C32AD4aE5b83593424f0ba2a9bA9173474b8",
            "fallBackHandlerAddress": "0x9EEbC5345A1796D06F493968d52f79949E904905"
        }
        case Chains.hyperspaceFVM:
        return {
            "Elliptic": "0x6FfD9FC2650E17853544Cd15E58A7c919F1D5c65",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0x05eeB2B802DaA5665A2316c7775E346db8FA368B",
            "TouchIdSafeWalletContractSingletonAddress": "0x44fB967Fe37F365E10E9F1bFA5d26a9D0a0Fd8c2",
            "fallBackHandlerAddress": "0xda753BCdf5D20986E8266F5c41EF80271dcEaF14"
        }
        case Chains.moonbaseAlpha:
            return {
                "Elliptic": "0x6FfD9FC2650E17853544Cd15E58A7c919F1D5c65",
                "TouchIdSafeWalletContractProxyFactoryAddress": "0x05eeB2B802DaA5665A2316c7775E346db8FA368B",
                "TouchIdSafeWalletContractSingletonAddress": "0x44fB967Fe37F365E10E9F1bFA5d26a9D0a0Fd8c2",
                "fallBackHandlerAddress": "0xda753BCdf5D20986E8266F5c41EF80271dcEaF14"
            }
    }
}