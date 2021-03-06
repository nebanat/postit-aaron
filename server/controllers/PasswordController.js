import randomstring from 'randomstring';
import bcrypt from 'bcrypt';
import models from '../models';
import transporter from '../mail/transporter';
import passwordResetTemplate from '../mail/templates/passwordResetTemplate';

/**
 * @class PasswordController
 *
 * @description contains all functions for PasswordController class
 *
 */
class PasswordController {
  /**
   * @static
   *
   * @description handles email sending with password reset link
   *
   * @param { object } req - contains user email
   * @param { object } res - contains reset password email message
   *
   * @return { object } successMessage - returns reset password success message
   */
  static sendPasswordResetLinkEmail(req, res) {
    const { email } = req.body;

    models.User
      .findOne({ where: { email } })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'User does not exist in our records'
          });
        }
        const resetToken = randomstring.generate();
        const expiryDate = Date.now() + 360000;

        user.update({
          resetPassToken: resetToken,
          expirePassToken: expiryDate
        })
          .then((updatedUser) => {
            const mailOptions = {
              from: '"Post It" <noreply@postit.com',
              to: updatedUser.email,
              subject: 'PostIt Password reset',
              text: `Hello ${updatedUser.username}! 
                  The link to reset your password is below
                  ${process.env.APP_URL}/reset/${resetToken}`,
              html: passwordResetTemplate(updatedUser.username, resetToken)
            };
            transporter.sendMail(mailOptions, (error) => {
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
  }
  /**
   * @static
   *
   * @description handles resetting a user password
   *
   * @param { object } req - contains password details
   * @param { object } res - contains email reset message
   *
   * @return { object } passwordMessage - returns password reset success message
   */
  static resetPassword(req, res) {
    const { resetToken, password } = req.body;
    const salt = bcrypt.genSaltSync(8);

    models.User
      .findOne({ where: { resetPassToken: resetToken } })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'No User associated with this Token'
          });
        }

        if (Date.now() > user.expiryPassToken) {
          return res.status(400).send({
            message: 'Token has expired'
          });
        }

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
}
export default PasswordController;

