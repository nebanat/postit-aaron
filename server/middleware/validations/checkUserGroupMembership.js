import decode from 'jwt-decode';
import models from '../../models';
/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return {group} group
 */
export default function checkUserGroupMembership(req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];
  // decodes token//
  const access = decode(token);
  const userId = access.user.id;
  const { id } = req.params;

  models.Group
    .findById(id)
    .then((group) => {
      group.hasUser(userId).then((result) => {
        if (!result) {
          return res.status(403).send({
            message: 'User does not belong to this group'
          });
        }
        next();
      });
    });
}
