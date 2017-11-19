/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return {group} group
 */
export default function checkGroupAdmin(req, res, next) {
  const userId = req.decoded.user.id;
  const { group } = req;

  group.getUsers({ attributes: ['id'] })
    .then((users) => {
      if (userId !== users[0].id) {
        return res.status(403).send({
          message: 'You are not authorized to perform this action'
        });
      }
      next();
    });
}
