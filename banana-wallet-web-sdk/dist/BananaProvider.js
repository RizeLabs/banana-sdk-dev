"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Banana_isUserNameRequested, _Banana_bananaTransportInstance;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banana = void 0;
const ethers_1 = require("ethers");
const contracts_1 = require("@account-abstraction/contracts");
const MyPayMasterApi_1 = require("./MyPayMasterApi");
const MyWalletApi_1 = require("./MyWalletApi");
const HttpRpcClient_1 = require("@account-abstraction/sdk/dist/src/HttpRpcClient");
const Constants_1 = require("./Constants");
const BananaCookie_1 = require("./BananaCookie");
const Controller_1 = require("./Controller");
const types_1 = require("./types");
const BananaWallet_1 = require("./BananaWallet");
const Banana4337Provider_1 = require("./Banana4337Provider");
const BananaTransporter_1 = require("./BananaTransporter");
const getKeccakHash_1 = require("./utils/getKeccakHash");
const base64url_arraybuffer_1 = require("./utils/base64url-arraybuffer");
class Banana {
    constructor(chain, _paymasterOptions) {
        this.chain = chain;
        this._paymasterOptions = _paymasterOptions;
        _Banana_isUserNameRequested.set(this, false);
        _Banana_bananaTransportInstance.set(this, void 0);
        /**
         * @method getTouchIdSafeWalletContractProxyFactory
         * @params { Signer | JsonRpcProvider } signerOrProvider
         * @returns { BananaAccountProxyFactory } TouchIdSafeWalletContractProxyFactory
         * create factory contract instance for factory contract factory types.
         */
        this.getTouchIdSafeWalletContractProxyFactory = (signerOrProvider) => {
            const TouchIdSafeWalletContractProxyFactory = types_1.BananaAccountProxyFactory__factory.connect(this.addresses.TouchIdSafeWalletContractProxyFactoryAddress, signerOrProvider);
            return TouchIdSafeWalletContractProxyFactory;
        };
        /**
         * @method setCookieAfterAddressCreation
         * @params { string } walletIdentifier
         * @returns none
         * Set cookie to local and global storage after wallet creation.
         */
        this.setCookieAfterAddressCreation = async (walletIdentifier, saltNonce) => {
            this.cookieObject = {
                q0: this.publicKey.q0,
                q1: this.publicKey.q1,
                walletAddress: this.walletAddress,
                initcode: false,
                encodedId: this.publicKey.encodedId,
                username: walletIdentifier,
                saltNonce: saltNonce.toString() //! Need to make changes to the mapper code for this additional property
            };
            // saving cookie correspond to user Identifier in cookie
            this.cookie.setCookie("bananaUser", JSON.stringify(walletIdentifier));
            this.cookie.setCookie(walletIdentifier, JSON.stringify(this.cookieObject));
            const setCredentialsStatus = await (0, Controller_1.setWalletMetaData)(walletIdentifier, this.cookieObject);
            if (!setCredentialsStatus.success)
                throw new Error("Error: db update failure");
        };
        /**
         * @method createSignerAndCookieObject
         * @params { string } walletIdentifier
         * @returns none
         * Create cookie object and create secure enclave based transaction signer for user's wallet.
         */
        this.createSignerAndCookieObject = async (walletIdentifier) => {
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
                    // this.createBananaSignerInstance();
                    return;
                }
                else {
                    const walletCreds = await (0, Controller_1.getWalletMetaData)(walletIdentifier);
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
                        // this.createBananaSignerInstance();
                        return;
                    }
                }
            }
            else {
                // when nothing in cookie or cred is there but with no username in that case fetching key from user provided walletname
                const walletCreds = await (0, Controller_1.getWalletMetaData)(walletIdentifier);
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
                    return;
                }
                // he must have sent the username for registering wallet
            }
            this.walletIdentifier = walletIdentifier;
        };
        /**
         * @method getBananaProvider
         * @params none
         * @returns { ERC4337EthersProvider } bananaProvider
         * create ERC4337Provider instance of user's smart contract wallet. Used as BananaProvider.
         */
        this.getBananaProvider = async () => {
            if (this.bananaProvider)
                return this.bananaProvider;
            let network = await this.jsonRpcProvider.getNetwork();
            const entryPoint = contracts_1.EntryPoint__factory.connect(this.Provider.entryPointAddress, this.jsonRpcProvider);
            const TouchIdSafeWalletContractProxyFactory = this.getTouchIdSafeWalletContractProxyFactory(this.jsonRpcProvider);
            const TouchIdSafeWalletContractProxyFactoryAddress = TouchIdSafeWalletContractProxyFactory.address;
            const myPaymasterApi = new MyPayMasterApi_1.MyPaymasterApi();
            const smartWalletAPI = new MyWalletApi_1.MyWalletApi({
                provider: this.jsonRpcProvider,
                entryPointAddress: this.Provider.entryPointAddress,
                accountAddress: this.walletAddress,
                owner: this.jsonRpcProvider.getSigner(),
                factoryAddress: TouchIdSafeWalletContractProxyFactoryAddress,
                paymasterAPI: myPaymasterApi,
                _qValues: [this.publicKey.q0, this.publicKey.q1],
                _singletonTouchIdSafeAddress: this.addresses.TouchIdSafeWalletContractSingletonAddress,
                _ownerAddress: this.getAddress(),
                _fallBackHandler: this.addresses.fallBackHandlerAddress,
                _saltNonce: this.cookieObject.saltNonce,
                _encodedIdHash: (0, getKeccakHash_1.getKeccakHash)(this.publicKey.encodedId)
            });
            this.accountApi = smartWalletAPI;
            const httpRpcClient = new HttpRpcClient_1.HttpRpcClient(this.Provider.bundlerUrl, this.Provider.entryPointAddress, network.chainId);
            this.httpRpcClient = httpRpcClient;
            this.bananaProvider = await new Banana4337Provider_1.Banana4337Provider(network.chainId, this.Provider, this.jsonRpcProvider.getSigner(), this.jsonRpcProvider, httpRpcClient, entryPoint, smartWalletAPI, this.publicKey, this.jsonRpcProvider, this.currentPaymasterUrl).init();
            return this.bananaProvider;
        };
        /**
         * @method getTouchIdSafeWalletContractInitializer
         * @params none
         * @returns { string } TouchIdSafeWalletContractInitializer
         * create initializer which is callData for setupWithEntrypoint function
         */
        this.getTouchIdSafeWalletContractInitializer = () => {
            const TouchIdSafeWalletContractSingleton = types_1.BananaAccount__factory.connect(this.addresses.TouchIdSafeWalletContractSingletonAddress, this.jsonRpcProvider);
            const TouchIdSafeWalletContractQValuesArray = [this.publicKey.q0, this.publicKey.q1];
            //@ts-ignore
            const TouchIdSafeWalletContractInitializer = TouchIdSafeWalletContractSingleton.interface.encodeFunctionData('setupWithEntrypoint', [
                [this.getAddress()],
                1,
                "0x0000000000000000000000000000000000000000",
                "0x",
                this.addresses.fallBackHandlerAddress,
                "0x0000000000000000000000000000000000000000",
                0,
                "0x0000000000000000000000000000000000000000",
                this.Provider.entryPointAddress,
                (0, getKeccakHash_1.getKeccakHash)(this.publicKey.encodedId),
                // @ts-ignore
                TouchIdSafeWalletContractQValuesArray, // q values 
            ]);
            return TouchIdSafeWalletContractInitializer;
        };
        /**
         * @method createWallet
         * @param { string } walletIdentifier
         * @returns
         * sucess: returns { status: success, address: walletAddress }
         * error: returns { status: error, address: "" }
         * setup signers and provider along with it create walletmetadata corresponding to the new wallet request.
         */
        this.createWallet = async () => {
            __classPrivateFieldSet(this, _Banana_isUserNameRequested, true, "f");
            const walletIdentifier = await __classPrivateFieldGet(this, _Banana_bananaTransportInstance, "f").getWalletName();
            await this.createSignerAndCookieObject(walletIdentifier);
            this.walletIdentifier = walletIdentifier;
            const TouchIdSafeWalletContractProxyFactory = this.getTouchIdSafeWalletContractProxyFactory(this.jsonRpcProvider);
            const TouchIdSafeWalletContractInitializer = this.getTouchIdSafeWalletContractInitializer();
            let saltNonce = 0;
            let isAddressUnique = false;
            let TouchIdSafeWalletContractAddress;
            while (!isAddressUnique) {
                TouchIdSafeWalletContractAddress = await TouchIdSafeWalletContractProxyFactory.getAddress(this.addresses.TouchIdSafeWalletContractSingletonAddress, saltNonce.toString(), TouchIdSafeWalletContractInitializer);
                isAddressUnique = true;
                //! No need to check address for now 
                // await NetworkAddressChecker(TouchIdSafeWalletContractAddress)
                if (!isAddressUnique)
                    saltNonce++;
            }
            if (TouchIdSafeWalletContractAddress) {
                this.walletAddress = TouchIdSafeWalletContractAddress;
            }
            this.setCookieAfterAddressCreation(walletIdentifier, saltNonce);
            this.bananaProvider = await this.getBananaProvider();
            this.postCookieChecks(walletIdentifier);
            //! for now our wallet is chainSpecific
            return new BananaWallet_1.Wallet(this.walletAddress, this.bananaProvider, this.network);
        };
        /**
         * @method connectWallet
         * @param { string } walletIdentifier
         * @returns
         * sucess: returns { status: success, address: walletAddress }
         * error: returns { status: error, address: "" }
         * setup providers and signers at the sdk end in case user's already has a wallet created before.
         */
        this.connectWallet = async (walletIdentifier) => {
            await this.createSignerAndCookieObject(walletIdentifier);
            this.bananaProvider = await this.getBananaProvider();
            this.walletAddress = this.cookieObject.walletAddress;
            this.postCookieChecks(walletIdentifier);
            return new BananaWallet_1.Wallet(this.walletAddress, this.bananaProvider, this.network);
        };
        /**
         * @method resetWallet
         * @param none
         * @returns { string } walletName
         * method to remove current wallet metadata from browser
         */
        this.resetWallet = () => {
            try {
                const walletName = this.cookie.getCookie("bananaUser");
                this.cookie.deleteCookie(walletName);
                this.cookie.deleteCookie("bananaUser");
                __classPrivateFieldSet(this, _Banana_isUserNameRequested, false, "f");
                return { success: true };
            }
            catch (err) {
                return { success: false, error: err };
            }
        };
        /**
         * @method getWalletName
         * @param none
         * @returns { string } walletName
         * method to getWalletName stored in user's cookie storage against bananaUser key
         */
        this.getWalletName = () => {
            const walletName = this.cookie.getCookie("bananaUser");
            return walletName;
        };
        /**
         * @method getOwnerAddress
         * @param { string } walletName
         * @returns { string } eoaAddress
         * method to return the hardware address for a specific walletName.
         */
        this.getEOAAddress = async () => {
            const walletMetaData = await (0, Controller_1.getWalletMetaData)(this.walletIdentifier);
            return [walletMetaData.q0, walletMetaData.q1];
        };
        /**
         * @method verify
         * @param { string } signaure, { string } messageSigned, { string } eoaAddress
         * @returns { boolean } isVerified
         * method to verify message against signature
         */
        //! for now assigned eoaAddress as any type
        this.verifySignature = async (signature, message, eoaAddress) => {
            const bananaAccount = types_1.BananaAccount__factory.connect(this.addresses.TouchIdSafeWalletContractSingletonAddress, this.jsonRpcProvider);
            const abiDecode = ethers_1.ethers.utils.defaultAbiCoder;
            const decoded = abiDecode.decode(['uint', 'uint', 'bytes', 'string', 'string', 'bytes32'], signature);
            const rHex = decoded[0]._hex;
            const sHex = decoded[1]._hex;
            const authenticatorData = decoded[2];
            const clientDataJSONPre = decoded[3];
            const clientDataJSONPost = decoded[4];
            const messageHash = ethers_1.ethers.utils.keccak256(ethers_1.ethers.utils.solidityPack(["string"], [message]));
            let isSignatureValid = false;
            try {
                const textEncoder = new TextEncoder();
                const base64RequestId = (0, base64url_arraybuffer_1.encode)(textEncoder.encode(messageHash).buffer);
                const clientDataJSON = `${clientDataJSONPre}${base64RequestId}${clientDataJSONPost}`;
                const concatenatedData = ethers_1.ethers.utils.concat([authenticatorData, ethers_1.ethers.utils.sha256(ethers_1.ethers.utils.toUtf8Bytes(clientDataJSON))]);
                const messageToBeSigned = ethers_1.ethers.utils.sha256(concatenatedData);
                isSignatureValid = await bananaAccount.verifySignature(messageToBeSigned, [rHex, sHex], eoaAddress);
            }
            catch (err) {
                console.log(err);
                return false;
            }
            return isSignatureValid;
        };
        /**
         * @method postCookieChecks
         * @param { string } walletIdentifier
         * @returns none
         * handles cookie update
         */
        this.postCookieChecks = async (walletIdentifier) => {
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
         * @method isWalletNameUnique
         * @param { string } walletName
         * @returns { boolean } isWalletNameTaken
         * check isWalletName user is giving is already taken or not
         */
        this.isWalletNameUnique = async (walletName) => {
            try {
                const isWalletNameTaken = await (0, Controller_1.checkIsWalletNameExist)(walletName);
                return isWalletNameTaken;
            }
            catch (err) {
                console.log(err);
                throw err;
            }
        };
        this.Provider = (0, Constants_1.getClientConfigInfo)(chain);
        this.addresses = (0, Constants_1.getChainSpecificAddress)(chain);
        this.jsonRpcProviderUrl = (0, Constants_1.getChainSpecificConfig)(chain).jsonRpcUrl;
        this.jsonRpcProvider = new ethers_1.ethers.providers.JsonRpcProvider(this.jsonRpcProviderUrl);
        this.cookie = new BananaCookie_1.BananaCookie();
        this.network = chain;
        __classPrivateFieldSet(this, _Banana_bananaTransportInstance, new BananaTransporter_1.BananaTransporter(), "f");
        this.currentPaymasterUrl = _paymasterOptions?.find(paymaster => paymaster.chainId === String(this.network))?.paymasterUrl;
    }
    getAddress() {
        const uncompressedPublicKey = `0x04${this.publicKey.q0.slice(2)}${this.publicKey.q1.slice(2)}`;
        return ethers_1.ethers.utils.computeAddress(uncompressedPublicKey);
    }
    getUsernameRequestStatus() {
        return __classPrivateFieldGet(this, _Banana_isUserNameRequested, "f");
    }
}
exports.Banana = Banana;
_Banana_isUserNameRequested = new WeakMap(), _Banana_bananaTransportInstance = new WeakMap();
//# sourceMappingURL=BananaProvider.js.map