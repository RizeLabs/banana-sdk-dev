import * as base64url from "./utils/base64url-arraybuffer";
import UserOperation from "./utils/userOperation";
import { v4 as uuidv4 } from "uuid";
import Axios from "axios";
import { REGISTRATION_LAMBDA_URL, VERIFICATION_LAMBDA_URL } from "./routes";
import { arrayify } from "ethers/lib/utils";
import { ethers } from "ethers";

export interface IWebAuthnContext {
  registerFingerprint: () => Promise<PublicKeyCredential>;
  verifyFingerprint: () => Promise<SignatureResponse>;
}
export interface SignatureResponse {
  r: string;
  s: string;
  finalMessage: string;
}

export function getUserOp(reqId: string) {
  const msg1 = Buffer.concat([
    Buffer.from("\x19Ethereum Signed Message:\n32", "ascii"),
    Buffer.from(arrayify(reqId)),
  ]);
  return msg1;
}

export const registerFingerprint = async () => {
  const uuid = uuidv4();
  const chanllenge = uuidv4();
  const isPlatformSupported =
    await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
  const authenticationSupport = isPlatformSupported
    ? "platform"
    : "cross-platform";
  const publicKeyParams = {
    challenge: Uint8Array.from(chanllenge, (c) => c.charCodeAt(0)),
    rp: {
      name: "Banana Smart Wallet",
    },
    user: {
      id: Uint8Array.from(uuid, (c) => c.charCodeAt(0)),
      name: "bananawallet",
      displayName: "Banana Smart Wallet",
    },
    pubKeyCredParams: [{ type: "public-key", alg: -7 }],
    authenticatorSelection: {
      authenticatorAttachment: authenticationSupport,
      userVerification: "required",
    },
    timeout: 60000,
    attestation: "none",
  } as PublicKeyCredentialCreationOptions;

  let publicKeyCredential;
  try {
    publicKeyCredential = await navigator.credentials.create({
      publicKey: publicKeyParams,
    });
  } catch (err) {
    console.log("algo not supported, trying again", err);
    // @ts-ignore
    publicKeyParams.authenticatorSelection.authenticatorAttachment =
      "cross-platform";
    publicKeyCredential = await navigator.credentials.create({
      publicKey: publicKeyParams,
    });
  }

  if (publicKeyCredential === null) {
    // alert('Failed to get credential')
    return Promise.reject(new Error("Failed to create credential"));
  }

  const response = await Axios({
    url: REGISTRATION_LAMBDA_URL,
    method: "post",
    params: {
      aObject: JSON.stringify(
        Array.from(
          new Uint8Array(
            (publicKeyCredential as any).response.attestationObject
          )
        )
      ),

      rawId: JSON.stringify(
        //@ts-ignore
        Array.from(new Uint8Array(publicKeyCredential?.rawId))
      ),
    },
  });
  return {
    q0: response.data.message.q0hexString,
    q1: response.data.message.q1hexString,
    encodedId: response.data.message.encodedId,
  };
};

export const verifyFingerprint = async (
  userOp: UserOperation,
  reqId: string,
  encodedId: string
) => {
  const decodedId = base64url.decode(encodedId);
  const credential = await navigator.credentials.get({
    publicKey: {
      // Set the WebAuthn credential to use for the assertion
      allowCredentials: [
        {
          id: decodedId,
          type: "public-key",
        },
      ],
      challenge: Uint8Array.from(reqId, (c) => c.charCodeAt(0)).buffer,
      // Set the required authentication factors
      userVerification: "required",
    },
  });
  if (credential === null) {
    // alert('Failed to get credential')
    return Promise.reject(new Error("Failed to get credential"));
  }
  //@ts-ignore
  const response = credential.response;

  const clientDataJSON = Buffer.from(response.clientDataJSON);

  const signature = await Axios({
    url: VERIFICATION_LAMBDA_URL,
    method: "post",
    params: {
      authDataRaw: JSON.stringify(
        Array.from(new Uint8Array(response.authenticatorData))
      ),
      cData: JSON.stringify(
        Array.from(new Uint8Array(response.clientDataJSON))
      ),
      signature: JSON.stringify(Array.from(new Uint8Array(response.signature))),
    },
  });
  const value = clientDataJSON.toString("hex").slice(72, 248);
  const clientDataJsonRequestId = ethers.utils.keccak256("0x" + value);
  userOp.signature =
    signature.data.message.finalSignature + clientDataJsonRequestId.slice(2);
  return {
    newUserOp: userOp,
    process: signature.data.message.processStatus,
  };
};

export const signMessageViaPassKeys = async (
  message: string,
  encodedId: string
) => {
  const decodedId = base64url.decode(encodedId);
  const credential = await navigator.credentials.get({
    publicKey: {
      // Set the WebAuthn credential to use for the assertion
      allowCredentials: [
        {
          id: decodedId,
          type: "public-key",
        },
      ],
      challenge: Uint8Array.from(message, (c) => c.charCodeAt(0)).buffer,
      // Set the required authentication factors
      userVerification: "required",
    },
  });
  if (credential === null) {
    // alert('Failed to get credential')
    return Promise.reject(new Error("Failed to get credential"));
  }
  //@ts-ignore
  const response = credential.response;

  const clientDataJSON = Buffer.from(response.clientDataJSON);

  let signatureValid = false;
  let signature;
  while(!signatureValid) {
    signature = await Axios({
      url: VERIFICATION_LAMBDA_URL,
      method: "post",
      params: {
        authDataRaw: JSON.stringify(
          Array.from(new Uint8Array(response.authenticatorData))
        ),
        cData: JSON.stringify(
          Array.from(new Uint8Array(response.clientDataJSON))
        ),
        signature: JSON.stringify(Array.from(new Uint8Array(response.signature))),
      },
    });

    if(signature.data.message.processStatus === "success") {
      signatureValid = true;
    }
  }

  const value = clientDataJSON.toString("hex").slice(72, 248);
  const clientDataJsonRequestId = ethers.utils.keccak256("0x" + value);

  //@ts-ignore
  const finalSignature = signature.data.message.finalSignature + clientDataJsonRequestId.slice(2);
  return {
    signature: finalSignature
  };
};
