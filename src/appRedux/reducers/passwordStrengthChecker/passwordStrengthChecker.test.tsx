// @ts-nocheck
import reducer from './passwordStrengthChecker';
import * as passwordActType from '../../actions/passwordStregthChecker/passwordStregthChecker.tsx';
import expect from 'expect';

describe('password strength reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ "passwordInput": "","passwordStrengthData": {}});});

  it('should handle POST_PASSWORD_STRENGTH', () => {
      const expected = {
          type: passwordActType.POST_PASSWORD_STRENGTH,
          payload: {"password":"test password"}
        };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({}, expected)).toEqual({});
  });

});