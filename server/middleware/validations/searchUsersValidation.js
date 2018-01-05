/* eslint-disable no-restricted-globals */
/**
 * @description handles validation for searching users
 *
 * @param { object } req - contains group and query
 * @param { object } res  - contains validation message
 * @param { object } next  - contains middleware control flow
 *
 * @return { object } message  - returns validation message
 */
export default (req, res, next) => {
  const {
    groupId, query, limit, offset
  } = req.body;
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

  if (limit && isNaN(parseInt(limit, 10))) {
    return res.status(400).send({
      message: 'Please enter a valid page limit'
    });
  }

  if (offset && isNaN(parseInt(offset, 10))) {
    return res.status(400).send({
      message: 'Please enter a valid offset number'
    });
  }

  next();
};
