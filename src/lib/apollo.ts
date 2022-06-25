import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4t1px672sx501yya0e9fkq3/master',
    cache: new InMemoryCache(),
})