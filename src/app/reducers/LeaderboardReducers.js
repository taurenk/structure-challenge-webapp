
const intialState = [];

export const leaderboardReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'FETCH_LEADERBOARD_SUCCESS':
      return action.leaderboard;
    default:
      return state;
  }
};
