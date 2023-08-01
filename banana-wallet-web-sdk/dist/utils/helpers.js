"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAddressFromPublicKey = exports.compressPublicKey = exports.preformatGetAssertReq = exports.preformatMakeCredReq = exports.publicKeyCredentialToJSON = exports.generateRandomBuffer = exports.parseAuthData = exports.bufToHex = exports.readBE32 = exports.readBE16 = exports.getEndian = exports.sha256Buffer = exports.sha256 = exports.bufferToString = void 0;
const base64url = require("./base64url-arraybuffer");
const ethers_1 = require("ethers");
var bufferToString = (buff) => {
    var enc = new TextDecoder(); // always utf-8
    return enc.decode(buff);
};
exports.bufferToString = bufferToString;
var sha256 = async (data) => {
    const hash = await window.crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hash));
    const digest = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return '0x' + digest;
};
exports.sha256 = sha256;
var sha256Buffer = async (data) => {
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
    return hashBuffer;
};
exports.sha256Buffer = sha256Buffer;
var getEndian = () => {
    let arrayBuffer = new ArrayBuffer(2);
    let uint8Array = new Uint8Array(arrayBuffer);
    let uint16array = new Uint16Array(arrayBuffer);
    uint8Array[0] = 0xaa; // set first byte
    uint8Array[1] = 0xbb; // set second byte
    if (uint16array[0] === 0xbbaa)
        return 'little';
    else
        return 'big';
};
exports.getEndian = getEndian;
var readBE16 = (buffer) => {
    if (buffer.length !== 2)
        throw new Error('Only 2byte buffer allowed!');
    if ((0, exports.getEndian)() !== 'big')
        buffer = buffer.reverse();
    return new Uint16Array(buffer.buffer)[0];
};
exports.readBE16 = readBE16;
var readBE32 = (buffer) => {
    if (buffer.length !== 4)
        throw new Error('Only 4byte buffers allowed!');
    if ((0, exports.getEndian)() !== 'big')
        buffer = buffer.reverse();
    return new Uint32Array(buffer.buffer)[0];
};
exports.readBE32 = readBE32;
var bufToHex = (buffer) => {
    // buffer is an ArrayBuffer
    return Array.prototype.map
        .call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2))
        .join('');
};
exports.bufToHex = bufToHex;
// https://gist.github.com/herrjemand/dbeb2c2b76362052e5268224660b6fbc
var parseAuthData = (buffer) => {
    console.log(buffer);
    let rpIdHash = buffer.slice(0, 32);
    buffer = buffer.slice(32);
    let flagsBuf = buffer.slice(0, 1);
    buffer = buffer.slice(1);
    let flagsInt = flagsBuf[0];
    let flags = {
        up: !!(flagsInt & 0x01),
        uv: !!(flagsInt & 0x04),
        at: !!(flagsInt & 0x40),
        ed: !!(flagsInt & 0x80),
        flagsInt,
    };
    let counterBuf = buffer.slice(0, 4);
    buffer = buffer.slice(4);
    let counter = (0, exports.readBE32)(counterBuf);
    let aaguid = undefined;
    let credID = undefined;
    let COSEPublicKey = undefined;
    if (flags.at) {
        aaguid = buffer.slice(0, 16);
        buffer = buffer.slice(16);
        let credIDLenBuf = buffer.slice(0, 2);
        buffer = buffer.slice(2);
        let credIDLen = (0, exports.readBE16)(credIDLenBuf);
        credID = buffer.slice(0, credIDLen);
        buffer = buffer.slice(credIDLen);
        COSEPublicKey = buffer;
    }
    return {
        rpIdHash,
        flagsBuf,
        flags,
        counter,
        counterBuf,
        aaguid,
        credID,
        COSEPublicKey,
    };
};
exports.parseAuthData = parseAuthData;
var generateRandomBuffer = (length) => {
    if (!length)
        length = 32;
    var randomBuff = new Uint8Array(length);
    window.crypto.getRandomValues(randomBuff);
    return randomBuff;
};
exports.generateRandomBuffer = generateRandomBuffer;
var publicKeyCredentialToJSON = (pubKeyCred) => {
    if (pubKeyCred instanceof Array) {
        let arr = [];
        for (let i of pubKeyCred)
            arr.push((0, exports.publicKeyCredentialToJSON)(i));
        return arr;
    }
    if (pubKeyCred instanceof ArrayBuffer) {
        return base64url.encode(pubKeyCred);
    }
    if (pubKeyCred instanceof Object) {
        let obj = {};
        for (let key in pubKeyCred) {
            obj[key] = (0, exports.publicKeyCredentialToJSON)(pubKeyCred[key]);
        }
        return obj;
    }
    return pubKeyCred;
};
exports.publicKeyCredentialToJSON = publicKeyCredentialToJSON;
var preformatMakeCredReq = (makeCredReq) => {
    makeCredReq.challenge = base64url.decode(makeCredReq.challenge);
    makeCredReq.user.id = base64url.decode(makeCredReq.user.id);
    return makeCredReq;
};
exports.preformatMakeCredReq = preformatMakeCredReq;
var preformatGetAssertReq = (getAssert) => {
    getAssert.challenge = base64url.decode(getAssert.challenge);
    if (getAssert.allowCredentials) {
        for (let allowCred of getAssert.allowCredentials) {
            allowCred.id = base64url.decode(allowCred.id);
        }
    }
    return getAssert;
};
exports.preformatGetAssertReq = preformatGetAssertReq;
function compressPublicKey(q0, q1) {
    const odd = q1.mod(2);
    const prefix = odd ? '03' : '02';
    const xHex = q0.toHexString().slice(2);
    return prefix + xHex;
}
exports.compressPublicKey = compressPublicKey;
function getAddressFromPublicKey(publicKey) {
    const ethereumAddress = ethers_1.ethers.utils.computeAddress(publicKey);
    return ethereumAddress;
}
exports.getAddressFromPublicKey = getAddressFromPublicKey;
//# sourceMappingURL=helpers.js.map