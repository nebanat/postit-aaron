import expect from 'expect';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import * as groupActions from '../../../src/actions/groupActions';
import * as types from '../../../src/actions/actionTypes';
import LocalStorage from '../../__mocks__/localStorage';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const group = { id: 1, name: 'fake group', description: 'fake description' };
const groupUsers = [{ id: 1, username: 'userone', email: 'userone@gmail.com' }];
const groups = [{ name: 'mock group', description: 'mock description' }];
const groupIndex = 2;
const userIndex = 3;
const userId = 1;
window.localStorage = new LocalStorage();

describe('Group Async Actions', () => {
  beforeEach(() => {
    moxios.install();
    global.Materialize = { toast: () => {} };
    global.browserHistory = { push: () => {} };
    global.localStorage = new LocalStorage();
  });
  afterEach(() => moxios.uninstall());

  it(
    'should create GROUP_IS_LOADING and FETCH_USER_GROUP_SUCCESS ',
    (done) => {
      moxios.stubRequest('/api/group/user', {
        status: 200,
        response: groups
      });

      const expectedActions = [
        { type: types.GROUP_IS_LOADING, bool: true },
        { type: types.FETCH_USER_GROUPS_SUCCESS, groups },
        { type: types.GROUP_IS_LOADING, bool: false }
      ];

      const store = mockStore();

      return store.dispatch(groupActions.fetchUserGroups()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
    }
  );
  it(
    'should create GROUP_IS_LOADING and toast an error for fetching user groups ',
    (done) => {
      moxios.stubRequest('/api/group/user', {
        status: 400,
        response: {
          data: {
            message: 'an error occured'
          }
        }
      });

      const expectedActions = [
        { type: types.GROUP_IS_LOADING, bool: true },
        { type: types.GROUP_IS_LOADING, bool: false }
      ];

      const store = mockStore();

      return store.dispatch(groupActions.fetchUserGroups()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
    }
  );
  it('should create GROUP_IS_LOADING and CREATE_GROUP_SUCCESS ', (done) => {
    moxios.stubRequest('/api/group', {
      status: 200,
      response: {
        data: {
          message: 'Group successfully created',
          group
        },
      }
    });

    const expectedActions = [
      { type: types.GROUP_IS_LOADING, bool: true },
      { type: types.CREATE_GROUP_SUCCESS }, // bug
      { type: types.GROUP_IS_LOADING, bool: false }
    ];

    const store = mockStore();

    return store.dispatch(groupActions.createGroup(group)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it(
    'should create GROUP_IS_LOADING and toast an error for create group ',
    (done) => {
      moxios.stubRequest('/api/group', {
        status: 400,
        response: {
          data: {
            message: 'an error occured'
          }
        }
      });

      const expectedActions = [
        { type: types.GROUP_IS_LOADING, bool: true },
        { type: types.GROUP_IS_LOADING, bool: false }
      ];

      const store = mockStore();

      return store.dispatch(groupActions.createGroup(group)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
    }
  );
  it(
    'should create GROUP_IS_LOADING and FETCH_GROUP_USERS_SUCCESS ',
    (done) => {
      moxios.stubRequest('/api/group/1/users', {
        status: 200,
        response: [{ id: 1, username: 'userone', email: 'userone@gmail.com' }]
      });

      const expectedActions = [
        { type: types.FETCH_GROUP_USERS_SUCCESS, groupUsers },
      ];

      const store = mockStore();

      return store.dispatch(groupActions.fetchGroupUsers(group.id)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
    }
  );
  it('should toast an error for fetch group users', (done) => {
    moxios.stubRequest('/api/group/1/users', {
      status: 400,
      response: {
        data: {
          message: 'an error occured'
        }
      }
    });

    const expectedActions = [];

    const store = mockStore();

    return store.dispatch(groupActions.fetchGroupUsers(group.id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('should create ADD_USER_GROUP and toast a message ', (done) => {
    const user = { id: 1, username: 'userone', email: 'userone@gmail.com' };
    moxios.stubRequest('/api/group/1/user', {
      status: 200,
      response: user
    });

    const expectedActions = [
      { type: types.ADD_USER_TO_GROUP, groupUser: user },
    ];

    const store = mockStore();

    return store
      .dispatch(groupActions.addUserToGroup(group.id, user.id)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  it('should toast an error for add a user to group', (done) => {
    const user = { id: 1, username: 'userone', email: 'userone@gmail.com' };
    moxios.stubRequest('/api/group/1/user', {
      status: 400,
      response: {
        data: {
          message: 'an error occured'
        }
      }
    });

    const expectedActions = [];

    const store = mockStore();

    return store
      .dispatch(groupActions.addUserToGroup(group.id, user.id)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  it('should create EXIT_GROUP action and toast a message ', (done) => {
    moxios.stubRequest('/api/group/1/exit', {
      status: 200,
      response: {
        message: 'Action was successful'
      }
    });

    const expectedActions = [
      { type: types.EXIT_GROUP, index: groupIndex },
    ];

    const store = mockStore();

    return store
      .dispatch(groupActions.leaveGroup(group.id, groupIndex)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  it('should toast an error for exit group action', (done) => {
    moxios.stubRequest('/api/group/1/exit', {
      status: 400,
      response: {
        data: {
          message: 'an error occured'
        }
      }
    });

    const expectedActions = [];

    const store = mockStore();

    return store
      .dispatch(groupActions.leaveGroup(group.id, groupIndex)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  it(
    'should create EXIT_GROUP action and toast a message for delete group ',
    (done) => {
      moxios.stubRequest('/api/group/1', {
        status: 200,
        response: {
          message: 'Action was successful'
        }
      });

      const expectedActions = [
        { type: types.EXIT_GROUP, index: groupIndex },
      ];

      const store = mockStore();

      return store
        .dispatch(groupActions.deleteGroup(group.id, groupIndex)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    }
  );
  it('should toast an error for delete group action', (done) => {
    moxios.stubRequest('/api/group/1', {
      status: 400,
      response: {
        data: {
          message: 'an error occured'
        }
      }
    });

    const expectedActions = [];

    const store = mockStore();

    return store
      .dispatch(groupActions.deleteGroup(group.id, groupIndex)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  it(
    'should create REMOVE_GROUP_MEMBER action and toast a message for removing a group member ',
    (done) => {
      moxios.stubRequest('/api/group/1/remove/member', {
        status: 200,
        response: {
          message: 'Action was successful'
        }
      });

      const expectedActions = [
        { type: types.REMOVE_GROUP_MEMBER, userIndex },
      ];

      const store = mockStore();

      return store
        .dispatch(groupActions.deleteGroupMember(group.id, userId, userIndex))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    }
  );
  it('should toast an error for remove group member action', (done) => {
    moxios.stubRequest('/api/group/1/remove/member', {
      status: 400,
      response: {
        data: {
          message: 'an error occured'
        }
      }
    });

    const expectedActions = [];

    const store = mockStore();

    return store
      .dispatch(groupActions
        .deleteGroupMember(group.id, userId, userIndex)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});
