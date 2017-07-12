import React from 'react';
import { connect } from 'react-redux';
import Leaderboard from '../components/Leaderboard';
import * as leaderboardActions from '../actions/LeaderboardActions';

class LeaderboardPage extends React.Component {

  constructor(props) {
    super(props);
    this.props.getLeaderboard();
  }

  render() {
    return (
      <div>
        <h1>Leaderboard</h1>
        <Leaderboard leaderboard={this.props.leaderboard} />
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    leaderboard: state.leaderboard
  };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    getLeaderboard: () => dispatch(leaderboardActions.fetchLeaderboard())
  };
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(LeaderboardPage);
