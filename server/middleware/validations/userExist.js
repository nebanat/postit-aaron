/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
import models from '../../models';
/**
 * @description checks the existence of a user
 *
 * @param { object } req contains user id
 * @param { object } res contains user details
 * @param { object } next
 *
 * @return { object } user
 */
export default (req, res, next) => {
  let userId = '';

  req.params.userId
    ? ({ userId } = req.params)
    : ({ userId } = req.body);

  if (!userId) {
    return res.status(400).send({
      message: 'Please pass a valid user id'
    });
  }
  if (isNaN(parseInt(userId, 10))) {
    return res.status(400).send({
      message: 'Please pass a valid user id'
    });
  }

  models.User
    .findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: 'This user does not exist'
        });
      }
      req.user = user;
      next();
    }).catch(error => res.status(500).send({ error: error.message }));
};
