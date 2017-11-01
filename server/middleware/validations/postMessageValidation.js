/**
 *
 * @param {req} req
 * @param {res} res
 * @param {res} next
 * @return {message} message
 */
export default function postMessageValidation(req, res, next) {
  const { content, priority } = req.body;
  const priorityArray = [1, 2, 3];
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
  if (!priorityArray.includes(parseInt(priority, 10))) {
    return res.status(400).send({
      message: 'Please enter a valid message priority'
    });
  }
  next();
}
