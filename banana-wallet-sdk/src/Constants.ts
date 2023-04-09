import { ClientConfig } from "@account-abstraction/sdk";
import { ChainConfig } from "./interfaces/Banana.interface";

export enum Chains {
    goerli,
    mumbai,
    optimismTestnet,
    polygon,
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
       case Chains.polygon:
            return {
                "entryPointAddress": "0x0576a174D229E3cFA37253523E645A78A0C91B57",
                "bundlerUrl": "http://localhost:80/rpc" // polygon bundler 
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
        case Chains.polygon: 
        return {
            "Elliptic": "0xd223a0D7cD198a5d448DeEdE81c63a3Ad4f244FC", //--
            "TouchIdSafeWalletContractProxyFactoryAddress": "0x9b601f8e34eff4Dffb7CA693626a584071B9588F", //--
            "TouchIdSafeWalletContractSingletonAddress": "0xb124f5DB610f2aBC9b3A1b4297f9037b6D84A29A", //--
            "fallBackHandlerAddress": "0x1dE8E294f6051d159095777051788B34609c9729"
        };
    }
}