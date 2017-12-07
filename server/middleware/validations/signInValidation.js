/**
 *@description handles validation for sign in
 *
 * @param { req } req
 * @param { res } res
 * @param { next } next
 * @return { json } validations
 */
export default (req, res, next) => {
  const { username, password } = req.body;
  // validates user entries
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
