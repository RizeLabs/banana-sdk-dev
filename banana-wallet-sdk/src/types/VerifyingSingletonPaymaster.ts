/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export type UserOperationStruct = {
  sender: PromiseOrValue<string>;
  nonce: PromiseOrValue<BigNumberish>;
  initCode: PromiseOrValue<BytesLike>;
  callData: PromiseOrValue<BytesLike>;
  callGasLimit: PromiseOrValue<BigNumberish>;
  verificationGasLimit: PromiseOrValue<BigNumberish>;
  preVerificationGas: PromiseOrValue<BigNumberish>;
  maxFeePerGas: PromiseOrValue<BigNumberish>;
  maxPriorityFeePerGas: PromiseOrValue<BigNumberish>;
  paymasterAndData: PromiseOrValue<BytesLike>;
  signature: PromiseOrValue<BytesLike>;
};

export type UserOperationStructOutput = [
  string,
  BigNumber,
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  string
] & {
  sender: string;
  nonce: BigNumber;
  initCode: string;
  callData: string;
  callGasLimit: BigNumber;
  verificationGasLimit: BigNumber;
  preVerificationGas: BigNumber;
  maxFeePerGas: BigNumber;
  maxPriorityFeePerGas: BigNumber;
  paymasterAndData: string;
  signature: string;
};

