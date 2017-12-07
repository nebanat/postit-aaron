import models from '../../models';
/**
 * @description handles validation for group existence
 *
 * @param { req } req
 * @param { res } res
 * @param { next } next
 * @return {group} group
 */
export default (req, res, next) => {
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
      req.group = group;
      next();
    });
};
