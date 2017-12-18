import jwt from 'jsonwebtoken';
import decode from 'jwt-decode';

require('dotenv').config();
/**
 * @description verifies user token
 *
 * @param { object } req contains jwt token
 * @param { object } res contains message
 * @param { object } next
 *
 * @return { object } message
 */
export default (req, res, next) => {
  const token = req.body.token ||
    req.query.token || req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: 'Failed to authenticate token'
        });
      }

      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(403).send({
      message: 'No token provided'
    });
  }
};
/**
 *@description decodes user token
 *
 * @param { object } req contains token
 * @param { object } res contains user details
 *
 * @return { object } user
 */
export const decodeUser = (req) => {
  const token = req.body.token ||
   req.query.token || req.headers['x-access-token'];

  const access = decode(token);

  return access.user;
};

