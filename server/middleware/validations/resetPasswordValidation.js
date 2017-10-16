/**
 *
 * @param {req} req
 * @param {res} res
 * @param {res} next
 * @return {message} message
 */
export default function resetPasswordValidation(req, res, next) {
  const { resetToken, password } = req.body;
  if (!resetToken || resetToken.trim() === '') {
    return res.status(400).send({
      message: 'Please provide a valid token'
    });
  } else if (!password || password.trim() === '') {
    return res.status(400).send({
      message: 'Please enter a new password'
    });
  }
  next();
}
