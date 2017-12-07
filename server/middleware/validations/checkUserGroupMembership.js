import { decodeUser } from '../../middleware/authenticate';

/**
 * @description checks for user group membership
 *
 * @param { req } req
 * @param { res } res
 * @param { next } next
 * @return { group } group
 */
export default (req, res, next) => {
  const authUser = decodeUser(req);
  const userId = authUser.id;
  const { group } = req;

  group.hasUser(userId).then((result) => {
    if (!result) {
      return res.status(403).send({
        message: 'User does not belong to this group'
      });
    }
    next();
  });
};
