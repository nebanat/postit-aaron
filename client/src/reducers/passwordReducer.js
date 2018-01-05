import * as types from '../actions/actionTypes';


/**
 * @description holds password loader
 *
 * @param { boolean } state - contains password loader initial state
 * @param { object } action - contains actions to be performed on passwordloader
 *
 * @return { boolean } passwordLoading - returns new state of password loader
 */
export default (state = false, action) => {
  switch (action.type) {
    case types.PASSWORD_IS_LOADING:
      return action.bool;
    default:
      return state;
  }
};
