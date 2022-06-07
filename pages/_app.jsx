import '../styles/globals.scss'
import { StoreProvider } from 'easy-peasy';
import { store } from '../app/store'
import Head from 'next/head';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function MyApp({ Component, pageProps }) {

  return (
    <DndProvider backend={HTML5Backend}>
      <StoreProvider store={store}>
        <Head>
          <title>Thullo</title>
          <meta name="description" content="Thullo App" />
          <link rel="icon" href="/Logo-small.svg" />
        </Head>
        <Component {...pageProps} />
      </StoreProvider>
    </DndProvider>
  )
}

export default MyApp
