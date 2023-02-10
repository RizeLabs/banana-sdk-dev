/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useAccount, useSigner, useContract, useProvider } from 'wagmi';

const GetAccount = () => {
   const { address, isConnecting, isDisconnected } = useAccount()
  if (isConnecting) return "Connecting..."
  if (isDisconnected) return null
  return address;
}

const GetContract = (address, abi) => {
  const { data: signerOrProvider, isError, isLoading } = useSigner()
  let contract = null;
  if(!isError && !isLoading) {
    contract = useContract({
      address, abi, signerOrProvider,
    })
  }
  return contract;
}

function GetProvider () {
  const provider = useProvider();
  return provider;
}

const GetSigner = () => {
    const {data: signer} = useSigner();
    return signer;
}

module.exports = { GetAccount, GetContract, GetSigner, GetProvider }