import React, { Component } from 'react';
import NewMessageForm from './NewMessageForm.jsx';

/**
 *@description handle posting a message to a group
 *
 *@class
 *@extends component
 */
class NewMessage extends Component {
  /**
   *
   * @param { props } props
   * @return { initializations } initializations
   */
  constructor(props) {
    super(props);
    this.handleOnSubmitMessage = this.handleOnSubmitMessage.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.validateSelection = this.validateSelection.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      select: {
        priority: 'normal'
      },
      message: '',
    };
  }
  /**
   *@description autoscrolls to the bottom of message area
   *
   *@return { dom } dom
   */
  handleScroll() {
    /* eslint-disable no-unused-vars */
    setTimeout(() => {
      const messages = $('.messageOverflow');
      const newMessage = messages.find('.post:last-child');
      const scrollTop = messages.prop('scrollTop');
      const scrollHeight = messages.prop('scrollHeight');
      messages.scrollTop(scrollHeight);
    }, 500);
  }

  /**
   * @return { dom } dom
   */
  componentDidMount() {
    this.handleScroll();
  }

  /**
   *
   * @param { select } select
   * @return { validation } validation
   */
  validateSelection(select) {
    const { Materialize } = window;
    if (!select.priority) {
      Materialize.toast('Please select a message priority', 3000, 'red');
      return false;
    }
    return true;
  }
  /**
   *
   * @param { event } event
   * @return { message } message
   */
  handleOnSubmitMessage(event) {
    event.preventDefault();
    const { message, select } = this.state;
    const { groupId } = this.props;

    if (this.validateSelection(select)) {
      this.props
        .actions
        .messageActions
        .postMessage(message, select.priority, groupId);

      this.handleScroll();
      event.target.message.value = '';
      return this.setState({ message: '' });
    }
  }
  /**
   *
   * @param {event} event
   * @return {message} message
   */
  onMessageChange(event) {
    return this.setState({ message: event.target.value });
  }
  /**
   *
   * @param {event} event
   * @return {message} message
   */
  onSelectChange(event) {
    const field = event.target.name;
    const { value } = event.target;
    this.state.select[field] = value;

    return this.setState({ select: this.state.select });
  }

  /**
   * @returns { jsx } jsx
   */
  render() {
    return (
        <div>
          <NewMessageForm
              message = { this.state.message }
              onMessageChange = {this.onMessageChange}
              onSelectChange = {this.onSelectChange}
              onSubmit = { this.handleOnSubmitMessage }
              priorityValue={this.state.select.priority}
              />
       </div>


    );
  }
}


export default NewMessage;
