
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import LoginForm from '../components/LoginForm';

import * as authActions from '../actions/authActions';


class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  submitLogin(input) {
    this.props.attemptLogin(input);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
          <LoginForm submitLogin={this.submitLogin.bind(this)}/>
          <p>Need an account? <Link to="/register">Register Here</Link></p>
        </div>
        <div className="col-md-4">
        </div>
        
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.isAuthenticated,
    authError: state.authError
  };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: input => dispatch(authActions.attemptLogin(input))
  };
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Login);
