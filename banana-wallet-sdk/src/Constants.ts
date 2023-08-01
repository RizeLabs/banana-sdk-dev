import { ClientConfig } from "@account-abstraction/sdk";
import {
  ChainConfig,
  ChainSpecificConfig,
} from "./interfaces/Banana.interface";

export const BANANA_APP_URL = 'http://localhost:3001';
export const BANANA_SERVER = 'http://localhost:80';
export const OPTIMISM_TESTNET_RPC =
  "https://opt-goerli.g.alchemy.com/v2/Q37EPFzF1O8kJt4oTob4ytwuUFTW0Gas";
export const MUMBAI_RPC =
  "https://polygon-mumbai.g.alchemy.com/v2/cNkdRWeB8oylSQJSA2V3Xev2PYh5YGr4";
export const GOERLI_RPC =
  "https://eth-goerli.g.alchemy.com/v2/IaVkSX3wU98rK7vpVyFgIryaaHfYpoST";
export const GNOSIS_RPC = "https://rpc.gnosischain.com/";
export const CHIADO_TESTNET_RPC = "https://rpc.chiado.gnosis.gateway.fm";
export const SHIBUYA_TESTNET_RPC = "https://evm.shibuya.astar.network";
export const POLYGON_MAINNET_RPC = "https://polygon-mainnet.g.alchemy.com/v2/M6obmh9NhecgkyNlK0G00anwrpBnjzwA";
export const ASTAR_MAINNET_RPC = "https://astar.public.blastapi.io";
export const ENTRYPOINT_ADDRESS = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";
export const BUNDLER_EOA_PUBLIC_KEY =
  "0x48701dF467Ba0efC8D8f34B2686Dc3b0A0b1cab5";
export const BUNDLER_EOA_PRIVATE_KEY =
  "0xed096a60e1af7c04519965c9e1fe105b2cd287afd49e4f1d77744f91ab5eb36e";
export const BENEFICIARY = "0xF9ca16Fb8D6F38d36505961dAd69d2011C4695cF";

export enum Methods {
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export const CANCEL_ACTION = 'cancell';

export enum Chains {
  goerli = 5,
  mumbai = 80001,
  polygonMainnet = 137,
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
    case Chains.polygonMainnet:
      return {
        entryPointAddress: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
        bundlerUrl: "https://api.pimlico.io/v1/polygon/rpc?apikey=1849c85d-46c8-4bee-8a6d-d6a0cba4d445",
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
    case Chains.goerli:
      return {
        Elliptic: "0xEA4d16E741E76E7a93b8f46650537855149efc48",
        TouchIdSafeWalletContractProxyFactoryAddress:
          "0x8e5ffc77D0906618A8Ed73dB34f92Ea0251B327b",
        TouchIdSafeWalletContractSingletonAddress:
          "0xc51b3bB183E68f9258B580E70Ac18cd5B6C40C36",
        fallBackHandlerAddress: "0xac1c08a5a59cEA20518f7201bB0dda29d9454eb0",
      };
    case Chains.optimismTestnet: 
      return {
        Elliptic: "0xEA4d16E741E76E7a93b8f46650537855149efc48",
        TouchIdSafeWalletContractProxyFactoryAddress:
          "0x8e5ffc77D0906618A8Ed73dB34f92Ea0251B327b",
        TouchIdSafeWalletContractSingletonAddress:
          "0xc51b3bB183E68f9258B580E70Ac18cd5B6C40C36",
        fallBackHandlerAddress: "0xac1c08a5a59cEA20518f7201bB0dda29d9454eb0",
      };
    case Chains.mumbai: // mi
      return {
        Elliptic: "0xEA4d16E741E76E7a93b8f46650537855149efc48",
        TouchIdSafeWalletContractProxyFactoryAddress:
          "0x8e5ffc77D0906618A8Ed73dB34f92Ea0251B327b",
        TouchIdSafeWalletContractSingletonAddress:
          "0xc51b3bB183E68f9258B580E70Ac18cd5B6C40C36",
        fallBackHandlerAddress: "0xac1c08a5a59cEA20518f7201bB0dda29d9454eb0",
      };
    case Chains.gnosis:
      return {
        Elliptic: "0xC29fDf5544312E23d9cDa9fB67388d040Fdbf434",
        TouchIdSafeWalletContractProxyFactoryAddress:
          "0x8e5ffc77D0906618A8Ed73dB34f92Ea0251B327b",
        TouchIdSafeWalletContractSingletonAddress:
          "0xc51b3bB183E68f9258B580E70Ac18cd5B6C40C36",
        fallBackHandlerAddress: "0xac1c08a5a59cEA20518f7201bB0dda29d9454eb0",
      };
    case Chains.chiadoTestnet:
      return {
        Elliptic: "0x200E1d8BC6d3F6ddB5a26bbbC5b839f2D5213407",
        TouchIdSafeWalletContractProxyFactoryAddress:
          "0x8e5ffc77D0906618A8Ed73dB34f92Ea0251B327b",
        TouchIdSafeWalletContractSingletonAddress:
          "0xc51b3bB183E68f9258B580E70Ac18cd5B6C40C36",
        fallBackHandlerAddress: "0xac1c08a5a59cEA20518f7201bB0dda29d9454eb0",
      };
    case Chains.shibuyaTestnet:
      return {
        Elliptic: "0x3f0dD0521518cd0c6833eD2622aDe9a813f7E56e",
        TouchIdSafeWalletContractProxyFactoryAddress:
          "0x8e5ffc77D0906618A8Ed73dB34f92Ea0251B327b",
        TouchIdSafeWalletContractSingletonAddress:
          "0xc51b3bB183E68f9258B580E70Ac18cd5B6C40C36",
        fallBackHandlerAddress: "0xac1c08a5a59cEA20518f7201bB0dda29d9454eb0",
      };
    case Chains.polygonMainnet: 
      return {
        Elliptic: "0xd223a0D7cD198a5d448DeEdE81c63a3Ad4f244FC",
        TouchIdSafeWalletContractProxyFactoryAddress:
          "0x8e5ffc77D0906618A8Ed73dB34f92Ea0251B327b",
        TouchIdSafeWalletContractSingletonAddress:
          "0xc51b3bB183E68f9258B580E70Ac18cd5B6C40C36",
        fallBackHandlerAddress: "0xac1c08a5a59cEA20518f7201bB0dda29d9454eb0",
     };
    case Chains.astar:
    return {
        Elliptic: "0x652D29F01fdF8d0c20F78f51bAc9B173B3a76a9B",
        TouchIdSafeWalletContractProxyFactoryAddress:
          "0x8e5ffc77D0906618A8Ed73dB34f92Ea0251B327b",
        TouchIdSafeWalletContractSingletonAddress:
          "0xc51b3bB183E68f9258B580E70Ac18cd5B6C40C36",
        fallBackHandlerAddress: "0xac1c08a5a59cEA20518f7201bB0dda29d9454eb0",
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
    case Chains.polygonMainnet:
      return {
        jsonRpcUrl: POLYGON_MAINNET_RPC
      }
    case Chains.astar:
      return {
        jsonRpcUrl: ASTAR_MAINNET_RPC,
      }
  }
}