import models from '../../models';
/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return {group} group
 */
export default function groupExist(req, res, next) {
  const { id } = req.params || req.body;

  models.Group
    .findById(id)
    .then((group) => {
      if (!group) {
        return res.status(404).send({
          message: 'Group not found'
        });
      }
      next();
    });
}
