import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface StakingInterface extends utils.Interface {
    functions: {
        "returnStake()": FunctionFragment;
        "stake()": FunctionFragment;
        "stakedAmount()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "returnStake" | "stake" | "stakedAmount"): FunctionFragment;
    encodeFunctionData(functionFragment: "returnStake", values?: undefined): string;
    encodeFunctionData(functionFragment: "stake", values?: undefined): string;
    encodeFunctionData(functionFragment: "stakedAmount", values?: undefined): string;
    decodeFunctionResult(functionFragment: "returnStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakedAmount", data: BytesLike): Result;
    events: {};
}
export interface Staking extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StakingInterface;
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
        returnStake(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stake(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stakedAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    returnStake(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stake(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stakedAmount(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        returnStake(overrides?: CallOverrides): Promise<void>;
        stake(overrides?: CallOverrides): Promise<void>;
        stakedAmount(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        returnStake(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stake(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stakedAmount(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        returnStake(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stake(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stakedAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
