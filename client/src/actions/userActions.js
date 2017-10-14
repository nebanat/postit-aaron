import * as types from './actionTypes';
import { signUp } from '../utils/post-api';

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
  return dispatch => signUp(username, email, password)
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
 * @param {email} email
 * @param {password} password
 * @return {Object} user
 */
export function signInUser(email, password) {
  return {
    type: types.SIGN_IN_USER,
    email,
    password
  };
}
