import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';


import App from './app';
import store from './store';

import '../public/stylesheets/index.scss';
import '../public/stylesheets/nav.scss';


/* global document */
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
