import React from 'react';
import { Table } from 'antd';
import 'antd/lib/Table/style/css';

class StatsTable extends React.Component {

  constructor (props) {
    super(props);
  }

  render() {

    const columns = [
      {
        title: 'pounds',
        dataIndex: 'weight',
        key: 'weight'
      },
      {
        title: 'Trips',
        dataIndex: 'trips',
        key: 'trips'
      },
      {
        title: 'Meters',
        dataIndex: 'length',
        key: 'length'
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date'
      }
    ];


    return (
      <Table columns={columns} dataSource={this.props.stats} />
    );
  }
}


export default StatsTable;
