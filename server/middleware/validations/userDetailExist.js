import models from '../../models';
/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return {user} user
 */
export default function userDetailExist(req, res, next) {
  // checks if username already exist
  const { username, email } = req.body;

  models.User
    .findOne({ where: { username } })
    .then((user) => {
      if (user) {
        return res.status(400).send({
          message: 'Username is taken '
        });
      }
    });

  // checks if email is already taken
  models.User
    .findOne({ where: { email } })
    .then((user) => {
      if (user) {
        return res.status(400).send({
          message: 'Email address is taken'
        });
      }
    });

  next();
}
