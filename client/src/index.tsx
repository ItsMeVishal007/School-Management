import React from 'react';
import ReactDOM from 'react-dom';
import { SideBarContextProvider } from './context/sidebar';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <SideBarContextProvider>
      <App />
    </SideBarContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
