import * as types from '../actions/actionTypes';


/**
 * @description holds group message state
 *
 * @param { array } state  - contains messages initial state
 * @param { object } action - contains actions to be performed on messages
 *
 * @return { array } groupMessages - returns new group messages state
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
 * @param { boolean } state - contains messages loader initial state
 * @param { object } action - contains actions to be performed on message loader
 *
 * @return { boolean } messageLoading - returns new group messages loader state
 */
export const messageIsLoading = (state = false, action) => {
  switch (action.type) {
    case types.MESSAGE_IS_LOADING:
      return action.bool;
    default:
      return state;
  }
};
