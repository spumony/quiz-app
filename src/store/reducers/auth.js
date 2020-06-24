import { AUTH_LOGOUT, AUTH_SUCCESS } from '../actions/actionTypes';

const initialState = {
  token: null,
};

const authSuccess = (state, { payload: { token } }) => ({
  ...state,
  token,
});

const authLogout = (state) => ({
  ...state,
  token: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return authSuccess(state, action);

    case AUTH_LOGOUT:
      return authLogout(state);

    default:
      return state;
  }
};
