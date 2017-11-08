import React, { Component } from 'react';
import Loader from '../loaders/Loader.jsx';
import CreateGroupForm from './CreateGroupForm.jsx';

/**
 * @class
 * @extends component
 */
class CreateGroup extends Component {
  /**
   * @constructor
   * @param { props }  props
   */
  constructor(props) {
    super(props);
    this.handleGroupSubmit = this.handleGroupSubmit.bind(this);
    this.setGroupDetail = this.setGroupDetail.bind(this);
    this.state = {
      group: {
        name: '',
        description: ''
      }
    };
  }
  /**
   *
   * @param { event } event
   * @return { group } group
   */
  handleGroupSubmit(event) {
    event.preventDefault();
    this.props.actions.groupActions.createGroup(this.state.group);
  }
  /**
   * @param { event } event
   * @returns { state } state
   */
  setGroupDetail(event) {
    const field = event.target.name;
    const { value } = event.target;
    this.state.group[field] = value;

    return this.setState({ group: this.state.group });
  }
  /**
   * @return { jsx } jsx
   */
  render() {
    const { groupIsLoading } = this.props;

    return (
          <div className="container">
              {
                  (groupIsLoading) ? (<Loader/>) : ('')
              }
              <h2>New Group</h2>
              <CreateGroupForm
                group = { this.state.group }
                onChange = { this.setGroupDetail }
                onSubmit = {this.handleGroupSubmit }/>
            </div>
    );
  }
}
export default CreateGroup;
