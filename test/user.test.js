import chai from 'chai';
import expect from 'expect';
import chaiHttp from 'chai-http';
import app from '../server/app';
import models from '../server/models';

chai.use(chaiHttp);

describe('User routes', () => {
  before((done) => {
    models.User.destroy({
      truncate: true,
      cascade: true,
      restartIdentity: true
    })
      .then(() => {
        done();
      });
  });
  describe('signup route', () => {
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
          email: 'testuserpassword'
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
});

