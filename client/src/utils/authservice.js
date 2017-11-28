import { browserHistory } from 'react-router';
// check if the user is authenticated//
// make sure pages other login,register are protected
/**
 * @return { jwtToken } jwtTokn
 */
export const getAccessToken = () => localStorage.getItem('POSTIT_ACCESS_TOKEN');
/**
 * @return {boolean} boolean
 */
export const isLoggedIn = () => {
  // future check if token is expired//
  const accessToken = getAccessToken();
  return !!accessToken;
};
/**
 *
 * @param {nextState} nextState
 * @param {replace} replace
 * @return { route } route
 */
export const requireAuth = (nextState, replace) => {
  if (!isLoggedIn()) {
    replace({ pathname: '/signin' });
  }
};
/**
 *
 * @param {nextState} nextState
 * @param {replace} replace
 * @return {route} route
 */
export const noRequireAuth = (nextState, replace) => {
  if (isLoggedIn()) {
    replace({ pathname: '/dashboard' });
  }
};
/**
 * @return {emptyToken} emptyToken
 */
export const clearAccessToken = () => {
  localStorage.removeItem('POSTIT_ACCESS_TOKEN');
  localStorage.removeItem('USER_ACCESS');
};
/**
 * @return { route } route
 */
export const logout = () => {
  clearAccessToken();
  browserHistory.push('/signin');
};
/**
 *
 * @return {userAccessId} accessId
 */
export const getAuthUser = () => localStorage.getItem('USER_ACCESS');

