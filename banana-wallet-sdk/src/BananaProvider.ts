import { BytesLike, ethers } from "ethers";
import { EntryPoint__factory, UserOperationStruct, EntryPoint } from "@account-abstraction/contracts";
import { MyPaymasterApi } from "./MyPayMasterApi";
import { MyWalletApi } from "./MyWalletApi";
import { HttpRpcClient } from "@account-abstraction/sdk/dist/src/HttpRpcClient";
import { ERC4337EthersProvider } from "@account-abstraction/sdk";
import { Chains, getClientConfigInfo, getChainSpecificAddress  } from "./Constants";
import { registerFingerprint } from "./WebAuthnContext";
import { BananaSigner } from "./BananaSigner";
import { hexConcat } from "ethers/lib/utils.js";
import { EllipticCurve__factory } from "./types";
import constructUserOpWithInitCode from "./initUserOp";
import { BananaCookie } from "./BananaCookie";
import {
  setUserCredentials,
  getUserCredentials,
  checkInitCodeStatus,
  checkIsWalletNameExist
} from "./Controller";
import {
  PublicKey,
  ClientConfig,
  UserCredentialObject,
  ChainConfig
} from "./interfaces/Banana.interface";
import { NewTouchIdAccountSafe, NewTouchIdSafeAccountProxyFactory } from './types'
import { NewTouchIdAccountSafe__factory, NewTouchIdSafeAccountProxyFactory__factory} from './types/factories'
import Axios from 'axios';
import { K1_SIGNATURE_LAMBDA_URL  } from './routes'
import { Bytes, concat } from "@ethersproject/bytes";
import { keccak256 } from "@ethersproject/keccak256";
import { toUtf8Bytes } from "@ethersproject/strings";
import { Signer } from "@ethersproject/abstract-signer";
import { BigNumber } from "ethers";
import { JsonRpcProvider } from "@ethersproject/providers";
import { Network } from "@ethersproject/providers";

export class Banana {
  Provider: ClientConfig;
  SCWContract!: ethers.Contract;
  TouchIdSafeWalletContract!: ethers.Contract;
  accountApi!: MyWalletApi;
  httpRpcClient!: HttpRpcClient;
  publicKey!: PublicKey;
  bananaSigner!: BananaSigner;
  jsonRpcProvider!: ethers.providers.JsonRpcProvider;
  walletAddress!: string;
  bananaProvider!: ERC4337EthersProvider;
  cookieObject!: UserCredentialObject;
  cookie: BananaCookie;
  walletIdentifier!: string;
  jsonRpcProviderUrl: string;
  addresses: ChainConfig;

  constructor(readonly chain: Chains, readonly jsonRpcProvideurl: string) {
    this.Provider = getClientConfigInfo(chain);
    this.addresses = getChainSpecificAddress(chain)
    this.jsonRpcProviderUrl = jsonRpcProvideurl;
    this.jsonRpcProvider = new ethers.providers.JsonRpcProvider(
      this.jsonRpcProviderUrl
    );
    this.cookie = new BananaCookie();
  }

  /**
   * @method createBananaSignerInstance
   * @params none
   * @returns none
   * create signer for user's smart contract wallet
   */
  private createBananaSignerInstance = () => {
    this.bananaSigner = new BananaSigner(this.jsonRpcProvider, this.publicKey);
  };

  /**
   * @method getTouchIdSafeWalletContractProxyFactory
   * @params { Signer | JsonRpcProvider } signerOrProvider
   * @returns { NewTouchIdSafeAccountProxyFactory } TouchIdSafeWalletContractProxyFactory
   * create factory contract instance for factory contract factory types.
   */
  private getTouchIdSafeWalletContractProxyFactory = (signerOrProvider: Signer | JsonRpcProvider ): NewTouchIdSafeAccountProxyFactory => {
    const TouchIdSafeWalletContractProxyFactory: NewTouchIdSafeAccountProxyFactory = NewTouchIdSafeAccountProxyFactory__factory.connect(
      this.addresses.TouchIdSafeWalletContractProxyFactoryAddress,
      signerOrProvider
    );
    return TouchIdSafeWalletContractProxyFactory;
  }

