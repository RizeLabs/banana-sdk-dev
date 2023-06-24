import Axios from "axios";
import { UserCredentialObject } from "./interfaces/Banana.interface";
import {
  ADD_WALLETCRED_ROUTE,
  GET_WALLETCRED_ROUTE,
  CHECK_INITCODE_ROUTE,
  IS_WALLETNAME_UNIQUE_ROUTE,
  TRANSACTION_SIGN_CONFIRMATON_ROUTE,
  MESSAGE_SIGN_CONFIRMATION_ROUTE,
  CONNECT_ROUTE
} from "./constants/routes";
import { BANANA_SERVER, Methods } from "./constants/Constants";

Axios.defaults.baseURL = "";
const getWalletMetaData = async (walletIdentifier: string) => {
  console.log(' this is wallet identifier ', walletIdentifier);
  try {
    const walletCredentials = await Axios({
      url: BANANA_SERVER + GET_WALLETCRED_ROUTE,
      method: Methods.GET,
      params: {
        uniqueIdentifier: walletIdentifier,
      },
    });

    if (walletCredentials.data.data !== "") {
      return JSON.parse(walletCredentials.data.data);
    }
    return "";
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const setWalletMetaData = async (
  walletIdentifier: string,
  userCredentialObject: UserCredentialObject
) => {
  try {
    const updateUserCredentialStatus = await Axios({
      url: BANANA_SERVER + ADD_WALLETCRED_ROUTE,
      method: Methods.POST,
      data: {
        uniqueIdentifier: walletIdentifier,
        userCredentials: userCredentialObject,
      },
    });

    if (updateUserCredentialStatus)
      return {
        success: true,
      };
    
    return {
            success: false
        }
    } catch (err) {
        throw err;
    }
}


const checkInitCodeStatus = async (walletIdentifier: string) => {
  try {
    const initCodeStatus = await Axios({
      url: BANANA_SERVER + CHECK_INITCODE_ROUTE,
      method: Methods.GET,
      params: {
        uniqueIdentifier: walletIdentifier,
      },
    });
    if (initCodeStatus.data.isInitCode) {
      return {
        isInitCode: true,
      };
    }

    return {
      isInitCode: false,
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const checkIsWalletNameExist = async (walletName: string) => {
  try {
    const isWalletUnique = await Axios({
      url: BANANA_SERVER + IS_WALLETNAME_UNIQUE_ROUTE,
      method: Methods.POST,
      data: {
        walletName: walletName,
      },
    });
    if (isWalletUnique.data.isUnique) {
      return true;
    }
    return false;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getUsernameFromSessionId = async (sessionId: string): Promise<string> => {
  try {
    const usernameResponse = await Axios({
      url: BANANA_SERVER + CONNECT_ROUTE,
      method: Methods.GET,
      params: {
        sessionId: sessionId,
      },
    });
    //@ts-ignore
    return usernameResponse.data.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getMessageSignConfirmation = async (
  sessionId: string
): Promise<string> => {
  try {
    const signConfirmationResp = await Axios({
      url: BANANA_SERVER + MESSAGE_SIGN_CONFIRMATION_ROUTE,
      method: Methods.GET,
      params: {
        sessionId: sessionId,
      },
    });
    return signConfirmationResp.data.signature;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getTransactionSignConfirmation = async (
  sessionId: string
): Promise<string> => {
  try {
    const signConfirmationResp = await Axios({
      url: BANANA_SERVER + TRANSACTION_SIGN_CONFIRMATON_ROUTE,
      method: Methods.GET,
      params: {
        sessionId: sessionId,
      },
    });
    return signConfirmationResp.data.signature;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export {
  getWalletMetaData,
  setWalletMetaData,
  checkInitCodeStatus,
  checkIsWalletNameExist,
  getUsernameFromSessionId,
  getMessageSignConfirmation,
  getTransactionSignConfirmation
};
