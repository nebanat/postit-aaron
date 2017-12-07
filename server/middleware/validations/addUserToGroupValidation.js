/**
 *@description handles validation for adding users to groups
 *
 * @param {req} req
 * @param {res} res
 * @param {res} next
 * @return {message} message
 */
export default (req, res, next) => {
  const { userId } = req.body;
  const { id } = req.params;

  if (!userId) {
    return res.status(400).send({
      message: 'Please enter a valid user'
    });
  }
  /* eslint-disable no-restricted-globals */
  if (isNaN(userId)) {
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
