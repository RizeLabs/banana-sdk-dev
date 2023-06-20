import { ClientConfig } from "@account-abstraction/sdk";
import {
  ChainConfig,
  ChainSpecificConfig,
} from "./interfaces/Banana.interface";

export const BANANA_APP = "https://bananawallet.xyz";
export const BANANA_SERVER = "https://banana-server.xyz";
export const OPTIMISM_TESTNET_RPC =
  "https://opt-goerli.g.alchemy.com/v2/Q37EPFzF1O8kJt4oTob4ytwuUFTW0Gas";
export const MUMBAI_RPC =
  "https://polygon-mumbai.g.alchemy.com/v2/cNkdRWeB8oylSQJSA2V3Xev2PYh5YGr4";
export const GOERLI_RPC =
  "https://eth-goerli.g.alchemy.com/v2/IaVkSX3wU98rK7vpVyFgIryaaHfYpoST";
export const GNOSIS_RPC = "https://rpc.gnosischain.com/";
export const CHIADO_TESTNET_RPC = "https://rpc.chiado.gnosis.gateway.fm";
export const SHIBUYA_TESTNET_RPC = "https://evm.shibuya.astar.network";
export const ASTAR_MAINNET_RPC = "https://astar.public.blastapi.io";
export const ENTRYPOINT_ADDRESS = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";
export const BUNDLER_EOA_PUBLIC_KEY =
  "0x48701dF467Ba0efC8D8f34B2686Dc3b0A0b1cab5";
export const BUNDLER_EOA_PRIVATE_KEY =
  "0xed096a60e1af7c04519965c9e1fe105b2cd287afd49e4f1d77744f91ab5eb36e";
export const BENEFICIARY = "0xF9ca16Fb8D6F38d36505961dAd69d2011C4695cF";

export enum Chains {
  goerli = 5,
  mumbai = 80001,
  optimismTestnet = 420,
  gnosis = 100,
  chiadoTestnet = 10200,
  shibuyaTestnet = 81,
  astar = 592,
}

export function getClientConfigInfo(chain: Chains): ClientConfig {
  switch (chain) {
    case Chains.goerli:
      return {
        entryPointAddress: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
        bundlerUrl:
          "https://api.pimlico.io/v1/goerli/rpc?apikey=1849c85d-46c8-4bee-8a6d-d6a0cba4d445", // goerli bundler
      };
    case Chains.mumbai:
      return {
        entryPointAddress: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
        bundlerUrl:
          "https://api.pimlico.io/v1/mumbai/rpc?apikey=1849c85d-46c8-4bee-8a6d-d6a0cba4d445",
      };
    case Chains.optimismTestnet:
      return {
        entryPointAddress: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
        bundlerUrl:
          "https://api.pimlico.io/v1/optimism-goerli/rpc?apikey=1849c85d-46c8-4bee-8a6d-d6a0cba4d445", // optimism bundler
      };
    case Chains.gnosis:
      return {
        entryPointAddress: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
        bundlerUrl:
          "https://api.pimlico.io/v1/gnosis/rpc?apikey=1849c85d-46c8-4bee-8a6d-d6a0cba4d445",
      };
    case Chains.chiadoTestnet:
      return {
        entryPointAddress: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
        bundlerUrl:
          "https://api.pimlico.io/v1/chiado-testnet/rpc?apikey=1849c85d-46c8-4bee-8a6d-d6a0cba4d445",
      };
    case Chains.shibuyaTestnet:
      return {
        entryPointAddress: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
        bundlerUrl: SHIBUYA_TESTNET_RPC,
      };
    case Chains.astar:
      return {
        entryPointAddress: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
        bundlerUrl: ASTAR_MAINNET_RPC
      };
  }
}

