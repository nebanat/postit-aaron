import models from '../models';
import sendMailToGroup from '../mail/sendMailToGroup';

export default {
  /**
   * @description handles posting messages to groups
   *
   * @param { object } req - contains message details
   * @param { object } res - contains user and message details
   *
   * @return { object } - groupMessage returns a new group message
   */
  postMessageToGroup(req, res) {
    const { content, priority } = req.body;
    const groupId = req.params.id;
    const authUser = req.decoded.user;

    models.Message.create({
      content,
      priority,
      userId: authUser.id,
      author: authUser.username,
      groupId
    }).then((newMessage) => {
      if (priority === 'urgent' || priority === 'critical') {
        sendMailToGroup(req, authUser.id, newMessage.content);
      }
      return res.status(201).send({
        message: 'Message sent successfully',
        newMessage
      });
    })
      .catch(error => res.status(500).send({ error: error.message }));
  },
  /**
   * @description handles retrieving group messages
   *
   * @param { object } req - contains group details
   * @param { object } res - contains group messages
   *
   * @return { object } groupMessages - returns a group messages
   */
  getGroupMessages(req, res) {
    models.Message
      .findAll({ where: { groupId: req.params.id } })
      .then(messages => res.status(200).send({
        messages
      }))
      .catch(error => res.status(500).send({ error: error.message }));
  },
};

