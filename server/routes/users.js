import express from 'express';
import userController from '../controllers/user';
import passwordController from '../controllers/password';
import signUpValidation from '../middleware/validations/signUpValidation';
import authenticate from '../middleware/authenticate';
import passwordResetValidation from
  '../middleware/validations/passwordResetValidation';
import resetPasswordValidation from
  '../middleware/validations/resetPasswordValidation';
import signInValidation from '../middleware/validations/signInValidation';
import searchUsersValidation from
  '../middleware/validations/searchUsersValidation';


const app = express.Router();


app.post('/signup', signUpValidation, userController.signup);

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

app.post(
  '/search',
  authenticate, searchUsersValidation, userController.searchUsersNotInGroup
);


export default app;
