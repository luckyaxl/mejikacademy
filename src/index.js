import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/sass/main.scss";

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from 'apollo-link-context';
import Cookies from "js-cookie";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

const link = createUploadLink({
  uri: "https://mejikacademy1588499516927.microgen.mejik.id/graphql"
});

/** Docs https://www.apollographql.com/docs/react/networking/authentication/#header */
const authLink = setContext((_, { headers }) => {
  const token = Cookies.get("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : ""
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
