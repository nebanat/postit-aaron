import models from '../../models';
/**
 * @description handles validation for group name taken
 *
 * @param { object } req - contains group name
 * @param { object } res - contains message
 * @param { object } next - contains middleware flow control
 *
 * @return { object } message - contains validation message
 */
export default (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).send({
      message: 'Please you enter a valid group name'
    });
  }

  const name = req.body.name.trim().toLowerCase();

  models.Group
    .findOne({ where: { name } })
    .then((group) => {
      if (group) {
        return res.status(409).send({
          message: 'Group name already exist'
        });
      }
      next();
    }).catch(error => res.status(500).send({ error: error.message }));
};
