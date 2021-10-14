import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './gql/client';

import { SideBarContextProvider } from './context/sidebar';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <SideBarContextProvider>
        <App />
      </SideBarContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
