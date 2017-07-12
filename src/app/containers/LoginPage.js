
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import LoginForm from '../components/LoginForm';
import * as authActions from '../actions/authActions';

import { Row, Col } from 'antd';
import 'antd/lib/row/style/css';


class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  submitLogin(input) {
    this.props.attemptLogin(input);
  }

  render() {
    return (
      <Row >
        <Col span={8}>
        </Col>
        <Col span={8}>
          <LoginForm submitLogin={this.submitLogin.bind(this)}/>
          <p> <Link to="/register">Need an account? Register now</Link></p>
        </Col>
        <Col span={8}>
        </Col>
      </Row>
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
