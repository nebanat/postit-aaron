import decode from 'jwt-decode';
import models from '../models';

export default {
  /**
   *
   * @param {req} req
   * @param {res} res
   * @return {group} group
   */
  createNewGroup(req, res) {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    const access = decode(token);

    models.Group
      .create({
        name: req.body.name,
        description: req.body.description,
      })
      .then((group) => {
        /** adds group creator to group */
        group.addUser(access.user.id);


        return res.status(201).send({
          message: 'Group successfully created',
          group
        });
      })
      .catch(error => res.status(500).send({ message: 'Internal server error.please try again' }));
  }
};

