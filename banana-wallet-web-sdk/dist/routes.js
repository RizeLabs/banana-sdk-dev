"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.K1_SIGNATURE_LAMBDA_URL = exports.VERIFICATION_LAMBDA_URL = exports.REGISTRATION_LAMBDA_URL = exports.SERVER_URL = exports.IS_WALLETNAME_UNIQUE_ROUTE = exports.CHECK_INITCODE_ROUTE = exports.GET_WALLETCRED_ROUTE = exports.ADD_WALLETCRED_ROUTE = void 0;
const ADD_WALLETCRED_ROUTE = '/add-user-credentials';
exports.ADD_WALLETCRED_ROUTE = ADD_WALLETCRED_ROUTE;
const GET_WALLETCRED_ROUTE = '/get-user-credentials';
exports.GET_WALLETCRED_ROUTE = GET_WALLETCRED_ROUTE;
const CHECK_INITCODE_ROUTE = '/check-init-code';
exports.CHECK_INITCODE_ROUTE = CHECK_INITCODE_ROUTE;
const IS_WALLETNAME_UNIQUE_ROUTE = '/check-walletname-exists';
exports.IS_WALLETNAME_UNIQUE_ROUTE = IS_WALLETNAME_UNIQUE_ROUTE;
const SERVER_URL = 'https://banana-server.xyz';
exports.SERVER_URL = SERVER_URL;
const REGISTRATION_LAMBDA_URL = 'https://8zfpr8iyag.execute-api.us-east-1.amazonaws.com/extract_qvalues';
exports.REGISTRATION_LAMBDA_URL = REGISTRATION_LAMBDA_URL;
const VERIFICATION_LAMBDA_URL = 'https://muw05wa93c.execute-api.us-east-1.amazonaws.com/';
exports.VERIFICATION_LAMBDA_URL = VERIFICATION_LAMBDA_URL;
const K1_SIGNATURE_LAMBDA_URL = 'https://kd682delzj.execute-api.us-east-1.amazonaws.com/default/generateK1Signature';
exports.K1_SIGNATURE_LAMBDA_URL = K1_SIGNATURE_LAMBDA_URL;
//# sourceMappingURL=routes.js.map