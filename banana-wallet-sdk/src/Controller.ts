import Axios from "axios";
import { UserCredentialObject } from "./interfaces/Banana.interface";
import constructUniqueIdentifier from "./utils/constructUserUniqueIdentifier";
import {
  SERVER_URL,
  ADD_WALLETCRED_ROUTE,
  GET_WALLETCRED_ROUTE,
  CHECK_INITCODE_ROUTE,
  IS_WALLETNAME_UNIQUE_ROUTE,
} from "./routes";
import { BANANA_SERVER, Methods } from "./Constants";

Axios.defaults.baseURL = "";
const getWalletMetaData = async (walletIdentifier: string) => {
  try {
    console.log("Wallet Identifier: ", walletIdentifier);
    // const identifier = constructUniqueIdentifier(
    //   walletIdentifier,
    //   window.location.hostname
    // );
    const walletCredentials = await Axios({
      url: SERVER_URL + GET_WALLETCRED_ROUTE,
      method: Methods.GET,
      params: {
        uniqueIdentifier: walletIdentifier,
      },
    });
    console.log("Wallet Metadata: ", walletCredentials);

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
    console.log("Wallet Identifier: ", walletIdentifier);
    console.log("Wallet Metadata: ", userCredentialObject);
    // const identifier = constructUniqueIdentifier(
    //   userIdentifier,
    //   window.location.hostname
    // );
    const updateUserCredentialStatus = await Axios({
      url: SERVER_URL + ADD_WALLETCRED_ROUTE,
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
      success: false,
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const checkInitCodeStatus = async (walletIdentifier: string) => {
  try {
    const initCodeStatus = await Axios({
      url: SERVER_URL + CHECK_INITCODE_ROUTE,
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
    // const identifier = constructUniqueIdentifier(
    //   walletName,
    //   window.location.hostname
    // );
    const isWalletUnique = await Axios({
      url: SERVER_URL + IS_WALLETNAME_UNIQUE_ROUTE,
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
    // console.log("Session id ", sessionId);
    const usernameResponse = await Axios({
      url: BANANA_SERVER + "/connect",
      method: Methods.GET,
      params: {
        sessionId: sessionId,
      },
    });
    // console.log("Username response ", usernameResponse);
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
      url: BANANA_SERVER + "/message-sign-confirmation",
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
      url: BANANA_SERVER + "/transaction-sign-confirmation",
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
