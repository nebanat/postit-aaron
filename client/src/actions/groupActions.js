import { browserHistory } from 'react-router';
import swal from 'sweetalert';
import * as types from './actionTypes';
import * as api from '../utils/postItApi';

/**
 *
 * @param { bool } bool
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
 * @param { group } group
 * @return { group } group
 */
export function createGroupSuccess(group) {
  return {
    type: types.CREATE_GROUP_SUCCESS,
    group
  };
}
/**
 *
 * @param { createGroupMessage } createGroupMessage
 * @return { object } action
 */
export function createGroupSuccessMessage(createGroupMessage) {
  return {
    type: types.CREATE_GROUP_SUCCESS_MESSAGE,
    createGroupMessage
  };
}
/**
 *
 * @param { createGroupError } createGroupError
 * @return { object } action
 */
export function createGroupFailure(createGroupError) {
  return {
    type: types.CREATE_GROUP_FAILURE,
    createGroupError
  };
}
/**
 *
 * @param { group } group
 * @return { group } group
 *
 */
export function createGroup(group) {
  return (dispatch) => {
    const { Materialize } = window;

    dispatch(groupIsLoading(true));
    api.createGroup(group)
      .then((response) => {
        dispatch(createGroupSuccess(response.data.group));

        dispatch(createGroupSuccessMessage(response.data.message));

        Materialize.toast(response.data.message, 2500, 'green');

        dispatch(groupIsLoading(false));

        browserHistory.push({
          pathname: '/groups',
        });
      })
      .catch((error) => {
        if (error) {
          dispatch(createGroupFailure(error.response.data.message));

          Materialize.toast(error.response.data.message, 2500, 'red');

          dispatch(groupIsLoading(false));
        }
      });
  };
}
/**
 *
 * @param { groups } groups
 * @return { actionObject } actionObject
 */
export function fetchUserGroupsSuccess(groups) {
  return {
    type: types.FETCH_USER_GROUPS_SUCCESS,
    groups
  };
}
/**
 *
 * @param { fetchGroupErrorMessage } fetchGroupErrorMessage
 * @return { actionObject } actionObject
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
/**
 *
 * @param { groupUser } groupUser
 * @return { groupUsersObject } groupUsersObject
 */
export function addUserToGroupSuccess(groupUser) {
  return {
    type: types.ADD_USER_TO_GROUP,
    groupUser
  };
}
/**
 * @param { groupId } groupId
 * @param { userId } userId
 * @return { groupUsers } groupUsers
 */
export function addUserToGroup(groupId, userId) {
  const { Materialize } = window;
  return dispatch => api.addUserToGroup(groupId, userId)
    .then((response) => {
      dispatch(addUserToGroupSuccess(response.data));
      Materialize.toast(response.data.message, 3000, 'green');
    })
    .catch((error) => {
      if (error) {
        Materialize.toast(error.response.data.message, 3000, 'red');
      }
    });
}
/**
 *
 * @param { index } index
 * @return { actionObject } actionObject
 */
export function leaveGroupSuccess(index) {
  return {
    type: types.EXIT_GROUP,
    index
  };
}
/**
 * @param { groupId } groupId
 * @param { groupIndex } groupIndex
 * @return { exitMessage } exitMessage
 */
export function leaveGroup(groupId, groupIndex) {
  const { Materialize } = window;
  return (dispatch) => {
    swal({
      title: 'Are you sure?',
      text: 'You are about to exit this group!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((removeGroup) => {
        if (removeGroup) {
          api.exitGroup(groupId)
            .then((response) => {
              dispatch(leaveGroupSuccess(groupIndex));
              Materialize.toast(response.data.message, 3000, 'green');

              browserHistory.push({
                pathname: '/groups',
              });
            })
            .catch((error) => {
              if (error) {
                Materialize.toast(error.response.data.message, 3000, 'red');
              }
            });
        }
      });
  };
}
/**
 *
 * @param { groupId } groupId
 * @param { groupIndex } groupIndex
 * @return { deleteMessage } deleteMessage
 */
export function deleteGroup(groupId, groupIndex) {
  const { Materialize } = window;
  return (dispatch) => {
    swal({
      title: 'Are you sure?',
      text: 'You are about to delete this group!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((removeGroup) => {
        if (removeGroup) {
          api.deleteGroup(groupId)
            .then((response) => {
              dispatch(leaveGroupSuccess(groupIndex));
              Materialize.toast(response.data.message, 3000, 'green');

              browserHistory.push({
                pathname: '/groups',
              });
            })
            .catch((error) => {
              if (error) {
                Materialize.toast(error.response.data.message, 3000, 'red');
              }
            });
        }
      });
  };
}
/**
 *
 * @param { userIndex } userIndex
 * @return { actionObject } actionObject
 */
export function deleteGroupMemberSuccess(userIndex) {
  return {
    type: types.REMOVE_GROUP_MEMBER,
    userIndex
  };
}
/**
*
* @param { groupId } groupId
* @param { userId } userId
* @param { userIndex } userIndex
* @return { deleteMessage } deleteMessage
*/
export function deleteGroupMember(groupId, userId, userIndex) {
  const { Materialize } = window;
  return (dispatch) => {
    swal({
      title: 'Are you sure?',
      text: 'You are about to delete this group member!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((removeMember) => {
        if (removeMember) {
          api.deleteGroupMember(groupId, userId)
            .then((response) => {
              dispatch(deleteGroupMemberSuccess(userIndex));
              Materialize.toast(response.data.message, 3000, 'green');
            })
            .catch((error) => {
              if (error) {
                Materialize.toast(error.response.data.message, 3000, 'red');
              }
            });
        }
      });
  };
}
