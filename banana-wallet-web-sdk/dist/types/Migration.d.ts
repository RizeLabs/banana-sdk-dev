import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface MigrationInterface extends utils.Interface {
    functions: {
        "migrate()": FunctionFragment;
        "migrationSingleton()": FunctionFragment;
        "safe120Singleton()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "migrate" | "migrationSingleton" | "safe120Singleton"): FunctionFragment;
    encodeFunctionData(functionFragment: "migrate", values?: undefined): string;
    encodeFunctionData(functionFragment: "migrationSingleton", values?: undefined): string;
    encodeFunctionData(functionFragment: "safe120Singleton", values?: undefined): string;
    decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "migrationSingleton", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safe120Singleton", data: BytesLike): Result;
    events: {
        "ChangedMasterCopy(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ChangedMasterCopy"): EventFragment;
}
export interface ChangedMasterCopyEventObject {
    singleton: string;
}
export type ChangedMasterCopyEvent = TypedEvent<[
    string
], ChangedMasterCopyEventObject>;
export type ChangedMasterCopyEventFilter = TypedEventFilter<ChangedMasterCopyEvent>;
export interface Migration extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MigrationInterface;
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
        migrate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        migrationSingleton(overrides?: CallOverrides): Promise<[string]>;
        safe120Singleton(overrides?: CallOverrides): Promise<[string]>;
    };
    migrate(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    migrationSingleton(overrides?: CallOverrides): Promise<string>;
    safe120Singleton(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        migrate(overrides?: CallOverrides): Promise<void>;
        migrationSingleton(overrides?: CallOverrides): Promise<string>;
        safe120Singleton(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "ChangedMasterCopy(address)"(singleton?: null): ChangedMasterCopyEventFilter;
        ChangedMasterCopy(singleton?: null): ChangedMasterCopyEventFilter;
    };
    estimateGas: {
        migrate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        migrationSingleton(overrides?: CallOverrides): Promise<BigNumber>;
        safe120Singleton(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        migrate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        migrationSingleton(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        safe120Singleton(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
