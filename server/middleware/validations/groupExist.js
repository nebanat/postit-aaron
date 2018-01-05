/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
import models from '../../models';
/**
 * @description handles validation for group existence
 *
 * @param { object } req - contains group id
 * @param { object } res - contains group details
 * @param { object } next  - contains middleware control flow
 *
 * @return { object } group - returns validation message
 */
export default (req, res, next) => {
  let groupId = '';

  req.params.id
    ? (groupId = req.params.id)
    : ({ groupId } = req.body);

  if (!groupId) {
    return res.status(400).send({
      message: 'Please pass a valid group id'
    });
  }
  if (isNaN(parseInt(groupId, 10))) {
    return res.status(400).send({
      message: 'Please pass a valid group id'
    });
  }

  models.Group
    .findById(groupId)
    .then((group) => {
      if (!group) {
        return res.status(404).send({
          message: 'Group not found'
        });
      }
      req.group = group;
      next();
    }).catch(error => res.status(500).send({ error: error.message }));
};