export function getChainSpecificAddress(chain: Chains): ChainConfig {
  switch (chain) {
    case Chains.goerli: //mi
      return {
        Elliptic: "0xEA4d16E741E76E7a93b8f46650537855149efc48",
        TouchIdSafeWalletContractProxyFactoryAddress:
          "0xC69a1bfF74074BF4117CC39Be954a3d410a74Bec",
        TouchIdSafeWalletContractSingletonAddress:
          "0x154Ccd13f501eE7Cad227c8eb888BBab96ffE78F",
        fallBackHandlerAddress: "0x82Ee69Db954d9648fF8191bB831B9f679E5bAcb0",
      };
    case Chains.optimismTestnet: // mi
      return {
        Elliptic: "0xEA4d16E741E76E7a93b8f46650537855149efc48",
        TouchIdSafeWalletContractProxyFactoryAddress:
          "0xC69a1bfF74074BF4117CC39Be954a3d410a74Bec",
        TouchIdSafeWalletContractSingletonAddress:
          "0x154Ccd13f501eE7Cad227c8eb888BBab96ffE78F",
        fallBackHandlerAddress: "0x82Ee69Db954d9648fF8191bB831B9f679E5bAcb0",
      };
    case Chains.mumbai: // mi
      return {
        Elliptic: "0xEA4d16E741E76E7a93b8f46650537855149efc48",
        TouchIdSafeWalletContractProxyFactoryAddress:
          "0xC69a1bfF74074BF4117CC39Be954a3d410a74Bec",
        TouchIdSafeWalletContractSingletonAddress:
          "0x3B1B6cd76D39B22826f652Dd380783f2fbA3444B",
        fallBackHandlerAddress: "0x82Ee69Db954d9648fF8191bB831B9f679E5bAcb0",
      };
    case Chains.gnosis:
      return {
        Elliptic: "0xC29fDf5544312E23d9cDa9fB67388d040Fdbf434",
        TouchIdSafeWalletContractProxyFactoryAddress:
          "0xEA4d16E741E76E7a93b8f46650537855149efc48",
        TouchIdSafeWalletContractSingletonAddress:
          "0x8505F94693Dbd0756c733056924de3f71a020f2E",
        fallBackHandlerAddress: "0x72892C35B8E1256F323DE365ADbB71E7C7948CDF",
      };
    case Chains.chiadoTestnet:
      return {
        Elliptic: "0x200E1d8BC6d3F6ddB5a26bbbC5b839f2D5213407",
        TouchIdSafeWalletContractProxyFactoryAddress:
          "0x3AB5cB0d32665363559F2B8aff9Cbe9bC2193780",
        TouchIdSafeWalletContractSingletonAddress:
          "0xF1Fae5392dce474fc1c2D98c645f438d6c760E78",
        fallBackHandlerAddress: "0xB88902418706f095E831E80bA766c151d3E1848D",
      };
    case Chains.shibuyaTestnet:
      return {
        Elliptic: "0x3f0dD0521518cd0c6833eD2622aDe9a813f7E56e",
        TouchIdSafeWalletContractProxyFactoryAddress:
          "0x02Da54e40c004fF59a904E98EDF4e1Ad9bb2aC82",
        TouchIdSafeWalletContractSingletonAddress:
          "0xe33fCA6E9A75529407224c593783aF778b80DC2a",
        fallBackHandlerAddress: "0xC99154BA90386DCD0C5aF6CC8cc271e5aAF57176",
      };
    case Chains.astar:
    return {
        Elliptic: "0x652D29F01fdF8d0c20F78f51bAc9B173B3a76a9B",
        TouchIdSafeWalletContractProxyFactoryAddress:
         "0x3A43b93362669087Be639e99B7a5B75d60E0B706",
        TouchIdSafeWalletContractSingletonAddress:
         "0x172F0658e4Bc99D97b6DA8880b9D4E1b7A26E407",
        fallBackHandlerAddress: "0xbF86c32B55657f0DE7cf56aD1B6F1aB9843D0F46",
    };
  }
}

// enabling multi network infra for arbitrum, mumbai, optimism
export function getChainSpecificConfig(chain: Chains): ChainSpecificConfig {
  switch (chain) {
    case Chains.goerli:
      return {
        jsonRpcUrl: GOERLI_RPC,
      };
    case Chains.optimismTestnet:
      return {
        jsonRpcUrl: OPTIMISM_TESTNET_RPC,
      };
    case Chains.mumbai:
      return {
        jsonRpcUrl: MUMBAI_RPC,
      };
    case Chains.gnosis:
      return {
        jsonRpcUrl: GNOSIS_RPC,
      };
    case Chains.chiadoTestnet:
      return {
        jsonRpcUrl: CHIADO_TESTNET_RPC,
      };
    case Chains.shibuyaTestnet:
      return {
        jsonRpcUrl: SHIBUYA_TESTNET_RPC,
      };
    case Chains.astar:
      return {
        jsonRpcUrl: ASTAR_MAINNET_RPC,
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
  AURORA_TESTNET = 1313161556,
}
