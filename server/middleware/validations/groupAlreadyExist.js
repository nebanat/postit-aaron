import models from '../../models';
/**
 * @description handles validation for group name taken
 *
 * @param { req } req
 * @param { res } res
 * @param { next } next
 * @return { user } user
 */
export default (req, res, next) => {
  // checks if group name already exist
  const name = req.body.name.trim().toLowerCase();

  models.Group
    .findOne({ where: { name } })
    .then((group) => {
      if (group) {
        return res.status(400).send({
          message: 'Group name already exist'
        });
      }
      next();
    });
};
