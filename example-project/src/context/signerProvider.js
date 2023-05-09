import { useState, createContext } from 'react'
import { Chains } from '@rize-labs/banana-wallet-sdk/src/Constants';
// import { Banana } from '../sdk/BananaProvider';
import { Banana } from "@rize-labs/banana-wallet-sdk/src/BananaProvider"
import React from 'react'
import Chain from '../utils/chain';
export const SignerContext = createContext('signer-context')


const SignerProvider = (props) => {
    const [bananaInstance, setBananaInstance] = useState(null);

    const initSigner = () => {
        // const banana = new Banana(Chains.optimismTestnet , 'https://opt-goerli.g.alchemy.com/v2/Q37EPFzF1O8kJt4oTob4ytwuUFTW0Gas');
    //    const banana = new Banana(Chains.mumbai , 'https://polygon-mumbai.g.alchemy.com/v2/pKQ3vzeRnBEpcTHkPS0da9Z1_EQawyd5');
       const banana = new Banana(Chain);
        console.log(" this is signer ", banana);
        setBananaInstance(banana);
        console.log(" this is instance ", bananaInstance)
        return banana;
    }

    return (
        <SignerContext.Provider value = {{ initSigner, bananaInstance }}>
            {props.children}
        </SignerContext.Provider>
    )
}

export default SignerProvider;
