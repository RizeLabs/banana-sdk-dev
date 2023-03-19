import * as base64url from './utils/base64url-arraybuffer'
import base64urll from 'base64url';
import UserOperation from './utils/userOperation'
import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';
import { AsnParser } from '@peculiar/asn1-schema';
import { ECDSASigValue } from '@peculiar/asn1-ecc';
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
        pubKeyCredParams: [
          { type: 'public-key', alg: -7   }
        ],
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
      return {
        q0: response.data.message.q0hexString, 
        q1: response.data.message.q1hexString, 
        encodedId: response.data.message.encodedId
      };
  }

export function toHash(data: any) {
  const u8bytes = ethers.utils.toUtf8Bytes(data.toString())
  const hash = ethers.utils.sha256(u8bytes)
  const hashArray = ethers.utils.arrayify(hash);
  const hashBuffer = Buffer.from(hashArray);
  return hashBuffer;
  // return crypto.createHash(algo).update(data).digest();
}
export var publicKeyCredentialToJSON: any = (pubKeyCred: any) => {
  if (pubKeyCred instanceof Array) {
    let arr = [];
    for (let i of pubKeyCred) arr.push(publicKeyCredentialToJSON(i));

    return arr;
  }

  if (pubKeyCred instanceof ArrayBuffer) {
    return base64url.encode(pubKeyCred);
  }

  if (pubKeyCred instanceof Object) {
    let obj: any = {};

    for (let key in pubKeyCred) {
      obj[key] = publicKeyCredentialToJSON(pubKeyCred[key]);
    }

    return obj;
  }

  return pubKeyCred;
};
export function shouldRemoveLeadingZero(bytes: Uint8Array): boolean {
  return bytes[0] === 0x0 && (bytes[1] & (1 << 7)) !== 0;
}

export const getSignature = async (publicKeyCredential: any) => {
  const publicKeyCredentialParsed =
    publicKeyCredentialToJSON(publicKeyCredential);

  const parsedSignature = AsnParser.parse(
    base64urll.toBuffer(publicKeyCredentialParsed.response.signature),
    ECDSASigValue
  );

  let rBytes = new Uint8Array(parsedSignature.r);
  let sBytes = new Uint8Array(parsedSignature.s);

  if (shouldRemoveLeadingZero(rBytes)) {
    rBytes = rBytes.slice(1);
  }

  if (shouldRemoveLeadingZero(sBytes)) {
    sBytes = sBytes.slice(1);
  }

  const signature = [
    '0x' + Buffer.from(rBytes).toString('hex'),
    '0x' + Buffer.from(sBytes).toString('hex'),
  ];
  return signature;
};

export const verifyFingerprint = async (userOp: UserOperation, reqId: string, encodedId: string) =>  {
      const decodedId = base64url.decode(encodedId)
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
        challenge: Uint8Array.from(reqId, (c) => c.charCodeAt(0)).buffer,
        // actualChallenge,
        // Set the required authentication factors
        userVerification: 'required',
       }, });
      if (credential === null) {
        // alert('Failed to get credential')
        return Promise.reject(new Error('Failed to get credential'))
      }
      //@ts-ignore
      const response = credential.response;

      const clientDataJSON = Buffer.from(
        response.clientDataJSON
      );

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
      const value = clientDataJSON.toString('hex').slice(72, 248);
      const clientDataJsonRequestId = ethers.utils.keccak256("0x" + value);
      
    userOp.signature = signature.data.message.finalSignature + clientDataJsonRequestId.slice(2);
    return { newUserOp: userOp, process: signature.data.message.processStatus };
  }
