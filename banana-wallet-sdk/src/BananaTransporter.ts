import { v4 } from "uuid";
import { BANANA_APP_URL } from "./Constants";
import { getUsernameFromSessionId, getMessageSignConfirmation, getTransactionSignConfirmation } from "./Controller";
import { bytes } from "./utils/solidity-types";
import { CookieObject, UserCredentialObject } from "./interfaces/Banana.interface";
import { BananaCookie } from "./BananaCookie";
import { TransactionRequest } from "@ethersproject/providers";
import { ethers } from "ethers";
import buildUrl from "./utils/urlBuilder";

export interface BananaTransprtProvider {
  getWalletName(): Promise<string>;
  getUserOpSignature(txn: TransactionRequest, minBalance: string, userOpHash: string): Promise<string>;
  getMessageSignature(message: string): Promise<string>;
}

export class BananaTransporter implements BananaTransprtProvider {
  cookieInstance: BananaCookie
  constructor() {
    this.cookieInstance = new BananaCookie();
  }

  getWalletName(): Promise<string> {
    const sessionId = v4();
    const finalUrl = buildUrl(BANANA_APP_URL, {
        path: ['connect', sessionId],
        queryParams: {
            dapp: window.location.hostname,
            isMobile: 'false',
        }
    });
    window.open(finalUrl, "_blank");

    return new Promise((resolve, reject) => {
      const intervalId = setInterval(async () => {
        const username = await getUsernameFromSessionId(sessionId);
        //@ts-ignore
        if (username) {
          clearInterval(intervalId);
          resolve(username);
        }
      }, 1000);
    });
  }

  getMessageSignature(message: string): Promise<string> {
    const sessionId = v4();
    const walletName = this.cookieInstance.getCookie('bananaUser');
    
    const finalUrl = buildUrl(BANANA_APP_URL, {
        path: ['sign', sessionId],
        queryParams: {
            message: message,
            walletname: walletName,
            isMobile: 'false'
        }
    });

    window.open(finalUrl, "_blank");

    return new Promise((resolve, reject) => {
      const intervalId = setInterval(async () => {
        const signature = await getMessageSignConfirmation(sessionId);
        //@ts-ignore
        if (signature) {
          clearInterval(intervalId);
          resolve(signature);
        }
      }, 1000);
    });
  }

  getUserOpSignature(txn: TransactionRequest, minBalance: string, userOpHash: string): Promise<string> {
    const sessionId = v4();
    const walletName = this.cookieInstance.getCookie('bananaUser');
    const walletMetaData: UserCredentialObject = this.cookieInstance.getCookie(walletName);

    const finalUrl = buildUrl(BANANA_APP_URL, {
        path: ['confirm', sessionId],
        queryParams: {
            to: txn.to,
            from: walletMetaData.walletAddress,
            value: txn.value?.toString(),
            gas: minBalance,
            userOpHash: userOpHash,
            walletname: walletName,
            isMobile: 'false'
        }
    });

    try {
        window.open(finalUrl, "_blank");
    } catch (err) {
        console.log('issue in opening ', err);
    }
    return new Promise((resolve, reject) => {
      const intervalId = setInterval(async () => {
        const signature = await getTransactionSignConfirmation(sessionId);
        //@ts-ignore
        if (signature) {
          clearInterval(intervalId);
          resolve(signature);
        }
      }, 1000);
    });
  }
}
