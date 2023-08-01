"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NativeCurrencyPaymentFallback__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "SafeReceived",
        type: "event",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
class NativeCurrencyPaymentFallback__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.NativeCurrencyPaymentFallback__factory = NativeCurrencyPaymentFallback__factory;
NativeCurrencyPaymentFallback__factory.abi = _abi;
//# sourceMappingURL=NativeCurrencyPaymentFallback__factory.js.map