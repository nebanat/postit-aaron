import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import models from '../models';

require('dotenv').config();

const jwtSecret = process.env.SECRET || 'PrivateKey';

export default {
  /**
   * @description handles signup
   *
   * @param { object } req - user contains user entered details
   * @param { object } res - contains message and user details
   *
   * @return {object} user - returns user details and message
   */
  signup(req, res) {
    const { password, email } = req.body;
    const username = req.body.username.toLowerCase();

    return models.User
      .findOne({
        where: { $or: [{ username }, { email }] }
      }).then((existingUser) => {
        if (existingUser && existingUser.username === username) {
          return res.status(409).json({
            message: 'Username you entered already exist',
          });
        }
        if (existingUser && existingUser.email === email) {
          return res.status(409).json({
            message: 'Email address you entered already exist',
          });
        }
        models.User
          .create({
            username,
            email,
            password
          })
          .then(user => res.status(201).send({
            message: 'Signup successful',
            username: user.username,
            email: user.email,
          }))
          .catch(error => res.status(500).send({ error: error.message }));
      }).catch(error => res.status(500).send({ error: error.message }));
  },
  /**
   * @description handles signin
   *
   * @param { object } req - contains user details
   * @param { object } res - contains message, token and user details
   *
   * @return { object } user - returns user details and message
   */
  signIn(req, res) {
    const { password } = req.body;
    const username = req.body.username.toLowerCase();

    models.User
      .findOne({
        where: {
          username
        },
        attributes: {
          exclude: ['resetPassToken', 'expirePassToken']
        }
      })
      .then((user) => {
        if (!user) {
          return res.status(401).send({
            message: 'Invalid username or password'
          });
        }
        if (!bcrypt.compareSync(password, user.password)) {
          return res.status(401).send({
            message: 'Invalid username or password'
          });
        }
        const token = jwt.sign({ user }, jwtSecret, {
          expiresIn: '24h'
        });

        return res.status(200).send({
          message: `Welcome ${user.username}`,
          token,
          user: {
            id: user.id,
            username: user.username,
            email: user.email
          }
        });
      })
      .catch(error => res.status(500).send({ error: error.message }));
  },
  /**
   *@description handles searching for users
   *
   * @param { object } req - contains user search query and details
   * @param { object } res - contains users search result
   *
   * @return { object } users - returns users search result
   */
  searchUsersNotInGroup(req, res) {
    const {
      groupId, query, limit, offset
    } = req.body;
    let pageNumber;

    models.Group
      .findById(groupId)
      .then((group) => {
        if (!group) {
          return res.status(404).send({
            message: 'Group does not exist'
          });
        }

        group.getUsers().then((users) => {
          const members = users.map(user => user.id);

          models.User.findAndCountAll({
            where: {
              username: {
                $like: `%${query}%`,
              },
              $not: [
                { id: members }
              ]
            },
            attributes: {
              exclude: ['password', 'resetPassToken',
                'expirePassToken', 'updatedAt']
            },
            limit: limit || 5,
            offset: offset || 0
          })
            .then((foundUsers) => {
              if (foundUsers.rows.length === 0) {
                return res.status(404).send({
                  message: 'No user found'
                });
              }
              pageNumber = parseInt(foundUsers.count, 10) /
              parseInt(limit || 5, 10);

              return res.status(200).send({
                foundUsers,
                pages: Math.ceil(pageNumber)
              });
            }).catch(error => res.status(500).send({ error: error.message }));
        });
      });
  }
};
