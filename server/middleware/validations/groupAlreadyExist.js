import models from '../../models';
/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return {user} user
 */
export default function groupAlreadyExist(req, res, next) {
  // checks if group name already exist
  const name = req.body.name.trim().toLowerCase();

  models.Group
    .findOne({ where: { name } })
    .then((group) => {
      if (group) {
        return res.status(400).send({
          message: 'Group name already exist'
        });
      }
      next();
    });
}
