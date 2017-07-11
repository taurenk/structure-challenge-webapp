import React from 'react';
import moment from 'moment';
import Form from 'react-bootstrap/lib/form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


class StatsInputForm extends React.Component {

  constructor (props) {
    super(props);
    this.pounds = 0;
    this.meters = 0;
    this.trips = 0;
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }


  render() {
    return (
      <Form horizontal onSubmit={e => {
        e.preventDefault();
        let input = {
          length: this.meters.value,
          weight: this.pounds.value,
          trips: this.trips.value,
          date: this.state.startDate,
          uid: this.props.userId
        };
        this.props.submitStats(input);
        e.target.reset();
      }}
      >
        <FormGroup controlId="formHorizontalEmail">
          <Col sm={12}>
            <FormControl
              type="text"
              placeholder="pounds"
              inputRef={(input) => this.pounds = input}
            />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col sm={12}>
            <FormControl
              type="text"
              placeholder="meters"
              inputRef={(input) => this.meters = input}
            />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col sm={12}>
            <FormControl
              type="text"
              placeholder="trips made"
              inputRef={(input) => this.trips = input}
            />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col sm={12}>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>


        <FormGroup>
          <Col sm={12}>
            <Button type="submit" bsStyle="primary" block>
            Submit stats
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}


export default StatsInputForm;
