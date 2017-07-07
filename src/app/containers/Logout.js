
import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as authActions from '../actions/authActions';

class Logout extends React.Component {

  constructor(props) {
    super(props);
    this.props.attemptLogout();
    browserHistory.push('/');
  }

  render() {
    return (
      <div></div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogout: () => dispatch(authActions.attemptLogout())
  };
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Logout);
