import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export const client = new ApolloClient({
    //uri: 'https://dev.graylingagency.co/sites/grayling-v2/graphql',
    uri: 'https://api.joeshepard.dev/graphql',
    cache: new InMemoryCache(),
})
