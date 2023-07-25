import { ethers } from "ethers";

export const getPaymasterAndData = async (paymasterUrl: string, requestData: any) => {
    try {
        const pimlicoProvider = new ethers.providers.StaticJsonRpcProvider(paymasterUrl)
        const sponsorUserOperationResult = await pimlicoProvider.send("pm_sponsorUserOperation", requestData);
        return sponsorUserOperationResult;
    } catch (err) {
        console.log(err);
        throw err;
    }
}