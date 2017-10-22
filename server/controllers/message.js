import decode from 'jwt-decode';
import models from '../models';
import sendMailToGroup from '../mail/sendMailToGroup';

export default {
  /**
   *
   * @param {req} req
   * @param {res} res
   * @return {groupMessage} groupMessage
   */
  postMessageToGroup(req, res) {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    const { content, priority } = req.body;
    const groupId = req.params.id;

    // decodes token//
    const access = decode(token);
    const userId = access.user.id;
    // creates message
    models.Message.create({
      content,
      priority,
      userId,
      author: access.user.username,
      groupId
    }).then((newMessage) => {
      // send email notification
      if (parseInt(priority) === 2 || parseInt(priority) === 3) {
        sendMailToGroup(groupId, newMessage.content);
      }
      return res.status(201).send({
        message: 'Message sent successfully',
        newMessage
      });
    })
      .catch(error => res.status(500).send(error));
  },
  /**
   *
   * @param {req} req
   * @param {res} res
   * @return {groupMessages} groupMessages
   */
  getGroupMessages(req, res) {
    // retrieve all group messages
    models.Message
      .findAll({ where: { groupId: req.params.id } })
      .then(messages => res.status(201).send({
        messages
      }))
      .catch(error => res.status(400).send(error));
  },
};

