import { combineReducers } from 'redux';
import { authReducer } from './AuthReducers';
import { userReducer } from './UserReducers';
import { statReducer } from './StatReducers';
import { leaderboardReducer } from './LeaderboardReducers';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  stats: statReducer,
  leaderboard: leaderboardReducer
});
