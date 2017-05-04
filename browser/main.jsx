import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter, Link, Route, browserHistory, IndexRedirect } from 'react-router-dom';

import App from './app.js';
import Booth from './components/Booth/Booth';

import '../public/stylesheets/index.scss'

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <div>
        <Route exact path="/"  component={App}/>
        <Route path="/vr" component={Booth}/>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);
