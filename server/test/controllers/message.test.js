/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import models from '../../models';
import { user1token, invalidToken } from '../helpers/testSeedData';

chai.use(chaiHttp);

describe('MESSAGES API', () => {
  before((done) => {
    models.Message.destroy({
      truncate: true,
      cascade: true,
      restartIdentity: true
    })
      .then(() => {
        done();
      });
  });
  describe('CREATE MESSAGE API: /api/group/:id/message ', () => {
    it('should throw an error if a token is not provided', (done) => {
      chai.request(app)
        .post('/api/group/1/message')
        .send({})
        .end((err, res) => {
          expect(res.status).to.equal(403);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('No token provided');
          done();
        });
    });
    it('should throw an error if an invalid token is provided', (done) => {
      chai.request(app)
        .post('/api/group/1/message')
        .set('x-access-token', invalidToken)
        .send({})
        .end((err, res) => {
          expect(res.status).to.equal(403);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('Failed to authenticate token');
          done();
        });
    });
    it('should throw an error if the group ID passed is invald', (done) => {
      chai.request(app)
        .post('/api/group/1000/message')
        .set('x-access-token', user1token)
        .send({})
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('Group not found');
          done();
        });
    });
    it('should throw an error if the message body is empty', (done) => {
      chai.request(app)
        .post('/api/group/1/message')
        .set('x-access-token', user1token)
        .send({})
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('Please enter message');
          done();
        });
    });
    it('should throw an error if there is no message priority', (done) => {
      chai.request(app)
        .post('/api/group/1/message')
        .set('x-access-token', user1token)
        .send({
          content: 'Hello my group, how are you ',
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('Please enter message priority');
          done();
        });
    });
    it(
      'should throw an error if an invalid message priority is entered',
      (done) => {
        chai.request(app)
          .post('/api/group/1/message')
          .set('x-access-token', user1token)
          .send({
            content: 'Hello my group, how are you ',
            priority: 'proirity'
          })
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('message');
            expect(res.body.message)
              .to.equal('Please enter a valid message priority');
            done();
          });
      }
    );
    it('should post message to a group a user belongs', (done) => {
      chai.request(app)
        .post('/api/group/1/message')
        .set('x-access-token', user1token)
        .send({
          content: 'Hello my group, how are you',
          priority: 'normal'
        })
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.status).to.equal(201);
          expect(res.body).to.have.property('message');
          expect(res.body).to.have.property('newMessage');
          expect(res.body.message).to.equal('Message sent successfully');
          expect(res.body.newMessage).to.be.an('object');
          expect(res.body.newMessage.content)
            .to.equal('Hello my group, how are you');
          expect(res.body.newMessage.priority).to.equal('normal');
          expect(res.body.newMessage.updatedAt).to.exist;
          expect(res.body.newMessage.createdAt).to.exist;
          expect(res.body.newMessage.author).to.exist;
          expect(res.body.newMessage.groupId).to.exist;
          expect(res.body.newMessage.id).to.exist;
          done();
        });
    });
    it('should send an email to group members ', (done) => {
      chai.request(app)
        .post('/api/group/1/message')
        .set('x-access-token', user1token)
        .send({
          content: 'Hello my group, another message for emails',
          priority: 'urgent'
        })
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.status).to.equal(201);
          expect(res.body.message).to.equal('Message sent successfully');
          expect(res.body.newMessage).to.be.an('object');
          expect(res.body.newMessage.content)
            .to.equal('Hello my group, another message for emails');
          done();
        });
    });
  });
  describe('GET MESSAGE API', () => {
    it('should throw an error if a token is not provided', (done) => {
      chai.request(app)
        .get('/api/group/1/messages')
        .end((err, res) => {
          expect(res.status).to.equal(403);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('No token provided');
          done();
        });
    });
    it('should throw an error if the group ID passed is invalid', (done) => {
      chai.request(app)
        .get('/api/group/1000/messages')
        .set('x-access-token', user1token)
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('Group not found');
          done();
        });
    });
    it('should get the group messages', (done) => {
      chai.request(app)
        .get('/api/group/1/messages')
        .set('x-access-token', user1token)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('messages');
          expect(res.body.messages).to.be.an('array');
          done();
        });
    });
  });
});

