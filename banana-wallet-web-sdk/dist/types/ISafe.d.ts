import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ISafeInterface extends utils.Interface {
    functions: {
        "getOwners()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getOwners"): FunctionFragment;
    encodeFunctionData(functionFragment: "getOwners", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getOwners", data: BytesLike): Result;
    events: {};
}
export interface ISafe extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISafeInterface;
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
        getOwners(overrides?: CallOverrides): Promise<[string[]]>;
    };
    getOwners(overrides?: CallOverrides): Promise<string[]>;
    callStatic: {
        getOwners(overrides?: CallOverrides): Promise<string[]>;
    };
    filters: {};
    estimateGas: {
        getOwners(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getOwners(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
