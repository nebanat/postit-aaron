import { browserHistory } from 'react-router';
import * as types from './actionTypes';
import * as api from '../utils/post-api';

/**
 *
 * @param {userSucessMessage} userSuccessMessage
 * @return { object } action
 */
export function signUpSuccess(userSuccessMessage) {
  return {
    type: types.SIGN_UP_SUCCESS,
    userSuccessMessage
  };
}
/**
 *
 * @param {errorMessage} userErrorMessage
 * @return {object} action
 */
export function signUpFailure(userErrorMessage) {
  return {
    type: types.SIGN_UP_FAILURE,
    userErrorMessage
  };
}

/**
 *
 * @param {username} username
 * @param {email} email
 * @param {password} password
 * @return {object} user
 *
 */
export function signUpUser(username, email, password) {
  return dispatch => api.signUp(username, email, password)
    .then((response) => {
      dispatch(signUpSuccess(response.data.message));
    })
    .catch((error) => {
      if (error) {
        dispatch(signUpFailure(error.response.data.message));
      }
    });
}
/**
 *
 * @param {authenticatedUser} authenticatedUser
 * @return {object} action
 */
export function signInSuccess(authenticatedUser) {
  return {
    type: types.SIGN_IN_SUCCESS,
    authenticatedUser
  };
}
/**
 *
 * @param {message} message
 * @return {object} action
 */
export function signInFailure(message) {
  return {
    type: types.SIGN_IN_FAILURE,
    message
  };
}


/**
 *
 * @param {username} username
 * @param {password} password
 * @return {Object} user
 */
export function signInUser(username, password) {
  return dispatch => api.signIn(username, password)
    .then((response) => {
      dispatch(signInSuccess(response.data.user));
      localStorage.setItem('POSTIT_ACCESS_TOKEN', response.data.token);

      // redirect to dashboard
      browserHistory.push({
        pathname: '/dashboard',
      });
    })
    .catch((error) => {
      if (error) {
        dispatch(signInFailure(error.response.data.message));
      }
    });
}
