/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useAccount, useSigner, useContract, useProvider } from 'wagmi';
import { Banana } from '@rize-labs/banana-wallet-sdk/src/BananaProvider'
import { Chains } from '@rize-labs/banana-wallet-sdk/src/Constants' 
import chain from "../utils/chain";

// creating chain specific instance of banana module

export const GetAccount = async() => {
  // const jsonRpcProviderUrl = "https://opt-goerli.g.alchemy.com/v2/Q37EPFzF1O8kJt4oTob4ytwuUFTW0Gas";
  // const bananaInstance = new Banana(chain, [
  //   {
  //     chainId: '420',
  //     paymasterUrl: `https://demo-paymaster.internal.candidelabs.com/optimism-goerli/71c6bedc7c3d1c7b4773c70fb972707a`
  //     //  'https://api.pimlico.io/v1/mumbai/rpc?apikey=f95ac5ae-7612-4bac-b759-4603eb5e7a96'
  //     // paymasterUrl: 'https://api.stackup.sh/v1/paymaster/56933d7c3f0ed4ef2d488f51d7e8123c4b9e33b279ae1804879a177d76870595'
  //   },
  // //   {
  // //     chainId: '80001',
  // //     paymasterUrl: 'https://api.pimlico.io/v1/mumbai/rpc?apikey=f95ac5ae-7612-4bac-b759-4603eb5e7a96'
  // // }
  // ]);

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
