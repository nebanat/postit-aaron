import expect from 'expect';
import { authenticatedUser,
  authIsLoading } from '../../../src/reducers/userReducer';

describe('USER REDUCER', () => {
  describe('AUTHENTICATED USER', () => {
    it('should return proper initial state for authenticated user', () => {
      expect(authenticatedUser(undefined, {})).toEqual([]);
    });

    it('should return authenticated user', () => {
      expect(authenticatedUser(
        []
        , {
          type: 'SIGN_IN_SUCCESS',
          authenticatedUser: { id: 1, username: 'oare', email: 'oare@gmail.com' }
        }
      )).toEqual({ id: 1, username: 'oare', email: 'oare@gmail.com' });
    });
  });
  describe('AUTH IS LOADING', () => {
    it('should return proper initial state for auth is loading', () => {
      expect(authIsLoading(undefined, {})).toEqual(false);
    });

    it('should return group is loading true', () => {
      expect(authIsLoading(
        false
        , {
          type: 'AUTH_IS_LOADING',
          bool: true
        }
      )).toEqual(true);
    });
  });
});
