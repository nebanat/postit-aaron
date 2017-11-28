import expect from 'expect';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import * as userActions from '../../../src/actions/userActions';
import * as types from '../../../src/actions/actionTypes';
import LocalStorage from '../../__mocks__/localStorage';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
window.localStorage = new LocalStorage();

describe('USER ACTIONS', () => {
  beforeEach(() => {
    moxios.install();
    global.Materialize = { toast: () => {} };
    global.browserHistory = { push: () => {} };
    window.localStorage = new LocalStorage();
  });
  afterEach(() => moxios.uninstall());

  it('should create AUTH_IS_LOADING action ', (done) => {
    const user = {
      username: 'userone',
      email: 'userone@gmail.com',
      password: 'passwordone'
    };

    moxios.stubRequest('/api/user/signup', {
      status: 201,
      response: {
        data: {
          user
        }
      }
    });

    const expectedActions = [
      { type: types.AUTH_IS_LOADING, bool: true },
      { type: types.AUTH_IS_LOADING, bool: false }
    ];

    const store = mockStore();

    return store.dispatch(userActions.signUpUser(user)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('should create AUTH_IS_LOADING and SIGN_IN_SUCCESS action ', (done) => {
    const authenticatedUser = {
      username: 'userone',
      password: 'passwordone'
    };

    moxios.stubRequest('/api/user/signin', {
      status: 200,
      response: {
        data: {
          user: authenticatedUser
        }
      }
    });

    const expectedActions = [
      { type: types.AUTH_IS_LOADING, bool: true },
      { type: types.SIGN_IN_SUCCESS },
      { type: types.AUTH_IS_LOADING, bool: false }
    ];

    const store = mockStore();

    return store.dispatch(userActions.signInUser(authenticatedUser)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('should create AUTH_IS_LOADING and toast an error for signin ', (done) => {
    const user = {
      username: 'userone'
    };

    moxios.stubRequest('/api/user/signin', {
      status: 400,
      response: {
        data: {
          message: 'an error occured'
        }
      }
    });

    const expectedActions = [
      { type: types.AUTH_IS_LOADING, bool: true },
      { type: types.AUTH_IS_LOADING, bool: false }
    ];

    const store = mockStore();

    return store.dispatch(userActions.signInUser(user)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('should create AUTH_IS_LOADING and toast an error for signup ', (done) => {
    const user = {
      username: 'userone'
    };

    moxios.stubRequest('/api/user/signup', {
      status: 400,
      response: {
        data: {
          message: 'an error occured'
        }
      }
    });

    const expectedActions = [
      { type: types.AUTH_IS_LOADING, bool: true },
      { type: types.AUTH_IS_LOADING, bool: false }
    ];

    const store = mockStore();

    return store.dispatch(userActions.signUpUser(user)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});

