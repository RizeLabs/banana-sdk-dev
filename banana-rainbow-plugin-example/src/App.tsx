import React from "react";
import logo from "./logo.svg";
import "./App.css";

import "@rainbow-me/rainbowkit/styles.css";
import Demo from "./Demo";

import {
  RainbowKitProvider,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";

import {
  metaMaskWallet,
  injectedWallet,
  rainbowWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";

import { mainnet, polygon, optimism, arbitrum, polygonMumbai, optimismGoerli, arbitrumGoerli } from "@wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

import { configureChains, createClient, WagmiConfig } from "wagmi";

// import { BananaWallet } from 
import { BananaWallet } from '@rize-labs/banana-rainbowkit-plugin/dist'
// import { BananaWallet } from "@rize-labs/banana-rainbowkit-plugin/src/banana-wallet";

function App() {
  const { chains, provider } = configureChains(
    [mainnet, polygon, optimism, arbitrum, polygonMumbai, optimismGoerli, arbitrumGoerli],
    [publicProvider()]
  );

  const connectors = connectorsForWallets([
    {
      groupName: "Recommended",
      wallets: [
        BananaWallet({ chains, connect: { networkId: 80001 } }),
        metaMaskWallet({ chains, shimDisconnect: true }),
        rainbowWallet({ chains }),
        walletConnectWallet({ chains }),
        injectedWallet({ chains, shimDisconnect: true }),
      ],
    },
  ]);

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <div className="App">
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Demo />
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
}

export default App;
