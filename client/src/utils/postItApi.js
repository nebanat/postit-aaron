import axios from 'axios';
import { getAccessToken } from './authservice';
/**
 * @description handles calls to signup endpoint
 *
 * @param { user } user object
 *
 * @return { promise } promise call to signup api
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
 * @description handles calls to signin endpoint
 *
 * @param { object } user object
 *
 * @return { promise } promise call to signin endpoint
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
 * @description handles calls to create group endpoint
 *
 * @param { object } group
 *
 * @return { promise } promise call to signin endpoint
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
 * @description handles calls to send reset link endpoint
 *
 * @param { string } email
 *
 * @return { promise } promise to call send reset link endpoint
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
 * @description handles calls to reset password endpoint
 *
 * @param { string } resetToken
 * @param { string } password
 *
 * @return { promise } promise calls to reset password endpoint
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
 * @description handles calls to signin endpoint
 *
 * @return { promise } promise call to get user groups endpoint
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
 * @description handles calls to signin endpoint
 *
 * @param { string } message
 * @param { integer } priority
 * @param { integer } groupId
 *
 * @returns { promise } promise calls to signin endpoint
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
 * @description handles calls to get group messages endpoint
 *
 * @param { integer } groupId
 *
 * @returns { promise } promise call to get group messages
 */
export const getGroupMessages = groupId => axios({
  method: 'GET',
  url: `/api/group/${groupId}/messages`,
  headers: {
    'Content-type': 'application/json; charset=utf-8',
    'x-access-token': getAccessToken()
  }
});
/**
 * @description handles calls to get group users endpoint
 *
 * @param { integer } groupId
 *
 * @returns { promise } get group users endpoint
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
 * @description handles calls to search endpoint
 *
 * @param { integer } groupId
 * @param { string } query
 * @param {  number } offset
 *
 * @return { promise } promise call to search endpoint
 */
export const searchUsersNotInGroup = (groupId, query, offset) => axios({
  method: 'post',
  url: '/api/user/search',
  headers: {
    'Content-type': 'application/json; charset=utf-8',
    'x-access-token': getAccessToken()
  },
  data: JSON.stringify({
    groupId,
    query,
    offset
  })
});
/**
 * @description handles calls to add user to group endpoint
 *
 * @param { integer } groupId
 * @param { integer } userId
 *
 * @return { promise } promise calls to add user to group endpoint
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
 * @description handles calls to exit group endpoint
 *
 * @param { integer } groupId
 * @param { integer} userId
 *
 * @return { promise } promise handles calls to exit group endpoint
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
 * @description handles calls to delete group endpoint
 *
 * @param { integer } groupId
 * @param { integer } userId
 *
 * @return { promise } promise calls to delete group endpoint
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
 * @description handles calls to delete group member endpoint
 *
 * @param { integer } groupId
 * @param { integer } userId
 *
 * @return { promise } promise calls to delete group member endpoint
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

