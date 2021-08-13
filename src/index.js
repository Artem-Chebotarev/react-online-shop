import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import 'macro-css';

import App from './App';
import ShopContextProvider from './context/shopContext';

ReactDOM.render(
  <React.StrictMode>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
