import * as types from '../actions/actionTypes';


/**
 *
 * @param { state } state
 * @param { action } action
 * @return { passwordLoading } passwordLoading
 */
export default function (state = false, action) {
  switch (action.type) {
    case types.PASSWORD_IS_LOADING:
      return action.bool;
    default:
      return state;
  }
}
