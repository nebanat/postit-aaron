import { combineReducers } from 'redux';
import { authenticatedUser, authIsLoading } from './userReducer';
import { groups, groupUsers, groupIsLoading } from './groupReducer';
import passwordIsLoading from './passwordReducer';
import { messages, messageIsLoading } from './messageReducer';

const rootReducers = combineReducers({
  authenticatedUser,
  groups,
  messages,
  groupUsers,
  passwordIsLoading,
  authIsLoading,
  groupIsLoading,
  messageIsLoading
});

export default rootReducers;
