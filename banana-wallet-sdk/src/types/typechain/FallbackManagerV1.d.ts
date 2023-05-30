/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface FallbackManagerV1Interface extends ethers.utils.Interface {
  functions: {
    "getFallbackHandler()": FunctionFragment;
    "setFallbackHandler(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getFallbackHandler",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFallbackHandler",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getFallbackHandler",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFallbackHandler",
    data: BytesLike
  ): Result;

  events: {
    "ChangedFallbackHandler(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChangedFallbackHandler"): EventFragment;
}

export type ChangedFallbackHandlerEvent = TypedEvent<
  [string, string] & { previousHandler: string; handler: string }
>;

export class FallbackManagerV1 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: FallbackManagerV1Interface;

  functions: {
    getFallbackHandler(
      overrides?: CallOverrides
    ): Promise<[string] & { _handler: string }>;

    setFallbackHandler(
      handler: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getFallbackHandler(overrides?: CallOverrides): Promise<string>;

  setFallbackHandler(
    handler: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getFallbackHandler(overrides?: CallOverrides): Promise<string>;

    setFallbackHandler(
      handler: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ChangedFallbackHandler(address,address)"(
      previousHandler?: string | null,
      handler?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousHandler: string; handler: string }
    >;

    ChangedFallbackHandler(
      previousHandler?: string | null,
      handler?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousHandler: string; handler: string }
    >;
  };

  estimateGas: {
    getFallbackHandler(overrides?: CallOverrides): Promise<BigNumber>;

    setFallbackHandler(
      handler: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getFallbackHandler(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setFallbackHandler(
      handler: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
