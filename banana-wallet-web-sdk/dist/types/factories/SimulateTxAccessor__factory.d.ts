import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SimulateTxAccessor, SimulateTxAccessorInterface } from "../SimulateTxAccessor";
type SimulateTxAccessorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SimulateTxAccessor__factory extends ContractFactory {
    constructor(...args: SimulateTxAccessorConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SimulateTxAccessor>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SimulateTxAccessor;
    connect(signer: Signer): SimulateTxAccessor__factory;
    static readonly bytecode = "0x60a0806040523461002357306080526103fe90816100298239608051816102020152f35b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c631c5fb2111461002857600080fd5b346100e25760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100e2576004359073ffffffffffffffffffffffffffffffffffffffff821682036100e2576044359167ffffffffffffffff918284116100e257366023850112156100e25783600401359283116100e25736602484860101116100e2576100de6100cf85858560246100c36100e5565b930190602435906101e9565b604093919351938493846100f9565b0390f35b80fd5b6064359060028210156100f457565b600080fd5b91909392938252602090151581830152606060408301528351908160608401526000945b828610610169575050601f817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe092608095961161015c575b0116010190565b6000858286010152610155565b858101820151848701608001529481019461011d565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b8181106101ba570390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b949373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001630146102e5575a955a9267ffffffffffffffff918287116102d8575b604051927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81601f8b01160116840190848210908211176102cb575b60405286835236878701116100f45760006020886102ad996102a5998388013785010152610369565b925a906101af565b906040519160203d8401016040523d83523d6000602085013e929190565b6102d361017f565b61027c565b6102e061017f565b61023e565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603960248201527f53696d756c61746554784163636573736f722073686f756c64206f6e6c79206260448201527f652063616c6c6564207669612064656c656761746563616c6c000000000000006064820152fd5b939093600284101561039957600094859460010361038d575060208351930191f490565b9060208451940192f190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea264697066735822122097793ec11022c047843a52b9d964b0fd13f58faad2e1a3bf986fbb18578b104664736f6c634300080f0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "enum Enum.Operation";
            readonly name: "operation";
            readonly type: "uint8";
        }];
        readonly name: "simulate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "estimate";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "success";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "returnData";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): SimulateTxAccessorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SimulateTxAccessor;
}
export {};
