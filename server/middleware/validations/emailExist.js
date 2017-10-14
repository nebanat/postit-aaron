import models from '../../models';
/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return {user} user
 */
export default function emailExist(req, res, next) {
  // checks if username already exist
  const { email } = req.body;

  models.User
    .findOne({ where: { email } })
    .then((user) => {
      if (user) {
        return res.status(400).send({
          message: 'Email address you entered already exist '
        });
      }

      next();
    });
}
