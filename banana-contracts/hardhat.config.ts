
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
    accounts: ["77b838ecdcebf23e06ad223a1295746d3e055584c5690d0b899513c8ab7cf644"]
  },
  optimismTestnet: {
    url: `https://opt-goerli.g.alchemy.com/v2/Q37EPFzF1O8kJt4oTob4ytwuUFTW0Gas`,
    accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : ["77b838ecdcebf23e06ad223a1295746d3e055584c5690d0b899513c8ab7cf644"]
  },
  mumbai: {
    url: 'https://polygon-mumbai.g.alchemy.com/v2/cNkdRWeB8oylSQJSA2V3Xev2PYh5YGr4',
    accounts: ["77b838ecdcebf23e06ad223a1295746d3e055584c5690d0b899513c8ab7cf644"]
  },
  shardeum: {
    url: 'https://sphinx.shardeum.org/',
    accounts: ["77b838ecdcebf23e06ad223a1295746d3e055584c5690d0b899513c8ab7cf644"],
    chainId: 8082,
  },
  arbitrumTestnet: {
    url: 'https://arb-goerli.g.alchemy.com/v2/i-ei4ue2tQfCNvYGJ63NWcv8U8nEl0dw',
    accounts: ["77b838ecdcebf23e06ad223a1295746d3e055584c5690d0b899513c8ab7cf644"] // change it before multi network deployment
  },
  gnosis: {
    url: 'https://gnosis-mainnet.blastapi.io/1d3ec055-c764-4685-86b5-1025719f35f6',
    accounts: ["77b838ecdcebf23e06ad223a1295746d3e055584c5690d0b899513c8ab7cf644"],
    chainId: 100,
  },
  chiadoTestnet: {
    url: 'https://gnosis-chiado.blastapi.io/1d3ec055-c764-4685-86b5-1025719f35f6',
    accounts: ['77b838ecdcebf23e06ad223a1295746d3e055584c5690d0b899513c8ab7cf644']
  }
  },
  etherscan: {
    // apiKey: "YJ546HGGQFGMEE4B22QNGB58QKZ97G8YSP"
    // apiKey: "2S8CM6KUUPXGG7JV63UZVVVZTWP6RYJXYE"
    // apiKey: "C2J3GI995B9DKK1XVF3P67UDHU72P4Q15D",
    apiKey: "ESHESDSD935HS3IAW42I9X8HDJ13TX4IUM" //gnosis
 }
};