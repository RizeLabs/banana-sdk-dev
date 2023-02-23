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
                "entryPointAddress": "0x2167fA17BA3c80Adee05D98F0B55b666Be6829d6",
                "bundlerUrl": "https://eip4337-banana-bundler.xyz/rpc"
            };
        case Chains.optimismTestnet:
            return {
                "entryPointAddress": "0x11Ed65bbc8361E0a7869F51Fb9A7FC15bd44a8F6",
                "bundlerUrl": "https://optimism.eip4337-bunder.xyz/rpc"
            }
    }
}

export function getChainSpecificAddress(chain: Chains): ChainConfig {
    switch (chain) {
        case Chains.goerli: 
        return {
            "MyWalletDeployer": "0xe6a89A44d41d0C91eCD4E85367cca622A8000457",
            "Elliptic": "0xa5d0D7e820F6f8A0DC68722e41801a1dcfAE2403"
        };
        case Chains.optimismTestnet:
        return {
            "MyWalletDeployer": "0xb282af5b2f3DF6e0540ccC8F61Db95fa2fe7045D",
            "Elliptic": "0x91703a4b78A084B479294634F37A0eA5924D1Ad0"
        };
        case Chains.matic: 
        return {
            "MyWalletDeployer": "0xeccfb3b25378f80Df99da1Bc4d826A6C4c6eC73B",
            "Elliptic": "0x91703a4b78A084B479294634F37A0eA5924D1Ad0"
        };
        case Chains.mumbai: 
        return {
            "MyWalletDeployer": "0xeccfb3b25378f80Df99da1Bc4d826A6C4c6eC73B",
            "Elliptic": "0x91703a4b78A084B479294634F37A0eA5924D1Ad0"
        };
    }
}