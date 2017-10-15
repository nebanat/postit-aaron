import chai from 'chai';
import expect from 'expect';
import chaiHttp from 'chai-http';
import app from '../server/app';
import models from '../server/models';
import token from './token';

chai.use(chaiHttp);

describe('Group routes', () => {
  before((done) => {
    models.Group.destroy({
      truncate: true,
      cascade: true,
      restartIdentity: true
    })
      .then(() => {
        done();
      });
  });
  describe('Create group routes', () => {
    it('should throw an error if a valid JWT token is not provided', (done) => {
      chai.request(app)
        .post('/api/group')
        .send({})
        .end((err, res) => {
          expect(res.status).toEqual(403);
          expect(res.body.message).toEqual('No token provided');
          done();
        });
    });
    it(
      'should throw an error if token is provided but group name is empty',
      (done) => {
        chai.request(app)
          .post('/api/group')
          .send({
            token
          })
          .end((err, res) => {
            expect(res.status).toEqual(400);
            expect(res.body.message).toEqual('Please enter a group name');
            done();
          });
      }
    );
    it(
      'should create a new group when a group name is entered and user is authenticated ',
      (done) => {
        chai.request(app)
          .post('/api/group')
          .send({
            name: 'Test group name',
            token
          })
          .end((err, res) => {
            expect(res.status).toEqual(201);
            expect(res.body.message).toEqual('Group successfully created');
            done();
          });
      }
    );
    it(
      'should throw an error if a user tries to create a group with a name that already exist ',
      (done) => {
        chai.request(app)
          .post('/api/group')
          .send({
            name: 'Test group name',
            token
          })
          .end((err, res) => {
            expect(res.status).toEqual(400);
            expect(res.body.message).toEqual('Group name already exist');
            done();
          });
      }
    );
  });
});

