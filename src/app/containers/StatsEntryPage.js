
import React from 'react';
import { connect } from 'react-redux';
import StatsInputForm from '../components/StatsInputForm';
import * as statActions from '../actions/StatActions';
import { Row, Col } from 'antd';
import 'antd/lib/menu/style/css';


class StatsPage extends React.Component {

  constructor(props) {
    super(props);
    this.props.retrieveUserStats(this.props.user._id);
  }

  submitStats(input) {
    this.props.postStats(input);
  }

  render() {
    return (
      <Row>
        <Col span={8}>
        </Col>
        <Col span={8}>
          <h3>Input Stats</h3>
          <StatsInputForm submitStats={this.submitStats.bind(this)} userId={this.props.user.id} />
        </Col>
        <Col span={8}>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stats: state.stats.userStats,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    retrieveUserStats: userId => dispatch(statActions.fetchUserStats(userId)),
    postStats: stat => dispatch(statActions.postStats(stat))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatsPage);
