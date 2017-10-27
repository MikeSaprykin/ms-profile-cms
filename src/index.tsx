import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo';
import { todoReducer } from './store';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

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

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
      <App />
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
