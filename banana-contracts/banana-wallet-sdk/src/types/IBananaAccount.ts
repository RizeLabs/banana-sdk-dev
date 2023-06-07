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
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface IBananaAccountInterface extends utils.Interface {
  functions: {
    "finaliseRecovery()": FunctionFragment;
    "initiateRecovery(uint256[2],bytes32,uint8,bytes32,bytes32)": FunctionFragment;
    "setupRecovery(address)": FunctionFragment;
    "stopRecoveryByRelayer(bytes32,uint8,bytes32,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "finaliseRecovery"
      | "initiateRecovery"
      | "setupRecovery"
      | "stopRecoveryByRelayer"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "finaliseRecovery",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initiateRecovery",
    values: [
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setupRecovery",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "stopRecoveryByRelayer",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "finaliseRecovery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initiateRecovery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setupRecovery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stopRecoveryByRelayer",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IBananaAccount extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBananaAccountInterface;

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
    finaliseRecovery(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initiateRecovery(
      _newQValues: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      _message: PromiseOrValue<BytesLike>,
      _v: PromiseOrValue<BigNumberish>,
      _r: PromiseOrValue<BytesLike>,
      _s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setupRecovery(
      _newRecoveryAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stopRecoveryByRelayer(
      _message: PromiseOrValue<BytesLike>,
      _v: PromiseOrValue<BigNumberish>,
      _r: PromiseOrValue<BytesLike>,
      _s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  finaliseRecovery(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initiateRecovery(
    _newQValues: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
    _message: PromiseOrValue<BytesLike>,
    _v: PromiseOrValue<BigNumberish>,
    _r: PromiseOrValue<BytesLike>,
    _s: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setupRecovery(
    _newRecoveryAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stopRecoveryByRelayer(
    _message: PromiseOrValue<BytesLike>,
    _v: PromiseOrValue<BigNumberish>,
    _r: PromiseOrValue<BytesLike>,
    _s: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    finaliseRecovery(overrides?: CallOverrides): Promise<void>;

    initiateRecovery(
      _newQValues: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      _message: PromiseOrValue<BytesLike>,
      _v: PromiseOrValue<BigNumberish>,
      _r: PromiseOrValue<BytesLike>,
      _s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setupRecovery(
      _newRecoveryAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    stopRecoveryByRelayer(
      _message: PromiseOrValue<BytesLike>,
      _v: PromiseOrValue<BigNumberish>,
      _r: PromiseOrValue<BytesLike>,
      _s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    finaliseRecovery(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initiateRecovery(
      _newQValues: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      _message: PromiseOrValue<BytesLike>,
      _v: PromiseOrValue<BigNumberish>,
      _r: PromiseOrValue<BytesLike>,
      _s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setupRecovery(
      _newRecoveryAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stopRecoveryByRelayer(
      _message: PromiseOrValue<BytesLike>,
      _v: PromiseOrValue<BigNumberish>,
      _r: PromiseOrValue<BytesLike>,
      _s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    finaliseRecovery(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initiateRecovery(
      _newQValues: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      _message: PromiseOrValue<BytesLike>,
      _v: PromiseOrValue<BigNumberish>,
      _r: PromiseOrValue<BytesLike>,
      _s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setupRecovery(
      _newRecoveryAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stopRecoveryByRelayer(
      _message: PromiseOrValue<BytesLike>,
      _v: PromiseOrValue<BigNumberish>,
      _r: PromiseOrValue<BytesLike>,
      _s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
