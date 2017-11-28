import expect from 'expect';
import { groups,
  groupUsers, groupIsLoading } from '../../../src/reducers/groupReducer';

describe('GROUP REDUCER', () => {
  describe('GROUPS', () => {
    it('should return proper initial state for groups', () => {
      expect(groups(undefined, {})).toEqual([]);
    });

    it('should return groups', () => {
      expect(groups(
        []
        , {
          type: 'FETCH_USER_GROUPS_SUCCESS',
          groups: [
            { name: 'laravel group', description: 'laravel description' },
            { name: 'rails group', description: 'rails description' }
          ]
        }
      )).toEqual([
        { name: 'laravel group', description: 'laravel description' },
        { name: 'rails group', description: 'rails description' }
      ]);
    });

    it('should add group to the initial state on create group success ', () => {
      expect(groups(
        [
          { name: 'andela group', description: 'andela description' }
        ],
        {
          type: 'CREATE_GROUP_SUCCESS',
          group: { name: 'class 30', description: 'class 30 description' }
        }
      )).toEqual([
        { name: 'andela group', description: 'andela description' },
        { name: 'class 30', description: 'class 30 description' }
      ]);
    });

    it('should remove group from initial state on exit group ', () => {
      expect(groups(
        [
          { name: 'andela group', description: 'andela description' },
          { name: 'class 30', description: 'class 30 description' },
          { name: 'laravel group', description: 'laravel description' }
        ],
        {
          type: 'EXIT_GROUP',
          index: 2
        }
      )).toEqual([
        { name: 'andela group', description: 'andela description' },
        { name: 'class 30', description: 'class 30 description' }
      ]);
    });

    it('should return initial state if an unknown action is passed ', () => {
      expect(groups(
        [
          { name: 'andela group', description: 'andela description' },
        ],
        {
          type: 'UNKNOWN_ACTION',
        }
      )).toEqual([
        { name: 'andela group', description: 'andela description' }
      ]);
    });
  });
  describe('GROUP USERS', () => {
    it('should return proper initial state for group users', () => {
      expect(groupUsers(undefined, {})).toEqual([]);
    });

    it('should return group users on successfully fetching group users', () => {
      expect(groupUsers(
        []
        , {
          type: 'FETCH_GROUP_USERS_SUCCESS',
          groupUsers: [
            { id: 1, username: 'biliyok', email: 'biliyok@gmail.com' },
            { id: 2, name: 'tiesan', email: 'tiesan@gmail.com' }
          ]
        }
      )).toEqual([
        { id: 1, username: 'biliyok', email: 'biliyok@gmail.com' },
        { id: 2, name: 'tiesan', email: 'tiesan@gmail.com' }
      ]);
    });

    it('should return group users on successfully fetching group users', () => {
      expect(groupUsers(
        [
          { id: '1', username: 'tiesan', email: 'tiesan@gmail.com' },
          { id: '2', username: 'biliyok', email: 'biliyok@gmail.com' }
        ]
        , {
          type: 'ADD_USER_TO_GROUP',
          groupUser: {
            user: { id: '3', username: 'enodi', email: 'enodi@gmail.com' },
          }
        }
      )).toEqual([
        { id: '1', username: 'tiesan', email: 'tiesan@gmail.com' },
        { id: '2', username: 'biliyok', email: 'biliyok@gmail.com' },
        { id: '3', username: 'enodi', email: 'enodi@gmail.com' }
      ]);
    });

    it('should remove user from group on remove group member ', () => {
      expect(groupUsers(
        [
          { id: '1', username: 'tiesan', email: 'tiesan@gmail.com' },
          { id: '2', username: 'biliyok', email: 'biliyok@gmail.com' },
          { id: '3', username: 'enodi', email: 'enodi@gmail.com' }
        ],
        {
          type: 'REMOVE_GROUP_MEMBER',
          userIndex: 2
        }
      )).toEqual([
        { id: '1', username: 'tiesan', email: 'tiesan@gmail.com' },
        { id: '2', username: 'biliyok', email: 'biliyok@gmail.com' }
      ]);
    });
  });
  describe('GROUP IS LOADING', () => {
    it('should return proper initial state for group is loading', () => {
      expect(groupIsLoading(undefined, {})).toEqual(false);
    });

    it('should return group is loading true', () => {
      expect(groupIsLoading(
        false
        , {
          type: 'GROUP_IS_LOADING',
          bool: true
        }
      )).toEqual(true);
    });
  });
});

