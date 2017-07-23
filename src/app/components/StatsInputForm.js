import React from 'react';
//import moment from 'moment';

import { Form, Icon, Input, Button, DatePicker, Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
import 'antd/lib/form/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/date-picker/style/css';


class StatsInputForm extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const selectedEvent = this.props.form.getFieldValue('event');

    let handleSelectChange = (value) => {
      this.props.form.setFieldsValue({ event: value });
    };

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
            this.props.form.resetFields();
          }
        });
      }}
      className="login-form" >

        <FormItem>
          {getFieldDecorator('event', {
            rules: [{ required: true, message: 'Please select an event.' }],
            initialValue: 'sandbagCarry'
          }
          )(
            <Select
              placeholder="Select an event"
              onChange={handleSelectChange}
            >
              <Option value="sandbagSquat">Sandbag Squat</Option>
              <Option value="sandbagPress">Sandbag Press</Option>
              <Option value="sandbagCarry">Sandbag Carry</Option>
            </Select>
          )}
        </FormItem>


        <FormItem>
          {getFieldDecorator('weight', {
            rules: [{ required: true, message: 'Please input sandbag used!' }]
          })(
            <Input prefix={<Icon style={{ fontSize: 13 }} />} placeholder="Sandbag Weight" />
          )}
        </FormItem>

        {selectedEvent === 'sandbagCarry' ? (

          <FormItem>
            {getFieldDecorator('length', {
              rules: [{ required: true, message: 'Please input carry length' }]
            })(
              <Input prefix={<Icon style={{ fontSize: 13 }} />} placeholder="Carry Length" />
            )}
          </FormItem>

        ) : null }

        <FormItem>
          {getFieldDecorator('reps', {
            rules: [{ required: true, message: 'Please input number of reps' }]
          })(
            <Input prefix={<Icon style={{ fontSize: 13 }} />} type="user" placeholder="Number of reps OR number of trips" />
          )}
        </FormItem>


        <FormItem >
          {getFieldDecorator('date', {
            rules: [{ required: true, message: 'Please input number of reps' }]
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
