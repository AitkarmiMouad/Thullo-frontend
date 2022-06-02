import '../styles/globals.scss'

import { StoreProvider } from 'easy-peasy';
import {store} from '../app/store'

function MyApp({ Component, pageProps }) {

  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default MyApp
