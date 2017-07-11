
import React from 'react';
import { connect } from 'react-redux';
import RegisterForm from '../components/RegisterForm';
import * as userActions from '../actions/userActions';


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
      <div className="row">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
          <h2>Registration</h2>
          <RegisterForm submitRegister={this.submitRegister.bind(this)}/>
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
