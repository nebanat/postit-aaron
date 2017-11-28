import expect from 'expect';
import { messages, messageIsLoading } from '../../../src/reducers/messageReducer';

describe('MESSAGE REDUCER', () => {
  describe('MESSAGES', () => {
    it('should return proper initial state for messages', () => {
      expect(messages(undefined, {})).toEqual([]);
    });

    it('should return messages', () => {
      expect(messages(
        []
        , {
          type: 'FETCH_MESSAGES_SUCCESS',
          messages: [
            { content: 'hello group', priority: 1, author: 'djcranker' },
            { content: 'another hello to group', priority: 2, author: 'augustine' }
          ]
        }
      )).toEqual([
        { content: 'hello group', priority: 1, author: 'djcranker' },
        { content: 'another hello to group', priority: 2, author: 'augustine' }
      ]);
    });

    it('should add a message to the initial message state ', () => {
      expect(messages(
        [
          { content: 'hello group', priority: 1, author: 'djcranker' },
          { content: 'another hello to group', priority: 2, author: 'augustine' }
        ],
        {
          type: 'POST_MESSAGE',
          newMessage: { content: 'happy to be in this group', priority: 3, author: 'douglas' }
        }
      )).toEqual([
        { content: 'hello group', priority: 1, author: 'djcranker' },
        { content: 'another hello to group', priority: 2, author: 'augustine' },
        { content: 'happy to be in this group', priority: 3, author: 'douglas' }
      ]);
    });
  });
  describe('MESSAGE IS LOADING', () => {
    it('should return proper initial state for group is loading', () => {
      expect(messageIsLoading(undefined, {})).toEqual(false);
    });

    it('should return group is loading true', () => {
      expect(messageIsLoading(
        false
        , {
          type: 'MESSAGE_IS_LOADING',
          bool: true
        }
      )).toEqual(true);
    });
  });
});

