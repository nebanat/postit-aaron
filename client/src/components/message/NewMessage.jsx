import React, { Component } from 'react';


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
  }
  /**
   *
   * @param { event } event
   * @return { message } message
   */
  handleOnSubmitMessage(event) {
    event.preventDefault();

    const message = this.refs.content.value;
    const priority = document.getElementById('priority').value;
    const groupId = document.getElementById('group').value;

    this.props.actions.messageActions.postMessage(message, priority, groupId);

    this.refs.messageForm.reset();
  }
  /**
   * @returns { jsx } jsx
   */
  render() {
    return (
            <div className="container">
                <h3>New Message</h3>
                <p className='green-text center col s12'>
                    {
                      (this.props.postSuccessMessage)
                      ? this.props.postSuccessMessage : ''
                    }
                </p><br/>
                <p className='red-text center col s12'>
                    {
                      (this.props.postFailureMessage)
                      ? this.props.postFailureMessage : ''
                    }
                </p><br/>
                <form
                  ref="messageForm"
                  onSubmit={ this.handleOnSubmitMessage }
                  className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                              id="content" ref="content"
                              type="text" className="validate" required/>
                            <label>Content</label>
                        </div>
                    </div>
                     <div className="row">
                       <label>Select group</label>
                     <select className="browser-default" id='group'
                            placeholder="select group" required>
                     {
                      this.props.groups.map((group, i) =>
                        <option value={group.id} key={i}>
                          {
                            group.name
                          }</option>)
                      }
                    </select>
                    </div>
                    <div className="row">
                      <select className="browser-default" id='priority'
                            placeholder="select group" required>
                          <option value='3'>Critical</option>
                          <option value='2'>Urgent</option>
                          <option value='1'>Normal</option>
                      </select>
                    </div>
                    <div className="row">
                        <div className="col m3">
                            <button type='submit' name='action'
                                    className='purple darken-4 btn col s12'>
                                        PostIt
                                </button>
                        </div>

                    </div>
                </form>
            </div>

    );
  }
}


export default NewMessage;
