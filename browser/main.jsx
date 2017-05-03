import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Link, Route, browserHistory, IndexRedirect } from 'react-router-dom';
// import App from './app.js';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>Hello world!</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);
