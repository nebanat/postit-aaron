/**
 *
 * @param { req } req
 * @param { res } res
 * @param { next } next
 * @return { json } validation messages
 */
export default function signUpValidation(req, res, next) {
  const { username, email, password } = req.body;

  if (!username || username.trim() === '') {
    return res.status(400).send({
      message: 'username is required'
    });
  } else if (!email || email.trim() === '') {
    return res.status(400).send({
      message: 'email is required'
    });
  } else if (!password || password.trim() === '') {
    return res.status(400).send({
      message: 'password is required'
    });
  } else if (password.length < 6) {
    return res.status(400).send({
      message: 'password must be at least 6 characters'
    });
  }
  next();
}

