import * as types from '../actions/actionTypes';
/**
 * @description holds group state
 *
 * @param { array } state - contains groups initial state
 * @param { object } action - contains action details to be performed on groups
 *
 * @return { array } groups state - returns the new groups state
 */
export const groups = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_USER_GROUPS_SUCCESS:
      return action.groups;
    case types.CREATE_GROUP_SUCCESS:
      return [...state,
        action.group];
    case types.EXIT_GROUP:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};

/**
 * @description holds group users state
 *
 * @param { array } state - contains group users initial state
 * @param { object } action - contains action to be performed on groupusers
 *
 * @return { array } groupUsers - returns the new group users state
 */
export const groupUsers = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_GROUP_USERS_SUCCESS:
      return action.groupUsers;
    case types.ADD_USER_TO_GROUP:
      return [...state,
        {
          id: action.groupUser.user.id,
          username: action.groupUser.user.username,
          email: action.groupUser.user.email
        }];
    case types.REMOVE_GROUP_MEMBER:
      return [
        ...state.slice(0, action.userIndex),
        ...state.slice(action.userIndex + 1)
      ];
    default:
      return state;
  }
};

/**
 * @description holds group loader state
 *
 * @param { boolean } state - contains group loader initial state
 * @param { object } action - contains action to be performed on group loader
 *
 * @return { bool } groupLoading  - returns the new group loading state
 */
export const groupIsLoading = (state = false, action) => {
  switch (action.type) {
    case types.GROUP_IS_LOADING:
      return action.bool;
    default:
      return state;
  }
};
