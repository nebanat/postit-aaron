import axios from 'axios';
import { getAccessToken } from './authservice';
/**
 *
 * @param { user } user object
 * @return { promise } promise
 */
export const signUp = user => axios({
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

/**
 *
 * @param { user } user object
 * @return { promise } promise
 */
export const signIn = user => axios({
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
/**
 *
 * @param { group } group
 * @return { promise } promise
 */
export const createGroup = group => axios({
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
/**
 *
 * @param {email} email
 * @return {promise} promise
 */
export const sendResetPasswordLink = email => axios({
  method: 'post',
  url: '/api/user/password',
  headers: {
    'Content-type': 'application/json; charset=utf-8'
  },
  data: JSON.stringify({
    email,
  })
});
/**
 *
 * @param { resetToken } resetToken
 * @param { password } password
 * @return { promise } promise
 */
export const resetPassword = (resetToken, password) => axios({
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
/**
 * @return { promise } promise
 */
export const getUserGroups = () => axios({
  method: 'GET',
  url: '/api/group/user',
  headers: {
    'Content-type': 'application/json; charset=utf-8',
    'x-access-token': getAccessToken()
  }
});

/**
 *
 * @param { message } message
 * @param { priority } priority
 * @param { groupId } groupId
 * @returns { promise } promise
 */
export const postNewMessage = (message, priority, groupId) => axios({
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
/**
 *
 * @param { groupId } groupId
 * @returns { promise } promise
 */
export const getGroupMessages = groupId => axios({
  method: 'GET',
  url: `/api/group/${groupId}/messages`,
  headers: {
    'Content-type': 'application/json; charset=utf-8',
    'x-access-token': getAccessToken()
  }
});/**
 *
 * @param {groupId} groupId
 * @returns {groupUsers} groupUsers
 */
export const getGroupUsers = groupId => axios({
  method: 'GET',
  url: `/api/group/${groupId}/users`,
  headers: {
    'Content-type': 'application/json; charset=utf-8',
    'x-access-token': getAccessToken()
  }
});
/**
 *
 * @param { groupId } groupId
 * @param { quey } query
 * @return { promise } promise
 */
export const searchUsersNotInGroup = (groupId, query) => axios({
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
/**
 *
 * @param { groupId } groupId
 * @param { userId } userId
 * @return { promise } promise
 */
export const addUserToGroup = (groupId, userId) => axios({
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
/**
 *
 * @param { groupId } groupId
 * @param { userId } userId
 * @return { promise } promise
 */
export const exitGroup = groupId => axios({
  method: 'post',
  url: `/api/group/${groupId}/exit`,
  headers: {
    'Content-type': 'application/json; charset=utf-8',
    'x-access-token': getAccessToken()
  }
});
/**
 *
 * @param { groupId } groupId
 * @param { userId } userId
 * @return { promise } promise
 */
export const deleteGroup = groupId => axios({
  method: 'delete',
  url: `/api/group/${groupId}`,
  headers: {
    'Content-type': 'application/json; charset=utf-8',
    'x-access-token': getAccessToken()
  }
});

/**
 *
 * @param { groupId } groupId
 * @param { userId } userId
 * @return { promise } promise
 */
export const deleteGroupMember = (groupId, userId) => axios({
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

