import chai from 'chai';
import expect from 'expect';
import chaiHttp from 'chai-http';
import app from '../server/app';
import models from '../server/models';

chai.use(chaiHttp);

describe('Reset Password', () => {
  before((done) => {
    models.User.destroy({
      truncate: true,
      cascade: true,
      restartIdentity: true
    });
    // .then(() => {
    //   done();
    // });
    models.User.create({
      username: 'testuser3',
      email: 'testuser3@gmail.com',
      password: 'testuser3password'
    })
      .then(() => {
        done();
      });
  });
  describe('Send reset password link route', () => {
    it('should throw an error if email is empty', (done) => {
      chai.request(app)
        .post('/api/user/password')
        .send({})
        .end((err, res) => {
          expect(res.status).toEqual(400);
          expect(res.body.message).toEqual('Please enter a valid email');
          done();
        });
    });
    it('should throw an error if email entered does not exist in database', (done) => {
      chai.request(app)
        .post('/api/user/password')
        .send({
          email: 'testuser5@gmail.com'
        })
        .end((err, res) => {
          expect(res.status).toEqual(400);
          expect(res.body.message).toEqual('User does not exist in our records');
          done();
        });
    });
  });
  describe('Reset Password route', () => {
    it('should throw an error when a token is not provided', (done) => {
      chai.request(app)
        .post('/api/user/password/reset')
        .send({})
        .end((err, res) => {
          expect(res.status).toEqual(400);
          expect(res.body.message).toEqual('Please provide a valid token');
          done();
        });
    });
    it('should throw an error when a new password is not provided', (done) => {
      chai.request(app)
        .post('/api/user/password/reset')
        .send({
          resetToken: 'hdd8ddd0w3jdjdn'
        })
        .end((err, res) => {
          expect(res.status).toEqual(400);
          expect(res.body.message).toEqual('Please enter a new password');
          done();
        });
    });
  });
});
