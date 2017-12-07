/**
 *@description handles validation for posting a message
 *
 * @param { req } req
 * @param { res } res
 * @param { next } next
 * @return {message} message
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
