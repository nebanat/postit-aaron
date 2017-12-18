import expect from 'expect';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import * as passwordActions from '../../../src/actions/passwordActions';
import * as types from '../../../src/actions/actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const email = 'testemail@gmail.com';
const resetToken = 'token';
const password = 'password';

describe('PASSWORD ACTIONS', () => {
  beforeEach(() => {
    moxios.install();
    global.Materialize = { toast: () => {} };
    global.browserHistory = { push: () => {} };
  });
  afterEach(() => moxios.uninstall());

  it(
    'should create PASSWORD_IS_LOADING and toast a message for sending reset password link ',
    (done) => {
      moxios.stubRequest('/api/user/password', {
        status: 200,
        response: {
          message: 'Action performed successfully'
        }
      });

      const expectedActions = [
        { type: types.PASSWORD_IS_LOADING, bool: true },
        { type: types.PASSWORD_IS_LOADING, bool: false }
      ];

      const store = mockStore();

      return store.dispatch(passwordActions.sendResetPassword(email)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
    }
  );
  it(
    'should create PASSWORD_IS_LOADING and toast an error for sending reset password link ',
    (done) => {
      moxios.stubRequest('/api/user/password', {
        status: 400,
        response: {
          data: {
            message: 'an error occured'
          }
        }
      });

      const expectedActions = [
        { type: types.PASSWORD_IS_LOADING, bool: true },
        { type: types.PASSWORD_IS_LOADING, bool: false }
      ];

      const store = mockStore();

      return store
        .dispatch(passwordActions.sendResetPassword(email)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    }
  );
  it(
    'should create PASSWORD_IS_LOADING and toast a message for successfully resetting password ',
    (done) => {
      moxios.stubRequest('/api/user/password/reset', {
        status: 200,
        response: {
          message: 'action performed successfully'
        }
      });

      const expectedActions = [
        { type: types.PASSWORD_IS_LOADING, bool: true },
        { type: types.PASSWORD_IS_LOADING, bool: false }
      ];

      const store = mockStore();

      return store.dispatch(passwordActions.resetPassword(resetToken, password)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
    }
  );
  it(
    'should create PASSWORD_IS_LOADING and toast an error for resetting password',
    (done) => {
      moxios.stubRequest('/api/user/password/reset', {
        status: 400,
        response: {
          message: 'an error occured'
        }
      });

      const expectedActions = [
        { type: types.PASSWORD_IS_LOADING, bool: true },
        { type: types.PASSWORD_IS_LOADING, bool: false }
      ];

      const store = mockStore();

      return store
        .dispatch(passwordActions.resetPassword(resetToken, password))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    }
  );
});
