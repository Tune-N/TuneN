import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


import App from './app.jsx';
import store from './store';

import '../public/stylesheets/index.scss';
import '../public/stylesheets/nav.scss';


/* global document */
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
