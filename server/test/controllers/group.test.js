/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import models from '../../models';
import {
  insertSeedData, user1token, user2token } from './../helpers/testSeedData';


chai.use(chaiHttp);

describe('Group API', () => {
  before((done) => {
    models.Group.destroy({
      truncate: true,
      cascade: true,
      restartIdentity: true
    })
      .then(() => {
        insertSeedData();
        done();
      });
  });
  describe('CREATE GROUP API: /api/group ', () => {
    it('should throw an error if a valid JWT token is not provided', (done) => {
      chai.request(app)
        .post('/api/group')
        .send({})
        .end((err, res) => {
          expect(res.status).to.equal(401);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('No token provided');
          done();
        });
    });
    it('should throw an error if a group name is not provided', (done) => {
      chai.request(app)
        .post('/api/group')
        .set('x-access-token', user1token)
        .send({
          name: ''
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('Please enter a group name');
          done();
        });
    });
    it(
      'should throw an error if group name is less than 3 characters',
      (done) => {
        chai.request(app)
          .post('/api/group')
          .set('x-access-token', user1token)
          .send({
            name: 'Re'
          })
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('message');
            expect(res.body.message)
              .to.equal('group name must be at least 3 characters');
            done();
          });
      }
    );
    it('should throw an error if group name contains spaces', (done) => {
      chai.request(app)
        .post('/api/group')
        .set('x-access-token', user1token)
        .send({
          name: 'React redux group'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('group name cannot contain spaces');
          done();
        });
    });
    it('should allow registered users to create new group', (done) => {
      chai.request(app)
        .post('/api/group')
        .set('x-access-token', user1token)
        .send({
          name: 'React-redux-group'
        })
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body).to.have.property('message');
          expect(res.body).to.have.property('group');
          expect(res.body.group).to.be.an('object');
          expect(res.body.message).to.equal('Group successfully created');
          expect(res.body.group.name).to.equal('react-redux-group');
          expect(res.body.group.description).to.equal(null);
          expect(res.body.group.updatedAt).to.exist;
          expect(res.body.group.createdAt).to.exist;
          done();
        });
    });
    it('should throw an error if group name already exist', (done) => {
      chai.request(app)
        .post('/api/group')
        .set('x-access-token', user1token)
        .send({
          name: 'React-redux-group'
        })
        .end((err, res) => {
          expect(res.status).to.equal(409);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('Group name already exist');
          done();
        });
    });
  });
  describe('GET AUTHENTICATED USER GROUPS: /api/groups', () => {
    it('should throw an error if user has no token', (done) => {
      chai.request(app)
        .get('/api/group/user')
        .end((err, res) => {
          expect(res.status).to.equal(401);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('No token provided');
          done();
        });
    });
    it('should get the user groups when a token is passed', (done) => {
      chai.request(app)
        .get('/api/group/user')
        .set('x-access-token', user1token)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });
  describe('GET GROUP MEMBERS: /api/group/:id/users ', () => {
    it('should get all members of a group', (done) => {
      chai.request(app)
        .get('/api/group/1/users')
        .set('x-access-token', user1token)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });
  describe('SEARCH API - api/user/search', () => {
    it('should throw an error if user has no token', (done) => {
      chai.request(app)
        .post('/api/user/search')
        .send({})
        .end((err, res) => {
          expect(res.status).to.equal(401);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('No token provided');
          done();
        });
    });
    it('should throw an error if group Id is not passed', (done) => {
      chai.request(app)
        .post('/api/user/search')
        .set('x-access-token', user1token)
        .send({})
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('Please enter group');
          done();
        });
    });
    it('should throw an error if search query is not passed', (done) => {
      chai.request(app)
        .post('/api/user/search')
        .set('x-access-token', user1token)
        .send({
          groupId: '1'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('Please enter search query');
          done();
        });
    });
    it('should throw an error if group does not exist', (done) => {
      chai.request(app)
        .post('/api/user/search')
        .set('x-access-token', user1token)
        .send({
          groupId: '100',
          query: 'patience'
        })
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('Group does not exist');
          done();
        });
    });
    it(
      'should return an empty array if no users found with search query ',
      (done) => {
        chai.request(app)
          .post('/api/user/search')
          .set('x-access-token', user1token)
          .send({
            groupId: '1',
            query: 'xyshhss'
          })
          .end((err, res) => {
            expect(res.status).to.equal(404);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('message');
            expect(res.body.message).to.equal('No user found');
            done();
          });
      }
    );
    it('should return an array of users matching the search query ', (done) => {
      chai.request(app)
        .post('/api/user/search')
        .set('x-access-token', user1token)
        .send({
          groupId: '1',
          query: 'cynthia'
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.have.property('foundUsers');
          expect(res.body).to.have.property('pages');
          expect(res.body.foundUsers.rows.length).to.equal(1);
          expect(res.body.pages).to.equal(1);
          expect(res.body.foundUsers.rows).to.be.an('array');
          done();
        });
    });
  });
  describe('ADD USER TO A GROUP: /api/group/:id/user', () => {
    it('should throw an error if user Id is not passed', (done) => {
      chai.request(app)
        .post('/api/group/1/user')
        .set('x-access-token', user1token)
        .send({})
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('Please enter a valid user');
          done();
        });
    });
    it('should throw an error if user Id is not a number', (done) => {
      chai.request(app)
        .post('/api/group/1/user')
        .set('x-access-token', user1token)
        .send({
          userId: 'andela'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('Please enter a valid user');
          done();
        });
    });
    it('should throw an error if group Id is not a number', (done) => {
      chai.request(app)
        .post('/api/group/andela/user')
        .set('x-access-token', user1token)
        .send({
          userId: 2
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('Please enter a valid group');
          done();
        });
    });
    it('should throw an error if user does not exist', (done) => {
      chai.request(app)
        .post('/api/group/1/user')
        .set('x-access-token', user1token)
        .send({
          userId: 200
        })
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('This user does not exist');
          done();
        });
    });
    it('should throw an error if user is already a group member', (done) => {
      chai.request(app)
        .post('/api/group/1/user')
        .set('x-access-token', user1token)
        .send({
          userId: 1
        })
        .end((err, res) => {
          expect(res.status).to.equal(409);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('User is already a group member');
          done();
        });
    });
    it('should successfully add the user to the group', (done) => {
      chai.request(app)
        .post('/api/group/1/user')
        .set('x-access-token', user1token)
        .send({
          userId: 2
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body).to.have.property('user');
          expect(res.body.user).to.be.an('object');
          expect(res.body.user.id).to.equal(2);
          expect(res.body.message).to.equal('User successfully added to group');
          done();
        });
    });
  });
  describe('REMOVE USER FROM GROUP: /api/group/:id/remove/member', () => {
    it(
      'should remove a member from group when removed by group admin',
      (done) => {
        chai.request(app)
          .post('/api/group/1/remove/member')
          .set('x-access-token', user1token)
          .send({
            userId: 2
          })
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('message');
            expect(res.body.message)
              .to.equal('You have successfully removed user from group');
            done();
          });
      }
    );
    it(
      'should throw an error if admin tries to delete a user not in the group',
      (done) => {
        chai.request(app)
          .post('/api/group/1/remove/member')
          .set('x-access-token', user1token)
          .send({
            userId: 2
          })
          .end((err, res) => {
            expect(res.status).to.equal(404);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('message');
            expect(res.body.message)
              .to.equal('User is not a member of this group');
            done();
          });
      }
    );
    it(
      'should throw an error if user tries to exit a group they dont belong to',
      (done) => {
        chai.request(app)
          .post('/api/group/1/exit')
          .set('x-access-token', user2token)
          .send()
          .end((err, res) => {
            expect(res.status).to.equal(404);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('message');
            expect(res.body.message)
              .to.equal('you are not a member of this group');
            done();
          });
      }
    );
    it('should successfully add the user to the group', (done) => {
      chai.request(app)
        .post('/api/group/1/user')
        .set('x-access-token', user1token)
        .send({
          userId: 2
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('User successfully added to group');
          done();
        });
    });
    it('should successfully exit a user from the group', (done) => {
      chai.request(app)
        .post('/api/group/1/exit')
        .set('x-access-token', user2token)
        .send()
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message)
            .to.equal('You have successfully exited group');
          done();
        });
    });
  });
  describe('GROUP - DELETE: /api/group/:id', () => {
    it(
      'should throw an error if not group admin tries to delete group',
      (done) => {
        chai.request(app)
          .del('/api/group/1')
          .set('x-access-token', user2token)
          .send()
          .end((err, res) => {
            expect(res.status).to.equal(403);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('message');
            expect(res.body.message)
              .to.equal('You are not authorized to perform this action');
            done();
          });
      }
    );
    it('should delete group when group admin deletes', (done) => {
      chai.request(app)
        .del('/api/group/2')
        .set('x-access-token', user1token)
        .send()
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('Group successfully deleted');
          done();
        });
    });
  });
});

