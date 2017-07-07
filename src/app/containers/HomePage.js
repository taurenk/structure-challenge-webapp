import React from 'react';
import { connect } from 'react-redux';
import Leaderboard from '../components/Leaderboard';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Leaderboard</h1>
        <Leaderboard />
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
  };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  };
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Home);
