/**
 * @description handles validation for sign in
 *
 * @param { object } req - contains user details
 * @param { object } res - contains message
 * @param { object } next  - contains middleware control flow
 *
 * @return { object } message  - returns validation message
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
