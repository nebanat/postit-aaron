import jwt from 'jsonwebtoken';
import decode from 'jwt-decode';

require('dotenv').config();
/**
 *
 * @param {req} req
 * @param {res} res
 * @param {next} next
 * @return {message} message
 */
export default (req, res, next) => {
  const token = req.body.token ||
    req.query.token || req.headers['x-access-token'];

  if (token) {
    // verifies token//;
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.status(400).json({
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
 *
 * @param {req} req
 * @param {res} res
 * @return {userId} userId
 */
export const decodeUser = (req) => {
  const token = req.body.token ||
   req.query.token || req.headers['x-access-token'];

  const access = decode(token);

  return access.user;
};

