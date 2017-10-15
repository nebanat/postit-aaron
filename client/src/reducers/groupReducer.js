import * as types from '../actions/actionTypes';
/**
 *
 * @param {state} state
 * @param {action} action
 * @return {object} state
 */
export function groups(state = [], action) {
  switch (action.type) {
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
