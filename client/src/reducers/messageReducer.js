import * as types from '../actions/actionTypes';

/**
 *
 * @param { state } state
 * @param { action } action
 * @return { postMessageError } postMessageError
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
 * @return { postFailureMessage } postFailureMessage
 */
export function postFailureMessage(state = [], action) {
  switch (action.type) {
    case types.POST_MESSAGE_FAILURE:
      return action.postFailureMessage;
    default:
      return state;
  }
}
/**
 *
 * @param { state } state
 * @param { action } action
 * @return { groupMessages } groupMessages
 */
export function messages(state = [], action) {
  switch (action.type) {
    case types.FETCH_MESSAGES_SUCCESS:
      return action.messages;
    default:
      return state;
  }
}
/**
 *
 * @param { state } state
 * @param { action } action
 * @returns {fetchMessages} fetchMessage
 */
export function fetchMessagesError(state = [], action) {
  switch (action.type) {
    case types.FETCH_MESSAGES_ERROR:
      return action.fetchMessagesError;
    default:
      return state;
  }
}
