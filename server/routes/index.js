import userController from '../controllers/user';
import groupController from '../controllers/group';
import passwordController from '../controllers/password';
import signUpValidation from '../middleware/validations/signUpValidation';
import passwordResetValidation from
  '../middleware/validations/passwordResetValidation';
import resetPasswordValidation from
  '../middleware/validations/resetPasswordValidation';
import emailExist from '../middleware/validations/emailExist';
import usernameExist from '../middleware/validations/usernameExist';
import signInValidation from '../middleware/validations/signInValidation';
import createGroupValidation from
  '../middleware/validations/createGroupValidation';
import groupAlreadyExist from '../middleware/validations/groupAlreadyExist';
import authenticate from '../middleware/authenticate';

export default (app) => {
  app.post(
    '/api/user/signup', signUpValidation, emailExist, usernameExist,
    userController.signup
  );
  app.post('/api/user/signin', signInValidation, userController.signIn);
  app.post(
    '/api/password',
    passwordResetValidation,
    passwordController.sendPasswordResetLinkEmail
  );
  app.post(
    '/api/password/reset',
    resetPasswordValidation, passwordController.resetPassword
  );
  // app.use(authenticate); // check if a user has a valid token
  app.post(
    '/api/group', authenticate, createGroupValidation, groupAlreadyExist,
    groupController.createNewGroup
  );
};
