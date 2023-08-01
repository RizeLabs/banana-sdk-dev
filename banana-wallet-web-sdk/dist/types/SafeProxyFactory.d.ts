import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface SafeProxyFactoryInterface extends utils.Interface {
    functions: {
        "createChainSpecificProxyWithNonce(address,bytes,uint256)": FunctionFragment;
        "createProxyWithCallback(address,bytes,uint256,address)": FunctionFragment;
        "createProxyWithNonce(address,bytes,uint256)": FunctionFragment;
        "getChainId()": FunctionFragment;
        "proxyCreationCode()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createChainSpecificProxyWithNonce" | "createProxyWithCallback" | "createProxyWithNonce" | "getChainId" | "proxyCreationCode"): FunctionFragment;
    encodeFunctionData(functionFragment: "createChainSpecificProxyWithNonce", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "createProxyWithCallback", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "createProxyWithNonce", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getChainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxyCreationCode", values?: undefined): string;
    decodeFunctionResult(functionFragment: "createChainSpecificProxyWithNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createProxyWithCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createProxyWithNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxyCreationCode", data: BytesLike): Result;
    events: {
        "ProxyCreation(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ProxyCreation"): EventFragment;
}
export interface ProxyCreationEventObject {
    proxy: string;
    singleton: string;
}
export type ProxyCreationEvent = TypedEvent<[
    string,
    string
], ProxyCreationEventObject>;
export type ProxyCreationEventFilter = TypedEventFilter<ProxyCreationEvent>;
export interface SafeProxyFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SafeProxyFactoryInterface;
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
        createChainSpecificProxyWithNonce(_singleton: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createProxyWithCallback(_singleton: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, callback: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createProxyWithNonce(_singleton: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getChainId(overrides?: CallOverrides): Promise<[BigNumber]>;
        proxyCreationCode(overrides?: CallOverrides): Promise<[string]>;
    };
    createChainSpecificProxyWithNonce(_singleton: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createProxyWithCallback(_singleton: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, callback: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createProxyWithNonce(_singleton: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getChainId(overrides?: CallOverrides): Promise<BigNumber>;
    proxyCreationCode(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        createChainSpecificProxyWithNonce(_singleton: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        createProxyWithCallback(_singleton: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, callback: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        createProxyWithNonce(_singleton: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getChainId(overrides?: CallOverrides): Promise<BigNumber>;
        proxyCreationCode(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "ProxyCreation(address,address)"(proxy?: PromiseOrValue<string> | null, singleton?: null): ProxyCreationEventFilter;
        ProxyCreation(proxy?: PromiseOrValue<string> | null, singleton?: null): ProxyCreationEventFilter;
    };
    estimateGas: {
        createChainSpecificProxyWithNonce(_singleton: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createProxyWithCallback(_singleton: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, callback: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createProxyWithNonce(_singleton: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getChainId(overrides?: CallOverrides): Promise<BigNumber>;
        proxyCreationCode(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        createChainSpecificProxyWithNonce(_singleton: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createProxyWithCallback(_singleton: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, callback: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createProxyWithNonce(_singleton: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxyCreationCode(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
