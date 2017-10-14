import axios from 'axios';
/**
 *
 * @param {username} username
 * @param {email} email
 * @param {password} password
 * @return {object} user
 */
export function signUp(username, email, password) {
  return axios({
    method: 'post',
    url: '/api/user/signup',
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    },
    data: JSON.stringify({
      username,
      email,
      password
    })
  });
}

/**
 *
 * @param {email} email
 * @param {password} password
 * @return {object} user
 */
export function signIn(email, password) {

}
