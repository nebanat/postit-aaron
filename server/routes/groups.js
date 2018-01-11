import express from 'express';
import GroupController from '../controllers/GroupController';
import MessageController from '../controllers/MessageController';
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
  GroupController.createNewGroup
);

app.get('/user', GroupController.getAuthUserGroups);

app.post(
  '/:id/message',
  groupExist, checkUserGroupMembership, postMessageValidation,
  MessageController.postMessageToGroup
);

app.get(
  '/:id/messages',
  groupExist, checkUserGroupMembership, MessageController.getGroupMessages
);

app.get(
  '/:id/users',
  groupExist, checkUserGroupMembership, GroupController.getGroupMembers
);

app.post(
  '/:id/user',
  addUserToGroupValidation, userExist, groupExist, checkUserGroupMembership,
  GroupController.addUserToGroup
);

app.post('/:id/exit', groupExist, GroupController.exitGroup);

app.delete(
  '/:id',
  groupExist, checkGroupAdmin, GroupController.deleteGroup
);

app.post(
  '/:id/remove/member',
  userExist, groupExist, checkGroupAdmin,
  GroupController.removeGroupMember
);

export default app;
