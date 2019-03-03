import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
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
                component,
              } = route;

              const uniqueIdKey = name.replace(/\s+/gi, '-').toLowerCase();

              if (auth) {
                return <AuthRoute key={uniqueIdKey} path={path} exact={exact} component={component} />
              }

              return <Route key={uniqueIdKey} path={path} exact={exact} component={component} />
            })
          }
        </Switch>
      </Router>
    )
  }
}

export default hot(module)(App);
