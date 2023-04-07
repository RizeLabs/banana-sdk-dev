// @ts-nocheck
import { BigNumber, BigNumberish } from 'ethers'
import { arrayify, hexConcat } from 'ethers/lib/utils'
import { Signer } from '@ethersproject/abstract-signer'
import { BaseApiParams } from '@account-abstraction/sdk/dist/src/BaseAccountAPI'
import { SimpleAccountAPI } from '@account-abstraction/sdk'
import { BananaAccount__factory, BananaAccountProxyFactory__factory} from './types/factories'
import { ethers } from 'ethers'
import { BananaSigner } from './BananaSigner'

/**
 * constructor params, added no top of base params:
 * @param owner the signer object for the wallet owner
 * @param factoryAddress address of contract "factory" to deploy new contracts (not needed if wallet already deployed)
 * @param index nonce value used when creating multiple wallets for the same owner
 */
export interface MyWalletApiParams extends BaseApiParams {
  owner: BananaSigner
  factoryAddress?: string
  index?: number
  _EllipticCurveAddress: string
  _qValues: [string, string]
  _singletonTouchIdSafeAddress: string
  _ownerAddress: string
  _fallBackHandler: string
}

/**
 * An implementation of the BaseWalletAPI using the MyWallet contract.
 * - contract deployer gets "entrypoint", "owner" addresses and "index" nonce
 * - owner signs requests using normal "Ethereum Signed Message" (ether's signer.signMessage())
 * - nonce method is "nonce()"
 * - execute method is "execFromEntryPoint()"
 */
export class MyWalletApi extends SimpleAccountAPI {
  EllipticCurveAddress: string
  qValues: [string, string]
  singletonTouchIdSafeAddress: string
  ownerAddress: string
  fallBackHandleraddress: string
  constructor(params: MyWalletApiParams) {
    super(params)
    this.EllipticCurveAddress = params._EllipticCurveAddress
    this.qValues = params._qValues
    this.singletonTouchIdSafeAddress = params._singletonTouchIdSafeAddress
    this.ownerAddress = params._ownerAddress
    this.fallBackHandleraddress = params._fallBackHandler
  }

  /**
   *
   * @param requestId - the has that your wallet must sign
   * @returns the string that will used in userOp.signature & will be send to validateUserOp in your wallet's function
   */
  async signRequestId(requestId: string): Promise<string> {
    return await this.owner.signMessage(arrayify(requestId))
  }

  async _getAccountContract (): Promise<SimpleAccount> {
    if (this.accountContract == null) {
      this.accountContract = BananaAccount__factory.connect(await this.getAccountAddress(), this.provider)
    }
    return this.accountContract
  }

  getTouchIdSafeWalletContractInitializer = (): string => {
    const TouchIdSafeWalletContractSingleton: BananaAccount = BananaAccount__factory.connect(
      this.singletonTouchIdSafeAddress,
      this.provider
    );
    const TouchIdSafeWalletContractQValuesArray: Array<string> = [this.qValues[0], this.qValues[1]];
    //@ts-ignore
    const TouchIdSafeWalletContractInitializer = TouchIdSafeWalletContractSingleton.interface.encodeFunctionData('setupWithEntrypoint',
    [
      [this.ownerAddress], // owners 
      1,                                              // thresold will remain fix 
      "0x0000000000000000000000000000000000000000",   // to address 
      "0x",                                           // modules setup calldata
      this.fallBackHandleraddress,   // fallback handler
      "0x0000000000000000000000000000000000000000",   // payment token
      0,                                              // payment 
      "0x0000000000000000000000000000000000000000",   // payment receiver
      this.entryPointAddress,   // entrypoint
      // @ts-ignore
      TouchIdSafeWalletContractQValuesArray,          // q values 
      this.EllipticCurveAddress                         // elliptic curve
    ]);

    return TouchIdSafeWalletContractInitializer
  };

  /**
   * @method getTouchIdSafeWalletContractInitCode
   * @params none
   * @returns { string } TouchIdSafeWalletContractInitCode
   * create initCode for TouchIdSafeWalletContract
   * 
   * return the value to put into the "initCode" field, if the account is not yet deployed.
   * this value holds the "factory" address, followed by this account's information
   */
  async getAccountInitCode (): Promise<string> {
    if (this.factory == null) {
      if (this.factoryAddress != null && this.factoryAddress !== '') {
        this.factory = BananaAccountProxyFactory__factory.connect(this.factoryAddress, this.provider)
      } else {
        throw new Error('no factory to get initCode')
      }
    }
    return hexConcat([
      this.factory.address,
      this.factory.interface.encodeFunctionData('createChainSpecificProxyWithNonce', [this.singletonTouchIdSafeAddress, this.getTouchIdSafeWalletContractInitializer(), this.index])
    ])
  }

  async getNonce (): Promise<BigNumber> {
    if (await this.checkAccountPhantom()) {
      return BigNumber.from(0)
    }
    const accountContract = await this._getAccountContract()
    return await accountContract.nonce()
  }

  /**
   * encode a method call from entryPoint to our contract
   * @param target
   * @param value
   * @param data
   */
  async encodeExecute (target: string, value: BigNumberish, data: string): Promise<string> {
    const accountContract = await this._getAccountContract()
    const delegateCall = ethers.BigNumber.from("0")
    return accountContract.interface.encodeFunctionData(
      'execTransactionFromEntrypoint',
      [
        target,
        value,
        data,
        delegateCall
      ])
  }

  async signUserOpHash (userOpHash: string): Promise<string> {
    return await this.owner.signMessage(arrayify(userOpHash))
  }
}