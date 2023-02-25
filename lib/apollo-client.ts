import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


const token = `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`

console.log(token)

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${token}` ,
        }
    }
});

const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});


// const apolloClient = new ApolloClient({
//     uri: 'https://countries.trevorblades.com/',
//     cache: new InMemoryCache(),
// });


export default apolloClient