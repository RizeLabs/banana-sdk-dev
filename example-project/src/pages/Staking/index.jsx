import React, { useState, useContext, useEffect } from "react";
import "./Staking.scss";
// import { Banana } from "../../sdk/BananaProvider";
import toast, { Toaster } from "react-hot-toast";
import { BallTriangle } from "react-loader-spinner";
// import { Chains } from "../../sdk/Constants";
import StakingArtifact from '../../abi/Staking.json'
import { ethers } from "ethers";
import { SignerContext } from '../../context/signerProvider'
import TransactionPopover from "../../components/Popup/index"
import { GetAccount } from '../../hooks/web3Hook'
import { BananaTransporter } from "@rize-labs/banana-wallet-sdk/src/BananaTransporter";

const Staking = () => {
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const signerContext = useContext(SignerContext);
  const [showPopover, setShowPopover] = useState(false);
  const [walletInstance, setWalletInstance] = useState(null);
  const [signer, setSigner] = useState(null);

  const connectAccount = async () => {
    const wallet = await GetAccount();
    setWalletInstance(wallet)
    const signer = wallet.getSigner();
    setSigner(signer);
    console.log(" This is signer ", signer);
  }

  useEffect(() => {
    connectAccount();
  }, []);

  const getMessage = async () => {
    const bananTransporter = new BananaTransporter();
    const message = await bananTransporter.getMessage();
    console.log('this is message ', message);
  }



  // optimism staking
  // const stakeAddress = '0x8b370128A84bc2Df7fF4813675e294b1ae816178'

  // polygo staking 
  const stakeAddress = '0x2144601Dc1b6220F34cf3070Ce8aE5F425aA96F1'

  // arbitrum testnet staking 
  // const stakeAddress = '0x19eEc1aE90bdC20C1c52DeD3273eEb78A08696A5'

  // goerli stake address
  // const stakeAddress = '0x1CA35dB18E7f594864b703107FeaE4a24974FCb5'


  const signMessage = async () => {

    if(!signer) await connectAccount();
    const sampleMsg = "Hello message";
    const bananaInstance = signerContext.bananaInstance;
    const signedMesage = await signer.signBananaMessage(sampleMsg);
    console.log("Signed message and status: ", signedMesage);
    // const isVerified = await bananaInstance.verifySignature(signedMesage.signature, signedMesage.messageToBeSigned, await bananaInstance.getEOAAddress()); 
    // console.log("Is verified: ", isVerified);
  }

  const resetWallet = async () => {
    const bananaInstance = signerContext.bananaInstance;
    const resetStatus = await bananaInstance.resetWallet();
    console.log(resetStatus);
  }
  // const stakeAddress = '0x8b370128A84bc2Df7fF4813675e294b1ae816178'
  
  // polygo staking 
  // const stakeAddress = '0x2144601Dc1b6220F34cf3070Ce8aE5F425aA96F1'

  const handleStake = () => {
    setShowPopover(true);
  };

  const handleConfirm = (result) => {
    if(result){
      stakeAfterAuth()
    }
    setShowPopover(false);
  };
  
  const stakeAfterAuth = async () => {

    setIsLoading(true);
    if(!signer) await connectAccount();
    //@ts-ignore
    // const bananaInstance = new Banana(Chains.goerli);

    // const scwAddress = localStorage.getItem('SCWAddress');

    // if (scwAddress) {
      console.log("Here !!");
      // let aaProvider = await bananaInstance.getBananaProvider();
      // console.log("AA Provider",aaProvider)
      // let aaSigner = aaProvider.getSigner();
      const tx = {
        gasLimit: '0x55555',
        to: stakeAddress,
        value: ethers.utils.parseEther(amount),
        data: new ethers.utils.Interface(StakingArtifact.abi).encodeFunctionData('stake', [])
      }
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
      const txn = await signer.sendTransaction(tx);
      console.log("transaction ", txn);
      // const receipt = await txn.wait();
      // console.log("txn receipt ", receipt)

      toast.success("Successfully staked your funds !!");
    // } else {
    //   toast.error("SCW Wallet not connected !!");
    // }
    setIsLoading(false);
  };

  return (
    <div className="staking">
      <Toaster />
      <div className="staking-container">
        <div className="staking-container-sub">
          <div className="staking-container-sub-about">
            <h2> Why should you stake here ?</h2>
            <ul>
              <li> Staking serves a similar function to mining, </li>
              <li>
                Cryptocurrencies are typically decentralized, meaning there is
                no central authority running the show.
              </li>
              <li>
                The network chooses validators (as they’re usually known) based
                on the size of their stake and the length of time{" "}
              </li>
              <li>
                We are the best staker and most trusted staking app in the
                market.
              </li>
            </ul>
          </div>
          <div className="staking-container-sub-input">
            <h1>Enter amount to stake </h1>
            <input
              type="number"
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount to stake"
              value={amount}
            />
            <br />
            {isLoading ? (
              <div className="txn-loader">
                <BallTriangle
                  height={50}
                  width={50}
                  radius={5}
                  color="#D2691E"
                  ariaLabel="ball-triangle-loading"
                  visible={isLoading}
                />
              </div>
            ) : (
              <button onClick={handleStake}>Stake</button>
            )}
            <div>
                {showPopover && ( <TransactionPopover
                        to={stakeAddress}
                        amount={amount}
                        onConfirm={handleConfirm}
                />)}
            </div>
            <button onClick={() => signMessage()} > sign message </button>
            <button onClick={() => getMessage()} > Reset Wallet </button>
          </div>
        </div>
      </div>
    </div>
  );
};
// <button onClick={() => setShowPopover(!showPopover)}>Transaction</button>
export default Staking;
