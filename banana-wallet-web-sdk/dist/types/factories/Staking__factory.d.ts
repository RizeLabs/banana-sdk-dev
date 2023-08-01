import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Staking, StakingInterface } from "../Staking";
type StakingConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Staking__factory extends ContractFactory {
    constructor(...args: StakingConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Staking>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Staking;
    connect(signer: Signer): Staking__factory;
    static readonly bytecode = "0x6080806040523461001a576000805561019890816100208239f35b600080fdfe608080604052600436101561001d575b50361561001b57600080fd5b005b600090813560e01c908163373d613214610126575080633a4b66f1146100bc57637ac665740361000f57346100b957807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100b9578080808080548181156100b0575b7348701df467ba0efc8d8f34b2686dc3b0a0b1cab590f1156100a457604051f35b604051903d90823e3d90fd5b506108fc610083565b80fd5b50807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100b9578054341981116100f95734018155604051f35b6024827f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b90503461015e57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261015e57602091548152f35b5080fdfea26469706673582212209204246be29a679a418224ad19cd2b8ed27b41764133ff075334e1a7ce4a8aac64736f6c634300080f0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "returnStake";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "stake";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "stakedAmount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): StakingInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Staking;
}
export {};
