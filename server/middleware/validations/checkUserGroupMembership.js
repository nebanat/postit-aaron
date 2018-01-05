/**
 * @description checks for user group membership
 *
 * @param { object } req - contains user details
 * @param { object } res - contains message
 * @param { object } next - contains middleware flow control
 *
 * @return { object} message - contains validation message
 */
export default (req, res, next) => {
  const userId = req.decoded.user.id;
  const { group } = req;

  group.hasUser(userId).then((result) => {
    if (!result) {
      return res.status(404).send({
        message: 'User does not belong to this group'
      });
    }
    next();
  }).catch(error => res.status(500).send({ error: error.message }));
};
