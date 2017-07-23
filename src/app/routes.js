import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './containers/HomePage';
import App from './containers/App';
import Login from './containers/LoginPage';
import Logout from './containers/Logout';
import Register from './containers/RegisterPage';
import StatsDisplay from './containers/StatsDisplayPage';
import StatsEntry from './containers/StatsEntryPage';
import Leaderboard from './containers/LeaderboardPage';
import requireAuthentication from './components/AuthComponent';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/stats" component={requireAuthentication(StatsDisplay)}></Route>
    <Route path="/stats-entry" component={requireAuthentication(StatsEntry)}></Route>
    <Route path="/leaderboard" component={requireAuthentication(Leaderboard)}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/register" component={Register}></Route>
    <Route path="/logout" component={Logout}></Route>
  </Route>
);