import { browserHistory } from 'react-router';
import * as types from './actionTypes';
import * as api from '../utils/postItApi';

/**
 * @description handles password loading state
 *
 * @param { boolean } bool  - contains loader state boolean
 *
 * @return { passwordLoadingObject } passwordLoading  - returns loading action
 */
export const passwordIsLoading = bool => ({
  type: types.PASSWORD_IS_LOADING,
  bool
});

/**
 * @description handles sending reset emails
 *
 * @param { string } email - contains user email
 *
 * @return { object } password link message - returns password is loading action
 */
export const sendResetPassword = email => (dispatch) => {
  const materialize = window.Materialize;

  dispatch(passwordIsLoading(true));

  return api.sendResetPasswordLink(email)
    .then((response) => {
      materialize.toast(response.data.message, 2500, 'green');

      dispatch(passwordIsLoading(false));

      browserHistory.push({
        pathname: '/signin',
      });
    })
    .catch((error) => {
      materialize.toast(error.response.data.message, 2500, 'red');
      dispatch(passwordIsLoading(false));
    });
};


/**
 * @description handles create group success
 *
 * @param { string } resetToken - contains user reset token
 * @param { string } password - contains user unencrypted password
 *
 * @return { object } resetpassword message - returns password is loading action
 */
export const resetPassword = (resetToken, password) => (dispatch) => {
  const materialize = window.Materialize;

  dispatch(passwordIsLoading(true));

  return api.resetPassword(resetToken, password)
    .then((response) => {
      materialize.toast(response.data.message, 2500, 'green');

      dispatch(passwordIsLoading(false));

      browserHistory.push({
        pathname: '/signin',
      });
    })
    .catch((error) => {
      materialize.toast(error.response.data.message, 2500, 'green');
      dispatch(passwordIsLoading(false));
    });
};
