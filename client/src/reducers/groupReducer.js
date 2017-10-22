import * as types from '../actions/actionTypes';
/**
 *
 * @param {state} state
 * @param {action} action
 * @return {object} state
 */
export function groups(state = [], action) {
  switch (action.type) {
    case types.FETCH_USER_GROUPS_SUCCESS:
      return action.groups;
    case types.CREATE_GROUP_SUCCESS:
      return [...state,
        Object.assign({}, action.group)];
    default:
      return state;
  }
}
/**
 *
 * @param {state} state
 * @param {action} action
 * @return {authenticatedUser} authenticatedUser
 */
export function createGroupError(state = [], action) {
  switch (action.type) {
    case types.CREATE_GROUP_FAILURE:
      return action.createGroupError;
    default:
      return state;
  }
}

/**
 *
 * @param {state} state
 * @param {action} action
 * @return {successMessage} successMessage
 */
export function createGroupMessage(state = [], action) {
  switch (action.type) {
    case types.CREATE_GROUP_SUCCESS_MESSAGE:
      return action.createGroupMessage;
    default:
      return state;
  }
}

/**
 *
 * @param {state} state
 * @param {action} action
 * @return {fetchGroupError} fetchGroupError
 */
export function fetchUserGroupsError(state = [], action) {
  switch (action.type) {
    case types.FETCH_USER_GROUPS_ERROR:
      return action.fetchGroupErrorMessage;
    default:
      return state;
  }
}
/**
 *
 * @param { state } state
 * @param { action } action
 * @return { groupUsers } groupUsers
 */
export function groupUsers(state = [], action) {
  switch (action.type) {
    case types.FETCH_GROUP_USERS_SUCCESS:
      return action.groupUsers;
    default:
      return state;
  }
}

/**
 *
 * @param {state} state
 * @param {action} action
 * @return {fetchGroupUsersError} fetchGroupUsersError
 */
export function fetchGroupUsersError(state = [], action) {
  switch (action.type) {
    case types.FETCH_USER_GROUPS_FAILURE:
      return action.fetchGroupUsersError;
    default:
      return state;
  }
}
/**
 *
 * @param { state } state
 * @param { action } action
 * @return { groupLoading } groupLoading
 */
export function groupIsLoading(state = false, action) {
  switch (action.type) {
    case types.GROUP_IS_LOADING:
      return action.bool;
    default:
      return state;
  }
}
