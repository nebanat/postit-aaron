import * as types from './actionTypes';
import * as api from '../utils/postItApi';
/**
 * @description handles message loaders
 *
 * @param { bool } bool
 *
 * @return { object } message loading
 */
export const messageIsLoading = bool => ({
  type: types.MESSAGE_IS_LOADING,
  bool
});
/**
 * @description handles on post message
 *
 * @param { object } newMessage
 *
 * @return { object } post message
 */
export const onPost = newMessage => ({
  type: types.POST_MESSAGE,
  newMessage
});

/**
 * @description handles posting message
 *
 * @param { string } message
 * @param { string } priority
 * @param { integer } groupId
 *
 * @return { object } post message
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
 * @description handles create group success
 *
 * @param { messages } messages
 *
 * @return { object } fetch group messages
 */
export const fetchGroupMessageSuccess = messages => ({
  type: types.FETCH_MESSAGES_SUCCESS,
  messages
});

/**
 * @description handles fetch group messages
 *
 * @param { integer } id holds group id
 *
 * @return { array } messages
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
