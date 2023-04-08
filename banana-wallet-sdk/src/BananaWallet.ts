
import { BananaSigner } from "./BananaSigner";
import { Chains } from "./Constants";
import { Banana4337Provider } from "./Banana4337Provider";
import { ERC4337EthersSigner } from "@account-abstraction/sdk";

//! Need to work on disconnect and isconnected method
export interface WalletProvider {
    getAddress(): Promise<string>
    getChainId(): Promise<number>
    getProvider(): Banana4337Provider | undefined
    getSigner(): ERC4337EthersSigner //!need to test out with this
    //! Not supported yet
    // on<K extends keyof ProviderEventTypes>(event: K, fn: ProviderEventTypes[K]): void
    // once<K extends keyof ProviderEventTypes>(event: K, fn: ProviderEventTypes[K]): void  
  }

export class Wallet implements WalletProvider {
    readonly walletAddress: string
    readonly walletProvider: Banana4337Provider
    readonly network: Chains

    constructor(
        walletAddress: string,
        walletProvider: Banana4337Provider,
        network: Chains
    ) {
        this.walletAddress = walletAddress
        this.walletProvider = walletProvider;
        this.network = network
    }

    getProvider() {
        return this.walletProvider;
    } 

    getSigner() {
        return this.walletProvider.getSigner();
    }

    async getChainId(): Promise<number> {
        //! hardcoding values for now 
        //@ts-ignore
        if(this.network.goerli) {
            return 5;
        }
        //! default chainId for mumbai
        return 80001;
    }

    getAddress(): Promise<string> {
        return Promise.resolve(this.walletAddress)
    }
}