import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export const client = new ApolloClient({
    uri: `${process.env.LIVE_API_URL}/graphql`,
    cache: new InMemoryCache(),
})
