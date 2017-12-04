import * as types from '../actions/actionTypes';


/**
 *
 * @param { state } state
 * @param { action } action
 * @return { groupMessages } groupMessages
 */
export const messages = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_MESSAGES_SUCCESS:
      return action.messages;
    case types.POST_MESSAGE:
      return [...state, action.newMessage];
    default:
      return state;
  }
};
/**
 *
 * @param { state } state
 * @param { action } action
 * @return { messageLoading } messageLoading
 */
export const messageIsLoading = (state = false, action) => {
  switch (action.type) {
    case types.MESSAGE_IS_LOADING:
      return action.bool;
    default:
      return state;
  }
};