  /**
   * @method setCookieAfterAddressCreation
   * @params { string } walletIdentifier
   * @returns none
   * Set cookie to local and global storage after wallet creation.
   */
  private setCookieAfterAddressCreation = async (walletIdentifier: string) => {
    this.cookieObject = {
      q0: this.publicKey.q0,
      q1: this.publicKey.q1,
      walletAddress: this.walletAddress,
      initcode: false,
      encodedId: this.publicKey.encodedId,
      username: walletIdentifier,
    };
    // saving cookie correspond to user Identifier in cookie
    this.cookie.setCookie(
      "bananaUser",
      JSON.stringify(walletIdentifier)
    );
    this.cookie.setCookie(
      walletIdentifier,
      JSON.stringify(this.cookieObject)
    );
    const setCredentialsStatus = await setUserCredentials(
      walletIdentifier,
      this.cookieObject
    );
    if(!setCredentialsStatus.success)
    throw new Error("Error: db update faliure");
    console.log("Cookie set status: ", setCredentialsStatus);
  }

  /**
   * @method createSignerAndCookieObject
   * @params { string } walletIdentifier
   * @returns none
   * Create cookie object and create secure enclave based transaction signer for user's wallet.
   */
  private createSignerAndCookieObject = async (walletIdentifier: string) => {
    const walletName = this.cookie.getCookie("bananaUser");
    if (!!walletName) {
      this.cookieObject = this.cookie.getCookie(walletName);
      if (this.cookieObject) {
        const q0Value = this.cookieObject.q0;
        const q1Value = this.cookieObject.q1;
        const encodedId = this.cookieObject.encodedId;
        this.publicKey = {
          q0: q0Value,
          q1: q1Value,
          encodedId: encodedId,
        };
        this.walletIdentifier = walletName;
        this.createBananaSignerInstance();
        return;
      } else {
        const walletCreds = await getUserCredentials(walletIdentifier);
        // get and check cred here
        // else of below if should not be triggered as we are already getting wallet name from cookie means the creds are initialized
        if (!!walletCreds) {
          this.cookieObject = walletCreds;
          const q0Value = this.cookieObject.q0;
          const q1Value = this.cookieObject.q1;
          const encodedId = this.cookieObject.encodedId;
          this.publicKey = {
            q0: q0Value,
            q1: q1Value,
            encodedId: encodedId,
          };
          this.walletIdentifier = walletName;
          this.createBananaSignerInstance();
          return;
        }
      }
    } else {
      // when nothing in cookie or cred is there but with no username in that case fetching key from user provided walletname
      const walletCreds = await getUserCredentials(walletIdentifier);
      if (!!walletCreds) {
        this.cookieObject = walletCreds;
        const q0Value = this.cookieObject.q0;
        const q1Value = this.cookieObject.q1;
        const encodedId = this.cookieObject.encodedId;
        this.publicKey = {
          q0: q0Value,
          q1: q1Value,
          encodedId: encodedId,
        };
        this.walletIdentifier = walletIdentifier;
        this.createBananaSignerInstance();
        return;
      }
      // he must have sent the username for registering wallet
    }
    this.walletIdentifier = walletIdentifier;
    this.publicKey = await registerFingerprint();
    console.log("Saving this obj", this.cookieObject);
    const EC = EllipticCurve__factory.connect(
      this.addresses.Elliptic,
      this.jsonRpcProvider
    );
    const isPointOnCurve = await EC.isOnCurve(this.publicKey.q0, this.publicKey.q1)
    if(!isPointOnCurve){
       throw new Error("ERROR: Device does not support R1 curve")
    }
    this.bananaSigner = new BananaSigner(this.jsonRpcProvider, this.publicKey);
  };

  /**
   * @method getBananaProvider
   * @params none
   * @returns { ERC4337EthersProvider } bananaProvider
   * create ERC4337Provider instance of user's smart contract wallet. Used as BananaProvider.
   */

