import * as types from './actionTypes';
import * as api from '../utils/postItApi';
import { checkToken } from '../utils/authservice';
/**
 * @description handles message loaders
 *
 * @param { bool } bool - contains loader state boolean
 *
 * @return { object } message loading - returns message loading action
 */
export const messageIsLoading = bool => ({
  type: types.MESSAGE_IS_LOADING,
  bool
});
/**
 * @description handles on post message
 *
 * @param { object } newMessage - contains new message details
 *
 * @return { object } post message  - returns post message action
 */
export const onPost = newMessage => ({
  type: types.POST_MESSAGE,
  newMessage
});

/**
 * @description handles posting message
 *
 * @param { string } message - contains new message
 * @param { string } priority - contains new message priority
 * @param { integer } groupId - contains group Id of the new message
 *
 * @return { object } post message - returns post message action
 *
 */
export const postMessage = (message, priority, groupId) => (dispatch) => {
  const materialize = window.Materialize;

  dispatch(messageIsLoading(true));
  return api.postNewMessage(message, priority, groupId)
    .then((response) => {
      dispatch(onPost(response.data.newMessage));

      materialize.toast(response.data.message, 2500, 'green');

      dispatch(messageIsLoading(false));
    })
    .catch((error) => {
      materialize.toast(error.response.data.message, 2500, 'red');
      checkToken(error.response.status);
      dispatch(messageIsLoading(false));
    });
};
/**
 * @description handles create group success
 *
 * @param { messages } messages - contains group messages
 *
 * @return { object } fetch group messages - returns fetch group message action
 */
export const fetchGroupMessageSuccess = messages => ({
  type: types.FETCH_MESSAGES_SUCCESS,
  messages
});

/**
 * @description handles fetch group messages
 *
 * @param { integer } id - holds group id
 *
 * @return { array } messages - returns fetch group message action
 *
 */
export const fetchGroupMessages = id => (dispatch) => {
  const materialize = window.Materialize;

  dispatch(messageIsLoading(true));
  return api.getGroupMessages(id)
    .then((response) => {
      dispatch(fetchGroupMessageSuccess(response.data.messages));
      dispatch(messageIsLoading(false));
    })
    .catch((error) => {
      materialize.toast(error.response.data.message, 2500, 'red');
      checkToken(error.response.status);
      dispatch(messageIsLoading(false));
    });
};
