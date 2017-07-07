import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function requireAuthentication(Component) {

  class AuthenticatedComponent extends React.Component {

    componentWillMount () {
      this.checkAuth();
    }

    componentWillReceiveProps () {
      this.checkAuth();
    }

    checkAuth () {
      if (!this.props.isAuthenticated) {
        browserHistory.push('/login');
      }
    }

    render () {
      return this.props.isAuthenticated === true ? <Component {...this.props}/> : <div></div>;
    }
  }

  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
  });

  return connect(mapStateToProps)(AuthenticatedComponent);
}
