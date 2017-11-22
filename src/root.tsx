import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { renderRoutes } from 'react-router-config';
import { routes } from './routing.config';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';

import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore } from 'redux';
import { todoReducer as todos } from './store';
import { routerReducer, ConnectedRouter } from 'react-router-redux';

const link = new HttpLink({ uri: 'http://localhost:8080/graphql' });
const cache: any = new InMemoryCache();

const client: any = new ApolloClient({
    link,
    cache,
    connectToDevTools: true
});

const store = createStore(
    combineReducers({
        todos,
        routing: routerReducer
    }),
    {},
    composeWithDevTools()
);

const history = createHistory();

export default () => (
    <ApolloProvider client={client}>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                {renderRoutes(routes)}
            </ConnectedRouter>
        </Provider>
    </ApolloProvider>
);
