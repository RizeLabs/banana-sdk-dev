"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKeccakHash = void 0;
const ethers_1 = require("ethers");
const getKeccakHash = (key) => {
    const hash = ethers_1.ethers.utils.keccak256(ethers_1.ethers.utils.toUtf8Bytes(key));
    return hash;
};
exports.getKeccakHash = getKeccakHash;
//# sourceMappingURL=getKeccakHash.js.map