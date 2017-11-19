import transporter from './nodemailer';
/**
 * @param { req } req
 * @param { senderId } senderId
 * @param { message } message
 * @return { message } message
 */
export default function (req, senderId, message) {
  const userEmails = [];
  const { group } = req;

  group.getUsers({
    where: {
      $not: [
        { id: senderId }
      ]
    },
    attributes: ['email']
  }).then((groupUsers) => {
    // get all the emails of users in the group except the message sender
    groupUsers.forEach((user) => {
      userEmails.push(user.email);
    });
    // mail options
    const mailOptions = {
      from: '"Post It" <noreply@postit.com',
      to: userEmails,
      subject: 'PostIt Message notification',
      text: `Hello ${message} was posted in your ${group.name}`
    };
    // sends the email to all memnbers of the group
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      }
    });
  });
}
