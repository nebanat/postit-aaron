/* eslint-disable no-useless-escape */
import React, { Component } from 'react';
import CreateGroupModal from './CreateGroupModal.jsx';

/**
 *@description handles creating a new group
 *
 * @class CreateGroup
 *
 * @extends Component
 */
class CreateGroup extends Component {
  /**
   * @constructor
   *
   * @param { object }  props
   */
  constructor(props) {
    super(props);
    this.handleGroupSubmit = this.handleGroupSubmit.bind(this);
    this.setGroupDetail = this.setGroupDetail.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);

    this.state = {
      initialState: {
        name: '',
        description: ''
      },
      group: {
        name: '',
        description: ''
      },
      groupError: '',
      showGroupButton: true
    };
  }
  /**
   * @description handles on blur event
   *
   * @param { object } event
   *
   * @return { object } errorMessage
   */
  onBlur(event) {
    const { name } = event.target;
    const { value } = event.target;
    const spaceRegex = /\s/;

    switch (name) {
      case 'name':
        if (!value) {
          this.setState({
            groupError: 'Please enter a group name',
            showGroupButton: false
          });
        } else if (spaceRegex.test(value)) {
          this.setState({
            groupError: 'group name not allowed to have spaces',
            showGroupButton: false
          });
        } else if (value.length < 3) {
          this.setState({
            groupError: 'group name must be at least 3 characters',
            showGroupButton: false
          });
        }
        break;
      default:
        break;
    }
  }
  /**
   * @description handles on focus event
   *
   * @return { object } errorMessage
   */
  onFocus() {
    this.setState({
      groupError: '',
      showGroupButton: true
    });
  }
  /**
   * @return { * } null
   */
  componentDidMount() {
    $('.modal').modal({
      opacity: 0.5,
    });
  }
  /**
   * @description handles on submit event for creating group
   *
   * @param { object } event
   *
   * @return { object } group
   */
  handleGroupSubmit(event) {
    event.preventDefault();
    this.props.actions.groupActions.createGroup(this.state.group);
    return this.setState({ group: this.state.initialState });
  }
  /**
   * @description handles on change event
   *
   * @param { object } event
   *
   * @returns { object } state contains group detail
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
              groupIsLoading={ groupIsLoading }
              onBlur = {this.onBlur}
              onFocus = { this.onFocus }
              groupError = { this.state.groupError }
              showGroupButton = {this.state.showGroupButton}/>
          </div>
    );
  }
}
export default CreateGroup;
