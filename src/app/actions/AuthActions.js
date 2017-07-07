import APIClient from '../apiClient';
import jwt_decode from 'jwt-decode';
import { setCookie, readCookie, removeCookie } from '../utils';
import { browserHistory } from 'react-router';
import { fetchUser } from './UserActions';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';

const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const JWT_COOKIE_NAME = 'structurewebapp';


export const loginSuccess = (auth) => {
  return {
    type: LOGIN_SUCCESS,
    auth
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILED
  };
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};


export const login = (token) => {
  return dispatch => {
    let authData = {
      token,
      user: jwt_decode(token)
    };
    setCookie(JWT_COOKIE_NAME, token, 365);
    dispatch(loginSuccess(authData));
    dispatch(fetchUser(authData.user.id));
    browserHistory.push('/');
  };
};

export const attemptLogin = (payload) => {
  return (dispatch) => {
    let client = new APIClient();
    client.post('auth/login', payload)
      .then((data)=> {
        dispatch(login(data.token));
      })
      .catch((error)=> {
        console.log(error);
        dispatch(loginFailure('Login Failed.'));
      });
  };
};


export const attemptLogout = () => {
  removeCookie(JWT_COOKIE_NAME);
  return (dispatch) => {
    dispatch(logoutSuccess());
  };
};
