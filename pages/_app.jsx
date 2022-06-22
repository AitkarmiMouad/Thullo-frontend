import '../styles/globals.scss'
import { StoreProvider } from 'easy-peasy';
import { store } from '../app/store'
import Head from 'next/head';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import config from '../app/config';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: `${config.API_BACKEND_URL}/graphql` }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});


function MyApp({ Component, pageProps }) {


  return (
    <DndProvider backend={HTML5Backend}>
      <ApolloProvider client={client}>
        <StoreProvider store={store}>
          <Head>
            <title>Thullo</title>
            <meta name="description" content="Thullo App" />
            <link rel="icon" href="/Logo-small.svg" />
          </Head>
          <Component {...pageProps} />
        </StoreProvider>
      </ApolloProvider>
    </DndProvider>
  )
}

export default MyApp
