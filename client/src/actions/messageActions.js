import { browserHistory } from 'react-router';
import * as types from './actionTypes';
import * as api from '../utils/post-api';
/**
 *
 * @param {postSuccessMessage} postSuccessMessage
 * @return {actionObject} actionObject
 */
export function postMessageSuccess(postSuccessMessage) {
  return {
    type: types.POST_MESSAGE_SUCCESS,
    postSuccessMessage
  };
}
/**
 *
 * @param {postFailureMessage} postFailureMessage
 * @return {actionObject} actionObject
 */
export function postMessageFailure(postFailureMessage) {
  return {
    type: types.POST_MESSAGE_FAILURE,
    postFailureMessage
  };
}
/**
 *
 * @param {message} message
 * @param {priority} priority
 * @param {groupId} groupId
 * @return {promise} promise
 *
 */
export function postMessage(message, priority, groupId) {
  return dispatch => api.postNewMessage(message, priority, groupId)
    .then((response) => {
      dispatch(postMessageSuccess(response.data.message));

      browserHistory.push({
        pathname: `/group/${groupId}/messages`,
      });
    })
    .catch((error) => {
      if (error) {
        dispatch(postMessageFailure(error.response.data.message));
      }
    });
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
 * @param {fetchMessagesError} fetchMessagesError
 * @return {actionObject} actionObject
 */
export function fetchGroupMessageFailure(fetchMessagesError) {
  return {
    type: types.FETCH_MESSAGES_SUCCESS,
    fetchMessagesError
  };
}
/**
 *
 * @param { id } id
 * @return {promise} promise
 *
 */
export function fetchGroupMessages(id) {
  return dispatch => api.getGroupMessages(id)
    .then((response) => {
      dispatch(fetchGroupMessageSuccess(response.data.messages));
    })
    .catch((error) => {
      if (error) {
        dispatch(fetchGroupMessageFailure(error.response.data.message));
      }
    });
}
