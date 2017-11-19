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
import addUserToGroupValidation from
  '../middleware/validations/addUserToGroupValidation';
import userExist from
  '../middleware/validations/userExist';
import checkGroupAdmin from '../middleware/validations/checkGroupAdmin';

const app = express.Router();

app.use(authenticate); // check if a user has a valid token

app.post(
  '/', createGroupValidation, groupAlreadyExist,
  groupController.createNewGroup
);

app.get('/user', groupController.getAuthUserGroups);

app.post(
  '/:id/message',
  groupExist, checkUserGroupMembership, postMessageValidation,
  messageController.postMessageToGroup
);

app.get(
  '/:id/messages',
  groupExist, checkUserGroupMembership, messageController.getGroupMessages
);

app.get(
  '/:id/users',
  groupExist, checkUserGroupMembership, groupController.getGroupMembers
);

app.post(
  '/:id/user',
  addUserToGroupValidation, userExist, groupExist, checkUserGroupMembership,
  groupController.addUserToGroup
);

app.post('/:id/exit', groupExist, groupController.exitGroup);

app.delete(
  '/:id',
  groupExist, checkGroupAdmin, groupController.deleteGroup
);

app.post(
  '/:id/remove/member',
  userExist, groupExist, checkGroupAdmin,
  groupController.removeGroupMember
);

export default app;
