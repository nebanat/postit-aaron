import { browserHistory } from 'react-router';
/**
 * @description gets user token in localStorage
 *
 * @return { string } jwtTokn - returns jwt token from localstorage
 */
export const getAccessToken = () => localStorage.getItem('POSTIT_ACCESS_TOKEN');
/**
 * @description checks if user is authenticated
 *
 * @return { boolean } accessToken - checks if user has a token
 */
export const isLoggedIn = () => {
  const accessToken = getAccessToken();
  return !!accessToken;
};
/**
 * @description handles authentication check
 *
 * @param { object } nextState - contains next state middleware
 * @param { object } replace - contains replace middleware
 *
 *  @return { object } route object - pushes browser history to signin route
 */
export const requireAuth = (nextState, replace) => {
  if (!isLoggedIn()) {
    replace({ pathname: '/signin' });
  }
};
/**
 * @description handles authentication check
 *
 * @param { object } nextState - contains next state middleware
 * @param { object } replace - contains replace middleware
 *
 * @return {object } route object - pushes browser history to dashboard route
 */
export const noRequireAuth = (nextState, replace) => {
  if (isLoggedIn()) {
    replace({ pathname: '/dashboard' });
  }
};
/**
 * @description clears token on logout
 *
 * @return { string } emptyToken - empties the token on logout
 */
export const clearAccessToken = () => {
  localStorage.removeItem('POSTIT_ACCESS_TOKEN');
  localStorage.removeItem('USER_ACCESS');
};
/**
 * @description handles logout
 *
 * @return { object } route object - pushes browser history to signin route
 */
export const logout = () => {
  clearAccessToken();
  browserHistory.push('/signin');
};
/**
 * @description gets user deciphered id
 *
 * @return { integer } accessId - return user access id
 */
export const getAuthUser = () => localStorage.getItem('USER_ACCESS');
/**
 * @description checks for failed token authentication
 *
 * @param { status } status - holds error status code
 *
 * @return { object } route object - pushes browser history to signin route
 */
export const checkToken = status => (status === 401 ? logout() : '');

