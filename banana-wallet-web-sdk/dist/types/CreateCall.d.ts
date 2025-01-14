import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface CreateCallInterface extends utils.Interface {
    functions: {
        "performCreate(uint256,bytes)": FunctionFragment;
        "performCreate2(uint256,bytes,bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "performCreate" | "performCreate2"): FunctionFragment;
    encodeFunctionData(functionFragment: "performCreate", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "performCreate2", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "performCreate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "performCreate2", data: BytesLike): Result;
    events: {
        "ContractCreation(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ContractCreation"): EventFragment;
}
export interface ContractCreationEventObject {
    newContract: string;
}
export type ContractCreationEvent = TypedEvent<[
    string
], ContractCreationEventObject>;
export type ContractCreationEventFilter = TypedEventFilter<ContractCreationEvent>;
export interface CreateCall extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CreateCallInterface;
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
        performCreate(value: PromiseOrValue<BigNumberish>, deploymentData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        performCreate2(value: PromiseOrValue<BigNumberish>, deploymentData: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    performCreate(value: PromiseOrValue<BigNumberish>, deploymentData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    performCreate2(value: PromiseOrValue<BigNumberish>, deploymentData: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        performCreate(value: PromiseOrValue<BigNumberish>, deploymentData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        performCreate2(value: PromiseOrValue<BigNumberish>, deploymentData: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "ContractCreation(address)"(newContract?: null): ContractCreationEventFilter;
        ContractCreation(newContract?: null): ContractCreationEventFilter;
    };
    estimateGas: {
        performCreate(value: PromiseOrValue<BigNumberish>, deploymentData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        performCreate2(value: PromiseOrValue<BigNumberish>, deploymentData: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        performCreate(value: PromiseOrValue<BigNumberish>, deploymentData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        performCreate2(value: PromiseOrValue<BigNumberish>, deploymentData: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
