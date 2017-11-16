import decode from 'jwt-decode';

/**
 *
 * @param { req } req
 * @param { res } res
 * @param { next } next
 * @return { group } group
 */
export default function checkUserGroupMembership(req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];
  // decodes token//
  const access = decode(token);
  const userId = access.user.id;
  const { group } = req;

  group.hasUser(userId).then((result) => {
    if (!result) {
      return res.status(403).send({
        message: 'User does not belong to this group'
      });
    }
    next();
  });
}
