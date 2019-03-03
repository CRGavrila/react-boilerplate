import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

class AuthRoute extends Component {
    static propTypes = {
        path: PropTypes.string,
        exact: PropTypes.bool,
    };

    static defaultProps = {
        path: null,
        exact: false,
    }

    render() {
        const {
            path,
            exact,
            component,
        } = this.props;

        return <Route path={path} exact={exact} component={component} />
    }
}

export default AuthRoute;
