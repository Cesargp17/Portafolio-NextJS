import '../styles/globals.css'
import { UIProvider } from '../context/UIProvider';
import { useContext } from 'react';
import { UIContext } from '../context/UIContext';

function MyApp({ Component, pageProps }) {

  return(
    <UIProvider>
        <Component {...pageProps} />
    </UIProvider>
    ) 
}

export default MyApp
