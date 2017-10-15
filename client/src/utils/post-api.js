import axios from 'axios';
import { getAccessToken } from './authservice';
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
 * @param {username} username
 * @param {password} password
 * @return {object} user
 */
export function signIn(username, password) {
  return axios({
    method: 'post',
    url: '/api/user/signin',
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    },
    data: JSON.stringify({
      username,
      password
    })
  });
}
/**
 *
 * @param {groupName} groupName
 * @param {groupDescription} groupDescription
 * @return {group} group
 */
export function createGroup(groupName, groupDescription) {
  return axios({
    method: 'post',
    url: '/api/group',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'x-access-token': getAccessToken()
    },
    data: JSON.stringify({
      name: groupName,
      description: groupDescription
    })
  });
}
