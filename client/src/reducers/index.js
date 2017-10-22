import { combineReducers } from 'redux';
// user reducer
import { signUpSuccessMessage,
  signUpErrorMessage, signInErrorMessage,
  authenticatedUser, authIsLoading } from './userReducer';
// group reducer
import { groups, createGroupError,
  createGroupMessage, fetchUserGroupsError,
  groupUsers, fetchGroupUsersError, groupIsLoading } from './groupReducer';
// password reducer
import { sendResetSuccessMessage,
  sendResetFailureMessage, resetSuccessMessage,
  resetFailureMessage, passwordIsLoading } from './passwordReducer';
// message reducer
import { postSuccessMessage, postFailureMessage,
  messages, fetchMessagesError, messageIsLoading } from './messageReducer';

const rootReducers = combineReducers({
  signUpSuccessMessage,
  signUpErrorMessage,
  signInErrorMessage,
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
  fetchGroupUsersError,
  passwordIsLoading,
  authIsLoading,
  groupIsLoading,
  messageIsLoading
});

export default rootReducers;
