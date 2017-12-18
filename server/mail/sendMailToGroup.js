import transporter from './transporter';
import newMessageTemplate from './templates/newMessageTemplate';
/**
 *@description sends email to members of a group
 *
 * @param { req } req
 * @param { senderId } senderId
 * @param { message } message
 * @return { message } message
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
