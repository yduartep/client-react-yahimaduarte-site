import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./Main";
import registerServiceWorker from './registerServiceWorker';
import {ApolloProvider} from 'react-apollo';
import {HttpLink} from 'apollo-link-http';
import {onError} from 'apollo-link-error';
import {ApolloClient, InMemoryCache} from 'apollo-client-preset';
import {ApolloLink} from 'apollo-link';

import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";

const httpLink = new HttpLink({uri: 'http://localhost:8080/graphql'});

// logging request calls
const loggerLink = new ApolloLink((operation, forward) => {
    console.log(`Request make ${operation.operationName}`);
    return forward(operation).map((result) => {
        console.log(`Response received from ${operation.operationName}.`);
        return result;
    })
});

// handling network errors
const errorLink = onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors) {
        graphQLErrors.map(({message, locations, path}) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
    }
    if (networkError) {
        if (networkError.statusCode === 401) {
            // logout when no authorized or clear cookie data
            console.log('Authentication error. Logout from the app...');
        } else {
            console.log(`[Network error]: ${networkError}`);
        }
    }
});

const client = new ApolloClient({
    link: loggerLink.concat(errorLink).concat(httpLink),
    cache: new InMemoryCache(),
});

const WrappedApp = (
    <ApolloProvider client={client}>
        <Main/>
    </ApolloProvider>
);

ReactDOM.render(WrappedApp, document.getElementById('root'));
registerServiceWorker();