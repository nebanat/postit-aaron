import * as types from '../actions/actionTypes';


/**
 * @description holds password loader
 *
 * @param { boolean } state
 * @param { object } action
 *
 * @return { boolean } passwordLoading
 */
export default (state = false, action) => {
  switch (action.type) {
    case types.PASSWORD_IS_LOADING:
      return action.bool;
    default:
      return state;
  }
};
