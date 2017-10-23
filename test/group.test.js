import chai from 'chai';
import expect from 'expect';
import chaiHttp from 'chai-http';
import app from '../server/app';
import models from '../server/models';
import { insertSeedData, user1token } from './helpers/testHelper';
// import token from './token';

chai.use(chaiHttp);

describe('Group routes', () => {
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
  describe('Create group routes', () => {
    // it('should throw an error if a valid JWT token is not provided', (done) => {
    //   chai.request(app)
    //     .post('/api/group')
    //     .send({})
    //     .end((err, res) => {
    //       expect(res.status).toEqual(403);
    //       expect(res.body.message).toEqual('No token provided');
    //       done();
    //     });
    // });
    // it('should throw an error if a group name is not provided', (done) => {
    //   chai.request(app)
    //     .post('/api/group')
    //     .set('x-access-token', user1token)
    //     .send({
    //       name: ''
    //     })
    //     .end((err, res) => {
    //       expect(res.status).toEqual(400);
    //       expect(res.body.message).toEqual('Please enter a group name');
    //       done();
    //     });
    // });
    it('should allow registered users to create new group', (done) => {
      chai.request(app)
        .post('/api/group')
        .set('x-access-token', user1token)
        .send({
          name: 'React-redux-group'
        })
        .end((err, res) => {
          expect(res.status).toEqual(201);
          expect(res.body.message).toEqual('Group successfully created');
          expect(res.body.group.name).toEqual('React-redux-group');
          done();
        });
    });
    // write some more test on creating a group
  });
  describe('Get authentication user groups', () => {
    it('should throw an error if user has no token', (done) => {
      chai.request(app)
        .get('/api/group/user')
        .end((err, res) => {
          expect(res.status).toEqual(403);
          expect(res.body.message).toEqual('No token provided');
          done();
        });
    });
    it('should get the user groups when a token is passed', (done) => {
      chai.request(app)
        .get('/api/group/user')
        .set('x-access-token', user1token)
        .end((err, res) => {
          expect(res.status).toEqual(200);
          done();
        });
    });
  });
});

