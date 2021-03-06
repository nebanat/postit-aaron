/**
 * @description handles validation for adding users to groups
 *
 * @param { object } req - contains userId and groupId
 * @param { object } res - contains validation message
 * @param { object } next - contains middleware flow control
 *
 * @return { object } message - returns validation message
 */
export default (req, res, next) => {
  const { userId } = req.body;
  const { id } = req.params;

  /* eslint-disable no-restricted-globals */
  if (!userId || isNaN(userId)) {
    return res.status(400).send({
      message: 'Please enter a valid user'
    });
  }
  if (!id || isNaN(id)) {
    return res.status(400).send({
      message: 'Please enter a valid group'
    });
  }
  next();
};
