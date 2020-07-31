import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

interface IProps {
      isAuthenticated: boolean
      loading: boolean
}

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
