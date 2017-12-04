import * as types from './actionTypes';
import * as api from '../utils/postItApi';
/**
 *
 * @param {bool} bool
 * @return { messageLoadingObject } passwordLoadingObject
 */
export const messageIsLoading = bool => ({
  type: types.MESSAGE_IS_LOADING,
  bool
});
/**
 *
 * @param { newMessage } newMessage
 * @return { newMessageObject } newMessageObject
 */
export const onPost = newMessage => ({
  type: types.POST_MESSAGE,
  newMessage
});

/**
 *
 * @param { message } message
 * @param { priority } priority
 * @param { groupId } groupId
 *  @return {promise} promise
 *
 */
export const postMessage = (message, priority, groupId) => (dispatch) => {
  const { Materialize } = window;

  dispatch(messageIsLoading(true));
  return api.postNewMessage(message, priority, groupId)
    .then((response) => {
      dispatch(onPost(response.data.newMessage));

      Materialize.toast(response.data.message, 2500, 'green');

      dispatch(messageIsLoading(false));
    })
    .catch((error) => {
      Materialize.toast(error.response.data.message, 2500, 'red');
      dispatch(messageIsLoading(false));
    });
};
/**
 *
 * @param {messages} messages
 * @return {actionObject} actionObject
 */
export const fetchGroupMessageSuccess = messages => ({
  type: types.FETCH_MESSAGES_SUCCESS,
  messages
});

/**
 *
 * @param { id } id
 * @return {promise} promise
 *
 */
export const fetchGroupMessages = id => (dispatch) => {
  const { Materialize } = window;

  dispatch(messageIsLoading(true));
  return api.getGroupMessages(id)
    .then((response) => {
      dispatch(fetchGroupMessageSuccess(response.data.messages));
      dispatch(messageIsLoading(false));
    })
    .catch((error) => {
      dispatch(messageIsLoading(false));
      Materialize.toast(error.response.data.message, 2500, 'red');
    });
};
