/**
 * @description handles validation for posting a message
 *
 * @param { object } req contains message details
 * @param { object } res contains message
 * @param { object } next
 *
 * @return { object} message
 */
export default (req, res, next) => {
  const { content, priority } = req.body;
  const priorityArray = ['normal', 'urgent', 'critical'];
  if (!content || content.trim() === '') {
    return res.status(400).send({
      message: 'Please enter message'
    });
  }
  if (!priority || priority.trim() === '') {
    return res.status(400).send({
      message: 'Please enter message priority'
    });
  }
  if (!priorityArray.includes(priority)) {
    return res.status(400).send({
      message: 'Please enter a valid message priority'
    });
  }
  next();
};
