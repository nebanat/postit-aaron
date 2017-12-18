import { browserHistory } from 'react-router';
/**
 * @description gets user token in localStorage
 *
 * @return { string } jwtTokn
 */
export const getAccessToken = () => localStorage.getItem('POSTIT_ACCESS_TOKEN');
/**
 * @description checks if user is authenticated
 *
 * @return { boolean } accessToken
 */
export const isLoggedIn = () => {
  const accessToken = getAccessToken();
  return !!accessToken;
};
/**
 * @description handles authentication check
 *
 * @param { object } nextState
 * @param { object } replace
 *
 *  @return { object } route object
 */
export const requireAuth = (nextState, replace) => {
  if (!isLoggedIn()) {
    replace({ pathname: '/signin' });
  }
};
/**
 * @description handles authentication check
 *
 * @param { object } nextState
 * @param { object } replace
 *
 * @return {object } route object
 */
export const noRequireAuth = (nextState, replace) => {
  if (isLoggedIn()) {
    replace({ pathname: '/dashboard' });
  }
};
/**
 * @description clears token on logout
 *
 * @return { string } emptyToken
 */
export const clearAccessToken = () => {
  localStorage.removeItem('POSTIT_ACCESS_TOKEN');
  localStorage.removeItem('USER_ACCESS');
};
/**
 * @description handles logout
 *
 * @return { object } route object
 */
export const logout = () => {
  clearAccessToken();
  browserHistory.push('/signin');
};
/**
 * @description gets user deciphered id
 *
 * @return { integer } accessId
 */
export const getAuthUser = () => localStorage.getItem('USER_ACCESS');

