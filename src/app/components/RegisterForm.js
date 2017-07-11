import React from 'react';

import Form from 'react-bootstrap/lib/form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';


class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.emailInput = null;
    this.passwordInput = null;
    this.nameInput = null;
  }

  handleChange(e) {
    console.log(e);
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Form horizontal onSubmit={e => {
        e.preventDefault();
        let input = {
          name: this.nameInput.value,
          email: this.emailInput.value,
          password: this.passwordInput.value
        };
        this.props.submitRegister(input);
        e.target.reset();
      }}
      >

        <FormGroup controlId="formHorizontalEmail">
          <Col sm={12}>
            <FormControl
              type="text"
              placeholder="Name"
              inputRef={(input) => this.nameInput = input}
            />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col sm={12}>
            <FormControl
              type="text"
              placeholder="Email"
              inputRef={(input) => this.emailInput = input}
            />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col sm={12}>
            <FormControl
              type="password"
              placeholder="Password"
              inputRef={(input) => this.passwordInput = input}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={12}>
            <Button type="submit" bsStyle="primary" block>
            Register
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default LoginForm;
