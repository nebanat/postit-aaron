/**
 *@description handles validation for resetting a password
 *
 * @param { req } req
 * @param { res } res
 * @param { next } next
 * @return { message } message
 */
export default (req, res, next) => {
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
};
