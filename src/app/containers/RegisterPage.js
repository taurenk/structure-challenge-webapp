
import React from 'react';
import { connect } from 'react-redux';
import RegisterForm from '../components/RegisterForm';
import * as userActions from '../actions/userActions';
import { Row, Col } from 'antd';
import 'antd/lib/row/style/css';

class Register extends React.Component {

  constructor(props) {
    super(props);
    // if auth-> redirect.
  }

  submitRegister(input) {
    this.props.registeruser(input);
  }

  render() {
    return (
      <Row >
        <Col span={8}>
        </Col>
        <Col span={8}>
          <RegisterForm submitRegister={this.submitRegister.bind(this)}/>
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
    isAuthenticated: state.isAuthenticated
  };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    registeruser: userData => dispatch(userActions.registerUser(userData))
  };
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Register);
