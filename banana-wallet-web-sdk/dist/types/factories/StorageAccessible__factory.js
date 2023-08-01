"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageAccessible__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "offset",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "length",
                type: "uint256",
            },
        ],
        name: "getStorageAt",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "targetContract",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "calldataPayload",
                type: "bytes",
            },
        ],
        name: "simulateAndRevert",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class StorageAccessible__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.StorageAccessible__factory = StorageAccessible__factory;
StorageAccessible__factory.abi = _abi;
//# sourceMappingURL=StorageAccessible__factory.js.map