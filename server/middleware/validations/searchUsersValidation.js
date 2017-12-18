/**
 * @description handles validation for searching users
 *
 * @param { object } req contains group and query
 * @param { object } res message
 * @param { object } next
 *
 * @return { object } message
 */
export default (req, res, next) => {
  const { groupId, query } = req.body;
  // validates user entries
  if (!groupId || groupId.trim() === '') {
    return res.status(400).send({
      message: 'Please enter group'
    });
  }
  if (!query || query.trim() === '') {
    return res.status(400).send({
      message: 'Please enter search query'
    });
  }
  next();
};
