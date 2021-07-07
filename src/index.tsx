import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";


const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://graphql.fauna.com/graphql',
      headers: {
        'authorization': 'Bearer fnAENeRZx7ACRQZrmiPnchOz5RteM5mfGSEgHAN2'
      }
    }),
    cache: new InMemoryCache(),
  });
 };

const client = createApolloClient();

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
