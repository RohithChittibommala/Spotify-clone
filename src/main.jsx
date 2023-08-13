import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const API_SERVER = "https://api.ss.dev/resource/api";
/*
Creating the apollo client
*/

const client = new ApolloClient({
  uri: API_SERVER,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
