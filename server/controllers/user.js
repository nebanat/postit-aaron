import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import models from '../models';

require('dotenv').config();

const jwtSecret = process.env.SECRET || 'PrivateKey';
const salt = bcrypt.genSaltSync(8);

export default {
  /**
   *
   * @param {req} req
   * @param {res} res
   * @param {next} next
   * @return {object} message,username,email
   */
  signup(req, res) {
    const { username, password } = req.body;
    const email = req.body.email.toLowerCase();


    // creates user
    models.User
      .create({
        username,
        email,
        password: bcrypt.hashSync(password, salt, null)
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
          username
        },
        attributes: {
          exclude: ['resetPassToken', 'expirePassToken']
        }
      })
      .then((user) => {
        // Checks to see if the user exist//
        if (!user) {
          return res.status(400).send({
            message: 'Invalid username or password'
          });
        }
        // checks the password
        if (!bcrypt.compareSync(password, user.password)) {
          return res.status(400).send({
            message: 'Invalid password'
          });
        }
        // generates the token
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
   *
   * @param {req} req
   * @param {res} res
   * @return {users} users searched
   */
  searchUsersNotInGroup(req, res) {
    const { groupId, query } = req.body;

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

          models.User.findAll({
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
            }
          })
          // nusers represent users not in a group
            .then((nUsers) => {
              if (!nUsers.length) {
                return res.status(404).send({
                  message: 'No user found'
                });
              }
              return res.status(200).send(nUsers);
            });
        });
      });
  }
};
