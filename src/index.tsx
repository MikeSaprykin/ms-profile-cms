import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo';

const uri = 'http://localhost:8080/graphql';
const networkInterface = createNetworkInterface({ uri });

const client = new ApolloClient({ networkInterface, connectToDevTools: true });

ReactDOM.render(
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
