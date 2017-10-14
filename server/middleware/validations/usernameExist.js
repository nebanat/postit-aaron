import models from '../../models';
/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return {user} user
 */
export default function usernameExist(req, res, next) {
  // checks if username already exist
  const { username } = req.body;

  models.User
    .findOne({ where: { username } })
    .then((user) => {
      if (user) {
        return res.status(400).send({
          message: 'Username you entered already exist '
        });
      }

      next();
    });
}
