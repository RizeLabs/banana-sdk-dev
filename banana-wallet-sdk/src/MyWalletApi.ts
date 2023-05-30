// @ts-nocheck
import { BigNumber, BigNumberish } from 'ethers'
import { arrayify, hexConcat } from 'ethers/lib/utils'
import { Signer } from '@ethersproject/abstract-signer'
import { BaseApiParams } from '@account-abstraction/sdk/dist/src/BaseAccountAPI'
import { SimpleAccountAPI } from '@account-abstraction/sdk'
import { SmartAccount__factory } from './types/typechain/factories/SmartAccount__factory'
import { SmartAccountFactory__factory} from './types/typechain/factories/SmartAccountFactory__factory'
import { ethers } from 'ethers'
import { BananaSigner } from './BananaSigner'
import { BananaVerificationModule__factory, SmartAccount, SmartAccountFactory } from './types/typechain'
import { BVM } from './Constants'
import { BananaVerificationModule__factory } from './types/typechain'
// import { SimpleAccountFactory__factory } from '@account-abstraction/contracts'

/**
 * constructor params, added no top of base params:
 * @param owner the signer object for the wallet owner
 * @param factoryAddress address of contract "factory" to deploy new contracts (not needed if wallet already deployed)
 * @param index nonce value used when creating multiple wallets for the same owner
 */
export interface MyWalletApiParams extends BaseApiParams {
  owner: Signer
  factoryAddress?: string
  index?: number
  _qValues: [string, string]
  _singletonTouchIdSafeAddress: string
  _ownerAddress: string
  _fallBackHandler: string
  _saltNonce: number
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
  saltNonce: number
  constructor(params: MyWalletApiParams) {
    super(params)
    this.qValues = params._qValues
    this.singletonTouchIdSafeAddress = params._singletonTouchIdSafeAddress
    this.ownerAddress = params._ownerAddress
    this.fallBackHandleraddress = params._fallBackHandler
    this.saltNonce = params._saltNonce
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
      console.log('deploying new wallet contract')
      this.accountContract = SmartAccount__factory.connect(await this.getAccountAddress(), this.provider)
    }
    return this.accountContract
  }

  getTouchIdSafeWalletContractInitializer = (): string => {
    const TouchIdSafeWalletContractSingleton: SimpleAccount = SimpleAccount__factory.connect(
      this.singletonTouchIdSafeAddress,
      this.provider
    );
    const TouchIdSafeWalletContractQValuesArray: Array<string> = [this.qValues[0], this.qValues[1]];
    console.log("My getTouchIdSafeWalletContractInitializer  TouchIdSafeWalletContractQValuesArray", TouchIdSafeWalletContractQValuesArray)
    
    const bvm = BananaVerificationModule__factory.connect(BVM, this.jsonRpcProvider)
    
    let bvmSetupData = bvm.interface.encodeFunctionData(
      // @ts-ignore
        "initForSmartAccount",
        [TouchIdSafeWalletContractQValuesArray]
      );
    console.log("getTouchIdSafeWalletContractInitializer bvmSetupData", bvmSetupData)
    //@ts-ignore
    const TouchIdSafeWalletContractInitializer = TouchIdSafeWalletContractSingleton.interface.encodeFunctionData('init',
    [
      this.fallBackHandleraddress,   // fallback handler
      BVM,
      bvmSetupData
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
        this.factory = SmartAccountFactory__factory.connect(this.factoryAddress, this.provider)
      } else {
        throw new Error('no factory to get initCode')
      }
    }
    const TouchIdSafeWalletContractQValuesArray: Array<string> = [this.qValues[0], this.qValues[1]];
    console.log("My getTouchIdSafeWalletContractInitializer  TouchIdSafeWalletContractQValuesArray", TouchIdSafeWalletContractQValuesArray)
    
    const bvm =  BananaVerificationModule__factory.connect(BVM, this.jsonRpcProvider)
    
    let bvmSetupData = bvm.interface.encodeFunctionData(
      // @ts-ignore
        "initForSmartAccount",
        [TouchIdSafeWalletContractQValuesArray]
      );
    console.log("getAccountInitCode bvmSetupData", bvmSetupData)
    
    return hexConcat([
      this.factory.address,
      // this.factory.interface.encodeFunctionData('createProxyWithNonce', [this.singletonTouchIdSafeAddress, this.getTouchIdSafeWalletContractInitializer(), this.saltNonce.toString()])
      this.factory.interface.encodeFunctionData('deployCounterFactualAccount', 
      [BVM, bvmSetupData, this.saltNonce.toString()])
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
      'executeCall',
      [
        target,
        value,
        data
      ])
  }

  async signUserOpHash (userOpHash: string): Promise<string> {
    return await this.owner.signMessage(arrayify(userOpHash))
  }

  async getAccountAddress (): Promise<string> {
    const TouchIdSafeWalletContractProxyFactory: SmartAccountFactory = SmartAccountFactory__factory.connect(
      this.factoryAddress,
      this.provider
    );
    // console.log('this._qValues[0]', this._qValues[0])
    console.log('this.qValues', this.qValues)
    const TouchIdSafeWalletContractQValuesArray: Array<BigNumberish> = [this.qValues[0], this.qValues[1]];
    console.log("My getTouchIdSafeWalletContractInitializer  TouchIdSafeWalletContractQValuesArray", TouchIdSafeWalletContractQValuesArray)
    
    // @ts-ignore
    const bvm = BananaVerificationModule__factory.connect(BVM, this.jsonRpcProvider)
    let bvmSetupData = bvm.interface.encodeFunctionData(
      // @ts-ignore
        "initForSmartAccount",
        [TouchIdSafeWalletContractQValuesArray]
      );
    console.log("bvmSetupData", bvmSetupData)
    console.log("bvm", bvm)

    const TouchIdSafeWalletContractAddress = await TouchIdSafeWalletContractProxyFactory.getAddressForCounterFactualAccount(BVM, bvmSetupData, 0);
    
    // const TouchIdSafeWalletContractAddress = await TouchIdSafeWalletContractProxyFactory.getAddressForCounterFactualAccount(BVM, bvmSTouchIdSafeWalletContractQValuesArray, this.saltNonce.toString());
    // const TouchIdSafeWalletContractAddress = await TouchIdSafeWalletContractProxyFactory.getAddress(this.singletonTouchIdSafeAddress, this.saltNonce.toString(), TouchIdSafeWalletContractInitializer);

    console.log("Address gen; ", TouchIdSafeWalletContractAddress);
    return TouchIdSafeWalletContractAddress
  }
}