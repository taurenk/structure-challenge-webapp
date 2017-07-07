import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './containers/HomePage';
import App from './containers/App';
import Login from './containers/LoginPage';
import Logout from './containers/Logout';
import Stats from './containers/StatsPage';
import requireAuthentication from './components/AuthComponent';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/stats" component={requireAuthentication(Stats)}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/logout" component={Logout}></Route>
  </Route>
);