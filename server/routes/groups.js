import express from 'express';
import groupController from '../controllers/group';
import messageController from '../controllers/message';
import createGroupValidation from
  '../middleware/validations/createGroupValidation';
import groupAlreadyExist from '../middleware/validations/groupAlreadyExist';
import checkUserGroupMembership from
  '../middleware/validations/checkUserGroupMembership';
import groupExist from
  '../middleware/validations/groupExist';
import authenticate from '../middleware/authenticate';
import postMessageValidation from
  '../middleware/validations/postMessageValidation';

const app = express.Router();

// app.use(authenticate); // check if a user has a valid token
app.post(
  '/', authenticate, createGroupValidation, groupAlreadyExist,
  groupController.createNewGroup
);

app.get('/user', authenticate, groupController.getAuthUserGroups);

app.post(
  '/:id/message', authenticate,
  groupExist, checkUserGroupMembership, postMessageValidation,
  messageController.postMessageToGroup
);

export default app;
