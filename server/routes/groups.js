import express from 'express';
import groupController from '../controllers/group';
import createGroupValidation from
  '../middleware/validations/createGroupValidation';
import groupAlreadyExist from '../middleware/validations/groupAlreadyExist';
import authenticate from '../middleware/authenticate';

const app = express.Router();

// app.use(authenticate); // check if a user has a valid token
app.post(
  '/', authenticate, createGroupValidation, groupAlreadyExist,
  groupController.createNewGroup
);

app.get('/user', authenticate, groupController.getAuthUserGroups);

export default app;
