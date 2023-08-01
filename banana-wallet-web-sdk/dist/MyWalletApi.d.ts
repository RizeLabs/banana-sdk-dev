import { BigNumber, BigNumberish } from "ethers";
import { Signer } from "@ethersproject/abstract-signer";
import { BaseApiParams } from "@account-abstraction/sdk/dist/src/BaseAccountAPI";
import { SimpleAccountAPI } from "@account-abstraction/sdk";
import { BananaAccount } from "./types";
import { UserOperationStruct } from './types/BananaAccount';
import { TransactionDetailsForUserOp } from './interfaces/Banana.interface';
/**
 * constructor params, added no top of base params:
 * @param owner the signer object for the wallet owner
 * @param factoryAddress address of contract "factory" to deploy new contracts (not needed if wallet already deployed)
 * @param index nonce value used when creating multiple wallets for the same owner
 */
export interface MyWalletApiParams extends BaseApiParams {
    owner: Signer;
    factoryAddress?: string;
    index?: number;
    _qValues: [string, string];
    _singletonTouchIdSafeAddress: string;
    _ownerAddress: string;
    _fallBackHandler: string;
    _saltNonce: string;
    _encodedIdHash: string;
}
/**
 * An implementation of the BaseWalletAPI using the MyWallet contract.
 * - contract deployer gets "entrypoint", "owner" addresses and "index" nonce
 * - owner signs requests using normal "Ethereum Signed Message" (ether's signer.signMessage())
 * - nonce method is "nonce()"
 * - execute method is "execFromEntryPoint()"
 */
export declare class MyWalletApi extends SimpleAccountAPI {
    EllipticCurveAddress: string;
    qValues: [string, string];
    singletonTouchIdSafeAddress: string;
    ownerAddress: string;
    fallBackHandleraddress: string;
    saltNonce: string;
    encodedIdHash: string;
    constructor(params: MyWalletApiParams);
    /**
     *
     * @param requestId - the has that your wallet must sign
     * @returns the string that will used in userOp.signature & will be send to validateUserOp in your wallet's function
     */
    signRequestId(requestId: string): Promise<string>;
    _getAccountContract(): Promise<BananaAccount>;
    getTouchIdSafeWalletContractInitializer: () => string;
    /**
     * @method getTouchIdSafeWalletContractInitCode
     * @params none
     * @returns { string } TouchIdSafeWalletContractInitCode
     * create initCode for TouchIdSafeWalletContract
     *
     * return the value to put into the "initCode" field, if the account is not yet deployed.
     * this value holds the "factory" address, followed by this account's information
     */
    getAccountInitCode(): Promise<string>;
    getNonce(): Promise<BigNumber>;
    /**
     * encode a method call from entryPoint to our contract
     * @param target
     * @param value
     * @param data
     */
    encodeExecute(target: string, value: BigNumberish, data: string): Promise<string>;
    encodeBatchExecute(info: any): Promise<string>;
    encodeUserOpCallDataAndGasLimitForBatchedTransaction(detailsForUserOp: TransactionDetailsForUserOp): Promise<{
        callData: string;
        callGasLimit: BigNumber;
    }>;
    createUnsignedUserOpForBatchedTransaction(info: TransactionDetailsForUserOp[]): Promise<UserOperationStruct>;
    signUserOpHash(userOpHash: string): Promise<string>;
    getAccountAddress(): Promise<string>;
}
