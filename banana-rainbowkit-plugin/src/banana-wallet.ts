import { BananaConnector } from "./banana-connectors";
import { Wallet } from '@rainbow-me/rainbowkit';
import { Chain } from "wagmi";
// import { ConnectOptions } from './banana-wallet-sdk/src/interfaces/Banana.interface';

interface ConnectOptions {
  networkId: string | number,
  jsonRpcUrl: string
}

export interface MyWalletOptions {
    chains: Chain[];
    connect?: ConnectOptions
  }

export const BananaWallet = ({ chains, connect }: MyWalletOptions): Wallet => ({
    id: 'banana',
    name: 'Banana',
    iconUrl: 'https://raw.githubusercontent.com/nlok5923/banana-demo/feat/nft-minting/public/images/banana-dozen.jpeg?token=GHSAT0AAAAAAB2IDNZYJOROSYHPJJFV6H6SZBRBIFQ',
    iconBackground: '#fff',
    //@ts-ignore
    createConnector: () => {
        const connector = new BananaConnector({
            chains,
            options: {
                connect
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
                  console.error('Failed to connect');
                }
                return '';
              },
            },
            desktop: {
                getUri: async () => {
                  try {
                    await connector.connect();
                  } catch (e) {
                    console.error('Failed to connect');
                  }
                  return '';
                },
              },
        }
    }
})

/*
- while connecting as of now dev has to provide the jsonRpcUrl
- our wallet is indapp so devs has to provide the networkId as well 
*/