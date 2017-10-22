import React, { Component } from 'react';

/**
 * @class
 * @extends component
 */
class SingleGroupMessage extends Component {
  /**
   *
   * @param {value} value
   * @return { messageBadge } messageBadge
   */
  messageTypeColor(value) {
    if (value === 1) {
      return 'new badge blue darken-4 left secondary-content';
    } else if (value === 2) {
      return 'new badge yellow darken-4 left secondary-content';
    } else if (value === 3) {
      return 'new badge red darken-4 left secondary-content';
    }
  }
  /**
 *
 * @param { value } value
 * @return {messageType} messageType
 */
  messageType(value) {
    if (value === 1) {
      return 'normal';
    } else if (value === 2) {
      return 'urgent';
    } else if (value === 3) {
      return 'critical';
    }
  }
  /**
   * @return {jsx} jsx
   */
  render() {
    const { message, i } = this.props;
    return (
          <li className="collection-item avatar">
              <img alt="" className="circle"/>
              <strong className="title">@{message.author} <small>
                <i className='purple-text darken-4'>
                  { new Date(message.createdAt).toDateString()} </i></small>
              </strong>
              <br/>
              <p>{message.content}</p>
              <span className={this.messageTypeColor(message.priority)}
                    data-badge-caption={this.messageType(message.priority)}>
              </span>
           </li>
    );
  }
}
export default SingleGroupMessage;
