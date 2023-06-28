import { v4 } from "uuid";
import { BANANA_APP_URL } from "./constants/Constants";
import { getUsernameFromSessionId, getMessageSignConfirmation, getTransactionSignConfirmation } from "./Controller";
import { UserCredentialObject } from "./interfaces/Banana.interface";
import { BananaCookie } from "./BananaCookie";
import { TransactionRequest } from "@ethersproject/providers";
import buildUrl from "./utils/urlBuilder";

export interface BananaTransportProvider {
  getWalletName(): Promise<string>;
  getUserOpSignature(txn: TransactionRequest, minBalance: string, userOpHash: string, chain: string): Promise<string>;
  getMessageSignature(message: string): Promise<string>;
}

export class BananaTransporter implements BananaTransportProvider {
  cookieInstance: BananaCookie
  constructor() {
    this.cookieInstance = new BananaCookie();
  }

  async getWalletName(): Promise<string> {
    const sessionId = v4();
    const finalUrl = buildUrl(BANANA_APP_URL, {
        path: ['wallet', sessionId],
        queryParams: {
            isMobile: 'false',
        }
    });

    var walletNameRedirect = window.open('', "_blank");
    if(walletNameRedirect) {
      walletNameRedirect!.document.write('loading page for wallet name...');
      walletNameRedirect!.location.href = finalUrl;
    } else {
      alert('Please make sure popup are enabled for providing username');
    }

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
        path: ['wallet', 'sign', sessionId],
        queryParams: {
            message: message,
            walletname: walletName,
            isMobile: 'false'
        }
    });

    var signConfirmationRedirect = window.open('', "_blank");
    if(signConfirmationRedirect) {
      signConfirmationRedirect!.document.write('loading page for sign confirmation...');
      signConfirmationRedirect!.location.href = finalUrl;
    } else {
      alert('Please enable popups for message and transaction signing');
    }

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

  getUserOpSignature(txn: TransactionRequest, minBalance: string, userOpHash: string, chain: string): Promise<string> {
    const sessionId = v4();
    const walletName = this.cookieInstance.getCookie('bananaUser');
    const walletMetaData: UserCredentialObject = this.cookieInstance.getCookie(walletName);
    console.log(' this is wallet meta deta ', walletMetaData);
    const finalUrl = buildUrl(BANANA_APP_URL, {
        path: ['wallet', 'transact', sessionId],
        queryParams: {
            to: txn.to,
            from: walletMetaData.walletAddress,
            value: txn.value?.toString(),
            gas: minBalance,
            userOpHash: userOpHash,
            walletname: walletName,
            chain: chain,
            isMobile: 'false'
        }
    });

    var transactionConfirmationRedirect = window.open('', "_blank");
    if(transactionConfirmationRedirect) {
      transactionConfirmationRedirect!.document.write('loading page for transaction confirmation...');
      transactionConfirmationRedirect!.location.href = finalUrl;
    } else {
      alert('Please enable popups for message and transaction signing');
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
