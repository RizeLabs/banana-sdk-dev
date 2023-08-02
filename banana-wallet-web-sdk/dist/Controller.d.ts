import { UserCredentialObject } from "./interfaces/Banana.interface";
declare const getWalletMetaData: (walletIdentifier: string) => Promise<any>;
declare const setWalletMetaData: (walletIdentifier: string, userCredentialObject: UserCredentialObject) => Promise<{
    success: boolean;
}>;
declare const checkInitCodeStatus: (walletIdentifier: string) => Promise<{
    isInitCode: boolean;
}>;
declare const checkIsWalletNameExist: (walletName: string) => Promise<boolean>;
declare const getUsernameFromSessionId: (sessionId: string) => Promise<string>;
declare const getMessageSignConfirmation: (sessionId: string) => Promise<string>;
declare const getTransactionSignConfirmation: (sessionId: string) => Promise<string>;
export { getWalletMetaData, setWalletMetaData, checkInitCodeStatus, checkIsWalletNameExist, getUsernameFromSessionId, getMessageSignConfirmation, getTransactionSignConfirmation };
