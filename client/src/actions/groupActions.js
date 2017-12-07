import { browserHistory } from 'react-router';
import * as types from './actionTypes';
import * as api from '../utils/postItApi';

/**
 *
 * @param { bool } bool
 * @return { groupLoading } groupLoading
 */
export const groupIsLoading = bool => ({
  type: types.GROUP_IS_LOADING,
  bool
});
/**
 *
 * @param { group } group
 * @return { group } group
 */
export const createGroupSuccess = group => ({
  type: types.CREATE_GROUP_SUCCESS,
  group
});

/**
 *
 * @param { group } group
 * @return { group } group
 *
 */
export const createGroup = group => (dispatch) => {
  const { Materialize } = window;

  dispatch(groupIsLoading(true));

  return api.createGroup(group)
    .then((response) => {
      dispatch(createGroupSuccess(response.data.group));

      Materialize.toast(response.data.message, 3000, 'green');

      $('#modal1').modal('close');

      dispatch(groupIsLoading(false));
    })
    .catch((error) => {
      Materialize.toast(error.response.data.message, 2500, 'red');
      dispatch(groupIsLoading(false));
    });
};
/**
 *
 * @param { groups } groups
 * @return { actionObject } actionObject
 */
export const fetchUserGroupsSuccess = groups => ({
  type: types.FETCH_USER_GROUPS_SUCCESS,
  groups
});

/**
 * @return { userGroups } userGroups
 */
export const fetchUserGroups = () => {
  const { Materialize } = window;
  return (dispatch) => {
    dispatch(groupIsLoading(true));
    return api.getUserGroups()
      .then((response) => {
        dispatch(fetchUserGroupsSuccess(response.data));
        dispatch(groupIsLoading(false));
      })
      .catch((error) => {
        Materialize.toast(error.response.data.message, 2500, 'red');
        dispatch(groupIsLoading(false));
      });
  };
};
/**
 *
 * @param {groupUsers} groupUsers
 * @return { groupUsersObject } groupUsersObject
 */
export const fetchGroupUsersSuccess = groupUsers => ({
  type: types.FETCH_GROUP_USERS_SUCCESS,
  groupUsers
});

/**
 * @param { groupId } groupId
 * @return { groupUsers } groupUsers
 */
export const fetchGroupUsers = (groupId) => {
  const { Materialize } = window;
  return dispatch => api.getGroupUsers(groupId)
    .then((response) => {
      dispatch(fetchGroupUsersSuccess(response.data));
    })
    .catch((error) => {
      Materialize.toast(error.response.data.message, 2500, 'red');
    });
};
/**
 *
 * @param { groupUser } groupUser
 * @return { groupUsersObject } groupUsersObject
 */
export const addUserToGroupSuccess = groupUser => ({
  type: types.ADD_USER_TO_GROUP,
  groupUser
});
/**
 * @param { groupId } groupId
 * @param { userId } userId
 * @return { groupUsers } groupUsers
 */
export const addUserToGroup = (groupId, userId) => {
  const { Materialize } = window;
  return dispatch => api.addUserToGroup(groupId, userId)
    .then((response) => {
      dispatch(addUserToGroupSuccess(response.data));
      Materialize.toast(response.data.message, 3000, 'green');
    })
    .catch((error) => {
      Materialize.toast(error.response.data.message, 3000, 'red');
    });
};
/**
 *
 * @param { index } index
 * @return { actionObject } actionObject
 */
export const leaveGroupSuccess = index => ({
  type: types.EXIT_GROUP,
  index
});
/**
 * @param { groupId } groupId
 * @param { groupIndex } groupIndex
 * @return { exitMessage } exitMessage
 */
export const leaveGroup = (groupId, groupIndex) => {
  const { Materialize } = window;
  return dispatch => api.exitGroup(groupId)
    .then((response) => {
      dispatch(leaveGroupSuccess(groupIndex));
      Materialize.toast(response.data.message, 3000, 'green');

      browserHistory.push({
        pathname: '/dashboard',
      });
    })
    .catch((error) => {
      Materialize.toast(error.response.data.message, 3000, 'red');
    });
};
/**
 *
 * @param { groupId } groupId
 * @param { groupIndex } groupIndex
 * @return { deleteMessage } deleteMessage
 */
export const deleteGroup = (groupId, groupIndex) => {
  const { Materialize } = window;
  return dispatch => api.deleteGroup(groupId)
    .then((response) => {
      dispatch(leaveGroupSuccess(groupIndex));
      Materialize.toast(response.data.message, 3000, 'green');

      browserHistory.push({
        pathname: '/dashboard',
      });
    })
    .catch((error) => {
      Materialize.toast(error.response.data.message, 3000, 'red');
    });
};
/**
 *
 * @param { userIndex } userIndex
 * @return { actionObject } actionObject
 */
export const deleteGroupMemberSuccess = userIndex => ({
  type: types.REMOVE_GROUP_MEMBER,
  userIndex
});
/**
*
* @param { groupId } groupId
* @param { userId } userId
* @param { userIndex } userIndex
* @return { deleteMessage } deleteMessage
*/
export const deleteGroupMember = (groupId, userId, userIndex) => {
  const { Materialize } = window;
  return dispatch => api.deleteGroupMember(groupId, userId)
    .then((response) => {
      dispatch(deleteGroupMemberSuccess(userIndex));
      Materialize.toast(response.data.message, 3000, 'green');
    })
    .catch((error) => {
      Materialize.toast(error.response.data.message, 3000, 'red');
    });
};
