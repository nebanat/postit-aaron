import expect from 'expect';
import passwordReducer from '../../../src/reducers/passwordReducer';

describe('PASSWORD REDUCER', () => {
  it('should return proper initial state for password is loading', () => {
    expect(passwordReducer(undefined, {})).toEqual(false);
  });

  it('should return group is loading true', () => {
    expect(passwordReducer(
      false
      , {
        type: 'PASSWORD_IS_LOADING',
        bool: true
      }
    )).toEqual(true);
  });
});
