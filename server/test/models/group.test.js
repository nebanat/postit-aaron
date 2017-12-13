/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import models from '../../models';
import * as seedData from '../helpers/testSeedData';

let groupId;
let groupName;

describe('GROUP MODEL', () => {
  it('should successfully create the group', (done) => {
    models.Group.create(seedData.newGroup)
      .then((group) => {
        groupId = group.dataValues.id;
        groupName = group.dataValues.name;
        expect(group.dataValues).to.have.property('id');
        expect(group.dataValues).to.have.property('name');
        expect(group.dataValues).to.have.property('description');
        expect(group.dataValues).to.have.property('createdAt');
        expect(group.dataValues).to.have.property('updatedAt');
        expect(group.dataValues.name).to.equal(seedData.newGroup.name);
        expect(group.dataValues.description)
          .to.equal(seedData.newGroup.description);
        expect(group.dataValues.createdAt).to.exist;
        expect(group.dataValues.updatedAt).to.exist;
        done();
      });
  });
  it('should throw a validation error for null group name ', (done) => {
    models.Group.create(seedData.groupWithNoName)
      .catch((error) => {
        expect(error.errors[0].message).to.equal('Group name cannot be empty');
        expect(error.errors[0].type).to.equal('Validation error');
        expect(error.errors[0].path).to.equal('name');
        done();
      });
  });
  it('should raise a validation error for duplicated group name', (done) => {
    models.Group.create(seedData.duplicatedGroup)
      .catch((error) => {
        expect(error.errors).to.be.an('array');
        expect(error.errors[0].message)
          .to.equal('name must be unique');
        expect(error.errors[0].type).to.equal('unique violation');
        expect(error.errors[0].path).to.equal('name');
        expect(error.errors[0].value).to.equal('python-group');
        done();
      });
  });
  it('should be able to find group by Id', (done) => {
    models.Group
      .findById(groupId)
      .then((group) => {
        expect(group.dataValues).to.have.property('id');
        expect(group.dataValues).to.have.property('name');
        expect(group.dataValues).to.have.property('description');
        expect(group.dataValues).to.have.property('createdAt');
        expect(group.dataValues).to.have.property('updatedAt');
        expect(group.dataValues.id).to.equal(groupId);
        expect(group.dataValues.name).to.equal(seedData.newGroup.name);
        expect(group.dataValues.description)
          .to.equal(seedData.newGroup.description);
        expect(group.dataValues.createdAt).to.exist;
        expect(group.dataValues.updatedAt).to.exist;
        done();
      });
  });
  it('should be able to find group by name', (done) => {
    models.Group
      .findOne({
        where: {
          name: groupName
        }
      })
      .then((group) => {
        expect(group.dataValues).to.have.property('id');
        expect(group.dataValues).to.have.property('name');
        expect(group.dataValues).to.have.property('description');
        expect(group.dataValues).to.have.property('createdAt');
        expect(group.dataValues).to.have.property('updatedAt');
        expect(group.dataValues.id).to.equal(groupId);
        expect(group.dataValues.name).to.equal(groupName);
        expect(group.dataValues.description)
          .to.equal(seedData.newGroup.description);
        expect(group.dataValues.createdAt).to.exist;
        expect(group.dataValues.updatedAt).to.exist;
        done();
      });
  });
  it('should delete a group', (done) => {
    models.Group.findById(groupId)
      .then((group) => {
        group.destroy()
          .then((result) => {
            expect(result).to.deep.equal([]);
            done();
          });
      });
  });
});

