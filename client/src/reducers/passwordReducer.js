import * as types from '../actions/actionTypes';

/**
 *
 * @param {state} state
 * @param {action} action
 * @return {Object} new state
 */
export function sendResetSuccessMessage(state = [], action) {
  switch (action.type) {
    case types.PASSWORD_EMAIL_LINK_SUCCESS:
      return action.sendResetSuccessMessage;
    default:
      return state;
  }
}
/**
 *
 * @param {state} state
 * @param {action} action
 * @return {Object} new state
 */
export function sendResetFailureMessage(state = [], action) {
  switch (action.type) {
    case types.SIGN_UP_SUCCESS:
      return action.sendResetFailureMessage;
    default:
      return state;
  }
}
/**
 *
 * @param {state} state
 * @param {action} action
 * @return {Object} new state
 */
export function resetSuccessMessage(state = [], action) {
  switch (action.type) {
    case types.RESET_PASSWORD_SUCCESS:
      return action.resetSuccessMessage;
    default:
      return state;
  }
}
/**
 *
 * @param {state} state
 * @param {action} action
 * @return {Object} new state
 */
export function resetFailureMessage(state = [], action) {
  switch (action.type) {
    case types.RESET_PASSWORD_FAILURE:
      return action.resetFailureMessage;
    default:
      return state;
  }
}
