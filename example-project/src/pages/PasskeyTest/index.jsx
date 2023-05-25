import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { ChainId } from '@biconomy/core-types'
import { ethers } from 'ethers'
import SmartAccount from '@biconomy/smart-account'
import { BananaPasskeyEoaSigner } from '@rize-labs/banana-passkey-manager/src/BananaPasskeyEoaSigner'
import StakingArtifact from '../../abi/Staking.json'

export const PasskeyTest = () => {
    const [bananEoaInstance, setBananaEoaInstance] = useState();
    const [smartAccount, setSmartAccount] = useState();
    
    useEffect(() => {
        const provider = ethers.getDefaultProvider();
        const bananaEoaInstance = new BananaPasskeyEoaSigner(provider);
        setBananaEoaInstance(bananaEoaInstance);
    }, [])

    const initSigner = async () => {
        await bananEoaInstance.init('skjfdgfjkdgffhj');
    }

    async function setupSmartAccount() {
        try {
           await initSigner()
          const smartAccount = new SmartAccount(bananEoaInstance, {
            activeNetworkId: ChainId.POLYGON_MUMBAI,
            supportedNetworksIds: [ChainId.POLYGON_MUMBAI],
          })
          await smartAccount.init()
          setSmartAccount(smartAccount);
          console.log('wallet Address ', smartAccount.address);
          console.log('owner address ', smartAccount.owner)
        } catch (err) {
          console.log('error setting up smart account... ', err)
        }
      }

    const stakeAddress = '0x2144601Dc1b6220F34cf3070Ce8aE5F425aA96F1'

    const stake = async () => {
        const amount = "0.00001"
        //@ts-ignore
        // const bananaInstance = new Banana(Chains.goerli);
    
        // const scwAddress = localStorage.getItem('SCWAddress');
    
        // if (scwAddress) {
          console.log("Here !!");
          // let aaProvider = await bananaInstance.getBananaProvider();
          // console.log("AA Provider",aaProvider)
          // let aaSigner = aaProvider.getSigner();

        //   const stakeContractInstance = new ethers.Contract(stakeAddress, StakingArtifact.abi, new ethers.providers.JsonRpcProvider('https://polygon-mumbai.g.alchemy.com/v2/cNkdRWeB8oylSQJSA2V3Xev2PYh5YGr4'))
        //   const txn = await stakeContractInstance.populateTransaction.stake({ value: "0.000001" });

          const tx = {
            // gasLimit: '0x55555',
            to: stakeAddress,
            // value: ethers.utils.parseEther(amount),
            data: new ethers.utils.Interface(StakingArtifact.abi).encodeFunctionData('stake', [])
          }
        // const tx = {
        //     to: stakeAddress,
        //     data: txn.data
        //   }
        const trxResponse = await smartAccount.sendTransaction({ transaction: tx })
        console.log('response ', trxResponse)

    //    const quote = await smartAccount.getFeeQuotes({
    //         transaction: tx,
    //     })
    //     console.log(' this is quote ', quote);

    //     const transaction = await smartAccount.createUserPaidTransaction({
    //         transaction: tx,
    //         feeQuote: quote,
    //       });
        
    //       console.log(' this is txns ', transaction);
        
    //       console.log(' this is txn ', tx);
    //     const resp =  await smartAccount.sendUserPaidTransaction({
    //         tx: transaction,
    //       });
        //   console.log(resp);
        //  const provider = new ethers.providers.JsonRpcProvider(
        //     // this.jsonRpcProviderUrl
        //     "https://polygon-mumbai.g.alchemy.com/v2/cNkdRWeB8oylSQJSA2V3Xev2PYh5YGr4"
        //   );
        //   let StakingContract = new ethers.Contract(
        //     stakeAddress,
        //     StakingArtifact.abi,
        //     // aaSigner
        //     provider
        //   );
        //   const stakingCallData = StakingContract.interface.encodeFunctionData(
        //     "stake",
        //     []
        //   );
    
          // const txn = await bananaInstance.execute(stakingCallData, stakeAddress, amount)
          // console.log(" this is txn ", txn);
          // const receipt = await txn.wait();
          // console.log("txn receipt ", receipt)
    
        // } else {
        //   toast.error("SCW Wallet not connected !!");
        // }
      };
    

    return (
        <div>
            <button onClick={() => setupSmartAccount()} >Check Smart Account</button>
            <button onClick={() => stake()}>Stake </button>
        </div>
    )
}