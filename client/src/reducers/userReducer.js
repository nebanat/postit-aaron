import * as types from '../actions/actionTypes';


/**
 * @description holds authenticated user state
 *
 * @param { array } state
 * @param { object } action
 *
 * @return { object } authenticatedUser
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
 * @description holds authentication loader state
 *
 * @param { boolean } state
 * @param { object} action
 *
 * @return { boolean } passwordLoading
 */
export const authIsLoading = (state = false, action) => {
  switch (action.type) {
    case types.AUTH_IS_LOADING:
      return action.bool;
    default:
      return state;
  }
};

