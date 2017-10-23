import { browserHistory } from 'react-router';
import * as types from './actionTypes';
import * as api from '../utils/post-api';

/**
 *
 * @param {bool} bool
 * @return { authLoadingObject } authLoadingObject
 */
export function authIsLoading(bool) {
  return {
    type: types.AUTH_IS_LOADING,
    bool
  };
}
/**
 *
 * @param { signUpSucessMessage } signUpSuccessMessage
 * @return { object } action
 */
export function signUpSuccess(signUpSuccessMessage) {
  return {
    type: types.SIGN_UP_SUCCESS,
    signUpSuccessMessage
  };
}
/**
 *
 * @param { signUpErrorMessage } signUpErrorMessage
 * @return {object} action
 */
export function signUpFailure(signUpErrorMessage) {
  return {
    type: types.SIGN_UP_FAILURE,
    signUpErrorMessage
  };
}

/**
 *
 * @param { username } username
 * @param { email } email
 * @param { password } password
 * @return { object } user
 *
 */
export function signUpUser(username, email, password) {
  return (dispatch) => {
    const Materialize = window.Materialize;

    dispatch(authIsLoading(true));
    api.signUp(username, email, password)
      .then((response) => {
        dispatch(signUpSuccess(response.data.message));

        Materialize.toast(response.data.message, 2500, 'green');

        dispatch(authIsLoading(false));

        browserHistory.push({
          pathname: '/signin',
        });
      })
      .catch((error) => {
        if (error) {
          dispatch(signUpFailure(error.response.data.message));

          Materialize.toast(error.response.data.message, 2500, 'green');

          dispatch(authIsLoading(false));
        }
      });
  };
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
 * @param { signInErrorMessage } signInErrorMessage
 * @return {object} action
 */
export function signInFailure(signInErrorMessage) {
  return {
    type: types.SIGN_IN_FAILURE,
    signInErrorMessage
  };
}


/**
 *
 * @param { username } username
 * @param { password } password
 * @return { Object } user
 */
export function signInUser(username, password) {
  return (dispatch) => {
    const Materialize = window.Materialize;

    dispatch(authIsLoading(true));

    api.signIn(username, password)
      .then((response) => {
        dispatch(signInSuccess(response.data.user));

        localStorage.setItem('POSTIT_ACCESS_TOKEN', response.data.token);

        dispatch(authIsLoading(false));

        Materialize.toast(response.data.message, 3000, 'green');
        // redirect to dashboard
        browserHistory.push({
          pathname: '/dashboard',
        });
      })
      .catch((error) => {
        if (error) {
          dispatch(signInFailure(error.response.data.message));

          Materialize.toast(error.response.data.message, 3000, 'red');

          dispatch(authIsLoading(false));
        }
      });
  };
}
