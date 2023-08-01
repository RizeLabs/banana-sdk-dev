import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { TokenCallbackHandler, TokenCallbackHandlerInterface } from "../TokenCallbackHandler";
type TokenCallbackHandlerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TokenCallbackHandler__factory extends ContractFactory {
    constructor(...args: TokenCallbackHandlerConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TokenCallbackHandler>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TokenCallbackHandler;
    connect(signer: Signer): TokenCallbackHandler__factory;
    static readonly bytecode = "0x608080604052346100165761067e908161001c8239f35b600080fdfe60806040908082526004918236101561001757600080fd5b600091823560e01c90816223de291461048057816301ffc9a71461038e57508063150b7a0214610300578063a3f4df7e1461027b578063bc197c81146101ba578063f23a6e61146101295763ffa1ad741461007157600080fd5b3461012557817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610125578051918183019083821067ffffffffffffffff8311176100f957506100f593508152600582527f312e302e30000000000000000000000000000000000000000000000000000000602083015251918291826105a1565b0390f35b806041867f4e487b71000000000000000000000000000000000000000000000000000000006024945252fd5b5080fd5b5090346101b75760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101b757610162610528565b5061016b610550565b506084359067ffffffffffffffff82116101b7575060209261018f91369101610573565b5050517ff23a6e61000000000000000000000000000000000000000000000000000000008152f35b80fd5b5090346101b75760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101b7576101f3610528565b506101fc610550565b5067ffffffffffffffff906044358281116101255761021e9036908601610617565b5050606435828111610125576102379036908601610617565b50506084359182116101b7575060209261025391369101610573565b5050517fbc197c81000000000000000000000000000000000000000000000000000000008152f35b503461012557817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610125578051918183019083821067ffffffffffffffff8311176100f957506100f593508152601882527f44656661756c742043616c6c6261636b2048616e646c65720000000000000000602083015251918291826105a1565b5090346101b75760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101b757610339610528565b50610342610550565b506064359067ffffffffffffffff82116101b7575060209261036691369101610573565b5050517f150b7a02000000000000000000000000000000000000000000000000000000008152f35b8390853461047c5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261047c57357fffffffff00000000000000000000000000000000000000000000000000000000811680910361047c57602092507f4e2312e0000000000000000000000000000000000000000000000000000000008114908115610452575b8115610428575b5015158152f35b7f01ffc9a70000000000000000000000000000000000000000000000000000000091501483610421565b7f150b7a02000000000000000000000000000000000000000000000000000000008114915061041a565b8280fd5b8390853461047c5760c07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261047c576104ba610528565b506104c3610550565b5060443573ffffffffffffffffffffffffffffffffffffffff81160361047c5767ffffffffffffffff90608435828111610524576105049036908301610573565b505060a4359182116105205761051c91369101610573565b5050f35b8380fd5b8480fd5b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361054b57565b600080fd5b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361054b57565b9181601f8401121561054b5782359167ffffffffffffffff831161054b576020838186019501011161054b57565b919091602080825283519081818401526000945b828610610601575050601f817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09260409596116105f4575b0116010190565b60008582860101526105ed565b85810182015184870160400152948101946105b5565b9181601f8401121561054b5782359167ffffffffffffffff831161054b576020808501948460051b01011161054b5756fea2646970667358221220d91046f734051b3f6bc394f39a995391d3425159d4b9de11eefa634b8aa9fa3764736f6c634300080f0033";
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
    static createInterface(): TokenCallbackHandlerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TokenCallbackHandler;
}
export {};
