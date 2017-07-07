
import React from 'react';
import { connect } from 'react-redux';
import StatsInputForm from '../components/StatsInputForm';
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
          <ul>
            <ul>
              {this.props.stats.map((stat, index)=> {
                return <li key={stat.id}>weight={stat.weight}, length={stat.length}m </li>;
              })}
            </ul>
          </ul>
        </div>
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    stats: state.stats.userStats,
    user: state.user
  };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    retrieveUserStats: userId => dispatch(statActions.fetchUserStats(userId)),
    postStats: stat => dispatch(statActions.postStats(stat))
  };
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(StatsPage);
