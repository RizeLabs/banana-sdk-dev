import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { GuardManager, GuardManagerInterface } from "../GuardManager";
export declare class GuardManager__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "guard";
            readonly type: "address";
        }];
        readonly name: "ChangedGuard";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "guard";
            readonly type: "address";
        }];
        readonly name: "setGuard";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): GuardManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GuardManager;
}
