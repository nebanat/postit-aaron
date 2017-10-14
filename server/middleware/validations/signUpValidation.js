/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return {user} user
 */
export default function signUpValidation(req, res, next) {
  if (!req.body.username || req.body.username.trim() === '') {
    return res.status(400).send({
      message: 'username is required'
    });
  } else if (!req.body.email || req.body.email.trim() === '') {
    return res.status(400).send({
      message: 'email is required'
    });
  } else if (!req.body.password || req.body.password.trim() === '') {
    return res.status(400).send({
      message: 'password is required'
    });
  } else if (req.body.password.length < 6) {
    return res.status(400).send({
      message: 'password must be at least 6 characters'
    });
  }
  next();
}

