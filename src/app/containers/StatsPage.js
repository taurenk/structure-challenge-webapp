
import React from 'react';
import { connect } from 'react-redux';
import StatsInputForm from '../components/StatsInputForm';
import StatsDisplay from '../components/StatsDisplay';
import * as statActions from '../actions/StatActions';

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
      <div className="row">
        <div className="col-sm-6">
          <h3>Input Stats</h3>
          <StatsInputForm submitStats={this.submitStats.bind(this)} userId={this.props.user.id} />
        </div>
        <div className="col-sm-6">
          <h3>My Stats</h3>
          <StatsDisplay stats={this.props.stats} />
        </div>
      </div>
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
