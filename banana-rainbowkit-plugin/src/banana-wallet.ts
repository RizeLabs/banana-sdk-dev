import { BananaConnector } from "./banana-connectors";
import { Wallet } from "@rainbow-me/rainbowkit";
import { Chain } from "wagmi";
import { ConnectOptions } from "@rize-labs/banana-wallet-sdk/src/interfaces/Banana.interface";

export interface MyWalletOptions {
  chains: Chain[];
  connect?: ConnectOptions;
}

export const BananaWallet = ({ chains, connect }: MyWalletOptions): Wallet => ({
  id: "banana",
  name: "Banana",
  iconUrl:
    "https://res.cloudinary.com/musicalide/image/upload/v1680007124/banana-dozen_p2f5ix.jpg",
  iconBackground: "#fff",
  downloadUrls: {
    qrCode: 'false',
  },
  createConnector: () => {
    const connector = new BananaConnector({
      chains,
      options: {
        connect,
      },
    });

    return {
      connector,
      mobile: {
        getUri: async () => {
          try {
            await connector.connect();
            return window.location.href;
          } catch (e) {
            console.error("Failed to connect");
          }
          return "";
        },
      },
      desktop: {
        getUri: async () => {
          try {
            await connector.connect();
          } catch (e) {
            console.error("Failed to connect");
          }
          return "";
        },
      },
    };
  },
});
