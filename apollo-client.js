import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://dev.graylingagency.co/sites/grayling-v2/graphql",
    cache: new InMemoryCache(),
});

export default client;