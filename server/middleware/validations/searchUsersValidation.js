/**
 *
 * @param { req } req
 * @param { res } res
 * @param { next } next
 * @return { json } validations
 */
export default function searchUsersValidation(req, res, next) {
  const { groupId, query } = req.body;
  // validates user entries
  if (!groupId || groupId.trim() === '') {
    return res.status(400).send({
      message: 'Please enter group'
    });
  } else if (!query || query.trim() === '') {
    return res.status(400).send({
      message: 'Please enter search query'
    });
  }
  next();
}
