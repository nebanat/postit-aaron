/**
 *
 * @param {req} req
 * @param {res} res
 * @param {res} next
 * @return {message} message
 */
export default (req, res, next) => {
  const name = req.body.name.toLowerCase();
  if (!name || name.trim() === '') {
    return res.status(400).send({
      message: 'Please enter a group name'
    });
  } else if (name.length < 3) {
    return res.status(400).send({
      message: 'group name must be at least 3 characters'
    });
  }
  next();
};
