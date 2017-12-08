import randomstring from 'randomstring';
import bcrypt from 'bcrypt';
import models from '../models';
import transporter from '../mail/nodemailer';
import passwordResetTemplate from '../mail/templates/passwordResetTemplate';

const salt = bcrypt.genSaltSync(8);

export default {
  /**
   *@description handles email sending with password reset link
   *
   * @param { req } req
   * @param { res } res
   * @return { successMessage } successMessage
   */
  sendPasswordResetLinkEmail(req, res) {
    const { email } = req.body;

    models.User
      .findOne({ where: { email } })
      .then((user) => {
        if (!user) {
          return res.status(400).send({
            message: 'User does not exist in our records'
          });
        }
        const token = randomstring.generate();
        const expiryDate = Date.now() + 360000;

        user.update({
          resetPassToken: token,
          expirePassToken: expiryDate
        })
          .then((updatedUser) => {
            const mailOptions = {
              from: '"Post It" <noreply@postit.com',
              to: updatedUser.email,
              subject: 'PostIt Password reset',
              text: `Hello ${updatedUser.username}! 
                  The link to reset your password is below
                  ${process.env.APP_URL}/reset/${token}`,
              html: passwordResetTemplate(updatedUser.username, token)
            };
            transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                return res.status(500).send({
                  message: 'Unable to send email something went wrong'
                });
              }
              return res.status(200).send({
                message: 'Reset password link has been sent to your email'
              });
            });
          });
      });
  },
  /**
   *@description handles resetting a user password
   *
   * @param { req } req
   * @param { res } res
   * @return { password } password
   */
  resetPassword(req, res) {
    const { resetToken, password } = req.body;

    models.User
      .findOne({ where: { resetPassToken: resetToken } })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'No User associated with this Token'
          });
        }
        // checks if the token has expired
        if (Date.now() > user.expiryPassToken) {
          return res.status(401).send({
            message: 'Token has expired'
          });
        }

        // updates the password and garbage collects the token
        user.update({
          password: bcrypt.hashSync(password, salt, null),
          resetPassToken: '',
          expiryPassToken: ''
        }).then(updatedUser => res.status(200).send({
          message: `Password reset successful for ${updatedUser.username}`
        }));
      })
      .catch(error => res.status(500).send({ error: error.message }));
  }
};

