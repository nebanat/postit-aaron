import React from 'react';

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
      return 'new badge blue darken-4 left secondary-content';
    } else if (value === 2) {
      return 'new badge yellow darken-4 left secondary-content';
    } else if (value === 3) {
      return 'new badge red darken-4 left secondary-content';
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
          <li className="collection-item avatar">
              <img alt="" className="circle"/>
              <strong className="title">@{message.author} <small>
                <i className='purple-text darken-4'>
                  { new Date(message.createdAt).toDateString()} </i></small>
              </strong>
              <br/>
              <p>{message.content}</p>
              <span className={messageTypeColor(message.priority)}
                    data-badge-caption={messageType(message.priority)}>
              </span>
           </li>
  );
};

export default SingleGroupMessage;
