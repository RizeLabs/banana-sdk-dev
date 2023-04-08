/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useAccount, useSigner, useContract, useProvider } from 'wagmi';
import { Banana } from '@rize-labs/banana-wallet-sdk/src/BananaProvider'
import { Chains } from '@rize-labs/banana-wallet-sdk/src/Constants' 

// creating chain specific instance of banana module

export const GetAccount = async() => {
  const jsonRpcProviderUrl = "https://polygon-mumbai.g.alchemy.com/v2/cNkdRWeB8oylSQJSA2V3Xev2PYh5YGr4";
  const bananaInstance = new Banana(Chains.mumbai, jsonRpcProviderUrl);
  const walletName = await bananaInstance.getWalletName();
  if(walletName) {
  // getting address for the walletName.
    const walletResponse = await bananaInstance.connectWallet(walletName)
    return walletResponse;
  } else {
    return false;
  }
}

export const GetContract = (address, abi) => {
  const { data: signerOrProvider, isError, isLoading } = useSigner()
  let contract = null;
  if(!isError && !isLoading) {
    contract = useContract({
      address, abi, signerOrProvider,
    })
  }
  return contract;
}

export const GetProvider = () => {
  const provider = useProvider();
  return provider;
}

export const GetSigner = () => {
    const {data: signer} = useSigner();
    return signer;
}
