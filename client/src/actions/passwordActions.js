import { browserHistory } from 'react-router';
import * as types from './actionTypes';
import * as api from '../utils/postItApi';

/**
 *
 * @param { bool } bool
 * @return { passwordLoadingObject } passwordLoadingObject
 */
export const passwordIsLoading = bool => ({
  type: types.PASSWORD_IS_LOADING,
  bool
});

/**
 *
 * @param { email } email
 * @return { action } action
 */
export const sendResetPassword = email => (dispatch) => {
  const { Materialize } = window;

  dispatch(passwordIsLoading(true));

  return api.sendResetPasswordLink(email)
    .then((response) => {
      Materialize.toast(response.data.message, 2500, 'green');

      dispatch(passwordIsLoading(false));
    })
    .catch((error) => {
      Materialize.toast(error.response.data.message, 2500, 'red');
      dispatch(passwordIsLoading(false));
    });
};


/**
 *
 * @param { resetToken } resetToken
 * @param { password } password
 * @return { action } action
 */
export const resetPassword = (resetToken, password) => (dispatch) => {
  const { Materialize } = window;

  dispatch(passwordIsLoading(true));

  return api.resetPassword(resetToken, password)
    .then((response) => {
      Materialize.toast(response.data.message, 2500, 'green');

      dispatch(passwordIsLoading(false));

      browserHistory.push({
        pathname: '/signin',
      });
    })
    .catch((error) => {
      Materialize.toast(error.response.data.message, 2500, 'green');
      dispatch(passwordIsLoading(false));
    });
};
