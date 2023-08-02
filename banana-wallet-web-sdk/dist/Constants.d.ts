import { ClientConfig } from "@account-abstraction/sdk";
import { ChainConfig, ChainSpecificConfig } from "./interfaces/Banana.interface";
export declare const BANANA_APP_URL = "https://www.bananawallet.xyz";
export declare const BANANA_SERVER = "https://banana-server.xyz";
export declare const OPTIMISM_TESTNET_RPC = "https://opt-goerli.g.alchemy.com/v2/Q37EPFzF1O8kJt4oTob4ytwuUFTW0Gas";
export declare const MUMBAI_RPC = "https://polygon-mumbai.g.alchemy.com/v2/cNkdRWeB8oylSQJSA2V3Xev2PYh5YGr4";
export declare const GOERLI_RPC = "https://eth-goerli.g.alchemy.com/v2/IaVkSX3wU98rK7vpVyFgIryaaHfYpoST";
export declare const GNOSIS_RPC = "https://rpc.gnosischain.com/";
export declare const CHIADO_TESTNET_RPC = "https://rpc.chiado.gnosis.gateway.fm";
export declare const SHIBUYA_TESTNET_RPC = "https://evm.shibuya.astar.network";
export declare const POLYGON_MAINNET_RPC = "https://polygon-mainnet.g.alchemy.com/v2/M6obmh9NhecgkyNlK0G00anwrpBnjzwA";
export declare const ASTAR_MAINNET_RPC = "https://astar.public.blastapi.io";
export declare const ENTRYPOINT_ADDRESS = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";
export declare const BUNDLER_EOA_PUBLIC_KEY = "0x48701dF467Ba0efC8D8f34B2686Dc3b0A0b1cab5";
export declare const BUNDLER_EOA_PRIVATE_KEY = "0xed096a60e1af7c04519965c9e1fe105b2cd287afd49e4f1d77744f91ab5eb36e";
export declare const BENEFICIARY = "0xF9ca16Fb8D6F38d36505961dAd69d2011C4695cF";
export declare enum Methods {
    POST = "POST",
    GET = "GET",
    PUT = "PUT",
    DELETE = "DELETE"
}
export declare const CANCEL_ACTION = "cancell";
export declare enum Chains {
    goerli = 5,
    mumbai = 80001,
    polygonMainnet = 137,
    optimismTestnet = 420,
    gnosis = 100,
    chiadoTestnet = 10200,
    shibuyaTestnet = 81,
    astar = 592
}
export declare function getClientConfigInfo(chain: Chains): ClientConfig;
export declare function getChainSpecificAddress(chain: Chains): ChainConfig;
export declare function getChainSpecificConfig(chain: Chains): ChainSpecificConfig;
