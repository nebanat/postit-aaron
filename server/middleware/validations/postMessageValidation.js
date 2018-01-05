/**
 * @description handles validation for posting a message
 *
 * @param { object } req - contains new message details
 * @param { object } res - contains validation message
 * @param { object } next - contains middleware control flow
 *
 * @return { object} message  - returns validation message
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
