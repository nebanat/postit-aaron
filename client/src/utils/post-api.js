import axios from 'axios';
import { getAccessToken, getAccessId } from './authservice';
/**
 *
 * @param {username} username
 * @param {email} email
 * @param {password} password
 * @return {promise} promise
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
 * @return {promise} promise
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
 * @return {promise} promise
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
/**
 *
 * @param {email} email
 * @return {promise} promise
 */
export function sendResetPasswordLink(email) {
  return axios({
    method: 'post',
    url: '/api/user/password',
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    },
    data: JSON.stringify({
      email,
    })
  });
}
/**
 *
 * @param {resetToken} resetToken
 * @param {password} password
 * @return {promise} promise
 */
export function resetPassword(resetToken, password) {
  return axios({
    method: 'post',
    url: '/api/user/password/reset',
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    },
    data: JSON.stringify({
      resetToken,
      password
    })
  });
}
/**
 * @return {promise} promise
 */
export function getUserGroups() {
  return axios({
    method: 'GET',
    url: '/api/group/user',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'id-token': getAccessId(),
      'x-access-token': getAccessToken()
    }
  });
}

/**
 *
 * @param { message } message
 * @param { priority } priority
 * @param { groupId } groupId
 * @returns { promise } promise
 */
export function postNewMessage(message, priority, groupId) {
  return axios({
    method: 'post',
    url: `http://localhost:3000/api/group/${groupId}/message`,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'x-access-token': getAccessToken()
    },
    data: JSON.stringify({
      content: message,
      priority
    })
  });
}
