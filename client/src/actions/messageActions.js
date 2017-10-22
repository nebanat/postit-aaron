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

      // browserHistory.push({
      //   pathname: '/groups',
      // });
    })
    .catch((error) => {
      if (error) {
        dispatch(postMessageFailure(error.response.data.message));
      }
    });
}

