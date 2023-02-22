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
                // "entryPointAddress": "0xd5dCACbCa1895347ec142D40a5a3BCf5f72BCc99",
                "entryPointAddress": "0x8ADd98477E39569e15d807482FFDA67aAd347207",
                "bundlerUrl": "http://localhost:80/rpc"
            };
        case Chains.optimismTestnet:
            return {
                // "entryPointAddress": "0x11Ed65bbc8361E0a7869F51Fb9A7FC15bd44a8F6",
                // "entryPointAddress": "0x1a42Ed84517EB963108668CF3B557d3Ecce52D10",
                // "entryPointAddress": "0x471EdC1967bffBfe9213083B062F1F27d8C31324",
                // "entryPointAddress": "0x0576a174D229E3cFA37253523E645A78A0C91B57",
                // "entryPointAddress": "0x6FE1ee9520cc8F5F1060B267B889a6d66E2ca5f8",
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
            // "MyWalletDeployer": "0xF9B3f03F2C215eAD853b7A7239746888703989F4", // without signature logic
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
            // "MyWalletDeployer": "0xb0A0Efe6a5b2B03F75F0bF7e2e0EdEee214e9D90",
            "MyWalletDeployer": "0x71CaC8CDf64975A1E936AFC25DF15Fe8b6f8F56B",
            "Elliptic": "0x189c17979aF3cECE12771Dc959254C6DdEc7439b"
        };
    }
}