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
import ERC20 from '../../abi/ERC20.json'
import ERC721 from '../../abi/ERC721.json'
import WMATIC from '../../abi/WMATIC.json'
import { BananaAccount__factory } from "@rize-labs/banana-wallet-sdk/src/types";
import { AxelarQueryAPI, Environment, EvmChain, GasToken } from '@axelar-network/axelarjs-sdk'
import { Banana } from "@rize-labs/banana-wallet-sdk/src/BananaProvider";
import { Chains } from "@rize-labs/banana-wallet-sdk/src/Constants";


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



  // optimism staking
  // const stakeAddress = '0x8b370128A84bc2Df7fF4813675e294b1ae816178'

  const optimismStakeAddress = '0x8b370128A84bc2Df7fF4813675e294b1ae816178'
  const mumbaiStakeAddress = '0x2144601Dc1b6220F34cf3070Ce8aE5F425aA96F1'

  // polygo staking 
  const stakeAddress = '0x2144601Dc1b6220F34cf3070Ce8aE5F425aA96F1'



  // polygon mainnet
  // const stakeAddress = '0x8B220bc9529c0bc18265c1B822FcC579eE586bA2';

  // shibuya 
  // const stakeAddress = '0x12cB6cdd140A01044ED575828EbE8F9DdBa5fb6A'
  // const stakeAddress = '0x54c1d3De7e3dCf4Ec62195542CA642f128a023Bf';
  // const stakeAddress = '0x54c1d3De7e3dCf4Ec62195542CA642f128a023Bf';

  // astar
  // const stakeAddress = '0x2ac3cbbE2f48c9143fc0eDEde1c26BBE9d0dd64a';

  // arbitrum testnet staking 
  // const stakeAddress = '0x19eEc1aE90bdC20C1c52DeD3273eEb78A08696A5'

  // goerli stake address
  // const stakeAddress = '0x1CA35dB18E7f594864b703107FeaE4a24974FCb5'

  //chiado
  // const stakeAddress = '0x18f6cc0B39d22Ba4fE860abE2dF445096078f94d'


  const signMessage = async () => {

    if(!signer) await connectAccount();
    const sampleMsg = "Hello message";
    const bananaInstance = signerContext.bananaInstance;
    const signedMesage = await signer.signBananaMessage(sampleMsg);
    console.log("Signed message and status: ", signedMesage);
    const eoaAddress = await bananaInstance.getEOAAddress();
    console.log('eoa ', eoaAddress)
    const isValid = await bananaInstance.verifySignature(signedMesage.signature, sampleMsg ,eoaAddress);
    console.log(isValid);
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
  const avalancheStaking = '0x65f0dAC1129b1406Ae8c96752b729e4bd4355Ef8';


  const connectAndSend = async () => {
    const bananaInstance = new Banana(Chains.fuji, 'register');

    // approve and transfer

    const walletName = bananaInstance.getWalletName()
    const wallet = await bananaInstance.connectWallet(walletName);

    const signer = wallet.getSigner();

    // both address on avalanche
    const wmaticAvalance = '0xB923E2374639D0605388D91CFedAfCeCE03Cfd8f'

    // approve
    const txn1 = {
      to: wmaticAvalance,
      value: 0,
      gasLimit: '0x55555',
      data: new ethers.utils.Interface(WMATIC).encodeFunctionData(
      'transfer',
      [avalancheStaking, ethers.utils.parseEther("0.00001")])
    };

    const txnResp = await signer.sendBatchTransaction([ txn1 ]);
    console.log('txn response ', txnResp)
  };

  const erc721Transfer = async () => {
    // const bananaERCTokenAddress = '0x177069b755F6ACC4EA7A9777D05f35AfC67A936A';
    // const bananaERCTokenAddress = '0x8fe7c2d6eB8DE9A452F59E62078f73780db1da83';
    const bananaERCTokenAddress = '0x4e191815bbD8031955fe355C450eeB629451FfDf'
    console.log('minting tokens ');
    const walletAddress = await walletInstance.getAddress();
    let bananContract = new ethers.Contract(
      bananaERCTokenAddress,
      ERC721,
      signer
    );

    const transferFromCallData = bananContract.interface.encodeFunctionData('transferFrom', [
      walletAddress,
      "0xA8458B544c551Af2ADE164C427a8A4F13A346F2A",
      "0"
    ]);

    const tx1 = {
      gasLimit: '0x55555',
      to: bananaERCTokenAddress,
      value: 0,
      data: transferFromCallData
    }

    let txn = await signer.sendTransaction(tx1);

    console.log(txn);
    toast.success("Successfully Claimed 100 BNT Tokens!!");
    setIsLoading(false);
  }

  const mintERC721 = async () => {
    // const bananaERCTokenAddress = '0x177069b755F6ACC4EA7A9777D05f35AfC67A936A';
    // const bananaERCTokenAddress = '0x8fe7c2d6eB8DE9A452F59E62078f73780db1da83';
    const bananaERCTokenAddress = '0xC5B44ba934CbDaa0D6E81Fa22E4d6AB99726F5c1'
    const walletAddress = await walletInstance.getAddress();
    let bananContract = new ethers.Contract(
      bananaERCTokenAddress,
      ERC721,
      signer
    );

    const transferCallData = bananContract.interface.encodeFunctionData("safeMint", [
      walletAddress
    ]);

    const tx1 = {
      gasLimit: '0x55555',
      to: bananaERCTokenAddress,
      value: 0,
      data: transferCallData
    }

    let txn = await signer.sendTransaction(tx1);

    console.log(txn);
    toast.success("Successfully Claimed 100 BNT Tokens!!");
    setIsLoading(false);
  }

  const nativeTransfer = async () => {
    // const BananaAccount = BananaAccount__factory.connect('0xe33fCA6E9A75529407224c593783aF778b80DC2a',signer);

    // const nativeTransferCall = await BananaAccount.populateTransaction.execTransactionFromEntrypoint(
    //   '0x48701dF467Ba0efC8D8f34B2686Dc3b0A0b1cab5',
    //   ethers.utils.parseEther("0.001"),
    //   "0x",
    //   ethers.BigNumber.from("0")
    // );

    const tx1 = { 
        gasLimit: '0x55555',
        to: '0x288d1d682311018736B820294D22Ed0DBE372188',
        value: ethers.utils.parseEther("0.01"),
        data: "0x"
      };

      let txn = await signer.sendTransaction(tx1);

      console.log(txn);
      toast.success("Successfully Claimed 100 BNT Tokens!!");
      setIsLoading(false);
  };

  const transferErc20 = async () => {
    // const bananaAddress = '0x66af7a792B10B2f6C32bA478890a9a8Ddf98066F';
    // const bananaAddress = '0xD8fdb3f42bf350D18968fd7b3DFf74b6C3C0bE42';
    // const bananaAddress = '0x3c75e43725a1EE466984E0A7c9C06A3F20757210'//mumbai
    const bananaAddress = '0x0E7d52038e93CF7885EBBAf3C9bDdD44Bf3Efe84' //polygon
    const walletAddress = await walletInstance.getAddress();
    let bananContract = new ethers.Contract(
      bananaAddress,
      ERC20,
      signer
    );

    const transferCallData = bananContract.interface.encodeFunctionData("transfer", [
      "0xF9ca16Fb8D6F38d36505961dAd69d2011C4695cF",
      ethers.utils.parseEther("100")
    ]);

    try {
      // const txn = await bananaWalletInstance.execute(
      //     mintingCallData,
      //     bananaAddress,
      //     "0"
      // );
      const tx1 = {
        gasLimit: '0x55555',
        to: bananaAddress,
        value: 0,
        data: transferCallData
      }

      let txn = await signer.sendTransaction(tx1);

      console.log(txn);
      toast.success("Successfully Claimed 100 BNT Tokens!!");
      setIsLoading(false);
  } catch (err) {
      toast("Your new wallet is ready! Please refresh");
      setIsLoading(false);
      // setFailModalStatus(true);
      console.log(err);
  }

  }

  const mintERC20 = async () => {
      setIsLoading(true);
      // const bananaAddress = '0x66af7a792B10B2f6C32bA478890a9a8Ddf98066F';
      // const bananaAddress = '0xD8fdb3f42bf350D18968fd7b3DFf74b6C3C0bE42';
      const bananaAddress = '0x3c75e43725a1EE466984E0A7c9C06A3F20757210' //mumbai
      // const bananaAddress = '0x0E7d52038e93CF7885EBBAf3C9bDdD44Bf3Efe84' //polygon

      const walletAddress = await walletInstance.getAddress();
      let bananContract = new ethers.Contract(
        bananaAddress,
        ERC20,
        signer
      );

      const mintingCallData = bananContract.interface.encodeFunctionData("mint", [
        walletAddress,
        ethers.utils.parseEther("1000000")
      ]);

      try {
          // const txn = await bananaWalletInstance.execute(
          //     mintingCallData,
          //     bananaAddress,
          //     "0"
          // );
          const tx1 = {
            gasLimit: '0x55555',
            to: bananaAddress,
            value: 0,
            data: mintingCallData
          }

          let txn = await signer.sendBatchTransaction([tx1, tx1]);
          // let txn = await signer.sendTransaction(tx1);
  
          console.log(txn);
          toast.success("Successfully Claimed 100 BNT Tokens!!");
          setIsLoading(false);
      } catch (err) {
          toast("Your new wallet is ready! Please refresh");
          setIsLoading(false);
          // setFailModalStatus(true);
          console.log(err);
      }
  }

  const getBalance = async () => {
    // balanceOf
    // const bananaAddress = '0x66af7a792B10B2f6C32bA478890a9a8Ddf98066F';
    const bananaAddress = '0xD8fdb3f42bf350D18968fd7b3DFf74b6C3C0bE42';

    const walletAddress = await walletInstance.getAddress();
    let bananContract = new ethers.Contract(
      bananaAddress,
      ERC20,
      signer
    );
    console.log(bananContract);
    const erc20Balance = await bananContract.balanceOf(walletAddress);

    console.log('erc20 balance ', erc20Balance);
  }
  
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
        to: avalancheStaking,
        // stakeAddress,
        value: ethers.utils.parseEther(amount),
        data: new ethers.utils.Interface(StakingArtifact.abi).encodeFunctionData('stake', [])
      }

      // (address to, uint256 value, bytes memory data, uint8 operation)
      const encodedPayload = ethers.utils.defaultAbiCoder.encode(
        [
          'address',
          'uint256',
          'bytes',
          'uint8'
        ],
        [
          tx.to,
          tx.value,
          tx.data,
          ethers.BigNumber.from("0") // for type of call (delegate or normal)
        ]
      );

      const walletAddress = '0x1B8732B3054b70A6FBd4409dDf3159a45766ff0C'

      // console.log('this is encoded payload data', encodedPayload)
      // build a briding txn here
      // tx2 -> encode callTokenWithContract
          // payload encoded tx 
      const acc = BananaAccount__factory.connect(walletAddress, signer);
      // string memory symbol,
      // string memory destinationChain,
      // string memory contractAddress,
      // uint256 amount,
      // bytes memory payload

      const crossChainTransactionData = acc.interface.encodeFunctionData('crossChainTransact', [
        'WMATIC',
        'Avalanche',
        walletAddress,
        ethers.utils.parseEther('0.01'),
        // encodedPayload
        '0x'
      ]);

      console.log('this is crosschaintransactindata', crossChainTransactionData);

      const api = new AxelarQueryAPI({ environment: Environment.TESTNET });

      // Calculate how much gas to pay to Axelar to execute the transaction at the destination chain
      const gasFee = await api.estimateGasFee(
        EvmChain.POLYGON,
        EvmChain.AVALANCHE,
        GasToken.MATIC,
        1000000,
        3,
      );
      console.log('this ios gas fees ',gasFee / 10 ** 18);
      console.log('convrted', ethers.utils.parseEther(String(gasFee / 10 ** 18)))
      // console.log('fees ', ethers.BigInt.from(gasFee))
      const tx2 = {
        to: walletAddress,
        value: ethers.utils.parseEther(String(gasFee / 10 ** 18)),
        data: crossChainTransactionData,
        gasLimit: '0x55555',
      };

      console.log('second txn', tx2);

      await connectAndSend();

      // const txn = await signer.sendTransaction(tx);
      const txn = await signer.sendBatchTransaction([ tx2 ]);
      console.log("transaction ", txn);

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
            <button onClick={() => erc721Transfer()}> Transfer 721 </button>
            <button onClick={() => mintERC721()}> Mint 721 </button>
            <button onClick={() => mintERC20()}> Mint </button>
            <button onClick={() => getBalance()}> Balance </button>
            <button onClick={() => transferErc20()}> Transfer </button>
            <button onClick={() => nativeTransfer()}> Native Transfer </button>
            <div>
                {showPopover && ( <TransactionPopover
                        to={stakeAddress}
                        amount={amount}
                        onConfirm={handleConfirm}
                />)}
            </div>
            <button onClick={() => signMessage()} > sign message </button>
            <button onClick={() => resetWallet()} > Reset Wallet </button>
          </div>
        </div>
      </div>
    </div>
  );
};
// <button onClick={() => setShowPopover(!showPopover)}>Transaction</button>
export default Staking;