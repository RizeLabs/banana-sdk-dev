export interface ISignatureResponse {
    signature: string
}

export interface IWebAuthnRegistrationResponse {
    q0: string;
    q1: string;
    encodedId: string;
    walletAddress?: string;
    initcode?: boolean;
    username?: string
    saltNonce?: string
}