import { browserHistory } from 'react-router';
import * as types from './actionTypes';
import * as api from '../utils/post-api';

/**
 *
 * @param {bool} bool
 * @return { groupLoadingObject } groupLoadingObject
 */
export function groupIsLoading(bool) {
  return {
    type: types.GROUP_IS_LOADING,
    bool
  };
}
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
 * @param { groupName } groupName
 * @param { groupDescription } groupDescription
 * @return { group } group
 *
 */
export function createGroup(groupName, groupDescription) {
  return (dispatch) => {
    dispatch(groupIsLoading(true));
    api.createGroup(groupName, groupDescription)
      .then((response) => {
        dispatch(createGroupSuccess(response.data.group));
        dispatch(createGroupSuccessMessage(response.data.message));
        dispatch(groupIsLoading(false));

        browserHistory.push({
          pathname: '/groups',
        });
      })
      .catch((error) => {
        if (error) {
          dispatch(createGroupFailure(error.response.data.message));
          dispatch(groupIsLoading(false));
        }
      });
  };
}
/**
 *
 * @param {groups} groups
 * @return {actionObject} actionObject
 */
export function fetchUserGroupsSuccess(groups) {
  return {
    type: types.FETCH_USER_GROUPS_SUCCESS,
    groups
  };
}
/**
 *
 * @param {fetchGroupErrorMessage} fetchGroupErrorMessage
 * @return {actionObject} actionObject
 */
export function fetchUserGroupsFailure(fetchGroupErrorMessage) {
  return {
    type: types.FETCH_USER_GROUPS_ERROR,
    fetchGroupErrorMessage
  };
}
/**
 * @return { userGroups } userGroups
 */
export function fetchUserGroups() {
  return (dispatch) => {
    dispatch(groupIsLoading(true));
    api.getUserGroups()
      .then((response) => {
        dispatch(fetchUserGroupsSuccess(response.data));
        dispatch(groupIsLoading(false));
      })
      .catch((error) => {
        if (error) {
          dispatch(fetchUserGroupsFailure(error.response.data.message));
          dispatch(groupIsLoading(false));
        }
      });
  };
}
/**
 *
 * @param {groupUsers} groupUsers
 * @return { groupUsersObject } groupUsersObject
 */
export function fetchGroupUsersSuccess(groupUsers) {
  return {
    type: types.FETCH_GROUP_USERS_SUCCESS,
    groupUsers
  };
}
/**
 *
 * @param {fetchGroupUsersError} fetchGroupUsersError
 * @return { errorMessageObject } errorMessageObject
 */
export function fetchGroupUsersFailure(fetchGroupUsersError) {
  return {
    type: types.FETCH_GROUP_USERS_FAILURE,
    fetchGroupUsersError
  };
}
/**
 * @param { groupId } groupId
 * @return { groupUsers } groupUsers
 */
export function fetchGroupUsers(groupId) {
  return dispatch => api.getGroupUsers(groupId)
    .then((response) => {
      dispatch(fetchGroupUsersSuccess(response.data));
    })
    .catch((error) => {
      if (error) {
        dispatch(fetchGroupUsersFailure(error.response.data.message));
      }
    });
}