export interface VerifyingSingletonPaymasterInterface extends utils.Interface {
  functions: {
    "addStake(uint32)": FunctionFragment;
    "deposit()": FunctionFragment;
    "depositFor(address)": FunctionFragment;
    "entryPoint()": FunctionFragment;
    "getBalance(address)": FunctionFragment;
    "getDeposit()": FunctionFragment;
    "getHash((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),address)": FunctionFragment;
    "owner()": FunctionFragment;
    "paymasterIdBalances(address)": FunctionFragment;
    "postOp(uint8,bytes,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setSigner(address)": FunctionFragment;
    "setUnaccountedEPGasOverhead(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unlockStake()": FunctionFragment;
    "validatePaymasterUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,uint256)": FunctionFragment;
    "verifyingSigner()": FunctionFragment;
    "withdrawStake(address)": FunctionFragment;
    "withdrawTo(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addStake"
      | "deposit"
      | "depositFor"
      | "entryPoint"
      | "getBalance"
      | "getDeposit"
      | "getHash"
      | "owner"
      | "paymasterIdBalances"
      | "postOp"
      | "renounceOwnership"
      | "setSigner"
      | "setUnaccountedEPGasOverhead"
      | "transferOwnership"
      | "unlockStake"
      | "validatePaymasterUserOp"
      | "verifyingSigner"
      | "withdrawStake"
      | "withdrawTo"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addStake",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "depositFor",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "entryPoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBalance",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getHash",
    values: [UserOperationStruct, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "paymasterIdBalances",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "postOp",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setSigner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setUnaccountedEPGasOverhead",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "unlockStake",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "validatePaymasterUserOp",
    values: [
      UserOperationStruct,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyingSigner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawStake",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawTo",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "addStake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getDeposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getHash", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "paymasterIdBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "postOp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setSigner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setUnaccountedEPGasOverhead",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unlockStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validatePaymasterUserOp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyingSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdrawTo", data: BytesLike): Result;

  events: {
    "EPGasOverheadChanged(uint256,uint256)": EventFragment;
    "GasBalanceDeducted(address,uint256)": EventFragment;
    "GasDeposited(address,uint256)": EventFragment;
    "GasWithdrawn(address,address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "VerifyingSignerChanged(address,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EPGasOverheadChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GasBalanceDeducted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GasDeposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GasWithdrawn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VerifyingSignerChanged"): EventFragment;
}

export interface EPGasOverheadChangedEventObject {
  _oldValue: BigNumber;
  _newValue: BigNumber;
}
export type EPGasOverheadChangedEvent = TypedEvent<
  [BigNumber, BigNumber],
  EPGasOverheadChangedEventObject
>;

export type EPGasOverheadChangedEventFilter =
  TypedEventFilter<EPGasOverheadChangedEvent>;

export interface GasBalanceDeductedEventObject {
  _paymasterId: string;
  _charge: BigNumber;
}
export type GasBalanceDeductedEvent = TypedEvent<
  [string, BigNumber],
  GasBalanceDeductedEventObject
>;

export type GasBalanceDeductedEventFilter =
  TypedEventFilter<GasBalanceDeductedEvent>;

export interface GasDepositedEventObject {
  _paymasterId: string;
  _value: BigNumber;
}
export type GasDepositedEvent = TypedEvent<
  [string, BigNumber],
  GasDepositedEventObject
>;

export type GasDepositedEventFilter = TypedEventFilter<GasDepositedEvent>;

export interface GasWithdrawnEventObject {
  _paymasterId: string;
  _to: string;
  _value: BigNumber;
}
export type GasWithdrawnEvent = TypedEvent<
  [string, string, BigNumber],
  GasWithdrawnEventObject
>;

export type GasWithdrawnEventFilter = TypedEventFilter<GasWithdrawnEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface VerifyingSignerChangedEventObject {
  _oldSigner: string;
  _newSigner: string;
  _actor: string;
}
export type VerifyingSignerChangedEvent = TypedEvent<
  [string, string, string],
  VerifyingSignerChangedEventObject
>;

export type VerifyingSignerChangedEventFilter =
  TypedEventFilter<VerifyingSignerChangedEvent>;

export interface VerifyingSingletonPaymaster extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VerifyingSingletonPaymasterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addStake(
      unstakeDelaySec: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositFor(
      paymasterId: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    entryPoint(overrides?: CallOverrides): Promise<[string]>;

    getBalance(
      paymasterId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    getDeposit(overrides?: CallOverrides): Promise<[BigNumber]>;

    getHash(
      userOp: UserOperationStruct,
      paymasterId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    paymasterIdBalances(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    postOp(
      mode: PromiseOrValue<BigNumberish>,
      context: PromiseOrValue<BytesLike>,
      actualGasCost: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSigner(
      _newVerifyingSigner: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setUnaccountedEPGasOverhead(
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unlockStake(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    validatePaymasterUserOp(
      userOp: UserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      maxCost: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    verifyingSigner(overrides?: CallOverrides): Promise<[string]>;

    withdrawStake(
      withdrawAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawTo(
      withdrawAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addStake(
    unstakeDelaySec: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deposit(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositFor(
    paymasterId: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  entryPoint(overrides?: CallOverrides): Promise<string>;

  getBalance(
    paymasterId: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getDeposit(overrides?: CallOverrides): Promise<BigNumber>;

  getHash(
    userOp: UserOperationStruct,
    paymasterId: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  paymasterIdBalances(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  postOp(
    mode: PromiseOrValue<BigNumberish>,
    context: PromiseOrValue<BytesLike>,
    actualGasCost: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSigner(
    _newVerifyingSigner: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setUnaccountedEPGasOverhead(
    value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unlockStake(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  validatePaymasterUserOp(
    userOp: UserOperationStruct,
    userOpHash: PromiseOrValue<BytesLike>,
    maxCost: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  verifyingSigner(overrides?: CallOverrides): Promise<string>;

  withdrawStake(
    withdrawAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawTo(
    withdrawAddress: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addStake(
      unstakeDelaySec: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(overrides?: CallOverrides): Promise<void>;

    depositFor(
      paymasterId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    entryPoint(overrides?: CallOverrides): Promise<string>;

    getBalance(
      paymasterId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    getHash(
      userOp: UserOperationStruct,
      paymasterId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    paymasterIdBalances(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    postOp(
      mode: PromiseOrValue<BigNumberish>,
      context: PromiseOrValue<BytesLike>,
      actualGasCost: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setSigner(
      _newVerifyingSigner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setUnaccountedEPGasOverhead(
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unlockStake(overrides?: CallOverrides): Promise<void>;

    validatePaymasterUserOp(
      userOp: UserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      maxCost: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & { context: string; validationData: BigNumber }
    >;

    verifyingSigner(overrides?: CallOverrides): Promise<string>;

    withdrawStake(
      withdrawAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawTo(
      withdrawAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "EPGasOverheadChanged(uint256,uint256)"(
      _oldValue?: PromiseOrValue<BigNumberish> | null,
      _newValue?: PromiseOrValue<BigNumberish> | null
    ): EPGasOverheadChangedEventFilter;
    EPGasOverheadChanged(
      _oldValue?: PromiseOrValue<BigNumberish> | null,
      _newValue?: PromiseOrValue<BigNumberish> | null
    ): EPGasOverheadChangedEventFilter;

    "GasBalanceDeducted(address,uint256)"(
      _paymasterId?: PromiseOrValue<string> | null,
      _charge?: PromiseOrValue<BigNumberish> | null
    ): GasBalanceDeductedEventFilter;
    GasBalanceDeducted(
      _paymasterId?: PromiseOrValue<string> | null,
      _charge?: PromiseOrValue<BigNumberish> | null
    ): GasBalanceDeductedEventFilter;

    "GasDeposited(address,uint256)"(
      _paymasterId?: PromiseOrValue<string> | null,
      _value?: PromiseOrValue<BigNumberish> | null
    ): GasDepositedEventFilter;
    GasDeposited(
      _paymasterId?: PromiseOrValue<string> | null,
      _value?: PromiseOrValue<BigNumberish> | null
    ): GasDepositedEventFilter;

    "GasWithdrawn(address,address,uint256)"(
      _paymasterId?: PromiseOrValue<string> | null,
      _to?: PromiseOrValue<string> | null,
      _value?: PromiseOrValue<BigNumberish> | null
    ): GasWithdrawnEventFilter;
    GasWithdrawn(
      _paymasterId?: PromiseOrValue<string> | null,
      _to?: PromiseOrValue<string> | null,
      _value?: PromiseOrValue<BigNumberish> | null
    ): GasWithdrawnEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "VerifyingSignerChanged(address,address,address)"(
      _oldSigner?: PromiseOrValue<string> | null,
      _newSigner?: PromiseOrValue<string> | null,
      _actor?: PromiseOrValue<string> | null
    ): VerifyingSignerChangedEventFilter;
    VerifyingSignerChanged(
      _oldSigner?: PromiseOrValue<string> | null,
      _newSigner?: PromiseOrValue<string> | null,
      _actor?: PromiseOrValue<string> | null
    ): VerifyingSignerChangedEventFilter;
  };

  estimateGas: {
    addStake(
      unstakeDelaySec: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositFor(
      paymasterId: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    entryPoint(overrides?: CallOverrides): Promise<BigNumber>;

    getBalance(
      paymasterId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    getHash(
      userOp: UserOperationStruct,
      paymasterId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    paymasterIdBalances(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    postOp(
      mode: PromiseOrValue<BigNumberish>,
      context: PromiseOrValue<BytesLike>,
      actualGasCost: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSigner(
      _newVerifyingSigner: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setUnaccountedEPGasOverhead(
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unlockStake(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    validatePaymasterUserOp(
      userOp: UserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      maxCost: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    verifyingSigner(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawStake(
      withdrawAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawTo(
      withdrawAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addStake(
      unstakeDelaySec: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositFor(
      paymasterId: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBalance(
      paymasterId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDeposit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getHash(
      userOp: UserOperationStruct,
      paymasterId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paymasterIdBalances(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    postOp(
      mode: PromiseOrValue<BigNumberish>,
      context: PromiseOrValue<BytesLike>,
      actualGasCost: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSigner(
      _newVerifyingSigner: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setUnaccountedEPGasOverhead(
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unlockStake(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    validatePaymasterUserOp(
      userOp: UserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      maxCost: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    verifyingSigner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawStake(
      withdrawAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawTo(
      withdrawAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
