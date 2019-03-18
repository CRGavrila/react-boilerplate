import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// App Routes
import {
  AppRoutes,
  AuthRoute
} from './routes';

import { MainLayout } from './layouts';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {
            AppRoutes.map(({ route, name }) => {
              const {
                auth,
                exact,
                path,
                layout,
                component,
              } = route;

              const uniqueIdKey = name.replace(/\s+/gi, '-').toLowerCase();

              if (auth) {
                return <AuthRoute key={uniqueIdKey} path={path} exact={exact} component={component} />
              }

              if (layout) {
                return <MainLayout key={uniqueIdKey} route={route} />
              }

              return <Route key={uniqueIdKey} path={path} exact={exact} component={component} />
            })
          }
        </Switch>
      </Router>
    )
  }
}

export default hot(App);
