import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface NativeCurrencyPaymentFallbackInterface extends utils.Interface {
    functions: {};
    events: {
        "SafeReceived(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "SafeReceived"): EventFragment;
}
export interface SafeReceivedEventObject {
    sender: string;
    value: BigNumber;
}
export type SafeReceivedEvent = TypedEvent<[
    string,
    BigNumber
], SafeReceivedEventObject>;
export type SafeReceivedEventFilter = TypedEventFilter<SafeReceivedEvent>;
export interface NativeCurrencyPaymentFallback extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NativeCurrencyPaymentFallbackInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {};
    callStatic: {};
    filters: {
        "SafeReceived(address,uint256)"(sender?: PromiseOrValue<string> | null, value?: null): SafeReceivedEventFilter;
        SafeReceived(sender?: PromiseOrValue<string> | null, value?: null): SafeReceivedEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
