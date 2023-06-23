/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useAccount, useSigner, useContract, useProvider } from 'wagmi';
import { Banana } from '@rize-labs/banana-wallet-sdk/src/BananaProvider'
// import { Banana } from '../sdk/BananaProvider';
// import { Chains } from '@rize-labs/banana-wallet-sdk/src/Constants' 
import { Chains } from '@rize-labs/banana-wallet-sdk/src/constants/Constants';
import chain from "../utils/chain";

// creating chain specific instance of banana module

export const GetAccount = async() => {
  // const jsonRpcProviderUrl = "https://opt-goerli.g.alchemy.com/v2/Q37EPFzF1O8kJt4oTob4ytwuUFTW0Gas";
  const bananaInstance = new Banana(chain);
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
