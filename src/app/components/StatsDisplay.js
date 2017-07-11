import React from 'react';
import Table from 'react-bootstrap/lib/Table';

class StatsTable extends React.Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Pounds</th>
            <th>Trips</th>
            <th>Meters</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {this.props.stats.map((stat, index)=> {
            return <tr>
              <td>{stat.id}</td>
              <td>{stat.weight}</td>
              <td>{stat.trips}</td>
              <td>{stat.length} meters</td>
              <td>{stat.date}</td>
            </tr>;
          })}
        </tbody>
      </Table>
    );
  }
}


export default StatsTable;
