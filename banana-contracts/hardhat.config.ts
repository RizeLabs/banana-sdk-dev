
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan"
import "hardhat-gas-reporter"

import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });


export default {
  solidity: {
    version: "0.8.15",
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 1000000,
        // details: {
        //   yul: false
        // }
      },
    },
  },
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
  //   mumbai: {
  //     url: process.env.MUMBAI_URL || '',
  //     accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
      
  // },
  goerli: {
    url: `https://eth-goerli.g.alchemy.com/v2/V5p1PckEwUqIq5s5rA2zvwRKH0V9Hslr`,
    accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : ["6923720ab043d19f5975644c6312f0de7ffbe7bc446c871abde2c078eaeae53f"]
  },
  optimism: {
    url: `https://opt-goerli.g.alchemy.com/v2/Q37EPFzF1O8kJt4oTob4ytwuUFTW0Gas`,
    accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : ["326d3b8f081040e0044fde540508dde301cdae5c387d207f7ea15ceb32b9630d"]
  },
  mumbai: {
    url: 'https://polygon-mumbai.g.alchemy.com/v2/cNkdRWeB8oylSQJSA2V3Xev2PYh5YGr4',
    accounts: ["a66cf2b4bad26d3c10c0d6fc748f91f3fda596db7b6bc289c38bb3d3ff711e74"]
  },
  shardeum: {
    url: 'https://sphinx.shardeum.org/',
    accounts: ["a66cf2b4bad26d3c10c0d6fc748f91f3fda596db7b6bc289c38bb3d3ff711e74"],
    chainId: 8082,
  }
  },
  etherscan: {
    // apiKey: "YJ546HGGQFGMEE4B22QNGB58QKZ97G8YSP"
    // apiKey: "2S8CM6KUUPXGG7JV63UZVVVZTWP6RYJXYE"
    apiKey: "C2J3GI995B9DKK1XVF3P67UDHU72P4Q15D",
 }
};