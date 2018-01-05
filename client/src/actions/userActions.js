import { browserHistory } from 'react-router';
import * as types from './actionTypes';
import * as api from '../utils/postItApi';

/**
 * @description handles authentication loading
 *
 * @param { boolean } bool - contains loader state boolean
 *
 * @return { object } auth loader - returns loading action
 */
export const authIsLoading = bool => ({
  type: types.AUTH_IS_LOADING,
  bool
});


/**
 * @description handles sign up user
 *
 * @param { object } user - holds user details
 *
 * @return { object } user - returns sign up user action
 *
 */
export const signUpUser = user => (dispatch) => {
  const materialize = window.Materialize;

  dispatch(authIsLoading(true));
  return api.signUp(user)
    .then((response) => {
      materialize.toast(response.data.message, 2500, 'green');

      dispatch(authIsLoading(false));

      browserHistory.push({
        pathname: '/signin',
      });
    })
    .catch((error) => {
      materialize.toast(error.response.data.message, 2500, 'red');

      dispatch(authIsLoading(false));
    });
};
/**
 * @description handles sign in success
 *
 * @param { object } authenticatedUser - holds user details
 *
 * @return { object } sign in success - returns sign in success action
 */
export const signInSuccess = authenticatedUser => ({
  type: types.SIGN_IN_SUCCESS,
  authenticatedUser
});

/**
 * @description handles sign in user
 *
 * @param { object } user - holds user details
 *
 * @return { Object } sign in success - returns sign in success action
 */
export const signInUser = user => (dispatch) => {
  const materialize = window.Materialize;

  dispatch(authIsLoading(true));

  return api.signIn(user)
    .then((response) => {
      dispatch(signInSuccess(response.data.user));

      window.localStorage.setItem('POSTIT_ACCESS_TOKEN', response.data.token);
      window.localStorage.setItem('USER_ACCESS', response.data.user);

      dispatch(authIsLoading(false));

      materialize.toast(response.data.message, 1500, 'green');

      browserHistory.push({
        pathname: '/dashboard',
      });
    })
    .catch((error) => {
      materialize.toast(error.response.data.message, 3000, 'red');
      dispatch(authIsLoading(false));
    });
};
