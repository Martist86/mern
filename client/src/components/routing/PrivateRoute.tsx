import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { IAppState } from '../../reducers'

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
      // isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
        <Component {...props} />
    }
  />
);

const mapStateToProps = (state: IAppState) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
