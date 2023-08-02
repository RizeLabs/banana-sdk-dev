import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
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
export declare namespace IStakeManager {
    type DepositInfoStruct = {
        deposit: PromiseOrValue<BigNumberish>;
        staked: PromiseOrValue<boolean>;
        stake: PromiseOrValue<BigNumberish>;
        unstakeDelaySec: PromiseOrValue<BigNumberish>;
        withdrawTime: PromiseOrValue<BigNumberish>;
    };
    type DepositInfoStructOutput = [
        BigNumber,
        boolean,
        BigNumber,
        number,
        number
    ] & {
        deposit: BigNumber;
        staked: boolean;
        stake: BigNumber;
        unstakeDelaySec: number;
        withdrawTime: number;
    };
}
export declare namespace IEntryPoint {
    type UserOpsPerAggregatorStruct = {
        userOps: UserOperationStruct[];
        aggregator: PromiseOrValue<string>;
        signature: PromiseOrValue<BytesLike>;
    };
    type UserOpsPerAggregatorStructOutput = [
        UserOperationStructOutput[],
        string,
        string
    ] & {
        userOps: UserOperationStructOutput[];
        aggregator: string;
        signature: string;
    };
}
export declare namespace EntryPoint {
    type MemoryUserOpStruct = {
        sender: PromiseOrValue<string>;
        nonce: PromiseOrValue<BigNumberish>;
        callGasLimit: PromiseOrValue<BigNumberish>;
        verificationGasLimit: PromiseOrValue<BigNumberish>;
        preVerificationGas: PromiseOrValue<BigNumberish>;
        paymaster: PromiseOrValue<string>;
        maxFeePerGas: PromiseOrValue<BigNumberish>;
        maxPriorityFeePerGas: PromiseOrValue<BigNumberish>;
    };
    type MemoryUserOpStructOutput = [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber
    ] & {
        sender: string;
        nonce: BigNumber;
        callGasLimit: BigNumber;
        verificationGasLimit: BigNumber;
        preVerificationGas: BigNumber;
        paymaster: string;
        maxFeePerGas: BigNumber;
        maxPriorityFeePerGas: BigNumber;
    };
    type UserOpInfoStruct = {
        mUserOp: EntryPoint.MemoryUserOpStruct;
        userOpHash: PromiseOrValue<BytesLike>;
        prefund: PromiseOrValue<BigNumberish>;
        contextOffset: PromiseOrValue<BigNumberish>;
        preOpGas: PromiseOrValue<BigNumberish>;
    };
    type UserOpInfoStructOutput = [
        EntryPoint.MemoryUserOpStructOutput,
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        mUserOp: EntryPoint.MemoryUserOpStructOutput;
        userOpHash: string;
        prefund: BigNumber;
        contextOffset: BigNumber;
        preOpGas: BigNumber;
    };
}
export interface EntryPointInterface extends utils.Interface {
    functions: {
        "SIG_VALIDATION_FAILED()": FunctionFragment;
        "_validateSenderAndPaymaster(bytes,address,bytes)": FunctionFragment;
        "addStake(uint32)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "depositTo(address)": FunctionFragment;
        "deposits(address)": FunctionFragment;
        "getDepositInfo(address)": FunctionFragment;
        "getSenderAddress(bytes)": FunctionFragment;
        "getUserOpHash((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes))": FunctionFragment;
        "handleAggregatedOps(((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],address,bytes)[],address)": FunctionFragment;
        "handleOps((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],address)": FunctionFragment;
        "innerHandleOp(bytes,((address,uint256,uint256,uint256,uint256,address,uint256,uint256),bytes32,uint256,uint256,uint256),bytes)": FunctionFragment;
        "simulateHandleOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),address,bytes)": FunctionFragment;
        "simulateValidation((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes))": FunctionFragment;
        "unlockStake()": FunctionFragment;
        "withdrawStake(address)": FunctionFragment;
        "withdrawTo(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "SIG_VALIDATION_FAILED" | "_validateSenderAndPaymaster" | "addStake" | "balanceOf" | "depositTo" | "deposits" | "getDepositInfo" | "getSenderAddress" | "getUserOpHash" | "handleAggregatedOps" | "handleOps" | "innerHandleOp" | "simulateHandleOp" | "simulateValidation" | "unlockStake" | "withdrawStake" | "withdrawTo"): FunctionFragment;
    encodeFunctionData(functionFragment: "SIG_VALIDATION_FAILED", values?: undefined): string;
    encodeFunctionData(functionFragment: "_validateSenderAndPaymaster", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "addStake", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "depositTo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "deposits", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getDepositInfo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getSenderAddress", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getUserOpHash", values: [UserOperationStruct]): string;
    encodeFunctionData(functionFragment: "handleAggregatedOps", values: [IEntryPoint.UserOpsPerAggregatorStruct[], PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "handleOps", values: [UserOperationStruct[], PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "innerHandleOp", values: [
        PromiseOrValue<BytesLike>,
        EntryPoint.UserOpInfoStruct,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "simulateHandleOp", values: [
        UserOperationStruct,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "simulateValidation", values: [UserOperationStruct]): string;
    encodeFunctionData(functionFragment: "unlockStake", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawStake", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdrawTo", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "SIG_VALIDATION_FAILED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_validateSenderAndPaymaster", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDepositInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSenderAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserOpHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handleAggregatedOps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handleOps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "innerHandleOp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "simulateHandleOp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "simulateValidation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlockStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawTo", data: BytesLike): Result;
    events: {
        "AccountDeployed(bytes32,address,address,address)": EventFragment;
        "Deposited(address,uint256)": EventFragment;
        "SignatureAggregatorChanged(address)": EventFragment;
        "StakeLocked(address,uint256,uint256)": EventFragment;
        "StakeUnlocked(address,uint256)": EventFragment;
        "StakeWithdrawn(address,address,uint256)": EventFragment;
        "UserOperationEvent(bytes32,address,address,uint256,bool,uint256,uint256)": EventFragment;
        "UserOperationRevertReason(bytes32,address,uint256,bytes)": EventFragment;
        "Withdrawn(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AccountDeployed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SignatureAggregatorChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakeLocked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakeUnlocked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakeWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UserOperationEvent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UserOperationRevertReason"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}
export interface AccountDeployedEventObject {
    userOpHash: string;
    sender: string;
    factory: string;
    paymaster: string;
}
export type AccountDeployedEvent = TypedEvent<[
    string,
    string,
    string,
    string
], AccountDeployedEventObject>;
export type AccountDeployedEventFilter = TypedEventFilter<AccountDeployedEvent>;
export interface DepositedEventObject {
    account: string;
    totalDeposit: BigNumber;
}
export type DepositedEvent = TypedEvent<[
    string,
    BigNumber
], DepositedEventObject>;
export type DepositedEventFilter = TypedEventFilter<DepositedEvent>;
export interface SignatureAggregatorChangedEventObject {
    aggregator: string;
}
export type SignatureAggregatorChangedEvent = TypedEvent<[
    string
], SignatureAggregatorChangedEventObject>;
export type SignatureAggregatorChangedEventFilter = TypedEventFilter<SignatureAggregatorChangedEvent>;
export interface StakeLockedEventObject {
    account: string;
    totalStaked: BigNumber;
    unstakeDelaySec: BigNumber;
}
export type StakeLockedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], StakeLockedEventObject>;
export type StakeLockedEventFilter = TypedEventFilter<StakeLockedEvent>;
export interface StakeUnlockedEventObject {
    account: string;
    withdrawTime: BigNumber;
}
export type StakeUnlockedEvent = TypedEvent<[
    string,
    BigNumber
], StakeUnlockedEventObject>;
export type StakeUnlockedEventFilter = TypedEventFilter<StakeUnlockedEvent>;
export interface StakeWithdrawnEventObject {
    account: string;
    withdrawAddress: string;
    amount: BigNumber;
}
export type StakeWithdrawnEvent = TypedEvent<[
    string,
    string,
    BigNumber
], StakeWithdrawnEventObject>;
export type StakeWithdrawnEventFilter = TypedEventFilter<StakeWithdrawnEvent>;
export interface UserOperationEventEventObject {
    userOpHash: string;
    sender: string;
    paymaster: string;
    nonce: BigNumber;
    success: boolean;
    actualGasCost: BigNumber;
    actualGasUsed: BigNumber;
}
export type UserOperationEventEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber
], UserOperationEventEventObject>;
export type UserOperationEventEventFilter = TypedEventFilter<UserOperationEventEvent>;
export interface UserOperationRevertReasonEventObject {
    userOpHash: string;
    sender: string;
    nonce: BigNumber;
    revertReason: string;
}
export type UserOperationRevertReasonEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string
], UserOperationRevertReasonEventObject>;
export type UserOperationRevertReasonEventFilter = TypedEventFilter<UserOperationRevertReasonEvent>;
export interface WithdrawnEventObject {
    account: string;
    withdrawAddress: string;
    amount: BigNumber;
}
export type WithdrawnEvent = TypedEvent<[
    string,
    string,
    BigNumber
], WithdrawnEventObject>;
export type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;
export interface EntryPoint extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: EntryPointInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        SIG_VALIDATION_FAILED(overrides?: CallOverrides): Promise<[BigNumber]>;
        _validateSenderAndPaymaster(initCode: PromiseOrValue<BytesLike>, sender: PromiseOrValue<string>, paymasterAndData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[void]>;
        addStake(unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        depositTo(account: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deposits(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean,
            BigNumber,
            number,
            number
        ] & {
            deposit: BigNumber;
            staked: boolean;
            stake: BigNumber;
            unstakeDelaySec: number;
            withdrawTime: number;
        }>;
        getDepositInfo(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            IStakeManager.DepositInfoStructOutput
        ] & {
            info: IStakeManager.DepositInfoStructOutput;
        }>;
        getSenderAddress(initCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getUserOpHash(userOp: UserOperationStruct, overrides?: CallOverrides): Promise<[string]>;
        handleAggregatedOps(opsPerAggregator: IEntryPoint.UserOpsPerAggregatorStruct[], beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        handleOps(ops: UserOperationStruct[], beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        innerHandleOp(callData: PromiseOrValue<BytesLike>, opInfo: EntryPoint.UserOpInfoStruct, context: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        simulateHandleOp(op: UserOperationStruct, target: PromiseOrValue<string>, targetCallData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        simulateValidation(userOp: UserOperationStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unlockStake(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawTo(withdrawAddress: PromiseOrValue<string>, withdrawAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    SIG_VALIDATION_FAILED(overrides?: CallOverrides): Promise<BigNumber>;
    _validateSenderAndPaymaster(initCode: PromiseOrValue<BytesLike>, sender: PromiseOrValue<string>, paymasterAndData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    addStake(unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    depositTo(account: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deposits(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        boolean,
        BigNumber,
        number,
        number
    ] & {
        deposit: BigNumber;
        staked: boolean;
        stake: BigNumber;
        unstakeDelaySec: number;
        withdrawTime: number;
    }>;
    getDepositInfo(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IStakeManager.DepositInfoStructOutput>;
    getSenderAddress(initCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getUserOpHash(userOp: UserOperationStruct, overrides?: CallOverrides): Promise<string>;
    handleAggregatedOps(opsPerAggregator: IEntryPoint.UserOpsPerAggregatorStruct[], beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    handleOps(ops: UserOperationStruct[], beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    innerHandleOp(callData: PromiseOrValue<BytesLike>, opInfo: EntryPoint.UserOpInfoStruct, context: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    simulateHandleOp(op: UserOperationStruct, target: PromiseOrValue<string>, targetCallData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    simulateValidation(userOp: UserOperationStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unlockStake(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawTo(withdrawAddress: PromiseOrValue<string>, withdrawAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        SIG_VALIDATION_FAILED(overrides?: CallOverrides): Promise<BigNumber>;
        _validateSenderAndPaymaster(initCode: PromiseOrValue<BytesLike>, sender: PromiseOrValue<string>, paymasterAndData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        addStake(unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        depositTo(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        deposits(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean,
            BigNumber,
            number,
            number
        ] & {
            deposit: BigNumber;
            staked: boolean;
            stake: BigNumber;
            unstakeDelaySec: number;
            withdrawTime: number;
        }>;
        getDepositInfo(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IStakeManager.DepositInfoStructOutput>;
        getSenderAddress(initCode: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getUserOpHash(userOp: UserOperationStruct, overrides?: CallOverrides): Promise<string>;
        handleAggregatedOps(opsPerAggregator: IEntryPoint.UserOpsPerAggregatorStruct[], beneficiary: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        handleOps(ops: UserOperationStruct[], beneficiary: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        innerHandleOp(callData: PromiseOrValue<BytesLike>, opInfo: EntryPoint.UserOpInfoStruct, context: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        simulateHandleOp(op: UserOperationStruct, target: PromiseOrValue<string>, targetCallData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        simulateValidation(userOp: UserOperationStruct, overrides?: CallOverrides): Promise<void>;
        unlockStake(overrides?: CallOverrides): Promise<void>;
        withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        withdrawTo(withdrawAddress: PromiseOrValue<string>, withdrawAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AccountDeployed(bytes32,address,address,address)"(userOpHash?: PromiseOrValue<BytesLike> | null, sender?: PromiseOrValue<string> | null, factory?: null, paymaster?: null): AccountDeployedEventFilter;
        AccountDeployed(userOpHash?: PromiseOrValue<BytesLike> | null, sender?: PromiseOrValue<string> | null, factory?: null, paymaster?: null): AccountDeployedEventFilter;
        "Deposited(address,uint256)"(account?: PromiseOrValue<string> | null, totalDeposit?: null): DepositedEventFilter;
        Deposited(account?: PromiseOrValue<string> | null, totalDeposit?: null): DepositedEventFilter;
        "SignatureAggregatorChanged(address)"(aggregator?: PromiseOrValue<string> | null): SignatureAggregatorChangedEventFilter;
        SignatureAggregatorChanged(aggregator?: PromiseOrValue<string> | null): SignatureAggregatorChangedEventFilter;
        "StakeLocked(address,uint256,uint256)"(account?: PromiseOrValue<string> | null, totalStaked?: null, unstakeDelaySec?: null): StakeLockedEventFilter;
        StakeLocked(account?: PromiseOrValue<string> | null, totalStaked?: null, unstakeDelaySec?: null): StakeLockedEventFilter;
        "StakeUnlocked(address,uint256)"(account?: PromiseOrValue<string> | null, withdrawTime?: null): StakeUnlockedEventFilter;
        StakeUnlocked(account?: PromiseOrValue<string> | null, withdrawTime?: null): StakeUnlockedEventFilter;
        "StakeWithdrawn(address,address,uint256)"(account?: PromiseOrValue<string> | null, withdrawAddress?: null, amount?: null): StakeWithdrawnEventFilter;
        StakeWithdrawn(account?: PromiseOrValue<string> | null, withdrawAddress?: null, amount?: null): StakeWithdrawnEventFilter;
        "UserOperationEvent(bytes32,address,address,uint256,bool,uint256,uint256)"(userOpHash?: PromiseOrValue<BytesLike> | null, sender?: PromiseOrValue<string> | null, paymaster?: PromiseOrValue<string> | null, nonce?: null, success?: null, actualGasCost?: null, actualGasUsed?: null): UserOperationEventEventFilter;
        UserOperationEvent(userOpHash?: PromiseOrValue<BytesLike> | null, sender?: PromiseOrValue<string> | null, paymaster?: PromiseOrValue<string> | null, nonce?: null, success?: null, actualGasCost?: null, actualGasUsed?: null): UserOperationEventEventFilter;
        "UserOperationRevertReason(bytes32,address,uint256,bytes)"(userOpHash?: PromiseOrValue<BytesLike> | null, sender?: PromiseOrValue<string> | null, nonce?: null, revertReason?: null): UserOperationRevertReasonEventFilter;
        UserOperationRevertReason(userOpHash?: PromiseOrValue<BytesLike> | null, sender?: PromiseOrValue<string> | null, nonce?: null, revertReason?: null): UserOperationRevertReasonEventFilter;
        "Withdrawn(address,address,uint256)"(account?: PromiseOrValue<string> | null, withdrawAddress?: null, amount?: null): WithdrawnEventFilter;
        Withdrawn(account?: PromiseOrValue<string> | null, withdrawAddress?: null, amount?: null): WithdrawnEventFilter;
    };
    estimateGas: {
        SIG_VALIDATION_FAILED(overrides?: CallOverrides): Promise<BigNumber>;
        _validateSenderAndPaymaster(initCode: PromiseOrValue<BytesLike>, sender: PromiseOrValue<string>, paymasterAndData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        addStake(unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        depositTo(account: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deposits(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getDepositInfo(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getSenderAddress(initCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getUserOpHash(userOp: UserOperationStruct, overrides?: CallOverrides): Promise<BigNumber>;
        handleAggregatedOps(opsPerAggregator: IEntryPoint.UserOpsPerAggregatorStruct[], beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        handleOps(ops: UserOperationStruct[], beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        innerHandleOp(callData: PromiseOrValue<BytesLike>, opInfo: EntryPoint.UserOpInfoStruct, context: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        simulateHandleOp(op: UserOperationStruct, target: PromiseOrValue<string>, targetCallData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        simulateValidation(userOp: UserOperationStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unlockStake(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawTo(withdrawAddress: PromiseOrValue<string>, withdrawAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        SIG_VALIDATION_FAILED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _validateSenderAndPaymaster(initCode: PromiseOrValue<BytesLike>, sender: PromiseOrValue<string>, paymasterAndData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addStake(unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        depositTo(account: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deposits(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDepositInfo(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSenderAddress(initCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getUserOpHash(userOp: UserOperationStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        handleAggregatedOps(opsPerAggregator: IEntryPoint.UserOpsPerAggregatorStruct[], beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        handleOps(ops: UserOperationStruct[], beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        innerHandleOp(callData: PromiseOrValue<BytesLike>, opInfo: EntryPoint.UserOpInfoStruct, context: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        simulateHandleOp(op: UserOperationStruct, target: PromiseOrValue<string>, targetCallData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        simulateValidation(userOp: UserOperationStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unlockStake(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawTo(withdrawAddress: PromiseOrValue<string>, withdrawAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
