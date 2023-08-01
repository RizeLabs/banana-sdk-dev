import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MultiSend, MultiSendInterface } from "../MultiSend";
type MultiSendConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MultiSend__factory extends ContractFactory {
    constructor(...args: MultiSendConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MultiSend>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MultiSend;
    connect(signer: Signer): MultiSend__factory;
    static readonly bytecode = "0x60a0806040523461002357306080526102c390816100298239608051816101e60152f35b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c638d80ff0a1461002857600080fd5b60207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010e5760043567ffffffffffffffff80821161010a573660238301121561010a57828260040135928284116100fd575b604051927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81601f8801160116840190848210908211176100f0575b60405283835236602485830101116100ec57836100e79460246020930183860137830101526101cc565b604051f35b5080fd5b6100f8610111565b6100bd565b610105610111565b61007f565b8280fd5b80fd5b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b1561014857565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f4d756c746953656e642073686f756c64206f6e6c792062652063616c6c65642060448201527f7669612064656c656761746563616c6c000000000000000000000000000000006064820152fd5b61020e73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016301415610141565b80519060205b82811061022057505050565b80820190815160f81c90600183015160601c60158401519260358501518094605580970190600093908160001461027f575060011461026f575b505090501561026a570101610214565b600080fd5b6000938493505af480833861025a565b905083945af180833861025a56fea26469706673582212208cfe774ff1be54350977223dc591e31e36b89869e83801e11799b98d121f99d664736f6c634300080f0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "transactions";
            readonly type: "bytes";
        }];
        readonly name: "multiSend";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): MultiSendInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MultiSend;
}
export {};
