import React from 'react';

import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;
import 'antd/lib/form/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/input/style/css';


class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.emailInput = null;
    this.passwordInput = null;
  }

  handleChange(e) {
    console.log(e);
    this.setState({ value: e.target.value });

  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            this.props.submitLogin(values);
          }
        });

        console.log(this.props.form);
        e.target.reset();
      }}
      className="login-form" >
      
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email' }]
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Email" />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
            Log in
          </Button>
        </FormItem>

      </Form>
    );
  }
}

export default Form.create()(LoginForm);
