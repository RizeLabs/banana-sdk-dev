import React, { useState, useContext } from "react";
import "./Staking.scss";
// import { Banana } from "../../sdk/BananaProvider";
import toast, { Toaster } from "react-hot-toast";
import { BallTriangle } from "react-loader-spinner";
// import { Chains } from "../../sdk/Constants";
import StakingArtifact from '../../abi/Staking.json'
import { ethers } from "ethers";
import { SignerContext } from '../../context/signerProvider'
import TransactionPopover from "../../components/Popup/index"

const Staking = () => {
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const signerContext = useContext(SignerContext);
  const [showPopover, setShowPopover] = useState(false);

  // optimism staking
  // const stakeAddress = '0x8b370128A84bc2Df7fF4813675e294b1ae816178'


  // goerli stake address
  // const stakeAddress = '0x1CA35dB18E7f594864b703107FeaE4a24974FCb5'


  const signMessage = async () => {
    const sampleMsg = "Hello message";
    const bananaInstance = signerContext.bananaInstance;
    const signedMesage = await bananaInstance.signMessage(sampleMsg, true);
    console.log("Signed message and status: ", signedMesage);
  }
  // const stakeAddress = '0x8b370128A84bc2Df7fF4813675e294b1ae816178'
  
  // polygo staking 
  const stakeAddress = '0x2144601Dc1b6220F34cf3070Ce8aE5F425aA96F1'

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
    //@ts-ignore
    const bananaInstance = signerContext.bananaInstance
    // const bananaInstance = new Banana(Chains.goerli);

    // const scwAddress = localStorage.getItem('SCWAddress');

    // if (scwAddress) {
      console.log("Here !!");
      let aaProvider = await bananaInstance.getBananaProvider();
      console.log("AA Provider",aaProvider)
      let aaSigner = aaProvider.getSigner();
      let StakingContract = new ethers.Contract(
        stakeAddress,
        StakingArtifact.abi,
        aaSigner
      );
      const stakingCallData = StakingContract.interface.encodeFunctionData(
        "stake",
        []
      );
      const txn = await bananaInstance.execute(stakingCallData, stakeAddress, amount)
      console.log(" this is txn ", txn);
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
          </div>
        </div>
      </div>
    </div>
  );
};
// <button onClick={() => setShowPopover(!showPopover)}>Transaction</button>
export default Staking;
