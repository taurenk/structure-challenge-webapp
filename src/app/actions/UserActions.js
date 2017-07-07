import APIClient from '../apiClient';
import { browserHistory } from 'react-router';

const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    user
  };
};

export const fetchUserFailure = () => {
  return {
    type: FETCH_USER_FAILURE
  };
};


export const fetchUser = (userId) => {
  return (dispatch) => {
    let client = new APIClient();
    client.get('users/' + userId, true)
      .then((data)=> {
        dispatch(fetchUserSuccess(data.result));
        browserHistory.push('/');
      })
      .catch((error)=> {
        console.log(error);
      });
  };
};
