import { ClientConfig } from "@account-abstraction/sdk";

export enum Chains {
    goerli,
    matic,
    mumbai,
    optimism
}

export default function getClientConfigInfo(chain: Chains): ClientConfig {
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
                "bundlerUrl": "https://optimismeip4337-banana-bundler.xyz/rpc"
            };
        case Chains.optimism:
            return {
                "entryPointAddress": "0x11ed65bbc8361e0a7869f51fb9a7fc15bd44a8f6",
                "bundlerUrl": "http://localhost:80/rpc"
            };
    }
}

// myWalletDeployer : 0xF248E2ba728Dc6f8143bDC37226A2792e7c4bbc7
// Elliptic : 0x5051B73E8E24a740863f61B6ff1FfB23d26e7A87
// staking : 0x6863F12EA6A16b9ACBd7210ee2CA5C369A9629a0
// entryPoint : 0xb124f5DB610f2aBC9b3A1b4297f9037b6D84A29A