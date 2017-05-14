import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Body from './components/Body';
import Navbar from './components/Navbar';
import djBoothContainer from './components/djBooth/containers/djBoothContainer';
import { whoami } from './reducers/auth';
import store from './store';

const App = () => {
  store.dispatch(whoami());
  return (
    <div id="main" className="container-fluid">
      <Switch>
        <Route exact path="/vr" component={djBoothContainer} />
        <Route path="/" component={Body} />
      </Switch>
    </div>
  );
};

export default App;
