import axios from 'axios';
import { getAccessToken } from './authservice';
/**
 *
 * @param { user } user object
 * @return { promise } promise
 */
export function signUp(user) {
  return axios({
    method: 'post',
    url: '/api/user/signup',
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    },
    data: JSON.stringify({
      username: user.username,
      email: user.email,
      password: user.password
    })
  });
}

/**
 *
 * @param { user } user object
 * @return { promise } promise
 */
export function signIn(user) {
  return axios({
    method: 'post',
    url: '/api/user/signin',
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    },
    data: JSON.stringify({
      username: user.username,
      password: user.password
    })
  });
}
/**
 *
 * @param { group } group
 * @return { promise } promise
 */
export function createGroup(group) {
  return axios({
    method: 'post',
    url: '/api/group',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'x-access-token': getAccessToken()
    },
    data: JSON.stringify({
      name: group.name,
      description: group.description
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
 * @param { resetToken } resetToken
 * @param { password } password
 * @return { promise } promise
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
 * @return { promise } promise
 */
export function getUserGroups() {
  return axios({
    method: 'GET',
    url: '/api/group/user',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
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
    url: `/api/group/${groupId}/message`,
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
/**
 *
 * @param { groupId } groupId
 * @returns { promise } promise
 */
export function getGroupMessages(groupId) {
  return axios({
    method: 'GET',
    url: `/api/group/${groupId}/messages`,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'x-access-token': getAccessToken()
    }
  });
}/**
 *
 * @param {groupId} groupId
 * @returns {groupUsers} groupUsers
 */
export function getGroupUsers(groupId) {
  return axios({
    method: 'GET',
    url: `/api/group/${groupId}/users`,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'x-access-token': getAccessToken()
    }
  });
}
/**
 *
 * @param { groupId } groupId
 * @param { quey } query
 * @return { promise } promise
 */
export function searchUsersNotInGroup(groupId, query) {
  return axios({
    method: 'post',
    url: '/api/user/search',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'x-access-token': getAccessToken()
    },
    data: JSON.stringify({
      groupId,
      query
    })
  });
}
/**
 *
 * @param { groupId } groupId
 * @param { userId } userId
 * @return { promise } promise
 */
export function addUserToGroup(groupId, userId) {
  return axios({
    method: 'post',
    url: `/api/group/${groupId}/user`,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'x-access-token': getAccessToken()
    },
    data: JSON.stringify({
      userId,
    })
  });
}
/**
 *
 * @param { groupId } groupId
 * @param { userId } userId
 * @return { promise } promise
 */
export function exitGroup(groupId) {
  return axios({
    method: 'post',
    url: `/api/group/${groupId}/exit`,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'x-access-token': getAccessToken()
    }
  });
}
/**
 *
 * @param { groupId } groupId
 * @param { userId } userId
 * @return { promise } promise
 */
export function deleteGroup(groupId) {
  return axios({
    method: 'delete',
    url: `/api/group/${groupId}`,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'x-access-token': getAccessToken()
    }
  });
}

/**
 *
 * @param { groupId } groupId
 * @param { userId } userId
 * @return { promise } promise
 */
export function deleteGroupMember(groupId, userId) {
  return axios({
    method: 'post',
    url: `/api/group/${groupId}/remove/member`,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'x-access-token': getAccessToken()
    },
    data: JSON.stringify({
      userId,
    })
  });
}

