import React from 'react';
import moment from 'moment';

/*
import DatePicker from 'react-bootstrap-date-picker';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
*/

class StatsInputForm extends React.Component {

  constructor (props) {
    super(props);
  }

  render() {

    let meters = 0;
    let pounds = 0;
    let trips = 0;

    return (
      <form onSubmit={e => {
        e.preventDefault();
        // Assemble data into object
        var input = {
          length: meters.value,
          weight: pounds.value,
          trips: trips.value,
          uid: this.props.userId
        };
        // Call method from parent component to handle submission
        this.props.submitStats(input);
        // Reset form
        e.target.reset();
      }}
      className="form-horizontal">

        <div className="input-group">
          <label className="col-sm-3 control-label">Meters: </label>
          <div className="col-sm-9">
            <input
              type="text"
              name="meters"
              ref={node => meters = node}
              className="form-control" />
          </div>
        </div>

        <br/>

        <div className="input-group">
          <label className="col-sm-3 control-label">Pounds: </label>
          <div className="col-sm-9">
            <input
              type="text"
              name="pounds"
              ref={node => pounds = node}
              className="form-control" />
          </div>
        </div>

         <br/>
         
        <div className="input-group">
          <label className="col-sm-3 control-label">Trips: </label>
          <div className="col-sm-9">
            <input
              type="text"
              name="trips"
              ref={node => trips = node}
              className="form-control" />
          </div>
        </div>


        <div className="input-group">
          <div className="col-sm-12">
            <input type="submit" className="btn btn-default"/>
          </div>
        </div>

      </form>


    );
  }
}


export default StatsInputForm;
