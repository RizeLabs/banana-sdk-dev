import { expect } from "chai";
import { BananaSigner } from "../BananaSigner";
import { PublicKey} from "../interfaces/Banana.interface"
import {JsonRpcProvider} from "@ethersproject/providers"
import { DUMMY_Q0, DUMMY_Q1, JUNK_ID, DUMMY_URL} from "./BananaConstants";
import { Logger } from "@ethersproject/logger";
import { ethers } from "ethers";
import * as sinon from 'sinon';
import UserOperation from "../utils/userOperation";
import * as WebAuthnContext from "../WebAuthnContext";

describe("BananaSigner", () => {
    let bananaSigner: BananaSigner
    let publicKey: PublicKey
    let rpcProvider: JsonRpcProvider
    let verifyFingerprintStub: sinon.SinonStub;

    const setupBananaSigner = () =>{
        publicKey = {q0: DUMMY_Q0, q1: DUMMY_Q1, encodedId: JUNK_ID}
        rpcProvider = new JsonRpcProvider(DUMMY_URL)
        bananaSigner = new BananaSigner(rpcProvider, publicKey)
    }

    const setupMockMethods = () => {
        setupMockVerifyFingerPrint()
    }

    const setupMockVerifyFingerPrint = () =>{
        verifyFingerprintStub = sinon.stub();
        (WebAuthnContext.verifyFingerprint as sinon.SinonStub)= verifyFingerprintStub;
    }

    describe("connect", () => {
        beforeEach(()=>{
            setupBananaSigner()
        })

        it("reverts when called", () =>{
            expect(bananaSigner.connect).to.be.throw("cannot alter JSON-RPC Signer connection");
            expect(bananaSigner.connect).to.be.throw(Logger.errors.UNSUPPORTED_OPERATION);
        })  
    })

    describe("getAddress", () => {
        beforeEach(()=>{
            setupBananaSigner()
        })

        it("computes correct address based on public keys of signer", async () =>{
            const uncompressedPublicKey = `0x04${publicKey.q0.slice(2)}${publicKey.q1.slice(2)}`;
            const predictedAddress = ethers.utils.computeAddress(uncompressedPublicKey)

            const returnedAddress = await bananaSigner.getAddress()

            expect(returnedAddress).to.be.eq(predictedAddress)
        })
    })

    describe("signTransaction", () => {
        beforeEach(()=>{
            setupBananaSigner()
        })

        it("reverts when called", () =>{
            expect(bananaSigner.signTransaction).to.be.throw("signing transactions is unsupported");
            expect(bananaSigner.signTransaction).to.be.throw(Logger.errors.UNSUPPORTED_OPERATION);
        })  
    })

    describe("signMessage", () => {
        beforeEach(()=>{
            setupBananaSigner()
        })

        it("reverts when called", () =>{
            expect(bananaSigner.signMessage).to.be.throw("signing message is unsupported");
            expect(bananaSigner.signMessage).to.be.throw(Logger.errors.UNSUPPORTED_OPERATION);
        })  
    })

    describe('signUserOp', function() {
        beforeEach(function() {
            setupBananaSigner()
            setupMockMethods()
        });

        afterEach(function() {
            verifyFingerprintStub.reset();
        });
        
      
        it('calls verifyFingerprint with correct parameters', async function() {
          const userOp = {} as UserOperation;
          const reqId = 'requestId';
          const encodedId = 'encodedId';
          verifyFingerprintStub.resolves({ newUserOp: userOp, process: true });
      
            await bananaSigner.signUserOp(userOp, reqId, encodedId);
        
            expect(verifyFingerprintStub.firstCall.args[0]).to.be.equal(userOp);
            expect(verifyFingerprintStub.firstCall.args[1]).to.be.equal(reqId);
            expect(verifyFingerprintStub.firstCall.args[2]).to.be.equal(encodedId);
          
        });
      
        it('returns signedUserOp', async function() {
            const userOp = {} as UserOperation;
            const reqId = 'requestId';
            const encodedId = 'encodedId';
            const signedUserOp = { newUserOp: userOp, process: true };
            verifyFingerprintStub.resolves(signedUserOp);
        
            const result = await bananaSigner.signUserOp(userOp, reqId, encodedId);
        
            expect(result).to.deep.equal(signedUserOp);
        });

        it('reverts if verifyFingerPrint returns error', async function() {
            const userOp = {} as UserOperation;
            const reqId = 'requestId';
            const encodedId = 'encodedId';
            const signedUserOp = { newUserOp: userOp, process: true };
            const error = new Error('Verification failed');
            verifyFingerprintStub.resolves(error);

            const result = await bananaSigner.signUserOp(userOp, reqId, encodedId);

            expect(result).to.equal(error);
        });
    })
})