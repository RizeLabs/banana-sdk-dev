import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { DebugTransactionGuard, DebugTransactionGuardInterface } from "../DebugTransactionGuard";
type DebugTransactionGuardConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DebugTransactionGuard__factory extends ContractFactory {
    constructor(...args: DebugTransactionGuardConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<DebugTransactionGuard>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): DebugTransactionGuard;
    connect(signer: Signer): DebugTransactionGuard__factory;
    static readonly bytecode = "0x608080604052346100165761077b908161001c8239f35b600080fdfe6080806040526004908136101561001f575b50503461001a57005b600080fd5b60003560e01c90816301ffc9a7146104fa5750806375f0bb521461019257806393271368146100a05763ddbdba63146100585780610011565b3461001a5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261001a573560005260006020526020604060002054604051908152f35b503461001a5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261001a57803560243580151580910361001a578160005260006020526040600020549283156101345750816000526000602052600060408120556040519081527f0dcc0fb56a30b6fe6b188f45b47369bc7f3c928a9748e245a79fc3f54ddd056860203392a4005b6064906020604051917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601360248201527f436f756c64206e6f7420676574206e6f6e6365000000000000000000000000006044820152fd5b503461001a576101607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261001a5780359073ffffffffffffffffffffffffffffffffffffffff90818316830361001a5767ffffffffffffffff60443581811161001a576102059036908401610625565b926002606435101561001a5760e43581811680910361001a576101049081359383851680950361001a576101243590811161001a576102479036908701610625565b9061014496873595858716870361001a57604051987faffed0e0000000000000000000000000000000000000000000000000000000008a5260208a8a81335afa998a1561048c5760009a6104c6575b5060018a10610498578a6020926102f089936040519c8d9586957fd8d11f7800000000000000000000000000000000000000000000000000000000875216908501526024356024850152610140604485015283018661069a565b9061030060648401606435610709565b6084359889608485015260a43560a485015260c435978860c486015260e48501528301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8c016101248301520381335afa96871561048c57600097610428575b507fa65fef32cd19a6639a4bf7a6d196f132c151e4f0bbd2706f7f831b3a778e1ac0937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999386936103d3610404948b9a996040519816885260243560208901526101208060408a015288019061069a565b926103e360608801606435610709565b6080870152151560a08601528a8a0160c086015284820360e086015261069a565b93166101008201528033930390a36000526000602052016040600020556000604051f35b9095949193989296506020813d602011610484575b8161044a602093836105b5565b8101031261001a575191979195939490939192907fa65fef32cd19a6639a4bf7a6d196f132c151e4f0bbd2706f7f831b3a778e1ac0610361565b3d915061043d565b6040513d6000823e3d90fd5b6011897f4e487b71000000000000000000000000000000000000000000000000000000006000525260246000fd5b9099506020813d6020116104f2575b816104e2602093836105b5565b8101031261001a57519838610296565b3d91506104d5565b823461001a5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261001a5735907fffffffff00000000000000000000000000000000000000000000000000000000821680920361001a57817fe6d7a83a000000000000000000000000000000000000000000000000000000006020931490811561058b575b5015158152f35b7f01ffc9a70000000000000000000000000000000000000000000000000000000091501483610584565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176105f657604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b81601f8201121561001a5780359067ffffffffffffffff82116105f6576040519261067860207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f86011601856105b5565b8284526020838301011161001a57816000926020809301838601378301015290565b91908251928382526000905b8482106106f15750601f84602094957fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe093116106e4575b0116010190565b60008582860101526106dd565b906020908180828501015190828601015201906106a6565b9060028210156107165752565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea26469706673582212206bc7012f847e616cec48edc8fbde3dc27e868ae150e1f097e8c1b51d893516e764736f6c634300080f0033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "safe";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "success";
            readonly type: "bool";
        }];
        readonly name: "GasUsage";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "safe";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "enum Enum.Operation";
            readonly name: "operation";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "safeTxGas";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "usesRefund";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "signatures";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "executor";
            readonly type: "address";
        }];
        readonly name: "TransactionDetails";
        readonly type: "event";
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bool";
            readonly name: "success";
            readonly type: "bool";
        }];
        readonly name: "checkAfterExecution";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
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
        }, {
            readonly internalType: "uint256";
            readonly name: "safeTxGas";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "baseGas";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "gasPrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "gasToken";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "refundReceiver";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "signatures";
            readonly type: "bytes";
        }, {
            readonly internalType: "address";
            readonly name: "executor";
            readonly type: "address";
        }];
        readonly name: "checkTransaction";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly name: "txNonces";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): DebugTransactionGuardInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DebugTransactionGuard;
}
export {};
