import * as types from '../actions/actionTypes';


/**
 * @description holds group  message state
 *
 * @param { array } state
 * @param { object } action
 *
 * @return { array } groupMessages
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
 * @description holds message loader state
 *
 * @param { boolean } state
 * @param { object } action
 *
 * @return { boolean } messageLoading
 */
export const messageIsLoading = (state = false, action) => {
  switch (action.type) {
    case types.MESSAGE_IS_LOADING:
      return action.bool;
    default:
      return state;
  }
};
