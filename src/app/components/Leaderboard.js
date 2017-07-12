import React from 'react';
import { Table } from 'antd';
import 'antd/lib/Table/style/css';

class Leadboard extends React.Component {

  constructor (props) {
    super(props);
  }

  render() {
    const columns = [
      {
        title: 'rank',
        dataIndex: 'rank',
        key: 'rank'
      },
      {
        title: 'name',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'total trips',
        dataIndex: 'totalTrips',
        key: 'totalTrips'
      }
    ];
    return (
      <Table columns={columns} dataSource={this.props.leaderboard} />
    );
  }
}


export default Leadboard;
