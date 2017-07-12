
import APIClient from '../apiClient';

const FETCH_LEADERBOARD_SUCCESS = 'FETCH_LEADERBOARD_SUCCESS';


export const fetchLeaderboardSuccess = (leaderboard) => {
  return {
    type: FETCH_LEADERBOARD_SUCCESS,
    leaderboard
  };
};


export const fetchLeaderboard = () => {
  return (dispatch) => {
    let client = new APIClient();
    client.get('metrics/leaderboard', true)
      .then((data)=> {
        dispatch(fetchLeaderboardSuccess(data.results));
      })
      .catch((error)=> {
        console.log(error);
      });
  };
};
