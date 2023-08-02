import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface DebugTransactionGuardInterface extends utils.Interface {
    functions: {
        "checkAfterExecution(bytes32,bool)": FunctionFragment;
        "checkTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes,address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "txNonces(bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "checkAfterExecution" | "checkTransaction" | "supportsInterface" | "txNonces"): FunctionFragment;
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
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "txNonces", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "checkAfterExecution", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "txNonces", data: BytesLike): Result;
    events: {
        "GasUsage(address,bytes32,uint256,bool)": EventFragment;
        "TransactionDetails(address,bytes32,address,uint256,bytes,uint8,uint256,bool,uint256,bytes,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "GasUsage"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransactionDetails"): EventFragment;
}
export interface GasUsageEventObject {
    safe: string;
    txHash: string;
    nonce: BigNumber;
    success: boolean;
}
export type GasUsageEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    boolean
], GasUsageEventObject>;
export type GasUsageEventFilter = TypedEventFilter<GasUsageEvent>;
export interface TransactionDetailsEventObject {
    safe: string;
    txHash: string;
    to: string;
    value: BigNumber;
    data: string;
    operation: number;
    safeTxGas: BigNumber;
    usesRefund: boolean;
    nonce: BigNumber;
    signatures: string;
    executor: string;
}
export type TransactionDetailsEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    string,
    number,
    BigNumber,
    boolean,
    BigNumber,
    string,
    string
], TransactionDetailsEventObject>;
export type TransactionDetailsEventFilter = TypedEventFilter<TransactionDetailsEvent>;
export interface DebugTransactionGuard extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DebugTransactionGuardInterface;
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
        checkAfterExecution(txHash: PromiseOrValue<BytesLike>, success: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        checkTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, signatures: PromiseOrValue<BytesLike>, executor: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        txNonces(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    checkAfterExecution(txHash: PromiseOrValue<BytesLike>, success: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    checkTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, signatures: PromiseOrValue<BytesLike>, executor: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    txNonces(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        checkAfterExecution(txHash: PromiseOrValue<BytesLike>, success: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        checkTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, signatures: PromiseOrValue<BytesLike>, executor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        txNonces(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "GasUsage(address,bytes32,uint256,bool)"(safe?: PromiseOrValue<string> | null, txHash?: PromiseOrValue<BytesLike> | null, nonce?: PromiseOrValue<BigNumberish> | null, success?: null): GasUsageEventFilter;
        GasUsage(safe?: PromiseOrValue<string> | null, txHash?: PromiseOrValue<BytesLike> | null, nonce?: PromiseOrValue<BigNumberish> | null, success?: null): GasUsageEventFilter;
        "TransactionDetails(address,bytes32,address,uint256,bytes,uint8,uint256,bool,uint256,bytes,address)"(safe?: PromiseOrValue<string> | null, txHash?: PromiseOrValue<BytesLike> | null, to?: null, value?: null, data?: null, operation?: null, safeTxGas?: null, usesRefund?: null, nonce?: null, signatures?: null, executor?: null): TransactionDetailsEventFilter;
        TransactionDetails(safe?: PromiseOrValue<string> | null, txHash?: PromiseOrValue<BytesLike> | null, to?: null, value?: null, data?: null, operation?: null, safeTxGas?: null, usesRefund?: null, nonce?: null, signatures?: null, executor?: null): TransactionDetailsEventFilter;
    };
    estimateGas: {
        checkAfterExecution(txHash: PromiseOrValue<BytesLike>, success: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        checkTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, signatures: PromiseOrValue<BytesLike>, executor: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        txNonces(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        checkAfterExecution(txHash: PromiseOrValue<BytesLike>, success: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        checkTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, signatures: PromiseOrValue<BytesLike>, executor: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        txNonces(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
