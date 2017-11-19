import models from '../../models';
/**
 *
 * @param { req } req
 * @param { res } res
 * @param { next } next
 * @return { messageObject } messageObject
 */
export default function emailExist(req, res, next) {
  // checks if email already exist
  const email = req.body.email.toLowerCase();

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
