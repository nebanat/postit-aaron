/* eslint-disable no-useless-escape */
/**
 * @description handles validation for sign up
 *
 * @param { object } req contains user details
 * @param { object} res contains validation messages
 * @param { object } next
 *
 * @return { object } validation messages
 */
export default (req, res, next) => {
  const { username, email, password } = req.body;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

  if (!username || username.trim() === '') {
    return res.status(400).send({
      message: 'username is required'
    });
  } else if (username.length < 3) {
    return res.status(400).send({
      message: 'username must be at least 3 characters'
    });
  } else if (!email || email.trim() === '') {
    return res.status(400).send({
      message: 'email is required'
    });
  } else if (!emailRegex.test(email)) {
    return res.status(400).send({
      message: 'Enter a valid email'
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
};