  getBananaProvider = async (): Promise<ERC4337EthersProvider> => {
    if (this.bananaProvider) return this.bananaProvider;

    let signer: Signer = this.bananaSigner;
    let network: Network = await this.jsonRpcProvider.getNetwork();

    const entryPoint: EntryPoint = EntryPoint__factory.connect(
      this.Provider.bundlerUrl,
      this.jsonRpcProvider
    );

    const TouchIdSafeWalletContractProxyFactory: NewTouchIdSafeAccountProxyFactory = this.getTouchIdSafeWalletContractProxyFactory(signer)

    const TouchIdSafeWalletContractProxyFactoryAddress: string = TouchIdSafeWalletContractProxyFactory.address;

    const myPaymasterApi: MyPaymasterApi = new MyPaymasterApi();

    const smartWalletAPI: MyWalletApi = new MyWalletApi({
      provider: this.jsonRpcProvider,
      entryPointAddress: this.Provider.entryPointAddress,
      accountAddress: this.walletAddress,
      owner: signer,
      factoryAddress: TouchIdSafeWalletContractProxyFactoryAddress,
      paymasterAPI: myPaymasterApi,
    });

    this.accountApi = smartWalletAPI;

    const httpRpcClient: HttpRpcClient = new HttpRpcClient(
      this.Provider.bundlerUrl,
      this.Provider.entryPointAddress,
      network.chainId
    );

    this.httpRpcClient = httpRpcClient;

    this.bananaProvider = await new ERC4337EthersProvider(
      network.chainId,
      this.Provider,
      signer,
      this.jsonRpcProvider,
      httpRpcClient,
      entryPoint,
      smartWalletAPI
    ).init();

    return this.bananaProvider;
  };

  /**
   * @method getTouchIdSafeWalletContractInitCode
   * @params none
   * @returns { string } TouchIdSafeWalletContractInitCode
   * create initCode for TouchIdSafeWalletContract
   */

  private getTouchIdSafeWalletContractInitCode = (): string => {
    const TouchIdSafeWalletContractProxyFactory: NewTouchIdSafeAccountProxyFactory  = this.getTouchIdSafeWalletContractProxyFactory(this.jsonRpcProvider)
    const TouchIdSafeWalletContractSingletonAddress: string = this.addresses.TouchIdSafeWalletContractSingletonAddress;
    const TouchIdSafeWalletContractInitializer: string = this.getTouchIdSafeWalletContractInitializer();

    const TouchIdSafeWalletContractInitCode: string = hexConcat([
      TouchIdSafeWalletContractProxyFactory.address,
      TouchIdSafeWalletContractProxyFactory.interface.encodeFunctionData(
        'createChainSpecificProxyWithNonce',
        [
          TouchIdSafeWalletContractSingletonAddress,
          TouchIdSafeWalletContractInitializer,
          "0" // as qValues will change the address now
        ]
      )]);
    return TouchIdSafeWalletContractInitCode;
  }

  /**
   * @method getTouchIdSafeWalletContractInitializer
   * @params none
   * @returns { string } TouchIdSafeWalletContractInitializer
   * create initializer which is callData for setupWithEntrypoint function
   */

  private getTouchIdSafeWalletContractInitializer = (): string => {
    const TouchIdSafeWalletContractSingleton: NewTouchIdAccountSafe = NewTouchIdAccountSafe__factory.connect(
      this.addresses.TouchIdSafeWalletContractSingletonAddress,
      this.jsonRpcProvider
    );
    const TouchIdSafeWalletContractQValuesArray: Array<string> = [this.publicKey.q0, this.publicKey.q1];
    //@ts-ignore
    const TouchIdSafeWalletContractInitializer = TouchIdSafeWalletContractSingleton.interface.encodeFunctionData('setupWithEntrypoint',
    [
      ["0x288d1d682311018736B820294D22Ed0DBE372188"], // owners 
      1,                                              // thresold will remain fix 
      "0x0000000000000000000000000000000000000000",   // to address 
      "0x",                                           // modules setup calldata
      "0x0000000000000000000000000000000000000000",   // fallback handler
      "0x0000000000000000000000000000000000000000",   // payment token
      0,                                              // payment 
      "0x288d1d682311018736B820294D22Ed0DBE372188",   // payment receiver
      "0x0576a174D229E3cFA37253523E645A78A0C91B57",   // entrypoint
      // @ts-ignore
      TouchIdSafeWalletContractQValuesArray,          // q values 
      this.addresses.Elliptic                         // elliptic curve
    ]);

    return TouchIdSafeWalletContractInitializer
  };

