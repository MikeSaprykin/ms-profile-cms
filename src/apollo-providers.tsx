import * as React from 'react';
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Root from './containers/Root';

import { todoReducer } from './store';

const uri = 'http://localhost:8080/graphql';
const networkInterface = createNetworkInterface({ uri });

const client = new ApolloClient({ networkInterface, connectToDevTools: true });

const store = createStore(
    combineReducers({
        todos: todoReducer,
        apollo: client.reducer(),
    }),
    {},
    composeWithDevTools(
        applyMiddleware(client.middleware())
    ));

const App = () => (
    <ApolloProvider store={store} client={client}>
        <Root />
    </ApolloProvider>
);

export default App;
