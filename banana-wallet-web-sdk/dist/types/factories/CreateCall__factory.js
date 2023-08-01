"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCall__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "newContract",
                type: "address",
            },
        ],
        name: "ContractCreation",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "deploymentData",
                type: "bytes",
            },
        ],
        name: "performCreate",
        outputs: [
            {
                internalType: "address",
                name: "newContract",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "deploymentData",
                type: "bytes",
            },
            {
                internalType: "bytes32",
                name: "salt",
                type: "bytes32",
            },
        ],
        name: "performCreate2",
        outputs: [
            {
                internalType: "address",
                name: "newContract",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608080604052346100165761032c908161001c8239f35b600080fdfe60806040526004361015610013575b600080fd5b6000803560e01c9081634847be6f1461003e5750634c8c9ea11461003657600080fd5b61000e6101e4565b346101145760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610114576024359067ffffffffffffffff8211610114576101106100903660048501610147565b805160443591602001600435f57f4db17dd5e4732fb6da34a148104a592783ca119a1e7bb8829eba6cbadef0b511602073ffffffffffffffffffffffffffffffffffffffff83166100e2811515610291565b604051908152a160405173ffffffffffffffffffffffffffffffffffffffff90911681529081906020820190565b0390f35b80fd5b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b81601f8201121561000e5780359067ffffffffffffffff928383116101d7575b604051937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81601f8701160116850190858210908211176101ca575b6040528284526020838301011161000e57816000926020809301838601378301015290565b6101d2610117565b6101a5565b6101df610117565b610167565b503461000e5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5760243567ffffffffffffffff811161000e5773ffffffffffffffffffffffffffffffffffffffff61024b6020923690600401610147565b8281519101600435f016610260811515610291565b7f4db17dd5e4732fb6da34a148104a592783ca119a1e7bb8829eba6cbadef0b51182604051838152a1604051908152f35b1561029857565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f436f756c64206e6f74206465706c6f7920636f6e7472616374000000000000006044820152fdfea26469706673582212206bb5d8c45a14b954ac01aca58b02d4dcac17174aaf27da42900fd32f1f5eb0e164736f6c634300080f0033";
const isSuperArgs = (xs) => xs.length > 1;
class CreateCall__factory extends ethers_1.ContractFactory {
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
exports.CreateCall__factory = CreateCall__factory;
CreateCall__factory.bytecode = _bytecode;
CreateCall__factory.abi = _abi;
//# sourceMappingURL=CreateCall__factory.js.map