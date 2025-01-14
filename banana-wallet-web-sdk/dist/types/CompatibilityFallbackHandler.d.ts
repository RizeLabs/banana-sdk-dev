import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface CompatibilityFallbackHandlerInterface extends utils.Interface {
    functions: {
        "NAME()": FunctionFragment;
        "VERSION()": FunctionFragment;
        "encodeMessageDataForSafe(address,bytes)": FunctionFragment;
        "getMessageHash(bytes)": FunctionFragment;
        "getMessageHashForSafe(address,bytes)": FunctionFragment;
        "getModules()": FunctionFragment;
        "isValidSignature(bytes32,bytes)": FunctionFragment;
        "isValidSignature(bytes,bytes)": FunctionFragment;
        "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
        "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
        "simulate(address,bytes)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "tokensReceived(address,address,address,uint256,bytes,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "NAME" | "VERSION" | "encodeMessageDataForSafe" | "getMessageHash" | "getMessageHashForSafe" | "getModules" | "isValidSignature(bytes32,bytes)" | "isValidSignature(bytes,bytes)" | "onERC1155BatchReceived" | "onERC1155Received" | "onERC721Received" | "simulate" | "supportsInterface" | "tokensReceived"): FunctionFragment;
    encodeFunctionData(functionFragment: "NAME", values?: undefined): string;
    encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "encodeMessageDataForSafe", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getMessageHash", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getMessageHashForSafe", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getModules", values?: undefined): string;
    encodeFunctionData(functionFragment: "isValidSignature(bytes32,bytes)", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "isValidSignature(bytes,bytes)", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "onERC1155BatchReceived", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "onERC1155Received", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "simulate", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "tokensReceived", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "NAME", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeMessageDataForSafe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMessageHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMessageHashForSafe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getModules", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidSignature(bytes32,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidSignature(bytes,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC721Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "simulate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokensReceived", data: BytesLike): Result;
    events: {};
}
export interface CompatibilityFallbackHandler extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CompatibilityFallbackHandlerInterface;
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
        NAME(overrides?: CallOverrides): Promise<[string]>;
        VERSION(overrides?: CallOverrides): Promise<[string]>;
        encodeMessageDataForSafe(safe: PromiseOrValue<string>, message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        getMessageHash(message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        getMessageHashForSafe(safe: PromiseOrValue<string>, message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        getModules(overrides?: CallOverrides): Promise<[string[]]>;
        "isValidSignature(bytes32,bytes)"(_dataHash: PromiseOrValue<BytesLike>, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        "isValidSignature(bytes,bytes)"(_data: PromiseOrValue<BytesLike>, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        simulate(targetContract: PromiseOrValue<string>, calldataPayload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        tokensReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[void]>;
    };
    NAME(overrides?: CallOverrides): Promise<string>;
    VERSION(overrides?: CallOverrides): Promise<string>;
    encodeMessageDataForSafe(safe: PromiseOrValue<string>, message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getMessageHash(message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getMessageHashForSafe(safe: PromiseOrValue<string>, message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getModules(overrides?: CallOverrides): Promise<string[]>;
    "isValidSignature(bytes32,bytes)"(_dataHash: PromiseOrValue<BytesLike>, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    "isValidSignature(bytes,bytes)"(_data: PromiseOrValue<BytesLike>, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    simulate(targetContract: PromiseOrValue<string>, calldataPayload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    tokensReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    callStatic: {
        NAME(overrides?: CallOverrides): Promise<string>;
        VERSION(overrides?: CallOverrides): Promise<string>;
        encodeMessageDataForSafe(safe: PromiseOrValue<string>, message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getMessageHash(message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getMessageHashForSafe(safe: PromiseOrValue<string>, message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getModules(overrides?: CallOverrides): Promise<string[]>;
        "isValidSignature(bytes32,bytes)"(_dataHash: PromiseOrValue<BytesLike>, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        "isValidSignature(bytes,bytes)"(_data: PromiseOrValue<BytesLike>, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        simulate(targetContract: PromiseOrValue<string>, calldataPayload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        tokensReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        NAME(overrides?: CallOverrides): Promise<BigNumber>;
        VERSION(overrides?: CallOverrides): Promise<BigNumber>;
        encodeMessageDataForSafe(safe: PromiseOrValue<string>, message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getMessageHash(message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getMessageHashForSafe(safe: PromiseOrValue<string>, message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getModules(overrides?: CallOverrides): Promise<BigNumber>;
        "isValidSignature(bytes32,bytes)"(_dataHash: PromiseOrValue<BytesLike>, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        "isValidSignature(bytes,bytes)"(_data: PromiseOrValue<BytesLike>, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        simulate(targetContract: PromiseOrValue<string>, calldataPayload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        tokensReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encodeMessageDataForSafe(safe: PromiseOrValue<string>, message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMessageHash(message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMessageHashForSafe(safe: PromiseOrValue<string>, message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getModules(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "isValidSignature(bytes32,bytes)"(_dataHash: PromiseOrValue<BytesLike>, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "isValidSignature(bytes,bytes)"(_data: PromiseOrValue<BytesLike>, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        simulate(targetContract: PromiseOrValue<string>, calldataPayload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokensReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
