import { combineReducers } from 'redux';
import { userSuccessMessage,
  userErrorMessage, authenticatedUser } from './userReducer';

const rootReducers = combineReducers({
  userSuccessMessage,
  userErrorMessage,
  authenticatedUser
});

export default rootReducers;
