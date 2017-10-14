import { combineReducers } from 'redux';
import { userSuccessMessage, userErrorMessage } from './userReducer';

const rootReducers = combineReducers({
  userSuccessMessage,
  userErrorMessage
});

export default rootReducers;
