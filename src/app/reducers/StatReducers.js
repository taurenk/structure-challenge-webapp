
const intialState = {
  userStats: []
};

export const statReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'FETCH_STATS_SUCCESS':
      return {
        userStats: action.stats
      };
    case 'POST_STATS_SUCCESS':
      return {
        userStats: [
          ...state.userStats,
          action.stat
        ]
      };
    default:
      return state;
  }
};
