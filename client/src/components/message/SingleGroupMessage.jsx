import React from 'react';
import moment from 'moment';
import SingleUser from '../group/SingleUser.jsx';

/**
 * @param { message } object
 * @return { jsx } jsx
 */
const SingleGroupMessage = ({ message, i }) => {
  /**
   *
   * @param { value } value
   * @return { messageBadge } messageBadge
   */
  const messageTypeColor = (value) => {
    if (value === 1) {
      return 'new badge green darken-4';
    } else if (value === 2) {
      return 'new badge yellow darken-4';
    } else if (value === 3) {
      return 'new badge red darken-4';
    }
  };
  /**
 *
 * @param { value } value
 * @return { messageType } messageType
 */
  const messageType = (value) => {
    if (value === 1) {
      return 'normal';
    } else if (value === 2) {
      return 'urgent';
    } else if (value === 3) {
      return 'critical';
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
                          data-badge-caption={ messageType(message.priority) }>
                     </span>
                    </div>
            </div>
          </li>
  );
};

export default SingleGroupMessage;
