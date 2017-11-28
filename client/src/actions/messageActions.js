import * as types from './actionTypes';
import * as api from '../utils/postItApi';
/**
 *
 * @param {bool} bool
 * @return { messageLoadingObject } passwordLoadingObject
 */
export function messageIsLoading(bool) {
  return {
    type: types.MESSAGE_IS_LOADING,
    bool
  };
}
/**
 *
 * @param { newMessage } newMessage
 * @return { newMessageObject } newMessageObject
 */
export function onPost(newMessage) {
  return {
    type: types.POST_MESSAGE,
    newMessage
  };
}

/**
 *
 * @param { message } message
 * @param { priority } priority
 * @param { groupId } groupId
 *  @return {promise} promise
 *
 */
export function postMessage(message, priority, groupId) {
  return (dispatch) => {
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
}
/**
 *
 * @param {messages} messages
 * @return {actionObject} actionObject
 */
export function fetchGroupMessageSuccess(messages) {
  return {
    type: types.FETCH_MESSAGES_SUCCESS,
    messages
  };
}

/**
 *
 * @param { id } id
 * @return {promise} promise
 *
 */
export function fetchGroupMessages(id) {
  return (dispatch) => {
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
}
