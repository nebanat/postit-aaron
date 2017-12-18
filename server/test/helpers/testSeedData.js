import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../../models';

export const salt = bcrypt.genSaltSync(8);

export const users = [
  {
    email: 'douglas@gmail.com',
    username: 'douglas1995',
    password: 'douglaspass',
    resetPassToken: null,
    expirePassToken: null,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    email: 'patience@gmail.com',
    username: 'patience1987',
    password: 'patiencepass',
    resetPasswordToken: null,
    resetPasswordExpires: null,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    email: 'cynthia@gmail.com',
    username: 'cynthia1987',
    password: 'cynthiapass',
    resetPasswordToken: null,
    resetPasswordExpires: null,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },


];

export const group =
  {
    name: 'Laravel-group',
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
  name: 'python-group',
  description: 'pythonistas'
};

export const groupWithNoName = {
  name: '',
  description: 'pythonistas'
};

export const duplicatedGroup = {
  name: 'python-group',
  description: 'hello python '
};

export const newMessage = {
  content: 'I love javascript',
  priority: 'normal',
  userId: 1,
  author: 'tiesan',
  groupId: 1
};

export const invalidMessage = {
  content: '',
  priority: 'normal',
  userId: '',
  author: '',
  groupId: ''
};

export const invalidPriorityMessage = {
  content: 'I love python',
  priority: '',
  userId: 1,
  author: 'tiesan',
  groupId: 1
};

export const validUser = {
  email: 'nebanat@yahoo.com',
  username: 'nebanat',
  password: 'topper234'
};

export const userWithNoEmail = {
  username: 'nebanat',
  email: '',
  password: 'topper234'
};

export const userWithNoUsername = {
  username: '',
  email: 'nebanat@yahoo.com',
  password: 'topper234'
};
export const userWithNoPassword = {
  username: 'nebanat',
  email: 'nebanat@yahoo.com',
  password: ''
};
export const duplicateUsername = {
  email: 'nebanat@gmail.com',
  username: 'nebanat',
  password: 'topper234'
};

export const badEmail = {
  email: 'nebanat@',
  username: 'neban',
  password: 'topper234'
};

export const duplicateEmail = {
  email: 'nebanat@yahoo.com',
  username: 'coconutchips',
  password: 'coco100fruits'
};

export const checkPassword = {
  email: 'grapes@fruits.com',
  username: 'grapejuice',
  password: 'grapejuiced800'
};

export const invalidToken = '1VDE2OjQzOjI2Ljk1OFoifSwiaWF0IjoxN';
