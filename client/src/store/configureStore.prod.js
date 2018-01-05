import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';


/**
 * @description configures redux store for production
 *
 * @param { object } initialState - contains store initial state
 *
 * @return { store } store  - returns a store initialization
 */
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}
