import React from 'react';

import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;
import 'antd/lib/form/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/input/style/css';


class RegisterForm extends React.Component {

  constructor(props) {
    super(props);
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
            this.props.submitRegister(values);
          }
        });
        e.target.reset();
      }}
      className="login-form" >

        <FormItem>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>

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
            Register
          </Button>
        </FormItem>

      </Form>
    );
  }
}

export default Form.create()(RegisterForm);
