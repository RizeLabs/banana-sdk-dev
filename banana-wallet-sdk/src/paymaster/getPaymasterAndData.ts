import Axios from "axios";

export const getPaymasterAndData = async (paymasterUrl: string, requestData: any) => {
    try {
        console.log(requestData);
        console.log(paymasterUrl)
        const paymasterResponse = await Axios({
            url: paymasterUrl,
            method: 'post',
            data: requestData
        })
        console.log(paymasterResponse)
        return paymasterResponse.data.result.paymasterAndData;
    } catch (err) {
        console.log(err);
        throw err;
    }
}