  /**
   * @method createWallet
   * @param { string } walletIdentifier
   * @returns 
   * sucess: returns { status: success, address: walletAddress }
   * error: returns { status: error, address: "" }
   * setup signers and provider along with it create walletmetadata corresponding to the new wallet request.
   */

  createWallet = async (walletIdentifier: string) => {
    try {
      await this.createSignerAndCookieObject(walletIdentifier);
      this.walletIdentifier = walletIdentifier
      const signer = this.bananaSigner;
      const TouchIdSafeWalletContractProxyFactory = this.getTouchIdSafeWalletContractProxyFactory(signer);
      const TouchIdSafeWalletContractInitializer = this.getTouchIdSafeWalletContractInitializer();
      const TouchIdSafeWalletContractAddress = await TouchIdSafeWalletContractProxyFactory.getAddress(this.addresses.TouchIdSafeWalletContractSingletonAddress, "0", TouchIdSafeWalletContractInitializer);
      this.walletAddress = TouchIdSafeWalletContractAddress;
      this.bananaProvider = await this.getBananaProvider();
      this.setCookieAfterAddressCreation(walletIdentifier);
      this.postCookieChecks(walletIdentifier);
      return {
        status: "success",
        address: TouchIdSafeWalletContractAddress
      }
    } catch (err) {
      return { status: "error", address: "" };
    }
  }

  /**
   * @method connectWallet
   * @param { string } walletIdentifier
   * @returns 
   * sucess: returns { status: success, address: walletAddress }
   * error: returns { status: error, address: "" }
   * setup providers and signers at the sdk end in case user's already has a wallet created before.
   */

  connectWallet = async (walletIdentifier: string) => {
    try {
      await this.createSignerAndCookieObject(walletIdentifier)
      this.walletAddress = this.cookieObject.walletAddress;
      this.postCookieChecks(walletIdentifier);
      return { status: "success", address: this.walletAddress }
    } catch (err) {
      return { status: "error", address: "" }
    }
  }

  /**
   * @method getWalletName
   * @param none
   * @returns { string } walletName
   * method to getWalletName stored in user's cookie storage against bananaUser key
   */

  getWalletName = () => {
    const walletName = this.cookie.getCookie("bananaUser");
    return walletName;
  };

  /**
   * @method postCookieChecks
   * @param { string } walletIdentifier
   * @returns none
   * handles cookie update
   */

  private postCookieChecks = async (walletIdentifier: string) => {
    // check for username
    const walletName = this.cookie.getCookie("bananaUser");
    if (!!walletName) {
      this.cookie.setCookie(walletName, JSON.stringify(this.cookieObject));
      return;
    }
    this.cookie.setCookie("bananaUser", JSON.stringify(walletIdentifier));
    this.cookie.setCookie(walletIdentifier, JSON.stringify(this.cookieObject));
  };

  /**
   * @method setCookieOnceWalletDeployed
   * @param { boolean } initCodeStatus
   * @returns none
   * Updates the initCode status in walletMetaData in local and global storage database.
   */

  private setCookieOnceWalletDeployed = async (initCodeStatus: boolean) => {
    if (navigator.cookieEnabled) {
      const walletIdentifier = this.cookie.getCookie("bananaUser");
      this.cookieObject = this.cookie.getCookie(walletIdentifier);
      this.cookieObject.initcode = initCodeStatus;
      this.cookie.setCookie(
        walletIdentifier,
        JSON.stringify(this.cookieObject)
      );
      const setCredentialsStatus = await setUserCredentials(
        walletIdentifier,
        this.cookieObject
      );
      console.log("Cookie set status: ", setCredentialsStatus);
    } else {
      console.log("Cookies are not enabled in the browser.");
    }
  }

