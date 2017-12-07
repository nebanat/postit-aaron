import models from '../../models';
/**
 * @description checks if username exist already
 *
 * @param { req } req
 * @param { res } res
 * @param { next } next
 * @return { user } user
 */
export default (req, res, next) => {
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
};
