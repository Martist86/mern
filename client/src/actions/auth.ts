import axios from 'axios';
import { setAlert } from './alert';
import {
    REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, UPDATE_USER_ERROR,
    CLEAR_PROFILE, UPDATE_USER
} from './types';
import setAuthToken from '../utils/setAuthToken';
import {postAsync, putAsync} from "../utils/axiosServices";
import IUser from "../interfaces/IUser";

// Load User
export const loadUser = async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth');
    console.log('USER_LOADED', res);
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};
export const updateUser = (payload: IUser) => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }
    try {
        const res = await putAsync('/api/users/update-me', payload);
        dispatch({
            type: UPDATE_USER,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: UPDATE_USER_ERROR
        });
    }
};

// Register User
export const register = ({ firstName, lastName, email, password, companyName, companyDescription, tags, fopCode }) => async dispatch => {
  try {
    const res = await postAsync('/api/users', { firstName,lastName, email, password, companyName, companyDescription, tags, fopCode });;
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = (email, password) => async dispatch => {
  try {
    const res = await postAsync('/api/auth', { email, password });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser);
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout / Clear Profile
export const logout = () => {
    localStorage.removeItem('token');
  return dispatch => {
        dispatch({ type: CLEAR_PROFILE });
        dispatch({ type: LOGOUT });
    };
}
