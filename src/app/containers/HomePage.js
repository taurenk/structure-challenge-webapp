import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>

        {this.props.isAuthenticated ? (
          <div>
            <h2>Welcome {this.props.user.name}</h2>

            <p>To check/submits stats, click <Link to="/stats">here</Link></p>
            <p>To view the current leaderboard, click <Link to="/leaderboard">here</Link></p>
          </div>
        ) :
          <div>
            <h2>Welcome to the NECF Structure Challenge site!</h2>
          Please <Link to="/login">Login</Link> or <Link to="/register">Register</Link>!
          </div>

        }
      </div>

    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.user
  };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  };
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Home);
