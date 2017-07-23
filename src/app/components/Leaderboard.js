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
        title: 'Event 1 - Carry',
        dataIndex: '',
        key: ''
      },
      {
        title: 'Event 2 - Squat',
        dataIndex: '',
        key: ''
      },
      {
        title: 'Event 3 - Press',
        dataIndex: '',
        key: ''
      }
    ];
    //   <Table columns={columns} dataSource={this.props.leaderboard} />
    return (
      <Table columns={columns} />
    );
  }
}


export default Leadboard;
