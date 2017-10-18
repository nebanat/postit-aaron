import randomstring from 'randomstring';
import md5 from 'md5';
import models from '../models';
import transporter from '../mail/nodemailer';

export default {
  /**
   *
   * @param {req} req
   * @param {res} res
   * @return {successMessage} successMessage
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
              subject: 'PostIt test',
              text: `Hello ${updatedUser.username}! 
                  The link to reset your password is below
                  http://localhost:3001/reset/${token}`
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
   *
   * @param {req} req
   * @param {res} res
   * @return {password} password
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
          password: md5(password),
          resetPassToken: '',
          expiryPassToken: ''
        }).then(updatedUser => res.status(200).send({
          message: `Password reset successful for ${updatedUser.username}`
        }));
      });
  }
};
