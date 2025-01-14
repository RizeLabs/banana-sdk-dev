import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface ModuleManagerInterface extends utils.Interface {
    functions: {
        "disableModule(address,address)": FunctionFragment;
        "enableModule(address)": FunctionFragment;
        "execTransactionFromModule(address,uint256,bytes,uint8)": FunctionFragment;
        "execTransactionFromModuleReturnData(address,uint256,bytes,uint8)": FunctionFragment;
        "getModulesPaginated(address,uint256)": FunctionFragment;
        "isModuleEnabled(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "disableModule" | "enableModule" | "execTransactionFromModule" | "execTransactionFromModuleReturnData" | "getModulesPaginated" | "isModuleEnabled"): FunctionFragment;
    encodeFunctionData(functionFragment: "disableModule", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "enableModule", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "execTransactionFromModule", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "execTransactionFromModuleReturnData", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getModulesPaginated", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "isModuleEnabled", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "disableModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enableModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execTransactionFromModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execTransactionFromModuleReturnData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getModulesPaginated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isModuleEnabled", data: BytesLike): Result;
    events: {
        "DisabledModule(address)": EventFragment;
        "EnabledModule(address)": EventFragment;
        "ExecutionFromModuleFailure(address)": EventFragment;
        "ExecutionFromModuleSuccess(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DisabledModule"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EnabledModule"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecutionFromModuleFailure"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecutionFromModuleSuccess"): EventFragment;
}
export interface DisabledModuleEventObject {
    module: string;
}
export type DisabledModuleEvent = TypedEvent<[
    string
], DisabledModuleEventObject>;
export type DisabledModuleEventFilter = TypedEventFilter<DisabledModuleEvent>;
export interface EnabledModuleEventObject {
    module: string;
}
export type EnabledModuleEvent = TypedEvent<[string], EnabledModuleEventObject>;
export type EnabledModuleEventFilter = TypedEventFilter<EnabledModuleEvent>;
export interface ExecutionFromModuleFailureEventObject {
    module: string;
}
export type ExecutionFromModuleFailureEvent = TypedEvent<[
    string
], ExecutionFromModuleFailureEventObject>;
export type ExecutionFromModuleFailureEventFilter = TypedEventFilter<ExecutionFromModuleFailureEvent>;
export interface ExecutionFromModuleSuccessEventObject {
    module: string;
}
export type ExecutionFromModuleSuccessEvent = TypedEvent<[
    string
], ExecutionFromModuleSuccessEventObject>;
export type ExecutionFromModuleSuccessEventFilter = TypedEventFilter<ExecutionFromModuleSuccessEvent>;
export interface ModuleManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ModuleManagerInterface;
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
        disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        enableModule(module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        execTransactionFromModuleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getModulesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[], string] & {
            array: string[];
            next: string;
        }>;
        isModuleEnabled(module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    enableModule(module: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    execTransactionFromModuleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getModulesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[], string] & {
        array: string[];
        next: string;
    }>;
    isModuleEnabled(module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        enableModule(module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        execTransactionFromModuleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            returnData: string;
        }>;
        getModulesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[], string] & {
            array: string[];
            next: string;
        }>;
        isModuleEnabled(module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "DisabledModule(address)"(module?: null): DisabledModuleEventFilter;
        DisabledModule(module?: null): DisabledModuleEventFilter;
        "EnabledModule(address)"(module?: null): EnabledModuleEventFilter;
        EnabledModule(module?: null): EnabledModuleEventFilter;
        "ExecutionFromModuleFailure(address)"(module?: PromiseOrValue<string> | null): ExecutionFromModuleFailureEventFilter;
        ExecutionFromModuleFailure(module?: PromiseOrValue<string> | null): ExecutionFromModuleFailureEventFilter;
        "ExecutionFromModuleSuccess(address)"(module?: PromiseOrValue<string> | null): ExecutionFromModuleSuccessEventFilter;
        ExecutionFromModuleSuccess(module?: PromiseOrValue<string> | null): ExecutionFromModuleSuccessEventFilter;
    };
    estimateGas: {
        disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        enableModule(module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        execTransactionFromModuleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getModulesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isModuleEnabled(module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        enableModule(module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        execTransactionFromModuleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getModulesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isModuleEnabled(module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
