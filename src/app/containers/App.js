import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Footer from '../components/Footer';

const style = {
  width: 'auto',
  'maxWidth': '900px',
  'marginLeft': 'auto',
  'marginRight': 'auto',
  'paddingBottom': '150'
};


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>
        <Navbar staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">NECF Structure Challenge</Link>
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

        <div className="container" style={style}>
          {/* Each smaller components */}
          {this.props.children}
        </div>
        <Footer />
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
