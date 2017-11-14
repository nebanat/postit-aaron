import bcrypt from 'bcrypt';
import md5 from 'md5';
import jwt from 'jsonwebtoken';
import db from '../../server/models';

export const users = [
  {
    email: 'douglas@gmail.com',
    username: 'douglas1995',
    password: md5('douglaspass'),
    resetPassToken: null,
    expirePassToken: null,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    email: 'patience@gmail.com',
    username: 'patience1987',
    password: md5('patiencepass'),
    resetPasswordToken: null,
    resetPasswordExpires: null,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },


];

export const group =
  {
    name: 'Laravel group',
  };
export const insertSeedData = () => {
  db.User.bulkCreate(users);
  db.Group.create(group)
    .then((newgroup) => {
      newgroup.addUser(1);
    });
};

export const generateToken = (id, user) => {
  const jwtSecret = process.env.SECRET || 'PrivateKey';
  const token = jwt.sign({
    user: { id, username: user.username, email: user.email }
  }, jwtSecret, {
    expiresIn: '24h'
  });

  return token;
};

export const user1token = generateToken(1, users[0]);

export const user2token = generateToken(2, users[1]);

export const newGroup = {
  name: 'Europeans'
};

// export const updatedGroup = {
//   name: 'Africans'
// };

export const newMessage = {
  content: 'Maiores ut enim ratione voluptas accusamus lorem.',
  priority: 'Urgent',
  senderId: 1,
  groupId: 1
};

export const invalidPriorityMessage = {
  content: 'Maiores ut enim ratione voluptas accusamus lorem.',
  priority: 'Uncertain',
  senderId: 1,
  groupId: 1
};

export const invalidSenderId = {
  content: 'Maiores ut enim ratione voluptas accusamus lorem.',
  priority: 'Urgent',
  senderId: 'most',
  groupId: 1
};

export const invalidGroupId = {
  content: 'Maiores ut enim ratione voluptas accusamus lorem.',
  priority: 'Urgent',
  senderId: 1,
  groupId: 'president'
};

export const forDefaultValue = {
  content: 'Maiores ut enim ratione voluptas accusamus et.',
  senderId: 1,
  groupId: 1
};

export const validUser = {
  email: 'coconutmilk@fruits.com',
  username: 'coconutmilk',
  password: 'sweetcoconut100'
};

export const duplicateUsername = {
  email: 'coconut@fruits.com',
  username: 'coconutmilk',
  password: 'coconut100'
};

export const badEmail = {
  email: 'pineapples@',
  username: 'pineapplejuice',
  password: 'pine100apples'
};

export const duplicateEmail = {
  email: 'coconutmilk@fruits.com',
  username: 'coconutchips',
  password: 'coco100fruits'
};

export const checkPassword = {
  email: 'grapes@fruits.com',
  username: 'grapejuice',
  password: 'grapejuiced800'
};
