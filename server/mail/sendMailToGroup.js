import transporter from './nodemailer';
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
  // const userEmails = [];
  const { group } = req;

  group.getUsers({
    where: {
      $not: [
        { id: senderId }
      ]
    },
    attributes: ['username', 'email']
  }).then((groupUsers) => {
    // get all the emails of users in the group except the message sender
    groupUsers.forEach((user) => {
      // mail options
      const mailOptions = {
        from: '"Post It" <noreply@postit.com',
        to: user.email,
        subject: 'PostIt Message notification',
        text: `Hello 
        ${message}
        was posted in your ${group.name}`,
        html: newMessageTemplate(user.username, message, group.name)
      };
      // sends the email to all memnbers of the group
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        }
      });
    });
  });
};
