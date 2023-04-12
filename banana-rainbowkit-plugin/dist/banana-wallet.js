var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BananaConnector } from "./banana-connectors";
export const BananaWallet = ({ chains, connect }) => ({
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
                getUri: () => __awaiter(void 0, void 0, void 0, function* () {
                    try {
                        yield connector.connect();
                        return window.location.href;
                    }
                    catch (e) {
                        console.error('Failed to connect');
                    }
                    return '';
                }),
            },
            desktop: {
                getUri: () => __awaiter(void 0, void 0, void 0, function* () {
                    try {
                        yield connector.connect();
                    }
                    catch (e) {
                        console.error('Failed to connect');
                    }
                    return '';
                }),
            },
        };
    }
});
