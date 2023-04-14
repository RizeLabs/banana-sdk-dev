
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
    url: `https://eth-goerli.g.alchemy.com/v2/IaVkSX3wU98rK7vpVyFgIryaaHfYpoST`,
    accounts: ["8fa514a2cb0ac1ae7700d97cddb04addb57344b5bedbf7c5d0417841061607ba"]
  },
  optimismTestnet: {
    url: `https://opt-goerli.g.alchemy.com/v2/Q37EPFzF1O8kJt4oTob4ytwuUFTW0Gas`,
    accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : ["8fa514a2cb0ac1ae7700d97cddb04addb57344b5bedbf7c5d0417841061607ba"]
  },
  mumbai: {
    url: 'https://polygon-mumbai.g.alchemy.com/v2/cNkdRWeB8oylSQJSA2V3Xev2PYh5YGr4',
    accounts: ["8fa514a2cb0ac1ae7700d97cddb04addb57344b5bedbf7c5d0417841061607ba"]
  },
  shardeum: {
    url: 'https://sphinx.shardeum.org/',
    accounts: ["a66cf2b4bad26d3c10c0d6fc748f91f3fda596db7b6bc289c38bb3d3ff711e74"],
    chainId: 8082,
  },
  arbitrumTestnet: {
    url: 'https://arb-goerli.g.alchemy.com/v2/i-ei4ue2tQfCNvYGJ63NWcv8U8nEl0dw',
    accounts: ["ed096a60e1af7c04519965c9e1fe105b2cd287afd49e4f1d77744f91ab5eb36e"] // change it before multi network deployment
  },
  gnosis: {
    url: 'https://rpc.ankr.com/gnosis',
    accounts: ["a66cf2b4bad26d3c10c0d6fc748f91f3fda596db7b6bc289c38bb3d3ff711e74"],
    chainId: 100,
  }
  },
  etherscan: {
    // apiKey: "YJ546HGGQFGMEE4B22QNGB58QKZ97G8YSP"
    // apiKey: "2S8CM6KUUPXGG7JV63UZVVVZTWP6RYJXYE"
    // apiKey: "C2J3GI995B9DKK1XVF3P67UDHU72P4Q15D",
    apiKey: "ESHESDSD935HS3IAW42I9X8HDJ13TX4IUM" //gnosis
 }
};