
import React from "react";
import App from "./App";
import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: "http://localhost:4000/api",
});


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);