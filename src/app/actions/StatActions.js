import APIClient from '../apiClient';

const FETCH_STATS_SUCCESS = 'FETCH_STATS_SUCCESS';
const POST_STATS_SUCCESS = 'POST_STATS_SUCCESS';

export const fetchUserStatsSuccess = (stats) => {
  return {
    type: FETCH_STATS_SUCCESS,
    stats
  };
};

export const postStatsSuccess = (stat) => {
  return {
    type: POST_STATS_SUCCESS,
    stat
  };
};

export const fetchUserStats = (userId) => {
  return (dispatch) => {
    let client = new APIClient();
    client.get('stats/' + userId, true)
      .then((data)=> {
        dispatch(fetchUserStatsSuccess(data.results));
      })
      .catch((error)=> {
        console.log(error);
      });
  };
};

export const postStats = (stat) => {
  return (dispatch) => {
    let client = new APIClient();
    client.post('stats', stat, true)
      .then(data => {
        dispatch(postStatsSuccess(data.result));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
