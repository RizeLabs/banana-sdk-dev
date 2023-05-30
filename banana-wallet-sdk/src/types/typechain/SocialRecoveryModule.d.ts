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

interface SocialRecoveryModuleInterface extends ethers.utils.Interface {
  functions: {
    "NAME()": FunctionFragment;
    "VERSION()": FunctionFragment;
    "_onlyFriends(address,address)": FunctionFragment;
    "confirmTransaction(address,address)": FunctionFragment;
    "getRecoveryHash(address,address,uint256)": FunctionFragment;
    "isConfirmed(bytes32,address)": FunctionFragment;
    "isConfirmedByRequiredFriends(bytes32,address)": FunctionFragment;
    "isFriend(address,address)": FunctionFragment;
    "opsSeen(bytes32)": FunctionFragment;
    "recoverAccess(address,address)": FunctionFragment;
    "setup(address[],uint256)": FunctionFragment;
    "validateUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "NAME", values?: undefined): string;
  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "_onlyFriends",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "confirmTransaction",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRecoveryHash",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isConfirmed",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isConfirmedByRequiredFriends",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isFriend",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "opsSeen", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "recoverAccess",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setup",
    values: [string[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "validateUserOp",
    values: [
      {
        sender: string;
        nonce: BigNumberish;
        initCode: BytesLike;
        callData: BytesLike;
        callGasLimit: BigNumberish;
        verificationGasLimit: BigNumberish;
        preVerificationGas: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymasterAndData: BytesLike;
        signature: BytesLike;
      },
      BytesLike
    ]
  ): string;

  decodeFunctionResult(functionFragment: "NAME", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_onlyFriends",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "confirmTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRecoveryHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isConfirmed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isConfirmedByRequiredFriends",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isFriend", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "opsSeen", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recoverAccess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setup", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "validateUserOp",
    data: BytesLike
  ): Result;

  events: {};
}

export class SocialRecoveryModule extends BaseContract {
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

  interface: SocialRecoveryModuleInterface;

  functions: {
    NAME(overrides?: CallOverrides): Promise<[string]>;

    VERSION(overrides?: CallOverrides): Promise<[string]>;

    _onlyFriends(
      _wallet: string,
      _friend: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    confirmTransaction(
      _wallet: string,
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRecoveryHash(
      _wallet: string,
      _newOwner: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isConfirmed(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isConfirmedByRequiredFriends(
      recoveryHash: BytesLike,
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isFriend(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    opsSeen(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    recoverAccess(
      _wallet: string,
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setup(
      _friends: string[],
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    validateUserOp(
      userOp: {
        sender: string;
        nonce: BigNumberish;
        initCode: BytesLike;
        callData: BytesLike;
        callGasLimit: BigNumberish;
        verificationGasLimit: BigNumberish;
        preVerificationGas: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymasterAndData: BytesLike;
        signature: BytesLike;
      },
      userOpHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  NAME(overrides?: CallOverrides): Promise<string>;

  VERSION(overrides?: CallOverrides): Promise<string>;

  _onlyFriends(
    _wallet: string,
    _friend: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  confirmTransaction(
    _wallet: string,
    _newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRecoveryHash(
    _wallet: string,
    _newOwner: string,
    _nonce: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  isConfirmed(
    arg0: BytesLike,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isConfirmedByRequiredFriends(
    recoveryHash: BytesLike,
    _wallet: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isFriend(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  opsSeen(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  recoverAccess(
    _wallet: string,
    _newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setup(
    _friends: string[],
    _threshold: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  validateUserOp(
    userOp: {
      sender: string;
      nonce: BigNumberish;
      initCode: BytesLike;
      callData: BytesLike;
      callGasLimit: BigNumberish;
      verificationGasLimit: BigNumberish;
      preVerificationGas: BigNumberish;
      maxFeePerGas: BigNumberish;
      maxPriorityFeePerGas: BigNumberish;
      paymasterAndData: BytesLike;
      signature: BytesLike;
    },
    userOpHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    NAME(overrides?: CallOverrides): Promise<string>;

    VERSION(overrides?: CallOverrides): Promise<string>;

    _onlyFriends(
      _wallet: string,
      _friend: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    confirmTransaction(
      _wallet: string,
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getRecoveryHash(
      _wallet: string,
      _newOwner: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    isConfirmed(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isConfirmedByRequiredFriends(
      recoveryHash: BytesLike,
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isFriend(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    opsSeen(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    recoverAccess(
      _wallet: string,
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setup(
      _friends: string[],
      _threshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    validateUserOp(
      userOp: {
        sender: string;
        nonce: BigNumberish;
        initCode: BytesLike;
        callData: BytesLike;
        callGasLimit: BigNumberish;
        verificationGasLimit: BigNumberish;
        preVerificationGas: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymasterAndData: BytesLike;
        signature: BytesLike;
      },
      userOpHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    NAME(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    _onlyFriends(
      _wallet: string,
      _friend: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    confirmTransaction(
      _wallet: string,
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRecoveryHash(
      _wallet: string,
      _newOwner: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isConfirmed(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isConfirmedByRequiredFriends(
      recoveryHash: BytesLike,
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isFriend(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    opsSeen(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    recoverAccess(
      _wallet: string,
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setup(
      _friends: string[],
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    validateUserOp(
      userOp: {
        sender: string;
        nonce: BigNumberish;
        initCode: BytesLike;
        callData: BytesLike;
        callGasLimit: BigNumberish;
        verificationGasLimit: BigNumberish;
        preVerificationGas: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymasterAndData: BytesLike;
        signature: BytesLike;
      },
      userOpHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _onlyFriends(
      _wallet: string,
      _friend: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    confirmTransaction(
      _wallet: string,
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRecoveryHash(
      _wallet: string,
      _newOwner: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isConfirmed(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isConfirmedByRequiredFriends(
      recoveryHash: BytesLike,
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isFriend(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    opsSeen(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    recoverAccess(
      _wallet: string,
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setup(
      _friends: string[],
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    validateUserOp(
      userOp: {
        sender: string;
        nonce: BigNumberish;
        initCode: BytesLike;
        callData: BytesLike;
        callGasLimit: BigNumberish;
        verificationGasLimit: BigNumberish;
        preVerificationGas: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymasterAndData: BytesLike;
        signature: BytesLike;
      },
      userOpHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
