import chai from 'chai';
import expect from 'expect';
import chaiHttp from 'chai-http';
import app from '../../server/app';
import models from '../../server/models';
import { insertSeedData, user1token } from './../mockers/testHelper';


chai.use(chaiHttp);

describe('User Controllers', () => {
  before((done) => {
    models.User.destroy({
      truncate: true,
      cascade: true,
      restartIdentity: true
    })
      .then(() => {
        // insertSeedData();
        done();
      });
  });
  describe('SIGNUP API - /api/user/signup', () => {
    it('should throw an error if username is empty', (done) => {
      chai.request(app)
        .post('/api/user/signup')
        .send({})
        .end((err, res) => {
          expect(res.status).toEqual(400);
          expect(res.body.message).toEqual('username is required');
          done();
        });
    });
    it('should throw an error if email is empty', (done) => {
      chai.request(app)
        .post('/api/user/signup')
        .send({
          username: 'testuser1'
        })
        .end((err, res) => {
          expect(res.status).toEqual(400);
          expect(res.body.message).toEqual('email is required');
          done();
        });
    });
    it('should throw an error if password is empty', (done) => {
      chai.request(app)
        .post('/api/user/signup')
        .send({
          username: 'testuser1',
          email: 'testuserpassword@gmail.com'
        })
        .end((err, res) => {
          expect(res.status).toEqual(400);
          expect(res.body.message).toEqual('password is required');
          done();
        });
    });
    it('should throw an error if password is less than 6 characters', (done) => {
      chai.request(app)
        .post('/api/user/signup')
        .send({
          username: 'testuser1',
          email: 'testuseremail@gmail.com',
          password: 'test'
        })
        .end((err, res) => {
          expect(res.status).toEqual(400);
          expect(res.body.message).toEqual('password must be at least 6 characters');
          done();
        });
    });
    it('should signup the user when all details are provided', (done) => {
      chai.request(app)
        .post('/api/user/signup')
        .send({
          username: 'testuser1',
          email: 'testuseremail@gmail.com',
          password: 'tester2017',
        })
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          expect(res.status).toEqual(201);
          expect(res.body.username).toEqual('testuser1');
          expect(res.body.email).toEqual('testuseremail@gmail.com');
          expect(res.body.password).toBe(undefined); // expect not to return password
          done();
        });
    });
  });
  describe('SIGNIN API - /api/user/signin', () => {
    it('should throw an error if username is empty', (done) => {
      chai.request(app)
        .post('/api/user/signin')
        .send({})
        .end((err, res) => {
          expect(res.status).toEqual(400);
          expect(res.body.message).toEqual('Please enter username');
          done();
        });
    });
    it('should throw an error if password is empty', (done) => {
      chai.request(app)
        .post('/api/user/signin')
        .send({
          username: 'testuser1'
        })
        .end((err, res) => {
          expect(res.status).toEqual(400);
          expect(res.body.message).toEqual('Please enter password');
          done();
        });
    });
    it('should throw an error for wrong username and password combination', (done) => {
      chai.request(app)
        .post('/api/user/signin')
        .send({
          username: 'testuser1',
          password: 'wrongpassword',
        })
        .end((err, res) => {
          expect(res.status).toEqual(400);
          expect(res.body.message).toEqual('Invalid username or password');
          done();
        });
    });
    it('should sign in user for correct username and password combination', (done) => {
      chai.request(app)
        .post('/api/user/signin')
        .send({
          username: 'testuser1',
          password: 'tester2017',
        })
        .end((err, res) => {
          expect(res.status).toEqual(200);
          expect(res.body.message).toEqual('Welcome testuser1');
          done();
        });
    });
  });
});

