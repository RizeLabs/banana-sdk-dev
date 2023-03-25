import { ClientConfig } from "@account-abstraction/sdk";
import { ChainConfig } from "./interfaces/Banana.interface";

export enum Chains {
    goerli,
    matic,
    mumbai,
    optimismTestnet
}

export function getClientConfigInfo(chain: Chains): ClientConfig {
    switch (chain) {
        case Chains.goerli:
            return {
                "entryPointAddress": "0x2167fA17BA3c80Adee05D98F0B55b666Be6829d6",
                "bundlerUrl": "https://eip4337-banana-bundler.xyz/rpc"
            };
        case Chains.matic:
            return {
                "entryPointAddress": "0x2167fA17BA3c80Adee05D98F0B55b666Be6829d6",
                "bundlerUrl": "https://eip4337-banana-bundler.xyz/rpc"
            };
        case Chains.mumbai:
            return {
                "entryPointAddress": "0x0576a174D229E3cFA37253523E645A78A0C91B57",
                "bundlerUrl": "https://eip4337-banana-bundler.xyz/rpc"
            };
        case Chains.optimismTestnet:
            return {
                "entryPointAddress": "0x189c17979aF3cECE12771Dc959254C6DdEc7439b",
                "bundlerUrl": "https://optimism.eip4337-bunder.xyz/rpc"
            }
     }
}

export function getChainSpecificAddress(chain: Chains): ChainConfig {
    switch (chain) {
        case Chains.goerli: 
        return {
            "Elliptic": "0xa5d0D7e820F6f8A0DC68722e41801a1dcfAE2403",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0x074E09E9B4313a5cfE63bA1C70309F65442395bb",
            "TouchIdSafeWalletContractSingletonAddress": "0x43E016b8498A6b27B162B4578aD6096E0dac4900",
            "fallBackHandlerAddress": "0x43E016b8498A6b27B162B4578aD6096E0dac4900",
            "Referral": "0x2109876543210987654301098765432198765432"
        };
        case Chains.optimismTestnet:
        return {
            "Elliptic": "0x91703a4b78A084B479294634F37A0eA5924D1Ad0",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0xf2DA9326F95c5aD195BC6ED366289E0F95d7Bc42",
            "TouchIdSafeWalletContractSingletonAddress": "0xb0A0Efe6a5b2B03F75F0bF7e2e0EdEee214e9D90",
            "fallBackHandlerAddress": "0xED5F8EDAD5a78ca55FB491615a228EAf30645d75",
            "Referral": "0x2109876543210987654301098765432198765432"
        };
        case Chains.matic: 
        return {
            "Elliptic": "0x91703a4b78A084B479294634F37A0eA5924D1Ad0",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0x074E09E9B4313a5cfE63bA1C70309F65442395bb",
            "TouchIdSafeWalletContractSingletonAddress": "0x66D61387800d62695Df91A2018f54Eec3b832a34",
            "fallBackHandlerAddress": "0x43E016b8498A6b27B162B4578aD6096E0dac4900",
            "Referral": "0x2109876543210987654301098765432198765432"
        };
        case Chains.mumbai: 
        return {
            "Elliptic": "0x7efd1b4C0469f43AbbE1a5946eBD4A1734d1b79E",
            "TouchIdSafeWalletContractProxyFactoryAddress": "0xe5b37ba779d21d8aB5A2DFa2DfDBA7a41f3Adc77",
            "TouchIdSafeWalletContractSingletonAddress": "0x66D61387800d62695Df91A2018f54Eec3b832a34",
            "fallBackHandlerAddress": "0xFcB4caE05f6F47Ef8EDEF98375Cd5180E03ad575",
            "Referral": "0x2109876543210987654301098765432198765432"
        };
    }
}