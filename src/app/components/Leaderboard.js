import React from 'react';

class Leadboard extends React.Component {

  constructor (props) {
    super(props);
  }

  render() {


    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Total Pounds</th>
            <th>Total Meters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Taurenk</td>
            <td>1000</td>
            <td>1100</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Maria</td>
            <td>2000</td>
            <td>3000</td> </tr>
          <tr> <th scope="row">3</th>
            <td>Adam</td>
            <td>100</td>
            <td>300</td>
          </tr>
        </tbody>
      </table>
    );
  }
}


export default Leadboard;
