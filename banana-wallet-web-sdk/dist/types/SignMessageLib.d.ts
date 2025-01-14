import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface SignMessageLibInterface extends utils.Interface {
    functions: {
        "getMessageHash(bytes)": FunctionFragment;
        "signMessage(bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getMessageHash" | "signMessage"): FunctionFragment;
    encodeFunctionData(functionFragment: "getMessageHash", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "signMessage", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "getMessageHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signMessage", data: BytesLike): Result;
    events: {
        "SignMsg(bytes32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "SignMsg"): EventFragment;
}
export interface SignMsgEventObject {
    msgHash: string;
}
export type SignMsgEvent = TypedEvent<[string], SignMsgEventObject>;
export type SignMsgEventFilter = TypedEventFilter<SignMsgEvent>;
export interface SignMessageLib extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SignMessageLibInterface;
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
        getMessageHash(message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        signMessage(_data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    getMessageHash(message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    signMessage(_data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getMessageHash(message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        signMessage(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "SignMsg(bytes32)"(msgHash?: PromiseOrValue<BytesLike> | null): SignMsgEventFilter;
        SignMsg(msgHash?: PromiseOrValue<BytesLike> | null): SignMsgEventFilter;
    };
    estimateGas: {
        getMessageHash(message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        signMessage(_data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getMessageHash(message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        signMessage(_data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
