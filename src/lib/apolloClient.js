import { ApolloClient, InMemoryCache } from "@apollo/client";


const client = new ApolloClient({
    uri:'https://management-eu-west-2.hygraph.com/graphql',
    cache: new InMemoryCache(),
});

export default client;