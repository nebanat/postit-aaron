import * as types from './actionTypes';
import * as api from '../utils/post-api';

/**
 *
 * @param {bool} bool
 * @return { passwordLoadingObject } passwordLoadingObject
 */
export function passwordIsLoading(bool) {
  return {
    type: types.PASSWORD_IS_LOADING,
    bool
  };
}
/**
 *
 * @param { sendResetSuccessMessage } sendResetSuccessMessage
 * @return { action } action
 */
export function sendResetPasswordSuccess(sendResetSuccessMessage) {
  return {
    type: types.PASSWORD_EMAIL_LINK_SUCCESS,
    sendResetSuccessMessage
  };
}
/**
 *
 * @param { sendResetFailureMessage } sendResetFailureMessage
 * @return { action } action
 */
export function sendResetPasswordFailure(sendResetFailureMessage) {
  return {
    type: types.PASSWORD_EMAIL_LINK_FAILURE,
    sendResetFailureMessage
  };
}
/**
 *
 * @param { email } email
 * @return { action } action
 */
export function sendResetPassword(email) {
  return (dispatch) => {
    dispatch(passwordIsLoading(true));
    api.sendResetPasswordLink(email)
      .then((response) => {
        dispatch(sendResetPasswordSuccess(response.data.message));
        dispatch(passwordIsLoading(false));
      })
      .catch((error) => {
        if (error) {
          dispatch(sendResetPasswordFailure(error.response.data.message));
          dispatch(passwordIsLoading(false));
        }
      });
  };
}
/**
 *
 * @param {  resetSuccessMessage} resetSuccessMessage
 * @return { action } action
 */
export function resetPasswordSuccess(resetSuccessMessage) {
  return {
    type: types.RESET_PASSWORD_SUCCESS,
    resetSuccessMessage
  };
}
/**
 *
 * @param { resetFailureMessage } resetFailureMessage
 * @return { action } action
 */
export function resetPasswordFailure(resetFailureMessage) {
  return {
    type: types.RESET_PASSWORD_FAILURE,
    resetFailureMessage
  };
}
/**
 *
 * @param { resetToken } resetToken
 * @param { password } password
 * @return { action } action
 */
export function resetPassword(resetToken, password) {
  return (dispatch) => {
    dispatch(passwordIsLoading(true));
    api.resetPassword(resetToken, password)
      .then((response) => {
        dispatch(resetPasswordSuccess(response.data.message));
        dispatch(passwordIsLoading(false));
      })
      .catch((error) => {
        if (error) {
          dispatch(resetPasswordFailure(error.response.data.message));
          dispatch(passwordIsLoading(false));
        }
      });
  };
}
