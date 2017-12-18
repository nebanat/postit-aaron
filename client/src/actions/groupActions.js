import { browserHistory } from 'react-router';
import * as types from './actionTypes';
import * as api from '../utils/postItApi';

/**
 * @description handles loading for groups
 *
 * @param { boolean } bool contains loader state
 *
 * @return { object } groupLoadingAction
 */
export const groupIsLoading = bool => ({
  type: types.GROUP_IS_LOADING,
  bool
});
/**
 * @description handles create group success
 *
 * @param { object } group contains group
 *
 * @return { object } createGroup action
 */
export const createGroupSuccess = group => ({
  type: types.CREATE_GROUP_SUCCESS,
  group
});

/**
 * @description handles create group success
 *
 * @param { object } group contains group details
 *
 * @return { object } group
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
 * @description handles fetch group success
 *
 * @param { object } groups
 *
 * @return { object } fetchUserGroupSuccess
 */
export const fetchUserGroupsSuccess = groups => ({
  type: types.FETCH_USER_GROUPS_SUCCESS,
  groups
});

/**
 * @description handles fetching user groups
 *
 * @return { array } userGroups
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
 * @description handles fetching group users success
 *
 * @param { array } groupUsers
 *
 * @return { array } groupUsers
 */
export const fetchGroupUsersSuccess = groupUsers => ({
  type: types.FETCH_GROUP_USERS_SUCCESS,
  groupUsers
});

/**
 * @description handles fetching group users
 *
 * @param { integer } groupId
 *
 * @return { array } groupUsers
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
 * @description handles add user to group success
 *
 * @param { object } groupUser
 *
 * @return { array } groupUsers
 */
export const addUserToGroupSuccess = groupUser => ({
  type: types.ADD_USER_TO_GROUP,
  groupUser
});
/**
 * @description handles create group success
 *
 * @param { integer } groupId
 * @param { integer } userId
 *
 * @return { array } groupUsers
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
 * @description handles create group success
 *
 * @param { integer } index
 *
 * @return { object } leave group
 */
export const leaveGroupSuccess = index => ({
  type: types.EXIT_GROUP,
  index
});
/**
 * @description handles create group success
 *
 * @param { integer } groupId
 * @param { integer } groupIndex
 *
 * @return { object } exitMessage
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
 * @description handles delete group
 *
 * @param { integer } groupId
 * @param { integer } groupIndex
 *
 * @return { object } deleteMessage
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
 * @description handles delete group member success
 *
 * @param { integer } userIndex
 *
 * @return { object } delete group member success
 */
export const deleteGroupMemberSuccess = userIndex => ({
  type: types.REMOVE_GROUP_MEMBER,
  userIndex
});
/**
* @description handles create group success
*
* @param { integer } groupId
* @param { integer } userId
* @param { integer } userIndex
*
* @return { object } deleteMessage
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
