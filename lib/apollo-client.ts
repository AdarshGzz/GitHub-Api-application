import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const apolloClient = new ApolloClient({
    uri: 'https://countries.trevorblades.com/',
    cache: new InMemoryCache(),
});


export default apolloClient