const intialState = {
  isAuthenticated: false,
  refreshToken: null,
  token: null,
  error: null,
  authUser: {}
};

export const authReducer = (state = intialState, action) => {

  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        token: action.auth.token,
        authUser: action.auth.user,
        error: null
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        error: action.error
      };
    case 'LOGOUT_SUCCESS':
      return intialState;
    default:
      return state;
  }
};
