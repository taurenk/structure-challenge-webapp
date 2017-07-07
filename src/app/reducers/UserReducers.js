
const intialState = {
  username: null,
  email: null,
  id: null,
  userError: null
};

export const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        ...action.user,
        id: action.user._id
      };
    case 'FETCH_USER_FAILURE':
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
