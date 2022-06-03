import '../styles/globals.scss'
import { StoreProvider } from 'easy-peasy';
import {store} from '../app/store'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  return (
    <StoreProvider store={store}>
      <Head>
        <title>Thullo</title>
        <meta name="description" content="Thullo App" />
        <link rel="icon" href="/Logo-small.svg" />
      </Head>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default MyApp
