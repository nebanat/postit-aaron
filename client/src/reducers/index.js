import { combineReducers } from 'redux';
import { userSuccessMessage,
  userErrorMessage, authenticatedUser } from './userReducer';
import { groups, createGroupError,
  createGroupMessage, fetchUserGroupsError } from './groupReducer';
import { sendResetSuccessMessage,
  sendResetFailureMessage, resetSuccessMessage,
  resetFailureMessage } from './passwordReducer';
import { postSuccessMessage, postFailureMessage } from './messageReducer';

const rootReducers = combineReducers({
  userSuccessMessage,
  userErrorMessage,
  authenticatedUser,
  groups,
  createGroupError,
  createGroupMessage,
  sendResetSuccessMessage,
  sendResetFailureMessage,
  resetSuccessMessage,
  resetFailureMessage,
  fetchUserGroupsError,
  postSuccessMessage,
  postFailureMessage
});

export default rootReducers;
