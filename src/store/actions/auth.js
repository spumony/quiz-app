import axios from 'axios';
import { AUTH_LOGOUT, AUTH_SUCCESS } from './actionTypes';

export const authSuccess = token => ({
  type: AUTH_SUCCESS,
  payload: {
    token,
  },
});

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('expirationDate');

  return {
    type: AUTH_LOGOUT,
  };
};

export const autoLogout = time => dispatch => {
  setTimeout(() => {
    dispatch(logout());
  }, time * 1000);
};

export const auth = (email, password, isLogin) => async dispatch => {
  const authData = {
    email,
    password,
    returnSecureToken: true,
  };

  let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAKHOLs5WgSMxc41nqOk7FKiNd090V4Qp0';

  if (isLogin) {
    url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAKHOLs5WgSMxc41nqOk7FKiNd090V4Qp0';
  }

  const response = await axios.post(url, authData);
  const { data } = response;

  const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);

  localStorage.setItem('token', data.idToken);
  localStorage.setItem('userId', data.localId);
  localStorage.setItem('expirationDate', expirationDate);

  dispatch(authSuccess(data.idToken));
  dispatch(autoLogout(data.expiresIn));
};

export const autoLogin = () => dispatch => {
  const token = localStorage.getItem('token');
  if (!token) {
    dispatch(logout());
  } else {
    const expirationDate = new Date(localStorage.getItem('expirationDate'));
    if (expirationDate <= new Date()) {
      dispatch(logout());
    } else {
      dispatch(authSuccess(token));
      dispatch(autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000));
    }
  }
};
