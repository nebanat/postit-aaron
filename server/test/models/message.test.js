/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import models from '../../models';
import * as seedData from '../helpers/testSeedData';

let messageId;


describe('MODEL TEST', () => {
  it('should successfully create message', (done) => {
    models.Message.create(seedData.newMessage)
      .then((message) => {
        messageId = message.dataValues.id;
        expect(message.dataValues).to.have.property('id');
        expect(message.dataValues).to.have.property('content');
        expect(message.dataValues).to.have.property('userId');
        expect(message.dataValues).to.have.property('author');
        expect(message.dataValues).to.have.property('groupId');
        expect(message.dataValues).to.have.property('updatedAt');
        expect(message.dataValues).to.have.property('createdAt');
        expect(message.dataValues.content)
          .to.equal(seedData.newMessage.content);
        expect(message.dataValues.priority)
          .to.equal(seedData.newMessage.priority);
        expect(message.dataValues.userId)
          .to.equal(seedData.newMessage.userId);
        expect(message.dataValues.author)
          .to.equal(seedData.newMessage.author);
        expect(message.dataValues.groupId)
          .to.equal(seedData.newMessage.groupId);
        expect(message.dataValues.createdAt).to.exist;
        expect(message.dataValues.updatedAt).to.exist;
        done();
      });
  });
  it('should throw validation errors for invalid message details ', (done) => {
    models.Message.create(seedData.invalidMessage)
      .catch((error) => {
        expect(error.errors[0].message)
          .to.equal('Message body cannot be empty');
        expect(error.errors[0].type).to.equal('Validation error');
        expect(error.errors[0].path).to.equal('content');
        expect(error.errors[1].message)
          .to.equal('User has to create a message');
        expect(error.errors[1].type).to.equal('Validation error');
        expect(error.errors[1].path).to.equal('userId');
        expect(error.errors[2].message)
          .to.equal('Username of the author is required');
        expect(error.errors[2].type).to.equal('Validation error');
        expect(error.errors[2].path).to.equal('author');
        expect(error.errors[3].message)
          .to.equal('A message has to be posted to a group');
        expect(error.errors[3].type).to.equal('Validation error');
        expect(error.errors[3].path).to.equal('groupId');
        done();
      });
  });
  it('should be able to find message by Id', (done) => {
    models.Message
      .findById(messageId)
      .then((message) => {
        expect(message.dataValues).to.have.property('id');
        expect(message.dataValues).to.have.property('content');
        expect(message.dataValues).to.have.property('userId');
        expect(message.dataValues).to.have.property('author');
        expect(message.dataValues).to.have.property('groupId');
        expect(message.dataValues).to.have.property('updatedAt');
        expect(message.dataValues).to.have.property('createdAt');
        expect(message.dataValues.id)
          .to.equal(messageId);
        expect(message.dataValues.content)
          .to.equal(seedData.newMessage.content);
        expect(message.dataValues.priority)
          .to.equal(seedData.newMessage.priority);
        expect(message.dataValues.userId)
          .to.equal(seedData.newMessage.userId);
        expect(message.dataValues.author)
          .to.equal(seedData.newMessage.author);
        expect(message.dataValues.groupId)
          .to.equal(seedData.newMessage.groupId);
        expect(message.dataValues.createdAt).to.exist;
        expect(message.dataValues.updatedAt).to.exist;
        done();
      });
  });
  it('should delete a message', (done) => {
    models.Message.findById(messageId)
      .then((message) => {
        message.destroy()
          .then((result) => {
            expect(result).to.deep.equal([]);
            done();
          });
      });
  });
});

