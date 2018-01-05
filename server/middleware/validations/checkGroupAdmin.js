/**
 * @description handles validation for group admin
 *
 * @param { object } req - contains user and group details
 * @param { object } res - contains validation message
 * @param { object } next - contains middleware flow control
 *
 * @return { object } message - contains validation message
 */
export default (req, res, next) => {
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
    }).catch(error => res.status(500).send({ error: error.message }));
};
