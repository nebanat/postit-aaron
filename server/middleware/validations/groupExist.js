import models from '../../models';
/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return {group} group
 */
export default function groupExist(req, res, next) {
  let groupId = '';
  /* eslint-disable no-unused-expressions */
  req.params.id
    ? (groupId = req.params.id)
    : ({ groupId } = req.body);

  models.Group
    .findById(groupId)
    .then((group) => {
      if (!group) {
        return res.status(404).send({
          message: 'Group not found'
        });
      }
      next();
    });
}
