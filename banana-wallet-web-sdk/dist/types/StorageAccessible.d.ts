import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface StorageAccessibleInterface extends utils.Interface {
    functions: {
        "getStorageAt(uint256,uint256)": FunctionFragment;
        "simulateAndRevert(address,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getStorageAt" | "simulateAndRevert"): FunctionFragment;
    encodeFunctionData(functionFragment: "getStorageAt", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "simulateAndRevert", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "getStorageAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "simulateAndRevert", data: BytesLike): Result;
    events: {};
}
export interface StorageAccessible extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StorageAccessibleInterface;
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
        getStorageAt(offset: PromiseOrValue<BigNumberish>, length: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        simulateAndRevert(targetContract: PromiseOrValue<string>, calldataPayload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    getStorageAt(offset: PromiseOrValue<BigNumberish>, length: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    simulateAndRevert(targetContract: PromiseOrValue<string>, calldataPayload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getStorageAt(offset: PromiseOrValue<BigNumberish>, length: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        simulateAndRevert(targetContract: PromiseOrValue<string>, calldataPayload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        getStorageAt(offset: PromiseOrValue<BigNumberish>, length: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        simulateAndRevert(targetContract: PromiseOrValue<string>, calldataPayload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getStorageAt(offset: PromiseOrValue<BigNumberish>, length: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        simulateAndRevert(targetContract: PromiseOrValue<string>, calldataPayload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
