import { browserHistory } from 'react-router';
import decode from 'jwt-decode';
// check if the user is authenticated//
// make sure pages other login,register are protected
/**
 * @return { jwtToken } jwtTokn
 */
export function getAccessToken() {
  return localStorage.getItem('POSTIT_ACCESS_TOKEN');
}
/**
 * @return {boolean} boolean
 */
export function isLoggedIn() {
  // future check if token is expired//
  const accessToken = getAccessToken();
  return !!accessToken;
}
/**
 *
 * @param {nextState} nextState
 * @param {replace} replace
 * @return { route } route
 */
export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({ pathname: '/signin' });
  }
}
/**
 *
 * @param {nextState} nextState
 * @param {replace} replace
 * @return {route} route
 */
export function noRequireAuth(nextState, replace) {
  if (isLoggedIn()) {
    replace({ pathname: '/dashboard' });
  }
}
/**
 * @return {emptyToken} emptyToken
 */
export function clearAccessToken() {
  localStorage.removeItem('POSTIT_ACCESS_TOKEN');
}
/**
 * @return {route} route
 */
export function logout() {
  clearAccessToken();
  browserHistory.push('/signin');
}
/**
 *
 * @return {userAccessId} accessId
 */
export function getAccessId() {
  const token = decode(localStorage.getItem('POSTIT_ACCESS_TOKEN'));
  const userAccessId = token.user.id;

  return userAccessId;
}
