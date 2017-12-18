/**
 * @description handles validation for sign in
 *
 * @param { object } req user details
 * @param { object } res contains message
 * @param { object } next
 *
 * @return { object } message
 */
export default (req, res, next) => {
  const { username, password } = req.body;

  if (!username || username.trim() === '') {
    return res.status(400).send({
      message: 'Please enter username'
    });
  } else if (!password || password.trim() === '') {
    return res.status(400).send({
      message: 'Please enter password'
    });
  }
  next();
};
