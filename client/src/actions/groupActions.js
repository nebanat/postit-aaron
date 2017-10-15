import * as types from './actionTypes';
import * as api from '../utils/post-api';

/**
 *
 * @param {group} group
 * @return {group} group
 */
export function createGroupSuccess(group) {
  return {
    type: types.CREATE_GROUP_SUCCESS,
    group
  };
}
/**
 *
 * @param {createGroupMessage} createGroupMessage
 * @return {object} action
 */
export function createGroupSuccessMessage(createGroupMessage) {
  return {
    type: types.CREATE_GROUP_SUCCESS_MESSAGE,
    createGroupMessage
  };
}
/**
 *
 * @param {createGroupError} createGroupError
 * @return {object} action
 */
export function createGroupFailure(createGroupError) {
  return {
    type: types.CREATE_GROUP_FAILURE,
    createGroupError
  };
}
/**
 *
 * @param {groupName} groupName
 * @param {groupDescription} groupDescription
 * @return {group} group
 *
 */
export function createGroup(groupName, groupDescription) {
  return dispatch => api.createGroup(groupName, groupDescription)
    .then((response) => {
      dispatch(createGroupSuccess(response.data.group));
      dispatch(createGroupSuccessMessage(response.data.message));
    })
    .catch((error) => {
      if (error) {
        dispatch(createGroupFailure(error.response.data.message));
      }
    });
}

