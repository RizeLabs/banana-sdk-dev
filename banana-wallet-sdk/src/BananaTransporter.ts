import { v4 } from "uuid";
import { BANANA_APP_URL } from "./Constants";
import { getUsernameFromSessionId, getMessageSignConfirmation, getTransactionSignConfirmation } from "./Controller";
import { UserCredentialObject } from "./interfaces/Banana.interface";
import { BananaCookie } from "./BananaCookie";
import { TransactionRequest } from "@ethersproject/providers";
import buildUrl from "./utils/urlBuilder";

export interface BananaTransportProvider {
  getWalletName(): Promise<string>;
  getUserOpSignature(txn: TransactionRequest, minBalance: string, userOpHash: string): Promise<string>;
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
            dapp: window.location.hostname,
            isMobile: 'false',
        }
    });

    var walletNamePopUp = window.open('', "_blank");
    if(walletNamePopUp) {
      walletNamePopUp!.location.href = finalUrl;
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

    var walletNamePopUp = window.open('', "_blank");
    if(walletNamePopUp) {
      walletNamePopUp!.location.href = finalUrl;
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

  getUserOpSignature(txn: TransactionRequest, minBalance: string, userOpHash: string): Promise<string> {
    const sessionId = v4();
    const walletName = this.cookieInstance.getCookie('bananaUser');
    const walletMetaData: UserCredentialObject = this.cookieInstance.getCookie(walletName);
    
    const finalUrl = buildUrl(BANANA_APP_URL, {
        path: ['wallet', 'transact', sessionId],
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

    var walletNamePopUp = window.open('', "_blank");
    if(walletNamePopUp) {
      walletNamePopUp!.document.write('loading popup for transaction confirmation...');
      walletNamePopUp!.location.href = finalUrl;
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