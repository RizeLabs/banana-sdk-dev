import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface OnlyOwnersGuardInterface extends utils.Interface {
    functions: {
        "checkAfterExecution(bytes32,bool)": FunctionFragment;
        "checkTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes,address)": FunctionFragment;
        "safe()": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "checkAfterExecution" | "checkTransaction" | "safe" | "supportsInterface"): FunctionFragment;
    encodeFunctionData(functionFragment: "checkAfterExecution", values: [PromiseOrValue<BytesLike>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "checkTransaction", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "safe", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "checkAfterExecution", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    events: {};
}
export interface OnlyOwnersGuard extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OnlyOwnersGuardInterface;
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
        checkAfterExecution(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[void]>;
        checkTransaction(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BigNumberish>, arg5: PromiseOrValue<BigNumberish>, arg6: PromiseOrValue<BigNumberish>, arg7: PromiseOrValue<string>, arg8: PromiseOrValue<string>, arg9: PromiseOrValue<BytesLike>, msgSender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[void]>;
        safe(overrides?: CallOverrides): Promise<[string]>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    checkAfterExecution(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    checkTransaction(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BigNumberish>, arg5: PromiseOrValue<BigNumberish>, arg6: PromiseOrValue<BigNumberish>, arg7: PromiseOrValue<string>, arg8: PromiseOrValue<string>, arg9: PromiseOrValue<BytesLike>, msgSender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    safe(overrides?: CallOverrides): Promise<string>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        checkAfterExecution(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        checkTransaction(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BigNumberish>, arg5: PromiseOrValue<BigNumberish>, arg6: PromiseOrValue<BigNumberish>, arg7: PromiseOrValue<string>, arg8: PromiseOrValue<string>, arg9: PromiseOrValue<BytesLike>, msgSender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        safe(overrides?: CallOverrides): Promise<string>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        checkAfterExecution(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        checkTransaction(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BigNumberish>, arg5: PromiseOrValue<BigNumberish>, arg6: PromiseOrValue<BigNumberish>, arg7: PromiseOrValue<string>, arg8: PromiseOrValue<string>, arg9: PromiseOrValue<BytesLike>, msgSender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        safe(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        checkAfterExecution(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkTransaction(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BigNumberish>, arg5: PromiseOrValue<BigNumberish>, arg6: PromiseOrValue<BigNumberish>, arg7: PromiseOrValue<string>, arg8: PromiseOrValue<string>, arg9: PromiseOrValue<BytesLike>, msgSender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        safe(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
