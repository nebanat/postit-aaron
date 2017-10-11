import md5 from 'md5';
import models from '../models';


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
      .catch(error => res.status(500).send({ message: error }));
  }
};
