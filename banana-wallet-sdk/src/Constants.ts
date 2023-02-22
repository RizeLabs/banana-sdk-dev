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
                "entryPointAddress": "0x8ADd98477E39569e15d807482FFDA67aAd347207",
                "bundlerUrl": "https://polygon.eip4337-bunder.xyz/rpc"
            };
        case Chains.optimismTestnet:
            return {
                "entryPointAddress": "0x17583e7Ff84f336B305D470900C716DCd02627e3",
                "bundlerUrl": "http://localhost:80/rpc"
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
            "MyWalletDeployer": "0xeccfb3b25378f80Df99da1Bc4d826A6C4c6eC73B",
            "Elliptic": "0x91703a4b78A084B479294634F37A0eA5924D1Ad0"
        };
        case Chains.matic: 
        return {
            "MyWalletDeployer": "0xeccfb3b25378f80Df99da1Bc4d826A6C4c6eC73B",
            "Elliptic": "0x91703a4b78A084B479294634F37A0eA5924D1Ad0"
        };
        case Chains.mumbai: 
        return {
            "MyWalletDeployer": "0x0F5d340C923e12ba8d8204B6fca1cd134d5B204C",
            "Elliptic": "0x189c17979aF3cECE12771Dc959254C6DdEc7439b"
        };
    }
}