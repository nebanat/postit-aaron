import models from '../models';
import transporter from './nodemailer';
/**
 * @param {id} id
 * @param {message} message
 * @return {message} message
 */
export default function (id, message) {
  const userEmails = [];
  models.Group
    .findById(id)
    .then((group) => {
      group.getUsers({ attributes: ['email'] }).then((groupUsers) => {
        // get all the emails of users in the group
        groupUsers.forEach((user) => {
          userEmails.push(user.email);
        });
        // mail options
        const mailOptions = {
          from: '"Post It" <noreply@postit.com',
          to: userEmails,
          subject: 'PostIt Message notification',
          text: `Hello ${message} was posted in ${group.name}`
        };
        // sends the email to all memnbers of the group
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
          }
        });
      });
    });
}
