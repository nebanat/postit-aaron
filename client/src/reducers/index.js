import { combineReducers } from 'redux';
import { userSuccessMessage,
  userErrorMessage, authenticatedUser } from './userReducer';
import { groups, createGroupError, createGroupMessage } from './groupReducer';

const rootReducers = combineReducers({
  userSuccessMessage,
  userErrorMessage,
  authenticatedUser,
  groups,
  createGroupError,
  createGroupMessage
});

export default rootReducers;
