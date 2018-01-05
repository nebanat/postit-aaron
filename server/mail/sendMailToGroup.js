import transporter from './transporter';
import newMessageTemplate from './templates/newMessageTemplate';
/**
 * @description sends email to members of a group
 *
 * @param { req } req - contains group id
 * @param { senderId } senderId - contains message sender id
 * @param { message } message - contains new group message
 *
 * @return { message } message - returns new group message email
 */
export default (req, senderId, message) => {
  const { group } = req;

  group.getUsers({
    where: {
      $not: [
        { id: senderId }
      ]
    },
    attributes: ['username', 'email']
  }).then((groupUsers) => {
    groupUsers.forEach((user) => {
      const mailOptions = {
        from: '"Post It" <noreply@postit.com',
        to: user.email,
        subject: 'PostIt Message notification',
        text: `Hello 
        ${message}
        was posted in your ${group.name}`,
        html: newMessageTemplate(user.username, message, group.name)
      };
      transporter.sendMail(mailOptions, () => {

      });
    });
  });
};
