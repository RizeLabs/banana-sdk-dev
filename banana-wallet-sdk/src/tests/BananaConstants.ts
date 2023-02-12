import { ethers } from 'ethers'
import UserOperation from '../utils/userOperation'
export const DUMMY_Q0 = "0x22d968b22fc4107a690af417d12d50fda02c3bb86e01073f967b7c51732c5d51"
export const DUMMY_Q1 = "0xab97a2dfeca530708da4df5ba0fb22189fcbb1c4b1e6b5aa277ef7ba43c2a929"
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000"
export const JUNK_ADDRESS = "0x0000000000000000000000000000000000000123"
export const HAS_INITCODE = false
export const JUNK_ID = "C8Oef8N6pBCBGNGYwcXyWqg7dO_K__WTomiFWrnel_c"
export const JUNK_USERNAME = "dummyUserName"
export const DUMMY_URL = "'https://eth-goerli.g.alchemy.com/v2/dummy_alchemy_key'"
export const JUNK_HASH = ethers.utils.keccak256('0x12')
export const JUNK_CREDENTIALS = {q0: DUMMY_Q0, q1: DUMMY_Q1, walletAddress: JUNK_ADDRESS, initcode: HAS_INITCODE, encodedId: JUNK_ID}

export const JUNK_USER_OP = createJunkUserOP()

function createJunkUserOP() {
    let junkUserOp: UserOperation
    junkUserOp = {sender: JUNK_ADDRESS,
        nonce: 0,
        initCode: "0x",
        callData: "0x",
        callGasLimit: 100,
        verificationGasLimit: 100,
        preVerificationGas: 100,
        maxFeePerGas: 1.5,
        maxPriorityFeePerGas: 20,
        paymasterAndData: '0x',
        signature: '0x'}
    return junkUserOp
}

// function createJunkPublicKeyCredentials() {
//     let junkPublicKeyCredentials: C
// }
