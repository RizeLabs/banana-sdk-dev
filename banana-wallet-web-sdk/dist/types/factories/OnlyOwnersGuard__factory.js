"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlyOwnersGuard__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        stateMutability: "nonpayable",
        type: "fallback",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        name: "checkAfterExecution",
        outputs: [],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
            {
                internalType: "enum Enum.Operation",
                name: "",
                type: "uint8",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address payable",
                name: "",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
            {
                internalType: "address",
                name: "msgSender",
                type: "address",
            },
        ],
        name: "checkTransaction",
        outputs: [],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "safe",
        outputs: [
            {
                internalType: "contract ISafe",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x60808060405234610016576105e9908161001c8239f35b600080fdfe608080604052600436101561001c575b503461001757005b600080fd5b600090813560e01c90816301ffc9a7146101ba57508063186f03541461016957806375f0bb52146100935763932713680361000f57346100905760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610090576024358015150361009057604051f35b80fd5b5034610090576101607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100905773ffffffffffffffffffffffffffffffffffffffff6004358181160361015d5767ffffffffffffffff604435818111610165576101059036906004016102e8565b50600260643510156101615760e435828116036101615761010435828116036101615761012435908111610161576101419036906004016102e8565b5061014435908116810361015d576101589061035d565b604051f35b5080fd5b8280fd5b8380fd5b503461009057807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100905773ffffffffffffffffffffffffffffffffffffffff6020915416604051908152f35b90503461015d5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261015d576004357fffffffff00000000000000000000000000000000000000000000000000000000811680910361016157602092507fe6d7a83a00000000000000000000000000000000000000000000000000000000811490811561024e575b5015158152f35b7f01ffc9a70000000000000000000000000000000000000000000000000000000091501438610247565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176102b957604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b81601f820112156100175780359067ffffffffffffffff82116102b9576040519261033b60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601160185610278565b8284526020838301011161001757816000926020809301838601378301015290565b90604051917fa0e67e2b00000000000000000000000000000000000000000000000000000000835260009160049183858481335afa9485156105a85784956104bc575b50835b85518110156104385773ffffffffffffffffffffffffffffffffffffffff8060208360051b890101511690831614610430577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610404576001016103a3565b6024856011867f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b505092505050565b6084846020604051917f08c379a0000000000000000000000000000000000000000000000000000000008352820152602160248201527f6d73672073656e646572206973206e6f7420616c6c6f77656420746f2065786560448201527f63000000000000000000000000000000000000000000000000000000000000006064820152fd5b9094503d8085833e6104ce8183610278565b810160209081838203126105a457825167ffffffffffffffff93848211610570570181601f820112156105a0578051938411610574578360051b906040519461051985840187610278565b85528380860192820101928311610570578301905b828210610540575050505093386103a0565b815173ffffffffffffffffffffffffffffffffffffffff8116810361056c57815290830190830161052e565b8880fd5b8780fd5b6024876041887f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b8680fd5b8580fd5b6040513d86823e3d90fdfea26469706673582212205fbb2d0b24d42c5dcd1a04c3fc91a4f04f3a2500a961cc0c25d12148a32372ad64736f6c634300080f0033";
const isSuperArgs = (xs) => xs.length > 1;
class OnlyOwnersGuard__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.OnlyOwnersGuard__factory = OnlyOwnersGuard__factory;
OnlyOwnersGuard__factory.bytecode = _bytecode;
OnlyOwnersGuard__factory.abi = _abi;
//# sourceMappingURL=OnlyOwnersGuard__factory.js.map