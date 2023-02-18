import { expect } from "chai";
import { BananaCookie } from "../BananaCookie";
import { JUNK_CREDENTIALS, JUNK_USERNAME, DUMMY_Q0, DUMMY_Q1,JUNK_ID, JUNK_ADDRESS } from "./BananaConstants";

export interface WalletCredentialObject {
  q0: string;
  q1: string;
  walletAddress: string;
  initcode: boolean;
  encodedId: string;
}

describe("BananaCookie", () => {
  let bananaCookie: BananaCookie
  let cookieCredentials: WalletCredentialObject
  let retrievedCookie: WalletCredentialObject

  const setupBananaCookie = () =>{
    bananaCookie = new BananaCookie()
  }
  
  describe("setCookie", () =>{
    beforeEach(() => {
      setupBananaCookie()
    })

    it("sets empty cookie", () => {
      const emptyCookieCredentials = {q0: '', q1:'', walletAddress:'', initcode:false, encodedId: ''}

      bananaCookie.setCookie(JUNK_USERNAME,JSON.stringify(emptyCookieCredentials))

      retrievedCookie = bananaCookie.getCookie(JUNK_USERNAME)
      expect(retrievedCookie.q0).to.eq('')
      expect(retrievedCookie.q1).to.eq('')
      expect(retrievedCookie.walletAddress).to.eq('')
      expect(retrievedCookie.initcode).to.eq(false)
      expect(retrievedCookie.encodedId).to.eq('')
    })

    it("is idempotent", () => {
      cookieCredentials = JUNK_CREDENTIALS

      bananaCookie.setCookie(JUNK_USERNAME,JSON.stringify(cookieCredentials))

      retrievedCookie = bananaCookie.getCookie(JUNK_USERNAME)
      expect(retrievedCookie.q0).to.eq(DUMMY_Q0)
      expect(retrievedCookie.q1).to.eq(DUMMY_Q1)
      expect(retrievedCookie.walletAddress).to.eq(JUNK_ADDRESS)
      expect(retrievedCookie.initcode).to.eq(false)
      expect(retrievedCookie.encodedId).to.eq(JUNK_ID)   
      
      bananaCookie.setCookie(JUNK_USERNAME,JSON.stringify(cookieCredentials))

      retrievedCookie = bananaCookie.getCookie(JUNK_USERNAME)
      expect(retrievedCookie.q0).to.eq(DUMMY_Q0)
      expect(retrievedCookie.q1).to.eq(DUMMY_Q1)
      expect(retrievedCookie.walletAddress).to.eq(JUNK_ADDRESS)
      expect(retrievedCookie.initcode).to.eq(false)
      expect(retrievedCookie.encodedId).to.eq(JUNK_ID)   
    })

    it("replaces existing cookie with new one", () =>{
      cookieCredentials = JUNK_CREDENTIALS

      bananaCookie.setCookie(JUNK_USERNAME,JSON.stringify(cookieCredentials))

      retrievedCookie = bananaCookie.getCookie(JUNK_USERNAME)
      expect(retrievedCookie.q0).to.eq(DUMMY_Q0)
      expect(retrievedCookie.q1).to.eq(DUMMY_Q1)
      expect(retrievedCookie.walletAddress).to.eq(JUNK_ADDRESS)
      expect(retrievedCookie.initcode).to.eq(false)
      expect(retrievedCookie.encodedId).to.eq(JUNK_ID)   

      const newCookieCredentials = {...cookieCredentials, encodedId: 'newEncodedId'}
      bananaCookie.setCookie(JUNK_USERNAME,JSON.stringify(newCookieCredentials))

      retrievedCookie = bananaCookie.getCookie(JUNK_USERNAME)
      expect(retrievedCookie.q0).to.eq(DUMMY_Q0)
      expect(retrievedCookie.q1).to.eq(DUMMY_Q1)
      expect(retrievedCookie.walletAddress).to.eq(JUNK_ADDRESS)
      expect(retrievedCookie.initcode).to.eq(false)
      expect(retrievedCookie.encodedId).to.eq("newEncodedId")
    })
  })
});
