import expect from 'expect';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import * as messageActions from '../../../src/actions/messageActions';
import * as types from '../../../src/actions/actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const message = 'Hello Group';
const messages = ['Hello new group', 'Another message in the group'];
const priority = 1;
const groupId = 1;

describe('MESSAGE ACTIONS', () => {
  beforeEach(() => {
    moxios.install();
    global.Materialize = { toast: () => {} };
    global.browserHistory = { push: () => {} };
  });
  afterEach(() => moxios.uninstall());

  it('should create MESSAGE_IS_LOADING and POST_MESSAGE ', (done) => {
    moxios.stubRequest('/api/group/1/message', {
      status: 200,
      response: {
        newMessage: message
      }
    });

    const expectedActions = [
      { type: types.MESSAGE_IS_LOADING, bool: true },
      { type: types.POST_MESSAGE, newMessage: message },
      { type: types.MESSAGE_IS_LOADING, bool: false }
    ];

    const store = mockStore();

    return store.dispatch(messageActions.postMessage(message, priority, groupId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('should create MESSAGE_IS_LOADING and toast an error for posting a message ', (done) => {
    moxios.stubRequest('/api/group/1/message', {
      status: 400,
      response: {
        data: {
          message: 'an error occured'
        }
      }
    });

    const expectedActions = [
      { type: types.MESSAGE_IS_LOADING, bool: true },
      { type: types.MESSAGE_IS_LOADING, bool: false }
    ];

    const store = mockStore();

    return store.dispatch(messageActions.postMessage(message, priority, groupId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('should create MESSAGE_IS_LOADING and FETCH_MESSAGES_SUCCESS ', (done) => {
    moxios.stubRequest('/api/group/1/messages', {
      status: 200,
      response: {
        messages
      }
    });

    const expectedActions = [
      { type: types.MESSAGE_IS_LOADING, bool: true },
      { type: types.FETCH_MESSAGES_SUCCESS, messages },
      { type: types.MESSAGE_IS_LOADING, bool: false }
    ];

    const store = mockStore();

    return store.dispatch(messageActions.fetchGroupMessages(groupId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('should create MESSAGE_IS_LOADING and toast an error for fetching a group messages ', (done) => {
    moxios.stubRequest('/api/group/1/messages', {
      status: 400,
      response: {
        data: {
          message: 'an error occured'
        }
      }
    });

    const expectedActions = [
      { type: types.MESSAGE_IS_LOADING, bool: true },
      { type: types.MESSAGE_IS_LOADING, bool: false }
    ];

    const store = mockStore();

    return store.dispatch(messageActions.fetchGroupMessages(groupId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
