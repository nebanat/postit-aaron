import models from '../models';
import sendMailToGroup from '../mail/sendMailToGroup';
import { decodeUser } from '../middleware/authenticate';

export default {
  /**
   *
   * @param {req} req
   * @param {res} res
   * @return {groupMessage} groupMessage
   */
  postMessageToGroup(req, res) {
    const { content, priority } = req.body;
    const groupId = req.params.id;

    // gets decoded user//
    const authUser = decodeUser(req);
    // creates message
    models.Message.create({
      content,
      priority,
      userId: authUser.id,
      author: authUser.username,
      groupId
    }).then((newMessage) => {
      // send email notification
      if (parseInt(priority, 10) === 2 || parseInt(priority, 10) === 3) {
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
   * @param { req } req
   * @param { res } res
   * @return { groupMessages } groupMessages
   */
  getGroupMessages(req, res) {
    // retrieve all group messages
    models.Message
      .findAll({ where: { groupId: req.params.id } })
      .then(messages => res.status(200).send({
        messages
      }))
      .catch(error => res.status(500).send(error));
  },
};

