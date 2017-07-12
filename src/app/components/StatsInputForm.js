import React from 'react';
//import moment from 'moment';

import { Form, Icon, Input, Button, DatePicker } from 'antd';
const FormItem = Form.Item;
import 'antd/lib/form/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/date-picker/style/css';


class StatsInputForm extends React.Component {

  constructor (props) {
    super(props);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            let input = {
              ...values,
              date: values['date'].format('YYYY-MM-DD'),
              uid: this.props.userId
            };
            console.log('Received values of form: ', input);
            this.props.submitStats(input);
          }
        });
        e.target.reset();
      }}
      className="login-form" >

        <FormItem>
          {getFieldDecorator('weight', {
            rules: [{ required: true, message: 'Please input sandbag used!' }]
          })(
            <Input prefix={<Icon style={{ fontSize: 13 }} />} placeholder="Sandbag Weight" />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('length', {
            rules: [{ required: true, message: 'Please input carry length' }]
          })(
            <Input prefix={<Icon style={{ fontSize: 13 }} />} placeholder="Carry Length" />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('trips', {
            rules: [{ required: true, message: 'Please input number of trips made' }]
          })(
            <Input prefix={<Icon style={{ fontSize: 13 }} />} type="user" placeholder="# of Trips" />
          )}
        </FormItem>

        <FormItem >
          {getFieldDecorator('date', {
            type: 'object', required: true, message: 'Please select date!'
          })(
            <DatePicker />
          )}
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
            Submit Stats
          </Button>
        </FormItem>

      </Form>

    );
  }
}


export default Form.create()(StatsInputForm);
