import type { AppProps } from 'next/app'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import { AppProvider } from './Context';
import "../styles/globals.css"



// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false;


const token = process.env.TOKEN_GIT  

console.log(token)
const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});


const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    }
  }
});
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


// https://rickandmortyapi.com/graphql

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return( 
    <ApolloProvider client={apolloClient}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
  </ApolloProvider>
  )
}
