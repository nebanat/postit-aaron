/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import models from '../../models';
import * as seedData from '../helpers/testSeedData';

let userId;
let userName;
let userEmail;

describe('USER MODEL', () => {
  it('should create a new user and hash the password', (done) => {
    models.User.create(seedData.validUser)
      .then((user) => {
        userId = user.dataValues.id;
        userName = user.dataValues.username;
        userEmail = user.dataValues.email;
        expect(user.dataValues).to.have.property('id');
        expect(user.dataValues).to.have.property('email');
        expect(user.dataValues).to.have.property('username');
        expect(user.dataValues).to.have.property('createdAt');
        expect(user.dataValues).to.have.property('updatedAt');
        expect(user.dataValues.email).to.equal(seedData.validUser.email);
        expect(user.dataValues.username).to.equal(seedData.validUser.username);
        expect(user.dataValues.password)
          .to.not.equal(seedData.validUser.password);
        expect(user.dataValues.createdAt).to.exist;
        expect(user.dataValues.updatedAt).to.exist;
        done();
      });
  });
  it(
    'should throw a validation error for an empty or incorrect email ',
    (done) => {
      models.User.create(seedData.userWithNoEmail)
        .catch((error) => {
          expect(error.errors[0].message).to.equal('A valid email is required');
          expect(error.errors[1].message).to.equal('Email cannot be empty');
          expect(error.errors[0].type).to.equal('Validation error');
          expect(error.errors[1].type).to.equal('Validation error');
          done();
        });
    }
  );
  it('should throw a validation error for a null username ', (done) => {
    models.User.create(seedData.userWithNoUsername)
      .catch((error) => {
        expect(error.errors).to.be.an('array');
        expect(error.errors[0].message).to.equal('username cannot be empty');
        expect(error.errors[0].type).to.equal('Validation error');
        done();
      });
  });
  it('should throw a validation error for an empty password ', (done) => {
    models.User.create(seedData.userWithNoPassword)
      .catch((error) => {
        expect(error.errors).to.be.an('array');
        expect(error.errors[0].message).to.equal('Password cannot be empty');
        expect(error.errors[0].type).to.equal('Validation error');
        done();
      });
  });
  it('should raise a validation error for duplicated email', (done) => {
    models.User.create(seedData.duplicateEmail)
      .catch((error) => {
        expect(error.errors).to.be.an('array');
        expect(error.errors[0].message)
          .to.equal('email must be unique');
        expect(error.errors[0].type).to.equal('unique violation');
        expect(error.errors[0].path).to.equal('email');
        expect(error.errors[0].value).to.equal('nebanat@yahoo.com');
        done();
      });
  });
  it('should raise a validation error for duplicated username', (done) => {
    models.User.create(seedData.duplicateUsername)
      .catch((error) => {
        expect(error.errors).to.be.an('array');
        expect(error.errors[0].message)
          .to.equal('username must be unique');
        expect(error.errors[0].type).to.equal('unique violation');
        expect(error.errors[0].path).to.equal('username');
        expect(error.errors[0].value).to.equal('nebanat');
        done();
      });
  });
  it('should be able to find user by Id', (done) => {
    models.User.findById(userId)
      .then((user) => {
        expect(user.dataValues).to.have.property('id');
        expect(user.dataValues).to.have.property('email');
        expect(user.dataValues).to.have.property('username');
        expect(user.dataValues).to.have.property('createdAt');
        expect(user.dataValues).to.have.property('updatedAt');
        expect(user.dataValues).to.have.property('password');
        expect(user.dataValues.id).to.equal(userId);
        expect(user.dataValues.email).to.equal(seedData.validUser.email);
        expect(user.dataValues.username).to.equal(seedData.validUser.username);
        expect(user.dataValues.password)
          .to.not.equal(seedData.validUser.password);
        expect(user.dataValues.createdAt).to.exist;
        expect(user.dataValues.updatedAt).to.exist;
        done();
      });
  });
  it('should be able to find user by username', (done) => {
    models.User.findOne({
      where: {
        username: userName
      }
    })
      .then((user) => {
        expect(user.dataValues).to.have.property('id');
        expect(user.dataValues).to.have.property('email');
        expect(user.dataValues).to.have.property('username');
        expect(user.dataValues).to.have.property('createdAt');
        expect(user.dataValues).to.have.property('updatedAt');
        expect(user.dataValues).to.have.property('password');
        expect(user.dataValues.id).to.equal(userId);
        expect(user.dataValues.email).to.equal(seedData.validUser.email);
        expect(user.dataValues.username).to.equal(userName);
        expect(user.dataValues.createdAt).to.exist;
        expect(user.dataValues.updatedAt).to.exist;
        done();
      });
  });
  it('should be able to find user by email', (done) => {
    models.User.findOne({
      where: {
        email: userEmail
      }
    })
      .then((user) => {
        expect(user.dataValues).to.have.property('id');
        expect(user.dataValues).to.have.property('email');
        expect(user.dataValues).to.have.property('username');
        expect(user.dataValues).to.have.property('createdAt');
        expect(user.dataValues).to.have.property('updatedAt');
        expect(user.dataValues).to.have.property('password');
        expect(user.dataValues.id).to.equal(userId);
        expect(user.dataValues.email).to.equal(userEmail);
        expect(user.dataValues.username).to.equal(seedData.validUser.username);
        expect(user.dataValues.createdAt).to.exist;
        expect(user.dataValues.updatedAt).to.exist;
        done();
      });
  });
});
