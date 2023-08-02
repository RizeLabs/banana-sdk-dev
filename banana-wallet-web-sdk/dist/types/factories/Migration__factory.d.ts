import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Migration, MigrationInterface } from "../Migration";
type MigrationConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Migration__factory extends ContractFactory {
    constructor(...args: MigrationConstructorParams);
    deploy(targetSingleton: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Migration>;
    getDeployTransaction(targetSingleton: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Migration;
    connect(signer: Signer): Migration__factory;
    static readonly bytecode = "0x60c0346100d957601f61043238819003918201601f19168301916001600160401b038311848410176100de578084926020946040528339810103126100d957516001600160a01b0381168082036100d957156100895760a0523060805260405161033d90816100f58239608051818181608901526102e3015260a05181818160b101526102750152f35b60405162461bcd60e51b815260206004820152602260248201527f496e76616c69642073696e676c65746f6e20616464726573732070726f766964604482015261195960f21b6064820152608490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe60806040818152600436101561001457600080fd5b600091823560e01c9081632e773185146102995750806389f543081461022b57638fd3ab801461004357600080fd5b3461022757817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102275773ffffffffffffffffffffffffffffffffffffffff807f00000000000000000000000000000000000000000000000000000000000000001630146101a4577f000000000000000000000000000000000000000000000000000000000000000016807fffffffffffffffffffffffff0000000000000000000000000000000000000000845416178355815190602082017f035aff83d86937d35b32e04f0ddc6ff469290eef2f1b692d8a815c89404d474981523084840152838352606083019280841067ffffffffffffffff8511176101775783855251902060065581527f75e41bc35ff1bf14d81d1d2f649c0084a0f974f9289c803ec9898eeec4c8d0b890602090a151f35b6024867f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b608482517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f4d6967726174696f6e2073686f756c64206f6e6c792062652063616c6c65642060448201527f7669612064656c656761746563616c6c000000000000000000000000000000006064820152fd5b5080fd5b503461022757817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610227576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b83903461022757817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102275760209073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f3fea2646970667358221220bbe9fdca2a7bb7dcef707284b75de2f2ab5e1eda6e4bf006a4091db1cb410aa064736f6c634300080f0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "targetSingleton";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "singleton";
            readonly type: "address";
        }];
        readonly name: "ChangedMasterCopy";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "migrate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "migrationSingleton";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "safe120Singleton";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): MigrationInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Migration;
}
export {};
