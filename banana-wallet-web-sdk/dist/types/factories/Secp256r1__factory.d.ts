import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Secp256r1, Secp256r1Interface } from "../Secp256r1";
type Secp256r1ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Secp256r1__factory extends ContractFactory {
    constructor(...args: Secp256r1ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Secp256r1>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Secp256r1;
    connect(signer: Signer): Secp256r1__factory;
    static readonly bytecode = "0x6080806040523461001a576101159081610020823930815050f35b600080fdfe6080806040526004361015601257600080fd5b600090813560e01c90816372a4c30f14608957506391327ec614603457600080fd5b807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011260865760206040517fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8152f35b80fd5b9050817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011260db57807fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc63255160209252f35b5080fdfea2646970667358221220cbe6cb684fe751e085ef3b57a1997c90dbce7b375207cb9c0fa84353f71b7e2c64736f6c634300080f0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "nn";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pp";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): Secp256r1Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): Secp256r1;
}
export {};
