
import React from 'react';
import { connect } from 'react-redux';
import StatsDisplay from '../components/StatsDisplay';
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
        <Col span={6}>
        </Col>
        <Col span={12}>
          <h3>My Stats</h3>
          <StatsDisplay stats={this.props.stats} />
        </Col>
        <Col span={6}>
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
