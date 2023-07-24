import { useState, createContext } from 'react'
import { Chains } from '@rize-labs/banana-wallet-sdk/src/Constants';
// import { Banana } from '../sdk/BananaProvider';
import { Banana } from "@rize-labs/banana-wallet-sdk/src/BananaProvider"
import React from 'react'
import chain from "../utils/chain";
export const SignerContext = createContext('signer-context')

const SignerProvider = (props) => {
    const [bananaInstance, setBananaInstance] = useState(null);

    const initSigner = () => {
        // const banana = new Banana(Chains.optimismTestnet , 'https://opt-goerli.g.alchemy.com/v2/Q37EPFzF1O8kJt4oTob4ytwuUFTW0Gas');
       const banana = new Banana(chain,
        [
            {
              chainId: '420',
      paymasterUrl: `https://demo-paymaster.internal.candidelabs.com/optimism-goerli/71c6bedc7c3d1c7b4773c70fb972707a`
      
    //   'https://api.pimlico.io/v1/mumbai/rpc?apikey=f95ac5ae-7612-4bac-b759-4603eb5e7a96'
            //   paymasterUrl: 'https://api.stackup.sh/v1/paymaster/56933d7c3f0ed4ef2d488f51d7e8123c4b9e33b279ae1804879a177d76870595'
            }
          ]);
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
