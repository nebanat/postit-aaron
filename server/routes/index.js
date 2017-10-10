import userController from '../controllers/user';
import signUpValidation from '../middleware/validations/signUpValidation';
import userDetailExist from '../middleware/validations/userDetailExist';

export default (app) => {
  app.post(
    '/api/user/signup', signUpValidation,
    userDetailExist, userController.signup
  );
};
