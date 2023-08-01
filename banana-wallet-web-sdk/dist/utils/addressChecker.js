"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkAddressChecker = void 0;
const Constants_1 = require("../Constants");
const ethers_1 = require("ethers");
const NetworkAddressChecker = async (address) => {
    let isMumbai = false, isArbitrumTestnet = false, isOptimismTestnet = false, isGoerliTestnet = false;
    // mumbai check 
    const mumbaiProvider = new ethers_1.ethers.providers.JsonRpcProvider(Constants_1.MUMBAI_RPC);
    const mumbaiCodeStatus = await mumbaiProvider.getCode(address);
    if (mumbaiCodeStatus === '0x') {
        console.log("Mumbai status ", mumbaiCodeStatus);
        isMumbai = true;
    }
    // arbitrum testnet check
    // commenting it as we don't have production bundler for this network
    // const arbitrumTestnetProvider = new ethers.providers.JsonRpcProvider(ARBITRUM_TESTNET_RPC);
    // const arbitrumTestnetCodeStatus = await arbitrumTestnetProvider.getCode(address);
    // if (arbitrumTestnetCodeStatus === '0x') {
    //     console.log("Arbitrum status ", arbitrumTestnetCodeStatus);
    //     isArbitrumTestnet = true;
    // }
    // goerli testnet check
    const goerliTestnetProvider = new ethers_1.ethers.providers.JsonRpcProvider(Constants_1.GOERLI_RPC);
    const goerliTestnetCodeStatus = await goerliTestnetProvider.getCode(address);
    if (goerliTestnetCodeStatus === '0x') {
        console.log("Goerli status ", goerliTestnetCodeStatus);
        isGoerliTestnet = true;
    }
    // optimism testnet check
    const optimismTestnetProvider = new ethers_1.ethers.providers.JsonRpcProvider(Constants_1.OPTIMISM_TESTNET_RPC);
    const optimismTestnetCodeStatus = await optimismTestnetProvider.getCode(address);
    if (optimismTestnetCodeStatus === '0x') {
        console.log("Optimism status ", optimismTestnetCodeStatus);
        isOptimismTestnet = true;
    }
    return isMumbai && isOptimismTestnet && isGoerliTestnet;
};
exports.NetworkAddressChecker = NetworkAddressChecker;
//# sourceMappingURL=addressChecker.js.map