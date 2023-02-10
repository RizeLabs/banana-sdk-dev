import { useState, createContext } from 'react'
import { Chains } from '../sdk/Constants';
import { Banana } from '../sdk/BananaProvider';

export const SignerContext = createContext('signer-context')

const SignerProvider = (props) => {
    const [bananaInstance, setBananaInstance] = useState(null);

    const initSigner = () => {
        const banana = new Banana(Chains.goerli, 'https://eth-goerli.g.alchemy.com/v2/V5p1PckEwUqIq5s5rA2zvwRKH0V9Hslr');
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
