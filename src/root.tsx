import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';

import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { store, history } from './store';
import { routes } from './routing.config';
import { apiUrl as uri } from './config';

const link = new HttpLink({ uri });
const cache: any = new InMemoryCache();

export const client: any = new ApolloClient({
    link,
    cache,
    connectToDevTools: true
});

export default () => (
    <ApolloProvider client={client}>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                {renderRoutes(routes)}
            </ConnectedRouter>
        </Provider>
    </ApolloProvider>
);
