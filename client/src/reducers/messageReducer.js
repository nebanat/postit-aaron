import * as types from '../actions/actionTypes';

/**
 *
 * @param {state} state
 * @param {action} action
 * @return {fetchGroupError} fetchGroupError
 */
export function postSuccessMessage(state = [], action) {
  switch (action.type) {
    case types.POST_MESSAGE_SUCCESS:
      return action.postSuccessMessage;
    default:
      return state;
  }
}
/**
 *
 * @param {state} state
 * @param {action} action
 * @return {message} message
 */
export function postFailureMessage(state = [], action) {
  switch (action.type) {
    case types.POST_MESSAGE_FAILURE:
      return action.postFailureMessage;
    default:
      return state;
  }
}
