import Axios from "axios";
import { ethers } from "ethers";

export const getPaymasterAndData = async (paymasterUrl: string, requestData: any) => {
    try {
        const pimlicoProvider = new ethers.providers.StaticJsonRpcProvider(paymasterUrl)
        console.log('this is r4equest data ', requestData)
        const sponsorUserOperationResult = await pimlicoProvider.send("pm_sponsorUserOperation", requestData);
        console.log('result after sending request', sponsorUserOperationResult);
        return sponsorUserOperationResult.data.result.paymasterAndData;
    } catch (err) {
        console.log(err);
        throw err;
    }
}