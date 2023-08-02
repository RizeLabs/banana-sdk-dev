"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChainSpecificConfig = exports.getChainSpecificAddress = exports.getClientConfigInfo = exports.Chains = exports.CANCEL_ACTION = exports.Methods = exports.BENEFICIARY = exports.BUNDLER_EOA_PRIVATE_KEY = exports.BUNDLER_EOA_PUBLIC_KEY = exports.ENTRYPOINT_ADDRESS = exports.ASTAR_MAINNET_RPC = exports.POLYGON_MAINNET_RPC = exports.SHIBUYA_TESTNET_RPC = exports.CHIADO_TESTNET_RPC = exports.GNOSIS_RPC = exports.GOERLI_RPC = exports.MUMBAI_RPC = exports.OPTIMISM_TESTNET_RPC = exports.BANANA_SERVER = exports.BANANA_APP_URL = void 0;
exports.BANANA_APP_URL = 'https://www.bananawallet.xyz';
exports.BANANA_SERVER = 'https://banana-server.xyz';
exports.OPTIMISM_TESTNET_RPC = "https://opt-goerli.g.alchemy.com/v2/Q37EPFzF1O8kJt4oTob4ytwuUFTW0Gas";
exports.MUMBAI_RPC = "https://polygon-mumbai.g.alchemy.com/v2/cNkdRWeB8oylSQJSA2V3Xev2PYh5YGr4";
exports.GOERLI_RPC = "https://eth-goerli.g.alchemy.com/v2/IaVkSX3wU98rK7vpVyFgIryaaHfYpoST";
exports.GNOSIS_RPC = "https://rpc.gnosischain.com/";
exports.CHIADO_TESTNET_RPC = "https://rpc.chiado.gnosis.gateway.fm";
exports.SHIBUYA_TESTNET_RPC = "https://evm.shibuya.astar.network";
exports.POLYGON_MAINNET_RPC = "https://polygon-mainnet.g.alchemy.com/v2/M6obmh9NhecgkyNlK0G00anwrpBnjzwA";
exports.ASTAR_MAINNET_RPC = "https://astar.public.blastapi.io";
exports.ENTRYPOINT_ADDRESS = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";
exports.BUNDLER_EOA_PUBLIC_KEY = "0x48701dF467Ba0efC8D8f34B2686Dc3b0A0b1cab5";
exports.BUNDLER_EOA_PRIVATE_KEY = "0xed096a60e1af7c04519965c9e1fe105b2cd287afd49e4f1d77744f91ab5eb36e";
exports.BENEFICIARY = "0xF9ca16Fb8D6F38d36505961dAd69d2011C4695cF";
var Methods;
(function (Methods) {
    Methods["POST"] = "POST";
    Methods["GET"] = "GET";
    Methods["PUT"] = "PUT";
    Methods["DELETE"] = "DELETE";
})(Methods = exports.Methods || (exports.Methods = {}));
exports.CANCEL_ACTION = 'cancell';
var Chains;
(function (Chains) {
    Chains[Chains["goerli"] = 5] = "goerli";
    Chains[Chains["mumbai"] = 80001] = "mumbai";
    Chains[Chains["polygonMainnet"] = 137] = "polygonMainnet";
    Chains[Chains["optimismTestnet"] = 420] = "optimismTestnet";
    Chains[Chains["gnosis"] = 100] = "gnosis";
    Chains[Chains["chiadoTestnet"] = 10200] = "chiadoTestnet";
    Chains[Chains["shibuyaTestnet"] = 81] = "shibuyaTestnet";
    Chains[Chains["astar"] = 592] = "astar";
})(Chains = exports.Chains || (exports.Chains = {}));
function getClientConfigInfo(chain) {
    switch (chain) {
        case Chains.goerli:
            return {
                entryPointAddress: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
                bundlerUrl: "https://api.pimlico.io/v1/goerli/rpc?apikey=1849c85d-46c8-4bee-8a6d-d6a0cba4d445", // goerli bundler
            };
        case Chains.mumbai:
            return {
                entryPointAddress: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
                bundlerUrl: "https://api.pimlico.io/v1/mumbai/rpc?apikey=1849c85d-46c8-4bee-8a6d-d6a0cba4d445",
            };
        case Chains.optimismTestnet:
            return {
                entryPointAddress: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
                bundlerUrl: "https://api.pimlico.io/v1/optimism-goerli/rpc?apikey=1849c85d-46c8-4bee-8a6d-d6a0cba4d445", // optimism bundler
            };
        case Chains.gnosis:
            return {
                entryPointAddress: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
                bundlerUrl: "https://api.pimlico.io/v1/gnosis/rpc?apikey=1849c85d-46c8-4bee-8a6d-d6a0cba4d445",
            };
        case Chains.chiadoTestnet:
            return {
                entryPointAddress: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
                bundlerUrl: "https://api.pimlico.io/v1/chiado-testnet/rpc?apikey=1849c85d-46c8-4bee-8a6d-d6a0cba4d445",
            };
        case Chains.shibuyaTestnet:
            return {
                entryPointAddress: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
                bundlerUrl: exports.SHIBUYA_TESTNET_RPC,
            };
        case Chains.polygonMainnet:
            return {
                entryPointAddress: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
                // bundlerUrl: "https://api.pimlico.io/v1/polygon/rpc?apikey=1849c85d-46c8-4bee-8a6d-d6a0cba4d445",
                bundlerUrl: "https://api.stackup.sh/v1/node/ae1b4f72151fb2b79b2e7486f1f84e23af70b434396318d023e50bfdd8a833c3"
            };
        case Chains.astar:
            return {
                entryPointAddress: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
                bundlerUrl: exports.ASTAR_MAINNET_RPC
            };
    }
}
exports.getClientConfigInfo = getClientConfigInfo;
function getChainSpecificAddress(chain) {
    switch (chain) {
        case Chains.goerli:
            return {
                Elliptic: "0xEA4d16E741E76E7a93b8f46650537855149efc48",
                TouchIdSafeWalletContractProxyFactoryAddress: "0x8e5ffc77D0906618A8Ed73dB34f92Ea0251B327b",
                TouchIdSafeWalletContractSingletonAddress: "0xc51b3bB183E68f9258B580E70Ac18cd5B6C40C36",
                fallBackHandlerAddress: "0xac1c08a5a59cEA20518f7201bB0dda29d9454eb0",
            };
        case Chains.optimismTestnet:
            return {
                Elliptic: "0xEA4d16E741E76E7a93b8f46650537855149efc48",
                TouchIdSafeWalletContractProxyFactoryAddress: "0x8e5ffc77D0906618A8Ed73dB34f92Ea0251B327b",
                TouchIdSafeWalletContractSingletonAddress: "0xc51b3bB183E68f9258B580E70Ac18cd5B6C40C36",
                fallBackHandlerAddress: "0xac1c08a5a59cEA20518f7201bB0dda29d9454eb0",
            };
        case Chains.mumbai: // mi
            return {
                Elliptic: "0xEA4d16E741E76E7a93b8f46650537855149efc48",
                TouchIdSafeWalletContractProxyFactoryAddress: "0x8e5ffc77D0906618A8Ed73dB34f92Ea0251B327b",
                TouchIdSafeWalletContractSingletonAddress: "0xc51b3bB183E68f9258B580E70Ac18cd5B6C40C36",
                fallBackHandlerAddress: "0xac1c08a5a59cEA20518f7201bB0dda29d9454eb0",
            };
        case Chains.gnosis:
            return {
                Elliptic: "0xC29fDf5544312E23d9cDa9fB67388d040Fdbf434",
                TouchIdSafeWalletContractProxyFactoryAddress: "0x8e5ffc77D0906618A8Ed73dB34f92Ea0251B327b",
                TouchIdSafeWalletContractSingletonAddress: "0xc51b3bB183E68f9258B580E70Ac18cd5B6C40C36",
                fallBackHandlerAddress: "0xac1c08a5a59cEA20518f7201bB0dda29d9454eb0",
            };
        case Chains.chiadoTestnet:
            return {
                Elliptic: "0x200E1d8BC6d3F6ddB5a26bbbC5b839f2D5213407",
                TouchIdSafeWalletContractProxyFactoryAddress: "0x8e5ffc77D0906618A8Ed73dB34f92Ea0251B327b",
                TouchIdSafeWalletContractSingletonAddress: "0xc51b3bB183E68f9258B580E70Ac18cd5B6C40C36",
                fallBackHandlerAddress: "0xac1c08a5a59cEA20518f7201bB0dda29d9454eb0",
            };
        case Chains.shibuyaTestnet:
            return {
                Elliptic: "0x3f0dD0521518cd0c6833eD2622aDe9a813f7E56e",
                TouchIdSafeWalletContractProxyFactoryAddress: "0x8e5ffc77D0906618A8Ed73dB34f92Ea0251B327b",
                TouchIdSafeWalletContractSingletonAddress: "0xc51b3bB183E68f9258B580E70Ac18cd5B6C40C36",
                fallBackHandlerAddress: "0xac1c08a5a59cEA20518f7201bB0dda29d9454eb0",
            };
        case Chains.polygonMainnet:
            return {
                Elliptic: "0xd223a0D7cD198a5d448DeEdE81c63a3Ad4f244FC",
                TouchIdSafeWalletContractProxyFactoryAddress: "0x8e5ffc77D0906618A8Ed73dB34f92Ea0251B327b",
                TouchIdSafeWalletContractSingletonAddress: "0xc51b3bB183E68f9258B580E70Ac18cd5B6C40C36",
                fallBackHandlerAddress: "0xac1c08a5a59cEA20518f7201bB0dda29d9454eb0",
            };
        case Chains.astar:
            return {
                Elliptic: "0x652D29F01fdF8d0c20F78f51bAc9B173B3a76a9B",
                TouchIdSafeWalletContractProxyFactoryAddress: "0x8e5ffc77D0906618A8Ed73dB34f92Ea0251B327b",
                TouchIdSafeWalletContractSingletonAddress: "0xc51b3bB183E68f9258B580E70Ac18cd5B6C40C36",
                fallBackHandlerAddress: "0xac1c08a5a59cEA20518f7201bB0dda29d9454eb0",
            };
    }
}
exports.getChainSpecificAddress = getChainSpecificAddress;
// enabling multi network infra for arbitrum, mumbai, optimism
function getChainSpecificConfig(chain) {
    switch (chain) {
        case Chains.goerli:
            return {
                jsonRpcUrl: exports.GOERLI_RPC,
            };
        case Chains.optimismTestnet:
            return {
                jsonRpcUrl: exports.OPTIMISM_TESTNET_RPC,
            };
        case Chains.mumbai:
            return {
                jsonRpcUrl: exports.MUMBAI_RPC,
            };
        case Chains.gnosis:
            return {
                jsonRpcUrl: exports.GNOSIS_RPC,
            };
        case Chains.chiadoTestnet:
            return {
                jsonRpcUrl: exports.CHIADO_TESTNET_RPC,
            };
        case Chains.shibuyaTestnet:
            return {
                jsonRpcUrl: exports.SHIBUYA_TESTNET_RPC,
            };
        case Chains.polygonMainnet:
            return {
                jsonRpcUrl: exports.POLYGON_MAINNET_RPC
            };
        case Chains.astar:
            return {
                jsonRpcUrl: exports.ASTAR_MAINNET_RPC,
            };
        case Chains.polygonMainnet:
            return {
                jsonRpcUrl: exports.POLYGON_MAINNET_RPC
            };
    }
}
exports.getChainSpecificConfig = getChainSpecificConfig;
//# sourceMappingURL=Constants.js.map