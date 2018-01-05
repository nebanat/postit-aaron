/**
 * @description handles validation for creating groups
 *
 * @param { object } req - contains group name
 * @param { object } res - contains message
 * @param { object } next - contains middleware flow control
 *
 * @return { object } message - contains validation message
 */
export default (req, res, next) => {
  const name = req.body.name.toLowerCase();
  const spaceRegeEx = /\s/;

  if (!name || name.trim() === '') {
    return res.status(400).send({
      message: 'Please enter a group name'
    });
  } else if (spaceRegeEx.test(name)) {
    return res.status(400).send({
      message: 'group name cannot contain spaces'
    });
  } else if (name.length < 3) {
    return res.status(400).send({
      message: 'group name must be at least 3 characters'
    });
  }
  next();
};
