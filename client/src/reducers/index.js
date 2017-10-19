import { combineReducers } from 'redux';
import { userSuccessMessage,
  userErrorMessage, authenticatedUser } from './userReducer';
import { groups, createGroupError,
  createGroupMessage, userGroups, fetchUserGroupsError } from './groupReducer';
import { sendResetSuccessMessage,
  sendResetFailureMessage, resetSuccessMessage,
  resetFailureMessage } from './passwordReducer';

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
  userGroups,
  fetchUserGroupsError
});

export default rootReducers;
