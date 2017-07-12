import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Layout, Menu } from 'antd';
import { Row, Col, Icon } from 'antd';
const { Content, Footer } = Layout;
import 'antd/lib/menu/style/css';
import 'antd/lib/row/style/css';
import '../css/header.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 'home'
    };

  }

  handleClick (e) {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  }

  render() {

    return (

      <div>
        <div id="header">
          <Link to={'/'} id="logo">
            <img alt="logo" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" />
            <span>NECF Challenge</span>
          </Link>

          <Menu
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
            id="nav"
          >
            <Menu.Item key="home">
              <Link to="/">Home</Link>
            </Menu.Item>

            {this.props.isAuthenticated ? (
              <Menu.Item key="leaderboard">
                <Link to="/leaderboard">Leaderboard</Link>
              </Menu.Item>
            ) : null}

            {this.props.isAuthenticated ? (
              <Menu.Item key="stats">
                <Link to="/stats">My Stats</Link>
              </Menu.Item>
            ) : null}


            {this.props.isAuthenticated ? (
              <Menu.Item key="logout">
                <Link to="/logout">Logout</Link>
              </Menu.Item>
            ) : (
              <Menu.Item key="login">
                <Link to="/login">Login</Link>
              </Menu.Item>
            )}


          </Menu>

        </div>

        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            {this.props.children}
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>


          <Row>
            <Col span={12}>
              <b><Icon type="github" /> GitHub</b>
              <ul>
                <li>
                  <a target="_blank " href="https://github.com/taurenk/structure-challenge-webapp"><span>Repository</span></a>
                </li>
                <li>
                  <a target="_blank " href="https://github.com/taurenk/structure-challenge-api"><span>API</span></a>
                </li>
              </ul>
            </Col>
            <Col span={12}>
              <b><Icon type="link" /> About</b>
              <ul>
                <li>
                  Please contact tauren.kristich@gmail.com
                </li>
              </ul>
            </Col>
          </Row>


        </Footer>

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
