import { MUMBAI_RPC, ARBITRUM_TESTNET_RPC, OPTIMISM_TESTNET_RPC } from "../Constants"
import { ethers } from "ethers"

export const NetworkAddressChecker = async (address: string) => {
    let isMumbai = false, isArbitrumTestnet = false, isOptimismTestnet = false;
    // mumbai check 
    const mumbaiProvider = new ethers.providers.JsonRpcProvider(MUMBAI_RPC);
    const mumbaiCodeStatus = await mumbaiProvider.getCode(address);
    if (mumbaiCodeStatus === '0x') {
        console.log("Mumbai status ", mumbaiCodeStatus);
        isMumbai = true;
    }

    // arbitrum testnet check
    const arbitrumTestnetProvider = new ethers.providers.JsonRpcProvider(ARBITRUM_TESTNET_RPC);
    const arbitrumTestnetCodeStatus = await arbitrumTestnetProvider.getCode(address);
    if (arbitrumTestnetCodeStatus === '0x') {
        console.log("Arbitrum status ", arbitrumTestnetCodeStatus);
        isArbitrumTestnet = true;
    }

    // optimism testnet check
    const optimismTestnetProvider = new ethers.providers.JsonRpcProvider(OPTIMISM_TESTNET_RPC);
    const optimismTestnetCodeStatus = await optimismTestnetProvider.getCode(address);
    if (optimismTestnetCodeStatus === '0x') {
        console.log("Optimism status ", optimismTestnetCodeStatus);
        isOptimismTestnet = true;
    }

    // imbalance in arbitrum address
    return isMumbai && isOptimismTestnet;
}
