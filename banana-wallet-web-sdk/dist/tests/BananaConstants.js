"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JUNK_USER_OP = exports.JUNK_CREDENTIALS = exports.JUNK_HASH = exports.DUMMY_URL = exports.JUNK_USERNAME = exports.JUNK_ID = exports.HAS_INITCODE = exports.JUNK_ADDRESS = exports.ZERO_ADDRESS = exports.DUMMY_Q1 = exports.DUMMY_Q0 = void 0;
const ethers_1 = require("ethers");
exports.DUMMY_Q0 = "0x22d968b22fc4107a690af417d12d50fda02c3bb86e01073f967b7c51732c5d51";
exports.DUMMY_Q1 = "0xab97a2dfeca530708da4df5ba0fb22189fcbb1c4b1e6b5aa277ef7ba43c2a929";
exports.ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
exports.JUNK_ADDRESS = "0x0000000000000000000000000000000000000123";
exports.HAS_INITCODE = false;
exports.JUNK_ID = "C8Oef8N6pBCBGNGYwcXyWqg7dO_K__WTomiFWrnel_c";
exports.JUNK_USERNAME = "dummyUserName";
exports.DUMMY_URL = "'https://eth-goerli.g.alchemy.com/v2/dummy_alchemy_key'";
exports.JUNK_HASH = ethers_1.ethers.utils.keccak256('0x12');
exports.JUNK_CREDENTIALS = { q0: exports.DUMMY_Q0, q1: exports.DUMMY_Q1, walletAddress: exports.JUNK_ADDRESS, initcode: exports.HAS_INITCODE, encodedId: exports.JUNK_ID };
exports.JUNK_USER_OP = createJunkUserOP();
function createJunkUserOP() {
    let junkUserOp;
    junkUserOp = { sender: exports.JUNK_ADDRESS,
        nonce: 0,
        initCode: "0x",
        callData: "0x",
        callGasLimit: 100,
        verificationGasLimit: 100,
        preVerificationGas: 100,
        maxFeePerGas: 1.5,
        maxPriorityFeePerGas: 20,
        paymasterAndData: '0x',
        signature: '0x' };
    return junkUserOp;
}
// function createJunkPublicKeyCredentials() {
//     let junkPublicKeyCredentials: C
// }
//# sourceMappingURL=BananaConstants.js.map