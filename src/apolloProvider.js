
import React from "react";
import App from "./App";
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from "@apollo/react-hooks";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/api", //utilizando a porta 4000 na api
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