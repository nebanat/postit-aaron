/* eslint-disable no-useless-escape */
/**
 * @description handles validation for resetting password
 *
 * @param { object } req contains email
 * @param { object } res contains message
 * @param { object } next
 *
 * @return { object } message
 */
export default (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

  if (!email || email.trim() === '') {
    return res.status(400).send({
      message: 'Please enter a valid email'
    });
  } else if (!emailRegex.test(email)) {
    return res.status(400).send({
      message: 'Please enter a valid email'
    });
  }
  next();
};
