import * as base64url from './utils/base64url-arraybuffer'
import UserOperation from './utils/userOperation'
import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';
import { REGISTRATION_LAMBDA_URL, VERIFICATION_LAMBDA_URL } from './routes'
import { arrayify } from 'ethers/lib/utils'
import { ethers } from 'ethers'

export interface IWebAuthnContext {
  registerFingerprint: () => Promise<PublicKeyCredential>
  verifyFingerprint: () => Promise<SignatureResponse>
}
export interface SignatureResponse{
  r:string,
  s:string,
  finalMessage:string
}

export function getUserOp(reqId: string) {
  const msg1 = Buffer.concat([
    Buffer.from('\x19Ethereum Signed Message:\n32', 'ascii'),
    Buffer.from(arrayify(reqId)),
  ])
  return msg1;
}

export const registerFingerprint = async () => {
      const uuid = uuidv4()
      const chanllenge = uuidv4()
      const isPlatformSupported = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
      const authenticationSupport = isPlatformSupported ? 'platform': 'cross-platform';
      const publicKeyParams = {
        challenge: Uint8Array.from(chanllenge, c => c.charCodeAt(0)),
        rp: {
          name: 'Banana Smart Wallet',
        },
        user: {
          id: Uint8Array.from(uuid, c => c.charCodeAt(0)),
          name: 'bananawallet',
          displayName: 'Banana Smart Wallet',
        },
        pubKeyCredParams: [{ 'type': 'public-key', 'alg': -7   },
                          { 'type': 'public-key', 'alg': -35  },
                          { 'type': 'public-key', 'alg': -36  },
                          { 'type': 'public-key', 'alg': -257 },
                          { 'type': 'public-key', 'alg': -258 },
                          { 'type': 'public-key', 'alg': -259 },
                          { 'type': 'public-key', 'alg': -37  },
                          { 'type': 'public-key', 'alg': -38  },
                          { 'type': 'public-key', 'alg': -39  },
                          { 'type': 'public-key', 'alg': -8   }],
        authenticatorSelection: {
          authenticatorAttachment: authenticationSupport,
          userVerification: 'required',
        },
        timeout: 60000,
        attestation: 'none',
      } as PublicKeyCredentialCreationOptions;

      let publicKeyCredential;
      try{
        publicKeyCredential = await navigator.credentials.create({publicKey: publicKeyParams })        
      }
      catch(err){
        console.log("algo not supported, trying again", err)
        // @ts-ignore
        publicKeyParams.authenticatorSelection.authenticatorAttachment = 'cross-platform'
        console.log("new public key params", publicKeyParams)
        publicKeyCredential = await navigator.credentials.create({publicKey: publicKeyParams })
      }

      if (publicKeyCredential === null) {
        // alert('Failed to get credential')
        return Promise.reject(new Error('Failed to create credential'))
      }


      const response = await Axios({
        url: REGISTRATION_LAMBDA_URL,
        method: 'post',
        params: {
              "aObject": JSON.stringify(Array.from(new Uint8Array((publicKeyCredential as any).response.attestationObject))),
              //@ts-ignore
              "rawId": JSON.stringify(Array.from(new Uint8Array(publicKeyCredential?.rawId)))
        }
      });
      console.log("Registration Lambda:", response);
      return {
        q0: response.data.message.q0hexString, 
        q1: response.data.message.q1hexString, 
        encodedId: response.data.message.encodedId
      };
  }

export const verifyFingerprint = async (userOp: UserOperation, reqId: string, encodedId: string) =>  {
      console.log("Encoded Id:", encodedId)
      // decode the rawID
      const decodedId = base64url.decode(encodedId)
      console.log("Decoded Id", decodedId)
      let actualChallenge;
      try {
      actualChallenge = getUserOp(reqId)
      } catch (err) {
        return Promise.reject(new Error("Unable to get userOP"))
      }

      const credential = await navigator.credentials.get({ publicKey: {
        // Set the WebAuthn credential to use for the assertion
        allowCredentials: [{
          id: decodedId,
          type: 'public-key',
        }],
        challenge: actualChallenge,
        // Set the required authentication factors
        userVerification: 'required',
       }, });
      if (credential === null) {
        // alert('Failed to get credential')
        return Promise.reject(new Error('Failed to get credential'))
      }
      //@ts-ignore
      const response = credential.response;
      const signature = await Axios({
        url: VERIFICATION_LAMBDA_URL,
        method: 'post',
        params: 
        {
              "authDataRaw": JSON.stringify(Array.from(new Uint8Array(response.authenticatorData))),
              "cData": JSON.stringify(Array.from(new Uint8Array(response.clientDataJSON))),
              "signature": JSON.stringify(Array.from(new Uint8Array(response.signature)))
        }
        ,
      })
      
    userOp.signature = signature.data.message.finalSignature;
    return { newUserOp: userOp, process: signature.data.message.processStatus };
  }
