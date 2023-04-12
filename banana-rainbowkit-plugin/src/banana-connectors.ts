import {
  Address,
  Connector,
  ConnectorData,
  UserRejectedRequestError,
} from "wagmi";
import { Banana } from "@rize-labs/banana-wallet-sdk/src/BananaProvider";
import { Chains as BananSupportChains } from "@rize-labs/banana-wallet-sdk/src/Constants";
import { Wallet } from "@rize-labs/banana-wallet-sdk/src/BananaWallet";
import { Banana4337Provider } from "@rize-labs/banana-wallet-sdk//src/Banana4337Provider";
import { BananaSigner } from "@rize-labs/banana-wallet-sdk/src/BananaSigner";
import { Chain } from "wagmi";

interface ConnectOptions {
  networkId: string | number;
}

interface Options {
  connect?: ConnectOptions;
}

export class BananaConnector extends Connector<
  Banana4337Provider,
  Options | undefined,
  BananaSigner
> {
  id = "banana";
  name = "Banana";
  ready = true;
  provider: Banana4337Provider | null = null;
  connected = false;
  BananaInstance: Banana;
  chainId: number;
  wallet!: Wallet;
  address!: string;

  constructor({ chains, options }: { chains?: Chain[]; options?: Options }) {
    super({ chains, options });
    if (options?.connect?.networkId) {
      const chain = getChain(options?.connect?.networkId);
      this.chainId = getChainId(options.connect.networkId);
      const BananaInstance = new Banana(chain);
      this.BananaInstance = BananaInstance;
    } else {
      throw new UserRejectedRequestError("Need chainid and jsonRpcUrl");
    }
  }

  async connect(): Promise<Required<ConnectorData<Banana4337Provider>>> {
    const walletName = this.BananaInstance.getWalletName();
    let provider;
    let walletAddress = "";
    //@ts-ignore
    this?.emit("message", { type: "connecting" });
    if (walletName) {
      this.wallet = await this.BananaInstance.connectWallet(walletName);
      if (!this.wallet) {
        throw new UserRejectedRequestError("Wallet connection failed");
      }
      walletAddress = await this.wallet.getAddress();
      provider = this.wallet.getProvider();
    } else {
      // @ts-ignore-next-line
      this.wallet = await this.BananaInstance.createWallet();
      if (!this.wallet) {
        throw new UserRejectedRequestError("Wallet creation failed");
      }
      walletAddress = await this.wallet.getAddress();
      provider = this.wallet.getProvider();
    }

    provider.on("accountsChanged", this.onAccountsChanged.bind(this));
    provider.on("disconnect", this.onDisconnect.bind(this));
    provider.on("chainChanged", this.onChainChanged.bind(this));

    this.address = await this.wallet.getAddress();
    this.connected = true;

    console.log(`0x${walletAddress.substring(2)}`);
    console.log(this.chainId);
    console.log(provider);
    console.log({
      account: `0x${walletAddress.substring(2)}`,
      chain: {
        id: this.chainId,
        unsupported: false,
      },
      provider,
    });
    return {
      account: `0x${walletAddress.substring(2)}`,
      chain: {
        id: this.chainId, // hardcoding for now
        unsupported: false,
      },
      provider,
    };
  }

  // for banana disconnecting == resetWallet
  async disconnect() {
    console.log('disconnect called');
    this.BananaInstance.resetWallet();
  }

  async getAccount() {
    return this.wallet.getAddress() as Promise<Address>;
  }

  async getChainId() {
    // wallet not yet initialized
    if (!this.wallet) return this.chainId;
    return this.wallet.getChainId();
  }

  async getProvider() {
    console.log("provider called ");
    if (this.provider) return this.provider;

    if (!this.provider) {
      if (this.wallet) {
        const provider = this.wallet.getProvider();
        this.provider = provider;
        return this.provider;
      }
      await this.connect();
      //@ts-ignore
      return this.wallet.getProvider();
    }
  }

  async getSigner(): Promise<BananaSigner> {
    console.log("signer called");
    console.log(this.wallet.getSigner());
    if(!this.wallet) {
        throw new UserRejectedRequestError("Wallet not initialized");
    }
    return this.wallet.getSigner();
  }

  async isAuthorized() {
    try {
      return !!this.address;
    } catch {
      return false;
    }
  }

  //! Current Banana wallet has 1:1 mapping with accounts
  protected onAccountsChanged(accounts: string[]): void {
    throw new Error("Method not implemented.");
  }

  protected onChainChanged(chain: string | number): void {
    const id = normalizeChainId(chain);
    const isNewChainSupported = this.isChainUnsupported(id);
    
    // @ts-ignore-next-line
    this?.emit("change", { chain: { id, isNewChainSupported } });
  }

  protected onDisconnect(error: Error): void {
    console.log("disconnect called ");
    this.BananaInstance.resetWallet();
    // @ts-ignore-next-line
    this?.emit("disconnect");
  }

  async switchChain(chainId: number): Promise<Chain> {
    const isNewChainSupported = this.isChainUnsupported(chainId);
    if(!isNewChainSupported) throw new Error(`Unsupported chainId: ${chainId}`);

    const bananaChain = getChain(chainId);
    this.chainId = getChainId(chainId);

    const BananaInstance = new Banana(bananaChain);
    this.BananaInstance = BananaInstance;

    // connect same wallet with new chain config
    await this.connect();
    
    const chain = this.chains.find((x) => x.id === chainId);
    if (!chain) throw new Error(`Unsupported chainId: ${chainId}`);

    this.provider?.emit("chainChanged", chainId);
    return chain;
  }

  isChainUnsupported(chainId: number): boolean {
    let isChainSupported = false;
    for (const chainName in BananSupportChains) {
      const chainValue = BananSupportChains[chainName];
      if (chainId.toString() == chainValue) isChainSupported = true;
    }
    return isChainSupported;
  }
}

function getChainId(networkId: string | number) {
  if (typeof networkId === "string")
    return Number.parseInt(
      networkId,
      networkId.trim().substring(0, 2) === "0x" ? 16 : 10
    );
  return networkId;
}

function getChain(networkId: string | number): BananSupportChains {
  let chainId;
  if (typeof networkId == "number") chainId = networkId.toString();
  if (chainId == "5") return BananSupportChains.goerli;
  if (chainId == "80001") return BananSupportChains.mumbai;
  if (chainId === "420") return BananSupportChains.optimismTestnet;
  return BananSupportChains.arbitrumTestnet;
}

function normalizeChainId(chainId: string | number | bigint) {
  if (typeof chainId === "string")
    return Number.parseInt(
      chainId,
      chainId.trim().substring(0, 2) === "0x" ? 16 : 10
    );
  if (typeof chainId === "bigint") return Number(chainId);
  return chainId;
}
