import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CompatibilityFallbackHandler, CompatibilityFallbackHandlerInterface } from "../CompatibilityFallbackHandler";
type CompatibilityFallbackHandlerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CompatibilityFallbackHandler__factory extends ContractFactory {
    constructor(...args: CompatibilityFallbackHandlerConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CompatibilityFallbackHandler>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CompatibilityFallbackHandler;
    connect(signer: Signer): CompatibilityFallbackHandler__factory;
    static readonly bytecode = "0x608080604052346100165761120e908161001c8239f35b600080fdfe60806040526004361015610013575b600080fd5b60003560e01c806223de291461012a57806301ffc9a7146101215780630a1028c414610118578063150b7a021461010f5780631626ba7e1461010657806320c13b0b146100fd57806323031640146100f45780636ac24784146100eb578063a3f4df7e146100e2578063b2494df3146100d9578063bc197c81146100d0578063bd61951d146100c7578063f23a6e61146100be5763ffa1ad74146100b657600080fd5b61000e610e96565b5061000e610e04565b5061000e610d19565b5061000e610c51565b5061000e610ac1565b5061000e6109f3565b5061000e6109d4565b5061000e6109a5565b5061000e61070c565b5061000e610554565b5061000e6104c2565b5061000e610459565b5061000e610237565b5061000e61017f565b73ffffffffffffffffffffffffffffffffffffffff81160361000e57565b9181601f8401121561000e5782359167ffffffffffffffff831161000e576020838186019501011161000e57565b503461000e5760c07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576101ba600435610133565b6101c5602435610133565b6101d0604435610133565b67ffffffffffffffff60843581811161000e576101f1903690600401610151565b505060a43590811161000e5761020b903690600401610151565b005b7fffffffff0000000000000000000000000000000000000000000000000000000081160361000e57565b503461000e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5760207fffffffff000000000000000000000000000000000000000000000000000000006004356102968161020d565b167f4e2312e00000000000000000000000000000000000000000000000000000000081149081156102fe575b81156102d4575b506040519015158152f35b7f01ffc9a700000000000000000000000000000000000000000000000000000000915014386102c9565b7f150b7a0200000000000000000000000000000000000000000000000000000000811491506102c2565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b67ffffffffffffffff811161036c57604052565b610374610328565b604052565b6040810190811067ffffffffffffffff82111761036c57604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761036c57604052565b81601f8201121561000e5780359067ffffffffffffffff821161044c575b6040519261042a60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601160185610395565b8284526020838301011161000e57816000926020809301838601378301015290565b610454610328565b6103f4565b503461000e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5760043567ffffffffffffffff811161000e576104b46104ae60209236906004016103d6565b33610fbf565b818151910120604051908152f35b503461000e5760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576104fd600435610133565b610508602435610133565b60643567ffffffffffffffff811161000e57610528903690600401610151565b505060206040517f150b7a02000000000000000000000000000000000000000000000000000000008152f35b503461000e5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5760243567ffffffffffffffff811161000e5760206105a9610629923690600401610151565b604092919251926105f3846105c76004358683019190602083019252565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101865285610395565b60405194859283927f20c13b0b000000000000000000000000000000000000000000000000000000009687855260048501611172565b0381335afa9182156106ff575b6000926106cf575b506000917fffffffff0000000000000000000000000000000000000000000000000000000016036106c657506106c27f1626ba7e000000000000000000000000000000000000000000000000000000005b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681529081906020820190565b0390f35b6106c29061068f565b6106f191925060203d81116106f8575b6106e98183610395565b81019061115d565b903861063e565b503d6106df565b610707610f3e565b610636565b503461000e5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5767ffffffffffffffff60043581811161000e5761075d9036906004016103d6565b9060243590811161000e576107796107809136906004016103d6565b9133610fbf565b805160208201209082511560001461084d57506040517f5ae6bd3700000000000000000000000000000000000000000000000000000000815260048101919091526107e79150602081602481335afa908115610840575b600091610812575b501515610f5a565b6040517f20c13b0b000000000000000000000000000000000000000000000000000000008152602090f35b610833915060203d8111610839575b61082b8183610395565b810190610f4b565b386107df565b503d610821565b610848610f3e565b6107d7565b333b1561000e5760009161088e60405194859384937f934f3a1100000000000000000000000000000000000000000000000000000000855260048501610f13565b0381335afa80156108be575b6108a5575b506107e7565b806108b26108b892610358565b806109e8565b3861089f565b6108c6610f3e565b61089a565b9060407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc83011261000e5760043561090281610133565b916024359067ffffffffffffffff821161000e57610922916004016103d6565b90565b91908251928382526000905b84821061097c5750601f84602094957fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0931161096f575b0116010190565b6000858286010152610968565b90602090818082850101519082860101520190610931565b906020610922928181520190610925565b503461000e576106c26109c06109ba366108cb565b90610fbf565b604051918291602083526020830190610925565b503461000e5760206104b46109ba366108cb565b600091031261000e57565b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576106c2604051610a3281610379565b601881527f44656661756c742043616c6c6261636b2048616e646c657200000000000000006020820152604051918291602083526020830190610925565b6020908160408183019282815285518094520193019160005b828110610a97575050505090565b835173ffffffffffffffffffffffffffffffffffffffff1685529381019392810192600101610a89565b503461000e576000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610bfb57604051907fcc2f845200000000000000000000000000000000000000000000000000000000825260016004830152600a60248301528082604481335afa908115610c13575b8091610b4c575b604051806106c28482610a70565b90503d8082843e610b5d8184610395565b820191604081840312610c0f5780519267ffffffffffffffff93848111610c0b57820181601f82011215610c0b578051948511610bfe575b8460051b9060405194602096610bad88850188610395565b86528680870193830101938411610bfb57508501905b828210610be2575050506106c292610bdb91016111cb565b5038610b3e565b8580918351610bf081610133565b815201910190610bc3565b80fd5b610c06610328565b610b95565b8380fd5b5080fd5b610c1b610f3e565b610b37565b9181601f8401121561000e5782359167ffffffffffffffff831161000e576020808501948460051b01011161000e57565b503461000e5760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e57610c8c600435610133565b610c97602435610133565b67ffffffffffffffff60443581811161000e57610cb8903690600401610c20565b505060643581811161000e57610cd2903690600401610c20565b505060843590811161000e57610cec903690600401610151565b50506040517fbc197c81000000000000000000000000000000000000000000000000000000008152602090f35b503461000e577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36016040811261000e57610d55600435610133565b60243567ffffffffffffffff811161000e57602091610d7a6000923690600401610151565b5050604051907fb4faba09000000000000000000000000000000000000000000000000000000008252600480830137369082335af1503d604051907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908181840101604052016020823e60005115610dfc576106c29060405191829182610994565b602081519101fd5b503461000e5760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e57610e3f600435610133565b610e4a602435610133565b60843567ffffffffffffffff811161000e57610e6a903690600401610151565b505060206040517ff23a6e61000000000000000000000000000000000000000000000000000000008152f35b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576106c2604051610ed581610379565b600581527f312e302e300000000000000000000000000000000000000000000000000000006020820152604051918291602083526020830190610925565b91610f309061092294928452606060208501526060840190610925565b916040818403910152610925565b506040513d6000823e3d90fd5b9081602091031261000e575190565b15610f6157565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f48617368206e6f7420617070726f7665640000000000000000000000000000006044820152fd5b9080516020809201209073ffffffffffffffffffffffffffffffffffffffff8160405193818501907f60b3cbf8b4a223d68d641b3b6ddf9a298e7f33710cf3d3a9d1146b5a6150fbca82526040860152604085526004606086018094819388831067ffffffffffffffff841117611150575b8260405288519020987ff698da25000000000000000000000000000000000000000000000000000000008352165afa928315611143575b60009361110a575b50506110de6109229293604051948593840190916042927f190000000000000000000000000000000000000000000000000000000000000083527f01000000000000000000000000000000000000000000000000000000000000006001840152600283015260228201520190565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282610395565b61092293506110de9160606111359285903d871161113b575b61112d8285610395565b010190610f4b565b92611070565b3d9150611123565b61114b610f3e565b611068565b611158610328565b611031565b9081602091031261000e57516109228161020d565b9183602094601f926111ad7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe095604088526040880190610925565b95878188039101528186528686013760008582860101520116010190565b51906111d682610133565b56fea26469706673582212200c7f59a02c129bf395dbda4b9c0051d8f1032660827701a34fb644deb57fe2c564736f6c634300080f0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "NAME";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "VERSION";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract Safe";
            readonly name: "safe";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "encodeMessageDataForSafe";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "getMessageHash";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract Safe";
            readonly name: "safe";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "getMessageHashForSafe";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getModules";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_dataHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "_signature";
            readonly type: "bytes";
        }];
        readonly name: "isValidSignature";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "_signature";
            readonly type: "bytes";
        }];
        readonly name: "isValidSignature";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC1155BatchReceived";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC1155Received";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC721Received";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "targetContract";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "calldataPayload";
            readonly type: "bytes";
        }];
        readonly name: "simulate";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "response";
            readonly type: "bytes";
        }];
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
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "tokensReceived";
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): CompatibilityFallbackHandlerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CompatibilityFallbackHandler;
}
export {};
