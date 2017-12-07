import React, { Component } from 'react';
import CreateGroupModal from './CreateGroupModal.jsx';

/**
 *@description handles creating a new group
 *
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
   * @return { modal } modal
   */
  componentDidMount() {
    $('.modal').modal({
      opacity: 0.5,
    });
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
            <CreateGroupModal
              {...this.props}
              group = { this.state.group }
              onChange={ this.setGroupDetail }
              onSubmit={this.handleGroupSubmit}
              groupIsLoading={ groupIsLoading }/>
          </div>
    );
  }
}
export default CreateGroup;
