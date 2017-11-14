import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server/app';
import models from '../../server/models';
import { insertSeedData, user1token } from './../mockers/testHelper';


chai.use(chaiHttp);

describe('Group API', () => {
  // let userToken;
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
          expect(res.status).to.equal(403);
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
          expect(res.body.message).to.equal('Please enter a group name');
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
          expect(res.body.message).to.equal('Group successfully created');
          expect(res.body.group.name).to.equal('React-redux-group');
          done();
        });
    });
    it('should throw an error if user tries to create group with group name that already exist', (done) => {
      chai.request(app)
        .post('/api/group')
        .set('x-access-token', user1token)
        .send({
          name: 'React-redux-group'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal('Group name already exist');
          done();
        });
    });
  });
  describe('Get authenticated user groups', () => {
    it('should throw an error if user has no token', (done) => {
      chai.request(app)
        .get('/api/group/user')
        .end((err, res) => {
          expect(res.status).to.equal(403);
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
          expect(res.status).to.equal(403);
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
          expect(res.body.message).to.equal('Group does not exist');
          done();
        });
    });
    it('should return an empty array if no users found with search query ', (done) => {
      chai.request(app)
        .post('/api/user/search')
        .set('x-access-token', user1token)
        .send({
          groupId: '1',
          query: 'xyshhss'
        })
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body.message).to.equal('No user found');
          done();
        });
    });
    it('should return an array of users matching the search query ', (done) => {
      chai.request(app)
        .post('/api/user/search')
        .set('x-access-token', user1token)
        .send({
          groupId: '1',
          query: 'patience'
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.length).to.equal(1);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });
});

