import md5 from 'md5';
import jwt from 'jsonwebtoken';
import models from '../models';

require('dotenv').config();

const jwtSecret = process.env.SECRET || 'PrivateKey';

export default {
  /**
   *
   * @param {req} req
   * @param {res} res
   * @param {next} next
   * @return {object} message,username,email
   */
  signup(req, res) {
    const { username, email, password } = req.body;


    // creates user
    models.User
      .create({
        username,
        email,
        password: md5(password)
      })
      .then(user => res.status(201).send({
        message: 'Signup successful',
        username: user.username,
        email: user.email,
      }))
      .catch(error => res.status(500).send({ error: error.message }));
  },
  /**
   *
   * @param {req} req
   * @param {res} res
   * @return {object} user
   */
  signIn(req, res) {
    const { username, password } = req.body;
    // check if there is a user with email and password combination
    models.User
      .findOne({
        where: {
          username, password: md5(password)
        },
        attributes: {
          exclude: ['password', 'resetPassToken', 'expirePassToken']
        }
      })
      .then((user) => {
        // Checks to see if the user exist//
        if (!user) {
          return res.status(400).send({
            message: 'Invalid username or password'
          });
        }
        const token = jwt.sign({ user }, jwtSecret, {
          expiresIn: '24h'
        });

        return res.status(200).send({
          message: `Welcome ${user.username}`,
          token,
          user
        });
      })
      .catch(error => res.status(500).send({ error: error.message }));
  },
};
