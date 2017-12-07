import models from '../../models';
/**
 *@description handles validation for email
 *
 * @param { req } req
 * @param { res } res
 * @param { next } next
 * @return { messageObject } messageObject
 */
export default (req, res, next) => {
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
};
