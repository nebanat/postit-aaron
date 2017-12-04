/**
 *
 * @param {req} req
 * @param {res} res
 * @param {res} next
 * @return {message} message
 */
export default (req, res, next) => {
  const { email } = req.body;
  if (!email || email.trim() === '') {
    return res.status(400).send({
      message: 'Please enter a valid email'
    });
  }
  next();
};
