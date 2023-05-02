import Axios from 'axios'
import { UserCredentialObject } from './interfaces/Banana.interface'
import constructUniqueIdentifier from './utils/constructUserUniqueIdentifier'
import { SERVER_URL, ADD_WALLETCRED_ROUTE, GET_WALLETCRED_ROUTE, CHECK_INITCODE_ROUTE,IS_WALLETNAME_UNIQUE_ROUTE} from './routes'

// const serverUrl = 'https://banana-mapper.onrender.com'

Axios.defaults.baseURL = '';
const getWalletMetaData = async (walletIdentifier: string) => {
    try {
        console.log("Wallet Identifier: ", walletIdentifier)
        const identifier = constructUniqueIdentifier(walletIdentifier, window.location.hostname);
        const walletCredentials = await Axios({
            url: SERVER_URL + GET_WALLETCRED_ROUTE,
            method: 'get',
            params: {
                uniqueIdentifier: identifier
            }
        })
        console.log("Wallet MetaData ", walletCredentials);

        if(walletCredentials.data.data !== '') {
            return JSON.parse(walletCredentials.data.data);
        }
        return '';
    } catch (err) {
        console.log(err);
        throw err;
    }
}

const setWalletMetaData = async (userIdentifier: string, userCredentialObject: UserCredentialObject) => {
    try {
        console.log("Wallet identifier: ", userIdentifier);
        console.log("Wallet MetaData ", userCredentialObject);
        const identifier = constructUniqueIdentifier(userIdentifier, window.location.hostname);
        const updateUserCredentialStatus = await Axios({
            url: SERVER_URL + ADD_WALLETCRED_ROUTE,
            method: 'post',
            data: {
                uniqueIdentifier: identifier,
                userCredentials: userCredentialObject
            }
        })

        if(updateUserCredentialStatus) 
        return {
            success: true
        }

        return {
            success: false
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

const checkInitCodeStatus = async (walletIdentifier: string) => {
    try {
        const initCodeStatus = await Axios({
            url: SERVER_URL + CHECK_INITCODE_ROUTE,
            method: 'get',
            params: {
                uniqueIdentifier: walletIdentifier
            }
        });
        if(initCodeStatus.data.isInitCode) {
            return {
                isInitCode: true
            }
        }

        return {
            isInitCode: false
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

const checkIsWalletNameExist = async (walletName: string) => {
    try {
        const identifier = constructUniqueIdentifier(walletName, window.location.hostname);
        const isWalletUnique = await Axios({
            url: SERVER_URL + IS_WALLETNAME_UNIQUE_ROUTE,
            method: 'post',
            data: {
                walletName: identifier
            }
        })
        if(isWalletUnique.data.isUnique) {
            return true;
        }
        return false;
    } catch (err) {
      console.log(err);
      throw err;
    }
}

export { getWalletMetaData, setWalletMetaData, checkInitCodeStatus, checkIsWalletNameExist };