/**
 *
 * @param {req} req
 * @param {res} res
 * @param {res} next
 * @return {message} message
 */
export default function createGroupValidation(req, res, next) {
  const name = req.body.name.toLowerCase();
  if (!name || name.trim() === '') {
    return res.status(400).send({
      message: 'Please enter a group name'
    });
  }
  next();
}
