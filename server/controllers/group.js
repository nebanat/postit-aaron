import models from '../models';
import { decodeUser } from '../middleware/authenticate';

export default {
  /**
   *@description handles creating new group
   *
   * @param { req } req
   * @param { res } res
   * @return { newGroup } newGroup
   */
  createNewGroup(req, res) {
    const authUser = decodeUser(req);
    const { description } = req.body;
    const name = req.body.name.toLowerCase();

    models.Group
      .create({
        name,
        description
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
   *@description handles getting authusers groups
   *
   * @param { req } req
   * @param { res } res
   * @return { groups } groups
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
   *@description handles retrieving group members
   *
   * @param { req } req
   * @param { res } res
   * @return { groupMembers } groupMembers
   */
  getGroupMembers(req, res) {
    const { group } = req;

    group.getUsers({ attributes: ['id', 'username', 'email'] })
      .then(groupUsers => res.status(200).send(groupUsers));
  },
  /**
   *@description handles adding a user to a group
   *
   * @param {req} req
   * @param {res} res
   * @return { newMember} newMember
   */
  addUserToGroup(req, res) {
    const { userId } = req.body;
    const { user, group } = req;

    group.hasUser(user).then((result) => {
      if (result) {
        return res.status(409).send({
          message: 'User is already a group member'
        });
      }
      group.addUser(userId);

      return res.status(201).send({
        message: 'User successfully added to group',
        user: { id: user.id, username: user.username, email: user.email }
      });
    })
      .catch(error => res.status(500).send({ error: error.message }));
  },
  /**
   *@description handles user exiting a group
   *
   * @param { req } req
   * @param { res } res
   * @return { groupUser } groupUser
   */
  exitGroup(req, res) {
    const { group } = req;
    const authUser = decodeUser(req);
    const userId = authUser.id;

    group.hasUser(userId).then((result) => {
      if (!result) {
        return res.status(404).send({
          message: 'you are not a member of this group'
        });
      }

      group.removeUser(userId);

      return res.status(200).send({
        message: 'You have successfully exited group'
      });
    });
  },
  /**
   *@description handles deleting a group
   *
   * @param {req} req
   * @param {res} res
   * @return { deleteMessage } deleteMessage
   */
  deleteGroup(req, res) {
    const { group } = req;

    group.destroy()
      .then(() => res.status(200).send({
        message: 'Group successfully deleted',
      }));
  },
  /**
   *@description handles removing a user from a group
   *
   * @param {req} req
   * @param {res} res
   * @return { removeMemberMessage } removeMemberMessage
   */
  removeGroupMember(req, res) {
    const { userId } = req.body;
    const { group } = req;

    group.hasUser(userId).then((result) => {
      if (!result) {
        return res.status(404).send({
          message: 'User is not a member of this group'
        });
      }

      group.removeUser(userId);

      return res.status(200).send({
        message: 'You have successfully removed user from group'
      });
    });
  }
};
