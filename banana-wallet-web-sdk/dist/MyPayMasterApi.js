"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyPaymasterApi = void 0;
const sdk_1 = require("@account-abstraction/sdk");
class MyPaymasterApi extends sdk_1.PaymasterAPI {
    async getPaymasterAndData(userOp) {
        // return your paymaster information here
        return '0x';
    }
}
exports.MyPaymasterApi = MyPaymasterApi;
//# sourceMappingURL=MyPayMasterApi.js.map