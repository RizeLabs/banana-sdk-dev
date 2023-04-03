
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
    accounts: ["6923720ab043d19f5975644c6312f0de7ffbe7bc446c871abde2c078eaeae53f"]
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
  },
  arbitrum: {
    url: 'https://arb-goerli.g.alchemy.com/v2/IrI19BkqK9AQ-7afSkKvNmNCuK0TG3Ok',
    accounts: ["ecf0fbe435b1d11c6c1caf0a76cd12ac751eaac5e877b301a6c399e98a583813"],
    maxCodeSize: 1000000
  },
  zkevm: {
    url: 'https://rpc.public.zkevm-test.net',
    accounts: ["ecf0fbe435b1d11c6c1caf0a76cd12ac751eaac5e877b301a6c399e98a583813"]
  },
  hyperspaceFvm: {
    chainId: 3141,
    url: 'https://api.hyperspace.node.glif.io/rpc/v1',
    accounts: ["7e6933b2f277ef6b6402fb7acec0d6924fd62a9e7703d478e68c44deb7a5d069"]
  },
  moonbaseAlpha: {
    url: 'https://rpc.testnet.moonbeam.network',
    accounts: ["7e6933b2f277ef6b6402fb7acec0d6924fd62a9e7703d478e68c44deb7a5d069"]
  }
  },
  etherscan: {
    // apiKey: "YJ546HGGQFGMEE4B22QNGB58QKZ97G8YSP"
    apiKey: "2S8CM6KUUPXGG7JV63UZVVVZTWP6RYJXYE"
    // apiKey: "C2J3GI995B9DKK1XVF3P67UDHU72P4Q15D",
 }
};

