import { browserHistory } from 'react-router';
import * as types from './actionTypes';
import * as api from '../utils/postItApi';
import { checkToken } from '../utils/authservice';

/**
 * @description handles loading for group action
 *
 * @param { boolean } bool - contains loader state
 *
 * @return { object } groupLoadingAction - returns group loading action
 */
export const groupIsLoading = bool => ({
  type: types.GROUP_IS_LOADING,
  bool
});
/**
 * @description handles create group success
 *
 * @param { object } group - contains group details
 *
 * @return { object } createGroup - returns create group success action
 */
export const createGroupSuccess = group => ({
  type: types.CREATE_GROUP_SUCCESS,
  group
});

/**
 * @description handles create a new group
 *
 * @param { object } group - contains group details
 *
 * @return { object } group - returns create group success-failure action
 *
 */
export const createGroup = group => (dispatch) => {
  const materialize = window.Materialize;

  dispatch(groupIsLoading(true));

  return api.createGroup(group)
    .then((response) => {
      dispatch(createGroupSuccess(response.data.group));

      materialize.toast(response.data.message, 3000, 'green');

      $('#modal1').modal('close');

      dispatch(groupIsLoading(false));
    })
    .catch((error) => {
      materialize.toast(error.response.data.message, 2500, 'red');
      checkToken(error.response.status);
      dispatch(groupIsLoading(false));
      return Promise.reject(error);
    });
};
/**
 * @description handles fetch group success
 *
 * @param { object } groups - contains user groups
 *
 * @return { object } fetchUserGroupSuccess - returns fetchGroupsSuccess action
 */
export const fetchUserGroupsSuccess = groups => ({
  type: types.FETCH_USER_GROUPS_SUCCESS,
  groups
});

/**
 * @description handles fetching user groups
 *
 * @return { array } userGroups - returns fetch user groups success action
 */
export const fetchUserGroups = () => {
  const materialize = window.Materialize;
  return (dispatch) => {
    dispatch(groupIsLoading(true));
    return api.getUserGroups()
      .then((response) => {
        dispatch(fetchUserGroupsSuccess(response.data));
        dispatch(groupIsLoading(false));
      })
      .catch((error) => {
        materialize.toast(error.response.data.message, 2500, 'red');
        checkToken(error.response.status);
        dispatch(groupIsLoading(false));
      });
  };
};
/**
 * @description handles fetching group users success
 *
 * @param { array } groupUsers - contains group users
 *
 * @return { array } groupUsers - returns fetch group users success action
 */
export const fetchGroupUsersSuccess = groupUsers => ({
  type: types.FETCH_GROUP_USERS_SUCCESS,
  groupUsers
});

/**
 * @description handles fetching group users
 *
 * @param { integer } groupId - contains group Id
 *
 * @return { array } groupUsers - returns fetch group users success action
 */
export const fetchGroupUsers = (groupId) => {
  const materialize = window.Materialize;
  return dispatch => api.getGroupUsers(groupId)
    .then((response) => {
      dispatch(fetchGroupUsersSuccess(response.data));
    })
    .catch((error) => {
      materialize.toast(error.response.data.message, 2500, 'red');
      checkToken(error.response.status);
    });
};
/**
 * @description handles add user to group success
 *
 * @param { object } groupUser - contains group Id
 *
 * @return { array } groupUsers - returns add user to group success action
 */
export const addUserToGroupSuccess = groupUser => ({
  type: types.ADD_USER_TO_GROUP,
  groupUser
});
/**
 * @description handles create group success
 *
 * @param { integer } groupId - contains group Id
 * @param { integer } userId - contains user Id
 *
 * @return { array } groupUsers - returns add user to group success action
 */
export const addUserToGroup = (groupId, userId) => {
  const materialize = window.Materialize;
  return dispatch => api.addUserToGroup(groupId, userId)
    .then((response) => {
      dispatch(addUserToGroupSuccess(response.data));
      materialize.toast(response.data.message, 3000, 'green');
    })
    .catch((error) => {
      materialize.toast(error.response.data.message, 3000, 'red');
      checkToken(error.response.status);
    });
};
/**
 * @description handles create group success
 *
 * @param { integer } index  - contains group index
 *
 * @return { object } leave group - returns exit group action
 */
export const leaveGroupSuccess = index => ({
  type: types.EXIT_GROUP,
  index
});
/**
 * @description handles create group success
 *
 * @param { integer } groupId - contains group Id
 * @param { integer } groupIndex - contains group index
 *
 * @return { object } exitMessage  - returns exit group action
 */
export const leaveGroup = (groupId, groupIndex) => {
  const materialize = window.Materialize;
  return dispatch => api.exitGroup(groupId)
    .then((response) => {
      dispatch(leaveGroupSuccess(groupIndex));
      materialize.toast(response.data.message, 3000, 'green');

      browserHistory.push({
        pathname: '/dashboard',
      });
    })
    .catch((error) => {
      materialize.toast(error.response.data.message, 3000, 'red');
      checkToken(error.response.status);
    });
};
/**
 * @description handles delete group
 *
 * @param { integer } groupId  - contains group Id
 * @param { integer } groupIndex - contains group index
 *
 * @return { object } deleteMessage  - returns delete group action
 */
export const deleteGroup = (groupId, groupIndex) => {
  const materialize = window.Materialize;
  return dispatch => api.deleteGroup(groupId)
    .then((response) => {
      dispatch(leaveGroupSuccess(groupIndex));
      materialize.toast(response.data.message, 3000, 'green');

      browserHistory.push({
        pathname: '/dashboard',
      });
    })
    .catch((error) => {
      materialize.toast(error.response.data.message, 3000, 'red');
      checkToken(error.response.status);
    });
};
/**
 * @description handles delete group member success
 *
 * @param { integer } userIndex - contains user index
 *
 * @return { object } delete group - returns delete group member success
 */
export const deleteGroupMemberSuccess = userIndex => ({
  type: types.REMOVE_GROUP_MEMBER,
  userIndex
});
/**
 * @description handles create group success
 *
 * @param { integer } groupId - contains group Id
 * @param { integer } userId - contains user Id
 * @param { integer } userIndex - contains user Index
 *
 * @return { object } deleteMessage - returns delete group member success
 */
export const deleteGroupMember = (groupId, userId, userIndex) => {
  const materialize = window.Materialize;
  return dispatch => api.deleteGroupMember(groupId, userId)
    .then((response) => {
      dispatch(deleteGroupMemberSuccess(userIndex));
      materialize.toast(response.data.message, 3000, 'green');
    })
    .catch((error) => {
      materialize.toast(error.response.data.message, 3000, 'red');
      checkToken(error.response.status);
    });
};
