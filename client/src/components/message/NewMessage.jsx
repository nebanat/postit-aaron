import React, { Component } from 'react';
import NewMessageForm from './NewMessageForm.jsx';

/**
 * @description handle posting a message to a group
 *
 * @class NewMessage
 *
 * @extends component
 */
class NewMessage extends Component {
  /**
   * @constructor
   *
   * @param { props } props - contains new message component properties
   *
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
   *@return { * } null - initializes autoscroll when message is posted
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
   * @description scrolls to the botton of message component
   *
   * @return { * } null - initializes autoscroll when message is posted
   */
  componentDidMount() {
    this.handleScroll();
  }

  /**
   * @description handles on change event for select
   *
   * @param { object } select - contains select state
   *
   * @return { objecy } validation message - returns new message validation
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
   * @description handles on submit event
   *
   * @param { object } event - event object containing message details
   *
   * @return { message } message - return new message state
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
   * @description handles on message change
   *
   * @param { object } event - event object containing message details
   *
   * @return { object } message - return new message state
   */
  onMessageChange(event) {
    return this.setState({ message: event.target.value });
  }
  /**
   * @description handles on change event for select
   *
   * @param { object } event - event object containing message details
   *
   * @return { object } select - contains select state
   */
  onSelectChange(event) {
    const field = event.target.name;
    const { value } = event.target;
    this.state.select[field] = value;

    return this.setState({ select: this.state.select });
  }

  /**
   * @description renders New message form
   *
   * @returns { jsx } jsx - renders new message form
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
