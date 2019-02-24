import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// App Routes
import {AppRoutes, AuthRoute} from './routes';

export default class App extends Component {
  render() {
    return (
      <div>
          <Router>
            <Switch>
            {
              AppRoutes.map(({ name, route }, index) => {
                const {
                  auth,
                  exact,
                  path,
                  component,
                } = route;

                const uniqueKey = `${name.toLowerCase().replace(/\s+/gi, '-')}-${index}`;

                if (!auth) {
                  return (<Route key={`route-${uniqueKey}`} path={path} exact={exact} component={component} />);
                }

                return (<Route key={`authroute-${uniqueKey}`} path={path} exact={exact} component={component} />);
              })
            }
          </Switch>
        </Router>
      </div>
    )
  }
}
