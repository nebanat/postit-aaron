import * as types from '../actions/actionTypes';
/**
 *
 * @param {state} state
 * @param {action} action
 * @return {Object} new state
 */
export function signUpSuccessMessage(state = [], action) {
  switch (action.type) {
    case types.SIGN_UP_SUCCESS:
      return action.signUpSuccessMessage;
    default:
      return state;
  }
}
/**
 *
 * @param { state } state
 * @param { action } action
 * @return {signInErrorMessage} sigInErrorMessage
 */
export function signInErrorMessage(state = [], action) {
  switch (action.type) {
    case types.SIGN_IN_FAILURE:
      return action.signInErrorMessage;
    default:
      return state;
  }
}
/**
 *
 * @param { state } state
 * @param { action } action
 * @return { object } state
 */
export function signUpErrorMessage(state = [], action) {
  switch (action.type) {
    case types.SIGN_UP_FAILURE:
      return action.signUpErrorMessage;
    default:
      return state;
  }
}
/**
 *
 * @param {state} state
 * @param {action} action
 * @return {authenticatedUser} authenticatedUser
 */
export function authenticatedUser(state = [], action) {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS:
      return action.authenticatedUser;
    default:
      return state;
  }
}
/**
 *
 * @param { state } state
 * @param { action } action
 * @return { authIsLoading } passwordLoading
 */
export function authIsLoading(state = false, action) {
  switch (action.type) {
    case types.AUTH_IS_LOADING:
      return action.bool;
    default:
      return state;
  }
}

