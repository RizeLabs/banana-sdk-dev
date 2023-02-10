// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
// import "@rainbow-me/rainbowkit/styles.css";
// import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Staking from "./pages/Staking";
// import Swaping from "./pages/Swaping";
import SignerProvider from "./context/signerProvider";
import React from "react";

const { chains, provider } = configureChains(
  [chain.polygonMumbai, chain.goerli, chain.hardhat],
  [
    // alchemyProvider({ alchemyId: process.env.REACT_APP_QUICK_NODE_URL || "temp" }),
    publicProvider(),
  ]
);

// const { connectors } = getDefaultWallets({
//   appName: "My RainbowKit App",
//   chains,
// });

// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors,
//   provider,
// });

function App() {
  return (
    <div className="App">
      {/* <WagmiConfig client={wagmiClient}> */}
        {/* <RainbowKitProvider chains={chains}> */}
          <SignerProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/staking" element={<Staking />} />
              {/* <Route path="/swap" element={<Swaping />} /> */}
            </Routes>
          </Router>
          </SignerProvider>
        {/* </RainbowKitProvider> */}
      {/* </WagmiConfig> */}
    </div>
  );
}

export default App;
