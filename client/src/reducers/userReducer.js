import * as types from '../actions/actionTypes';


/**
 *
 * @param {state} state
 * @param {action} action
 * @return {authenticatedUser} authenticatedUser
 */
export const authenticatedUser = (state = [], action) => {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS:
      return action.authenticatedUser;
    default:
      return state;
  }
};
/**
 *
 * @param { state } state
 * @param { action } action
 * @return { authIsLoading } passwordLoading
 */
export const authIsLoading = (state = false, action) => {
  switch (action.type) {
    case types.AUTH_IS_LOADING:
      return action.bool;
    default:
      return state;
  }
};

