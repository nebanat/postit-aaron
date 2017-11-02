import models from '../models';
import { decodeUser } from '../middleware/authenticate';

export default {
  /**
   *
   * @param { req } req
   * @param { res } res
   * @return { group } group
   */
  createNewGroup(req, res) {
    const authUser = decodeUser(req);

    models.Group
      .create({
        name: req.body.name,
        description: req.body.description,
      })
      .then((group) => {
        /** adds group creator to group */
        group.addUser(authUser.id);


        return res.status(201).send({
          message: 'Group successfully created',
          group
        });
      })
      .catch(error => res.status(500).send({ error: error.message }));
  },
  /**
   *
   * @param {req} req
   * @param {res} res
   * @return {groups} groups
   */
  getAuthUserGroups(req, res) {
    const authUser = decodeUser(req);
    const userId = authUser.id;

    models.User
      .findById(userId)
      .then((user) => {
      /* Checks to see if the user exist */
        if (!user) {
          return res.status(404).send({
            message: 'User does not exist'
          });
        }

        user.getGroups().then(userGroups => res.status(200).send(userGroups));
      })
      .catch(error => res.status(500).send({ error: error.message }));
  },
  /**
   *
   * @param {req} req
   * @param {res} res
   * @return {groupMembers} groupMembers
   */
  getGroupMembers(req, res) {
    const groupId = req.params.id;

    models.Group
      .findById(groupId)
      .then((group) => {
        group.getUsers({ attributes: ['username', 'email'] })
          .then(groupUsers => res.status(200).send(groupUsers));
      })
      .catch(error => res.status(500).send({ error: error.message }));
  }
};

