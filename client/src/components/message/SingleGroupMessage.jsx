import React from 'react';
import moment from 'moment';
import SingleUser from '../group/SingleUser.jsx';

/**
 *@description shows group messages
 *
 * @param { message } object
 * @return { jsx } jsx
 */
const SingleGroupMessage = ({ message }) => {
  /**
   *
   * @param { value } value
   * @return { messageBadge } messageBadge
   */
  const messageTypeColor = (value) => {
    if (value === 'normal') {
      return 'new badge green darken-4';
    } else if (value === 'urgent') {
      return 'new badge yellow darken-4';
    } else if (value === 'critical') {
      return 'new badge red darken-4';
    }
  };

  return (
    <li>
      <div className="row">
        <div className="col s12 message">
          <SingleUser username = { message.author }>
              <span id='message-date'>
                { moment(message.createdAt).fromNow() }
              </span>
          </SingleUser>
          <p id='message'>{ message.content }</p>
          <span className={ messageTypeColor(message.priority) }
              data-badge-caption={ message.priority }>
          </span>
        </div>
      </div>
    </li>
  );
};

export default SingleGroupMessage;
