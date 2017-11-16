import models from '../../models';
/**
 *
 * @param {req} req
 * @param {res} res
 * @param {next} next
 * @return {user} user
 */
export default function userExist(req, res, next) {
  let userId = '';
  /* eslint-disable no-unused-expressions */
  req.params.userId
    ? ({ userId } = req.params)
    : ({ userId } = req.body);

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
    });
}
