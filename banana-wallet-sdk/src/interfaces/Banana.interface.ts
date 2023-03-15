import UserOperation from '../utils/userOperation'
export interface ClientConfig {
    bundlerUrl: string;
    entryPointAddress: string;
}

export interface PublicKey {
    q0: string;
    q1: string;
    encodedId: string;
}

export interface UserCredentialObject {
    q0: string;
    q1: string;
    walletAddress: string;
    initcode: boolean;
    encodedId: string;
    username: string
}

export interface CookieObject {
    q0: string;
    q1: string;
    scwAddress: string;
    initContract: boolean;
}

export interface ChainConfig {
    Elliptic: string;
    TouchIdSafeProxyFactoryAddress: string;
    TouchidSafeSingletonContract: string
}