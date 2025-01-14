"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiSendCallOnly__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes",
                name: "transactions",
                type: "bytes",
            },
        ],
        name: "multiSend",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
const _bytecode = "0x60808060405234610016576101e6908161001c8239f35b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c638d80ff0a1461002857600080fd5b60207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010e5760043567ffffffffffffffff80821161010a573660238301121561010a57828260040135928284116100fd575b604051927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81601f8801160116840190848210908211176100f0575b60405283835236602485830101116100ec57836100e7946024602093018386013783010152610141565b604051f35b5080fd5b6100f8610111565b6100bd565b610105610111565b61007f565b8280fd5b80fd5b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b80519060205b82811061015357505050565b808201805160f81c600182015160601c91601581015191603582015180946000948593948560001461019f57505050505060011461019a575b1561019a5701605501610147565b600080fd5b605591929394955001915af161018c56fea2646970667358221220990a2e768835a5cea91335f503b2e86f7cb784850545194b2b8e4187da03872b64736f6c634300080f0033";
const isSuperArgs = (xs) => xs.length > 1;
class MultiSendCallOnly__factory extends ethers_1.ContractFactory {
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
exports.MultiSendCallOnly__factory = MultiSendCallOnly__factory;
MultiSendCallOnly__factory.bytecode = _bytecode;
MultiSendCallOnly__factory.abi = _abi;
//# sourceMappingURL=MultiSendCallOnly__factory.js.map