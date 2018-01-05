import models from '../models';

export default {
  /**
   * @description handles creating new group
   *
   * @param { object } req - contains group name and description
   * @param { object } res - contains group data and success message
   *
   * @return { object } newgroup - returns new created group
   */
  createNewGroup(req, res) {
    const userId = req.decoded.user.id;
    const { description } = req.body;
    const name = req.body.name.toLowerCase();

    models.Group
      .create({
        name,
        description
      })
      .then((group) => {
        group.addUser(userId);


        return res.status(201).send({
          message: 'Group successfully created',
          group
        });
      })
      .catch(error => res.status(500).send({ error: error.message }));
  },
  /**
   * @description handles getting authusers groups
   *
   * @param { object } req - contains authenticated user details
   * @param { object } res - contains an array of groups
   *
   * @return { object } groups - returns user groups
   */
  getAuthUserGroups(req, res) {
    const userId = req.decoded.user.id;

    models.User
      .findById(userId)
      .then((user) => {
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
   * @description handles retrieving group members
   *
   * @param { object } req - contains group data
   * @param { object } res - contains group members
   *
   * @return { object } groupMembers - returns group members
   */
  getGroupMembers(req, res) {
    const { group } = req;

    group.getUsers({ attributes: ['id', 'username', 'email'] })
      .then(groupUsers => res.status(200).send(groupUsers))
      .catch(error => res.status(500).send({ error: error.message }));
  },
  /**
   * @description handles adding a user to a group
   *
   * @param { object } req - contains user and group data
   * @param { object } res - contains user data
   *
   * @return { object } newMember - returns a success-failure message
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

      return res.status(200).send({
        message: 'User successfully added to group',
        user: { id: user.id, username: user.username, email: user.email }
      });
    })
      .catch(error => res.status(500).send({ error: error.message }));
  },
  /**
   * @description handles user exiting a group
   *
   * @param { object } req - contains user and group details
   * @param { object } res - contains success message
   *
   * @return { object } groupUser - removes user from the group
   */
  exitGroup(req, res) {
    const { group } = req;
    const userId = req.decoded.user.id;

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
    }).catch(error => res.status(500).send({ error: error.message }));
  },
  /**
   * @description handles deleting a group
   *
   * @param { object } req - contains group details
   * @param { object } res - contains delete success message
   *
   * @return { object } deleteMessage - returns delete success-failure message
   */
  deleteGroup(req, res) {
    const { group } = req;

    group.destroy()
      .then(() => res.status(200).send({
        message: 'Group successfully deleted',
      })).catch(error => res.status(500).send({ error: error.message }));
  },
  /**
   * @description handles removing a user from a group
   *
   * @param { object } req - contains user and group details
   * @param { object } res - contains remove member message
   *
   * @return { object } removeMemberMessage - returns success-failure message
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
    }).catch(error => res.status(500).send({ error: error.message }));
  }
};
