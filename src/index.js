import React from 'react';
import ReactDOM from 'react-dom';
import {
  MemoryRouter, Route, Switch, Redirect,
} from 'react-router-dom';

/* eslint-disable import/no-unresolved */
import 'assets/vendor/font-awesome/css/font-awesome.min.css';
import 'assets/scss/style.scss?v1.1.0';

import Home from './views/home/Home';
import PATHS from './utils/paths';
import Build from './views/build/Build';

ReactDOM.render(
  <MemoryRouter>
    <Switch>
      <Route path={PATHS.HOME} exact component={Home} />
      <Route
        path={PATHS.BUILD}
        component={Build}
      />
      <Redirect to={PATHS.HOME} />
    </Switch>
  </MemoryRouter>,
  document.getElementById('root'),
);
