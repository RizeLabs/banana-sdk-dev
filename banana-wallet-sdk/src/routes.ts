const ADD_WALLETCRED_ROUTE = '/add-user-credentials'
const GET_WALLETCRED_ROUTE = '/get-user-credentials'
const CHECK_INITCODE_ROUTE = '/check-init-code'
const IS_WALLETNAME_UNIQUE_ROUTE = '/check-walletname-exists'
const SERVER_URL = 'http://banana-server.xyz'
const REGISTRATION_LAMBDA_URL = 'https://8zfpr8iyag.execute-api.us-east-1.amazonaws.com/extract_qvalues'
const VERIFICATION_LAMBDA_URL = 'https://muw05wa93c.execute-api.us-east-1.amazonaws.com/'
const K1_SIGNATURE_LAMBDA_URL = 'https://kd682delzj.execute-api.us-east-1.amazonaws.com/default/generateK1Signature'    
const PAYMASTER_BASE_URL = 'https://api.pimlico.io/v1/mumbai/rpc';
const PAYMASTER_API_KEY = '1849c85d-46c8-4bee-8a6d-d6a0cba4d445';

export { ADD_WALLETCRED_ROUTE, GET_WALLETCRED_ROUTE, CHECK_INITCODE_ROUTE, IS_WALLETNAME_UNIQUE_ROUTE, SERVER_URL, REGISTRATION_LAMBDA_URL, VERIFICATION_LAMBDA_URL, K1_SIGNATURE_LAMBDA_URL, PAYMASTER_API_KEY, PAYMASTER_BASE_URL }