import userController from '../controllers/user';
import signUpValidation from '../middleware/validations/signUpValidation';
import emailExist from '../middleware/validations/emailExist';
import usernameExist from '../middleware/validations/usernameExist';
import signInValidation from '../middleware/validations/signInValidation';

export default (app) => {
  app.post(
    '/api/user/signup', signUpValidation, emailExist, usernameExist,
    userController.signup
  );
  app.post('/api/user/signin', signInValidation, userController.signIn);
};
