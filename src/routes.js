import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PATHS from './utils/paths';
import Home from './views/home/Home';
import Build from './views/build/Build';
import App from './App';

const Routes = () => (
  <App>
    <Switch>
      <Route exact path={PATHS.HOME} component={Home} />
      <Route
        exact
        path={PATHS.BUILD}
        component={Build}
      />
      <Route
        path={PATHS.BUILD_FROM_ID}
        component={Build}
      />
      <Redirect to={PATHS.HOME} />
    </Switch>
  </App>
);

export default Routes;
