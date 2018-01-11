import express from 'express';
import UserController from '../controllers/UserController';
import PasswordController from '../controllers/PasswordController';
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


app.post('/signup', signUpValidation, UserController.signup);

app.post('/signin', signInValidation, UserController.signIn);

app.post(
  '/password',
  passwordResetValidation,
  PasswordController.sendPasswordResetLinkEmail
);

app.post(
  '/password/reset',
  resetPasswordValidation, PasswordController.resetPassword
);

app.post(
  '/search',
  authenticate, searchUsersValidation, UserController.searchUsersNotInGroup
);


export default app;
