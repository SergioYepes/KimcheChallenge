import React from "react";
import Home from './components/home/home'
import "./App.css";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

export const client = new ApolloClient({
  cache : new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});
// llamado al grapho https://48p1r2roz4.sse.codesandbox.io


const App = () => ( 
  <ApolloProvider client={client}>
    <Home/>
  </ApolloProvider>
);
export default App;
