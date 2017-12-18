/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import models from '../../models';

chai.use(chaiHttp);

describe('User Controllers', () => {
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
  describe('SIGNUP API - /api/user/signup', () => {
    it('should throw an error if username is empty', (done) => {
      chai.request(app)
        .post('/api/user/signup')
        .send({})
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal('username is required');
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
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
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('email is required');
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
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('password is required');
          done();
        });
    });
    it(
      'should throw an error if username is less than 3 characters',
      (done) => {
        chai.request(app)
          .post('/api/user/signup')
          .send({
            username: 'te',
            email: 'testuseremail@gmail.com',
            password: 'test001'
          })
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body.message)
              .to.equal('username must be at least 3 characters');
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('message');
            done();
          });
      }
    );
    it(
      'should throw an error if password is less than 6 characters',
      (done) => {
        chai.request(app)
          .post('/api/user/signup')
          .send({
            username: 'testuser1',
            email: 'testuseremail@gmail.com',
            password: 'test'
          })
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body.message)
              .to.equal('password must be at least 6 characters');
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('message');
            done();
          });
      }
    );
    it('should throw an error if an invalid email is entered', (done) => {
      chai.request(app)
        .post('/api/user/signup')
        .send({
          username: 'testuser1',
          email: 'testuseremail@gmail',
          password: 'test002'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal('Enter a valid email');
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
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
          expect(res.status).to.equal(201);
          expect(res.body.username).to.equal('testuser1');
          expect(res.body.email).to.equal('testuseremail@gmail.com');
          expect(res.body).to.have.property('username');
          expect(res.body).to.have.property('email');
          expect(res.body).to.have.property('message');
          expect(res.body).to.be.an('object');
          expect(res.body.password).to.be.an('undefined');
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
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('Please enter username');
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
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('Please enter password');
          done();
        });
    });
    it(
      'should throw an error for wrong username and password combination',
      (done) => {
        chai.request(app)
          .post('/api/user/signin')
          .send({
            username: 'testuser1',
            password: 'wrongpassword',
          })
          .end((err, res) => {
            expect(res.status).to.equal(401);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('message');
            expect(res.body.message).to.equal('Invalid username or password');
            done();
          });
      }
    );
    it(
      'should sign in user for correct username and password combination',
      (done) => {
        chai.request(app)
          .post('/api/user/signin')
          .send({
            username: 'testuser1',
            password: 'tester2017',
          })
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('message');
            expect(res.body).to.have.property('token');
            expect(res.body).to.have.property('user');
            expect(res.body.message).to.equal('Welcome testuser1');
            expect(res.body.user).to.be.an('object');
            expect(res.body.user.username).to.equal('testuser1');
            expect(res.body.user.email).to.equal('testuseremail@gmail.com');
            expect(res.body.token).to.exist;
            done();
          });
      }
    );
  });
});