  /**
   * @method sendUserOpToBundler
   * @param { UserOperationStruct } userOp
   * @returns none
   * Updates the initCode status in walletMetaData in local and global storage database.
   */

  private sendUserOpToBundler = async (userOp: UserOperationStruct) => {
    try {
      const uHash = await this.httpRpcClient.sendUserOpToBundler(
        userOp as any
      );
      return uHash;
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * @method contructUserOp
   * @param { string } functionCallData, { string } value, { string } destination, { boolean } isContractDeployed, { BytesLike }initCode
   * @returns { UserOperationStruct } userOp
   * Construct userOp based on passed parameters
   */

  private contructUserOp = async (
    functionCallData: string, 
    value:string, 
    destination: string, 
    isContractDeployed: boolean, 
    initCode: BytesLike) => {
    const TouchIdSafeWalletContract: NewTouchIdAccountSafe = NewTouchIdAccountSafe__factory.connect(
      this.walletAddress,
      this.jsonRpcProvider
    );

    if(!isContractDeployed) {
      const delegateCall = ethers.BigNumber.from("1")
      const encodedCallData = TouchIdSafeWalletContract.interface.encodeFunctionData(
        "execTransactionFromEntrypoint",
        [destination, ethers.utils.parseEther(value), functionCallData, delegateCall]
      );
      const userOp = await constructUserOpWithInitCode(
          this.jsonRpcProvider,
          this.walletAddress,
          encodedCallData,
          initCode
      ); 
      console.log('final userop ', userOp);
      return userOp;
    }
    let userOp;

    //! Need to create our own createUnsignedUserOp function as current aa sdk function won't work
    // try {
    //   userOp = await this.accountApi.createUnsignedUserOp({
    //     target: this.walletAddress,
    //     data: userOpCallData,
    //     ...(await getGasFee(this.jsonRpcProvider)),
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
    return userOp;
  }

  /**
   * @method constructAndSendUserOp
   * @param { string } functionCallData, { string } value, { string } destination, { boolean } isContractDeployed, { BytesLike }initCode
   * @returns { string } uHash
   * Construct userOp and send to bundler and returns userOp requesId
   */

  private constructAndSendUserOp = async (funcCallData: string, destination:string, value: string, isContractDeployed: boolean, initCode: BytesLike) => {
    const userOp = await this.contructUserOp(funcCallData, value, destination, isContractDeployed, initCode);
    //@ts-ignore
    userOp.verificationGasLimit = 3e6;
    const reqId = await this.accountApi.getUserOpHash(userOp as any);
    let processStatus = true;
    let finalUserOp;
    while(processStatus) {
      if(!isContractDeployed && userOp) {
        userOp.callGasLimit = 3e6;
      }
      let minGasRequired =  ethers.BigNumber.from(userOp?.callGasLimit)
                            .add(ethers.BigNumber.from(userOp?.verificationGasLimit))
                            .add(ethers.BigNumber.from(userOp?.callGasLimit));
      let currentGasPrice = await this.jsonRpcProvider.getGasPrice()
      let minBalanceRequired = minGasRequired.mul(currentGasPrice)
      //@ts-ignore
      let userBalance: BigNumber = await this.jsonRpcProvider.getBalance(userOp?.sender);
      if(userBalance.lt(minBalanceRequired)){
        throw new Error("ERROR: Insufficient balance in Wallet")
      }
      
      const { newUserOp, process } = await this.bananaSigner.signUserOp(userOp as any, reqId, this.publicKey.encodedId);
      if(process === 'success') { 
        finalUserOp = newUserOp;
        processStatus = false; 
      }
    }
    
    const uHash: string = await this.sendUserOpToBundler(finalUserOp as any) || '';
    let initCodeSetStatus = false;
    if(!!uHash) {
      if(uHash.length === 66) {
        initCodeSetStatus = true;
      }
    }
    if(!isContractDeployed) {
      this.setCookieOnceWalletDeployed(initCodeSetStatus);
    }
    return uHash;
  } 

  /**
   * @method createWalletAndTransact
   * @param { string } functionCallData, { string } value, { string } destination
   * @returns { string } transactionHash
   * Facilitate the first bundle transaction set's initcode along with callData and forward userOp to bundler
   */

  private createWalletAndTransact = async (
    funcCallData: string,
    destination: string,
    value: string
  ) => {
    const isContractDeployed = false;
    const initCode = this.getTouchIdSafeWalletContractInitCode();
    const transactionHash = await this.constructAndSendUserOp(funcCallData, destination, value, isContractDeployed, initCode);
    return transactionHash;
  };

  /**
   * @method execute
   * @param { string } functionCallData, { string } value, { string } destination
   * @returns { string } transactionHash
   * handles the transaction to be initiated using user smart contract wallet.
   */

  execute = async (
    funcCallData: string,
    destination: string,
    value: string
  ) => {
    const walletCreds = this.cookie.getCookie(this.walletIdentifier);
    if(walletCreds) {
      if(!walletCreds.initcode) {
        let uHash = await this.createWalletAndTransact(
          funcCallData,
          destination,
          value
        );
        return uHash;
      }
    } else {
      const initCodeStatus = await checkInitCodeStatus(this.walletIdentifier);
      if(!initCodeStatus.isInitCode) {
        let uHash = await this.createWalletAndTransact(
          funcCallData,
          destination,
          value
        );
        return uHash;
      }
    }

    const bananaProvider = await this.getBananaProvider();
    const aaSigner = bananaProvider.getSigner();
    this.TouchIdSafeWalletContract = NewTouchIdAccountSafe__factory.connect(this.walletAddress || "", this.bananaSigner);
    const isContractDeployed = true;
    this.TouchIdSafeWalletContract = this.TouchIdSafeWalletContract.connect(aaSigner);
    const transactionHash = await this.constructAndSendUserOp(funcCallData, destination, value, isContractDeployed, '');
    return transactionHash;
  };

  /**
   * @method isWalletNameUnique
   * @param { string } walletName
   * @returns { boolean } isWalletNameTaken
   * check isWalletName user is giving is already taken or not
   */

  isWalletNameUnique = async (walletName: string) => {
    try {
      const isWalletNameTaken = await checkIsWalletNameExist(walletName);
      return isWalletNameTaken;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  signMessage = async(message:string, isK1Signature?:boolean) =>{
    // To generate signature, first calculate the keccak256 hash of encodePacked message
    const messageHash = ethers.utils.keccak256(ethers.utils.solidityPack(["string"],[message]))
    if(isK1Signature){
      console.log('string message', message)
      const response = await Axios({
        url: K1_SIGNATURE_LAMBDA_URL,
        method: 'post',
        params: {
              "walletIdentifier": this.walletIdentifier,
              "message": message,
              "hostname": window.location.hostname,
        }
      });
      //const signature = await generateK1Signature(this.walletIdentifier, message)
      console.log("signedMessage", this.hashMessage(message))
      console.log("response", response)
      return {signedMessage:this.hashMessage(message), signature: response.data.message.signature}
    }
    else{
      const signatureAndMessage = await this.bananaSigner.signMessage(messageHash, this.cookieObject.encodedId)
      const abi = ethers.utils.defaultAbiCoder
      const decoded = abi.decode(["uint256", "uint256", "uint256"], signatureAndMessage);
      const signedMessage = decoded[2];
      const rHex = decoded[0].toHexString();
      const sHex = decoded[1].toHexString();
      const finalSignature = rHex + sHex.slice(2);
      /**
       * Note:
       * the `message` is signed using secp256r1 instead of secp256k1, hence to verify
       * signedMessage we cannot use ecrecover!
       */
      return {signedMessage:signedMessage.toHexString(), signature: finalSignature}
    }
  }

 hashMessage = (message: Bytes | string): string =>{
  const messagePrefix = "\x19Ethereum Signed Message:\n";
    if (typeof(message) === "string") { message = toUtf8Bytes(message); }
    return keccak256(concat([
        toUtf8Bytes(messagePrefix),
        toUtf8Bytes(String(message.length)),
        message
    ]));
  }
}
