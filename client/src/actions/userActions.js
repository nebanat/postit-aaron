import { browserHistory } from 'react-router';
import * as types from './actionTypes';
import * as api from '../utils/postItApi';

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
 * @param { user } user
 * @return { object } user
 *
 */
export function signUpUser(user) {
  return (dispatch) => {
    const { Materialize } = window;

    dispatch(authIsLoading(true));
    return api.signUp(user)
      .then((response) => {
        Materialize.toast(response.data.message, 2500, 'green');

        dispatch(authIsLoading(false));

        browserHistory.push({
          pathname: '/signin',
        });
      })
      .catch((error) => {
        Materialize.toast(error.response.data.message, 2500, 'red');

        dispatch(authIsLoading(false));
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
 * @param { user } user object
 * @return { Object } user
 */
export function signInUser(user) {
  return (dispatch) => {
    const { Materialize } = window;

    dispatch(authIsLoading(true));

    return api.signIn(user)
      .then((response) => {
        dispatch(signInSuccess(response.data.user));

        window.localStorage.setItem('POSTIT_ACCESS_TOKEN', response.data.token);
        window.localStorage.setItem('USER_ACCESS', response.data.user);
       
        dispatch(authIsLoading(false));

        Materialize.toast(response.data.message, 1500, 'green');
        // redirect to dashboard
        browserHistory.push({
          pathname: '/dashboard',
        });
      })
      .catch((error) => {
        Materialize.toast(error.response.data.message, 3000, 'red');
        dispatch(authIsLoading(false));
      });
  };
}
