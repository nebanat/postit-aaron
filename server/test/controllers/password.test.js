import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import models from '../../models';

chai.use(chaiHttp);

describe('Reset Password', () => {
  before((done) => {
    models.User.destroy({
      truncate: true,
      cascade: true,
      restartIdentity: true
    });

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
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('Please enter a valid email');
          done();
        });
    });
    it(
      'should throw an error if email entered does not exist in database',
      (done) => {
        chai.request(app)
          .post('/api/user/password')
          .send({
            email: 'testuser5@gmail.com'
          })
          .end((err, res) => {
            expect(res.status).to.equal(404);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('message');
            expect(res.body.message)
              .to.equal('User does not exist in our records');
            done();
          });
      }
    );
  });
  describe('Reset Password route', () => {
    it('should throw an error when a token is not provided', (done) => {
      chai.request(app)
        .post('/api/user/password/reset')
        .send({})
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('Please provide a valid token');
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
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('Please enter a new password');
          done();
        });
    });
  });
});
