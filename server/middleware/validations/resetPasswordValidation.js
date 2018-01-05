/**
 * @description handles validation for resetting a password
 *
 * @param { object } req - contains password and resetToken
 * @param { object } res - contains validation message
 * @param { object } next  - contains middleware control flow
 *
 * @return { object } message  - returns validation message
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
