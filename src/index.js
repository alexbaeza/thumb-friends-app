import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter, Redirect, Route, Switch,
} from 'react-router-dom';

/* eslint-disable import/no-unresolved */
import 'assets/vendor/font-awesome/css/font-awesome.min.css';
import 'assets/scss/style.scss?v1.1.0';

import Home from './views/home/Home';
import PATHS from './utils/paths';
import Build from './views/build/Build';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path={PATHS.HOME} exact render={(props) => <Home {...props} />} />
      <Route
        path={PATHS.BUILD}
        exact
        render={(props) => <Build {...props} />}
      />
      <Route
        path={PATHS.BUILD_FROM_ID}
        exact
        render={(props) => <Build {...props} />}
      />
      <Redirect to={PATHS.HOME} />
    </Switch>
  </HashRouter>,
  document.getElementById('root'),
);
