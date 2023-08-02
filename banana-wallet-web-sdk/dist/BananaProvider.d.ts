import { ethers } from "ethers";
import { MyWalletApi } from "./MyWalletApi";
import { HttpRpcClient } from "@account-abstraction/sdk/dist/src/HttpRpcClient";
import { Chains } from "./Constants";
import { BananaSigner } from "./BananaSigner";
import { BananaCookie } from "./BananaCookie";
import { PublicKey, ClientConfig, UserCredentialObject, ChainConfig, PaymasterOptions } from "./interfaces/Banana.interface";
import { Wallet } from "./BananaWallet";
import { Banana4337Provider } from "./Banana4337Provider";
export declare class Banana {
    #private;
    readonly chain: Chains;
    readonly _paymasterOptions?: PaymasterOptions[] | undefined;
    Provider: ClientConfig;
    accountApi: MyWalletApi;
    httpRpcClient: HttpRpcClient;
    publicKey: PublicKey;
    bananaSigner: BananaSigner;
    jsonRpcProvider: ethers.providers.JsonRpcProvider;
    walletAddress: string;
    bananaProvider: Banana4337Provider;
    cookieObject: UserCredentialObject;
    cookie: BananaCookie;
    walletIdentifier: string;
    jsonRpcProviderUrl: string;
    addresses: ChainConfig;
    network: Chains;
    currentPaymasterUrl: string | undefined;
    constructor(chain: Chains, _paymasterOptions?: PaymasterOptions[] | undefined);
    /**
     * @method getTouchIdSafeWalletContractProxyFactory
     * @params { Signer | JsonRpcProvider } signerOrProvider
     * @returns { BananaAccountProxyFactory } TouchIdSafeWalletContractProxyFactory
     * create factory contract instance for factory contract factory types.
     */
    private getTouchIdSafeWalletContractProxyFactory;
    /**
     * @method setCookieAfterAddressCreation
     * @params { string } walletIdentifier
     * @returns none
     * Set cookie to local and global storage after wallet creation.
     */
    private setCookieAfterAddressCreation;
    /**
     * @method createSignerAndCookieObject
     * @params { string } walletIdentifier
     * @returns none
     * Create cookie object and create secure enclave based transaction signer for user's wallet.
     */
    private createSignerAndCookieObject;
    getAddress(): string;
    getUsernameRequestStatus(): boolean;
    /**
     * @method getBananaProvider
     * @params none
     * @returns { ERC4337EthersProvider } bananaProvider
     * create ERC4337Provider instance of user's smart contract wallet. Used as BananaProvider.
     */
    getBananaProvider: () => Promise<Banana4337Provider>;
    /**
     * @method getTouchIdSafeWalletContractInitializer
     * @params none
     * @returns { string } TouchIdSafeWalletContractInitializer
     * create initializer which is callData for setupWithEntrypoint function
     */
    private getTouchIdSafeWalletContractInitializer;
    /**
     * @method createWallet
     * @param { string } walletIdentifier
     * @returns
     * sucess: returns { status: success, address: walletAddress }
     * error: returns { status: error, address: "" }
     * setup signers and provider along with it create walletmetadata corresponding to the new wallet request.
     */
    createWallet: () => Promise<Wallet>;
    /**
     * @method connectWallet
     * @param { string } walletIdentifier
     * @returns
     * sucess: returns { status: success, address: walletAddress }
     * error: returns { status: error, address: "" }
     * setup providers and signers at the sdk end in case user's already has a wallet created before.
     */
    connectWallet: (walletIdentifier: string) => Promise<Wallet>;
    /**
     * @method resetWallet
     * @param none
     * @returns { string } walletName
     * method to remove current wallet metadata from browser
     */
    resetWallet: () => {
        success: boolean;
        error?: undefined;
    } | {
        success: boolean;
        error: unknown;
    };
    /**
     * @method getWalletName
     * @param none
     * @returns { string } walletName
     * method to getWalletName stored in user's cookie storage against bananaUser key
     */
    getWalletName: () => any;
    /**
     * @method getOwnerAddress
     * @param { string } walletName
     * @returns { string } eoaAddress
     * method to return the hardware address for a specific walletName.
     */
    getEOAAddress: () => Promise<any[]>;
    /**
     * @method verify
     * @param { string } signaure, { string } messageSigned, { string } eoaAddress
     * @returns { boolean } isVerified
     * method to verify message against signature
     */
    verifySignature: (signature: string, message: string, eoaAddress: any) => Promise<boolean>;
    /**
     * @method postCookieChecks
     * @param { string } walletIdentifier
     * @returns none
     * handles cookie update
     */
    private postCookieChecks;
    /**
     * @method isWalletNameUnique
     * @param { string } walletName
     * @returns { boolean } isWalletNameTaken
     * check isWalletName user is giving is already taken or not
     */
    isWalletNameUnique: (walletName: string) => Promise<boolean>;
}
