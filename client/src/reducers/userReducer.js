import * as types from '../actions/actionTypes';


/**
 * @description holds authenticated user state
 *
 * @param { array } state - contains authenticated user initial state
 * @param { object } action - contains actions to be performed on auth user
 *
 * @return { object } authenticatedUser - return new state for auth user
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
 * @param { boolean } state - contains auth loader initial state
 * @param { object} action - contains actions to be performed on auth loader
 *
 * @return { boolean } authLoading - new state for auth loader
 */
export const authIsLoading = (state = false, action) => {
  switch (action.type) {
    case types.AUTH_IS_LOADING:
      return action.bool;
    default:
      return state;
  }
};

