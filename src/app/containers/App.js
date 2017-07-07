import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.test = <span>{props.user.email} <img src="https://pixel.nymag.com/imgs/daily/selectall/2017/03/01/01-twitter-egg.w710.h473.2x.jpg/"/> </span>;
  }

  render() {

    return (

      <div>
        <Navbar inverse staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a><Link to="/">Structure Challenge</Link></a>
            </Navbar.Brand>
          </Navbar.Header>
        
          <Nav pullRight>
            <NavItem eventKey={1}> <Link to="/stats">My Stats</Link> </NavItem>
            {this.props.isAuthenticated ? (
              <NavDropdown eventKey={3} title={this.props.user.email} id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}><Link to="/logout">Logout</Link> </MenuItem>
              </NavDropdown>
            ) : (
              <NavItem eventKey={4}><Link to="/login">Login</Link></NavItem>
            )}

          </Nav>

        </Navbar>

        <div className="container">
          {/* Each smaller components */}
          {this.props.children}
        </div>
      </div>
    );
  }

}

function mapStateToProps(state, props) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    authUser: state.auth.authUser,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
