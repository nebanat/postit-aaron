import userController from '../controllers/user';
import groupController from '../controllers/group';
import signUpValidation from '../middleware/validations/signUpValidation';
import emailExist from '../middleware/validations/emailExist';
import usernameExist from '../middleware/validations/usernameExist';
import signInValidation from '../middleware/validations/signInValidation';
import createGroupValidation from '../middleware/validations/createGroupValidation';

export default (app) => {
  app.post(
    '/api/user/signup', signUpValidation, emailExist, usernameExist,
    userController.signup
  );
  app.post('/api/user/signin', signInValidation, userController.signIn);
  app.post('/api/group', createGroupValidation, groupController.createNewGroup);
};
