import { UserOperationStruct } from "@account-abstraction/contracts";
import { PaymasterAPI } from "@account-abstraction/sdk";
export declare class MyPaymasterApi extends PaymasterAPI {
    getPaymasterAndData(userOp: Partial<UserOperationStruct>): Promise<string>;
}
