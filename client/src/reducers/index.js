import { combineReducers } from 'redux';
// user reducer
import { userSuccessMessage,
  userErrorMessage, authenticatedUser } from './userReducer';
// group reducer
import { groups, createGroupError,
  createGroupMessage, fetchUserGroupsError,
  groupUsers, fetchGroupUsersError } from './groupReducer';
// password reducer
import { sendResetSuccessMessage,
  sendResetFailureMessage, resetSuccessMessage,
  resetFailureMessage } from './passwordReducer';
// message reducer
import { postSuccessMessage, postFailureMessage,
  messages, fetchMessagesError } from './messageReducer';

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
  postFailureMessage,
  messages,
  fetchMessagesError,
  groupUsers,
  fetchGroupUsersError
});

export default rootReducers;
