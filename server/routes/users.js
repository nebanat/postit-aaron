import express from 'express';
import userController from '../controllers/user';
import passwordController from '../controllers/password';
import signUpValidation from '../middleware/validations/signUpValidation';
import passwordResetValidation from
  '../middleware/validations/passwordResetValidation';
import resetPasswordValidation from
  '../middleware/validations/resetPasswordValidation';
import emailExist from '../middleware/validations/emailExist';
import usernameExist from '../middleware/validations/usernameExist';
import signInValidation from '../middleware/validations/signInValidation';


// export default (app) => {

// };
const app = express.Router();


app.post(
  '/signup',
  signUpValidation, emailExist, usernameExist,
  userController.signup
);

app.post('/signin', signInValidation, userController.signIn);

app.post(
  '/password',
  passwordResetValidation,
  passwordController.sendPasswordResetLinkEmail
);

app.post(
  '/password/reset',
  resetPasswordValidation, passwordController.resetPassword
);


export default app;
