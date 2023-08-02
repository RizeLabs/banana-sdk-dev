import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface Secp256r1Interface extends utils.Interface {
    functions: {
        "nn()": FunctionFragment;
        "pp()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "nn" | "pp"): FunctionFragment;
    encodeFunctionData(functionFragment: "nn", values?: undefined): string;
    encodeFunctionData(functionFragment: "pp", values?: undefined): string;
    decodeFunctionResult(functionFragment: "nn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pp", data: BytesLike): Result;
    events: {};
}
export interface Secp256r1 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Secp256r1Interface;
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
        nn(overrides?: CallOverrides): Promise<[BigNumber]>;
        pp(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    nn(overrides?: CallOverrides): Promise<BigNumber>;
    pp(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        nn(overrides?: CallOverrides): Promise<BigNumber>;
        pp(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        nn(overrides?: CallOverrides): Promise<BigNumber>;
        pp(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        nn(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
