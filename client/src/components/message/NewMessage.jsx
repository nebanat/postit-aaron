import React, { Component } from 'react';
import NewMessageForm from './NewMessageForm.jsx';

/**
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

    this.state = {
      select: {
        priority: '1'
      },
      message: '',
    };
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
      this.props.actions.messageActions.postMessage(message, select.priority, groupId);
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
    const { groups } = this.props;

    return (
        <div>
          <NewMessageForm
              message = { this.state.message }
              groups = { groups }
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
