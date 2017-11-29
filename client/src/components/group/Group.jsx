import React, { Component } from 'react';
import swal from 'sweetalert';
import SingleGroupMessage from '../message/SingleGroupMessage.jsx';
import GroupHeader from './GroupHeader.jsx';
import GroupSideBar from '../group/GroupSideBar.jsx';
import Loader from '../loaders/Loader.jsx';
import { searchUsersNotInGroup } from '../../utils/postItApi';
import NewMessage from '../message/NewMessage.jsx';
import { getAuthUser } from '../../utils/authservice';

/**
 * @class
 * @extends component
 */
class Group extends Component {
  /**
   * @constructor
   * @param {props} props
   */
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searchLoading: false,
      searchResults: [],
      searchErrorMessage: '',
      adminId: '',
      showDelete: false
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.isSearchLoading = this.isSearchLoading.bind(this);
    this.onAddUser = this.onAddUser.bind(this);
    this.onExitGroup = this.onExitGroup.bind(this);
    this.onDeleteGroup = this.onDeleteGroup.bind(this);
    this.onMouseEnterDelete = this.onMouseEnterDelete.bind(this);
    this.onMouseLeaveDelete = this.onMouseLeaveDelete.bind(this);
    this.handleRemoveMember = this.handleRemoveMember.bind(this);
  }
  /**
    * @returns {messages} messages
    */
  componentWillMount() {
    this.props.actions.messageActions.fetchGroupMessages(this.props.params.id);

    this.props.actions.groupActions.fetchGroupUsers(this.props.params.id);
  }
  /**
   * @return { dom } dom
   */
  componentDidMount() {
    $('.modal').modal({
      opacity: 0.5,
    });

    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false,
      gutter: 0,
      belowOrigin: false,
      stopPropagation: false,
      alignment: 'left',
    });
  }
  /**
   * @param { userId } userId
   * @param { userIndex } userIndex
   * @return { members } members
   */
  handleRemoveMember(userId, userIndex) {
    const groupId = this.props.params.id;

    swal({
      title: 'Are you sure?',
      text: 'You are about to remove this group member. This action cannot be undone',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((removeMember) => {
        if (removeMember) {
          this.props.actions.groupActions.deleteGroupMember(groupId, userId, userIndex);
        }
      });
  }
  /**
   * @return {state} state
   */
  onMouseEnterDelete() {
    return this.setState({ showDelete: true });
  }
  /**
   * @return {state} state
   */
  onMouseLeaveDelete() {
    return this.setState({ showDelete: false });
  }
  /**
   * @return { swal } swalObject
   */
  onDeleteGroup() {
    const { id } = this.props.params;
    const groupIndex = this.props.groups.findIndex(group => group.id ==
      id);

    swal({
      title: 'Are you sure?',
      text: 'Once you delete this group. You cannot undo this action',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((deleteGroup) => {
        if (deleteGroup) {
          this.props.actions.groupActions.deleteGroup(id, groupIndex);
        }
      });
  }
  /**
   * @returns { group } group
   */
  onExitGroup() {
    const { id } = this.props.params;
    const groupIndex = this.props.groups.findIndex(group => group.id ==
      id);

    swal({
      title: 'Are you sure?',
      text: 'Once you leave this group. You cannot undo this action',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((leaveGroup) => {
        if (leaveGroup) {
          this.props.actions.groupActions.leaveGroup(id, groupIndex);
        }
      });
  }
  /**
   * @param { bool } bool
   * @returns {searchLoading} searchLoading
   */
  isSearchLoading(bool) {
    return this.setState({ searchLoading: bool });
  }
  /**
   * @param { userId } userId
   * @return { user } user
   */
  onAddUser(userId) {
    const { searchResults } = this.state;
    const { id } = this.props.params;
    const newUsers = searchResults.filter(user => user.id !== userId);

    this.setState({ searchResults: newUsers });
    this.props.actions.groupActions.addUserToGroup(id, userId);
  }
  /**
   *
   * @param { event } event
   * @return { state } state
   */
  onSearchChange(event) {
    event.preventDefault();
    const { id } = this.props.params;
    this.setState({ search: event.target.value });

    // get search results
    this.isSearchLoading(true);
    searchUsersNotInGroup(id, this.state.search)
      .then((response) => {
        this.setState({ searchResults: response.data });
        this.setState({ searchErrorMessage: '' });
        this.isSearchLoading(false);
      })
      .catch((error) => {
        this.setState({ searchErrorMessage: error.response.data.message });
        this.setState({ searchResults: [] });
        this.isSearchLoading(false);
      });
  }

  /**
   * @returns {jsx} jsx
   */
  render() {
    const { id } = this.props.params;
    const index = this.props.groups.findIndex(group => group.id ==
            id);

    const group = this.props.groups[index];
    const { messages, messageIsLoading } = this.props;

    return (
      <div>
        <div className="row">
            <div className="col s12 m4 l3">
              <GroupSideBar
                groupUsers = {this.props.groupUsers}
                search = {this.state.search}
                onSearchChange={this.onSearchChange}
                searchLoading ={this.state.searchLoading}
                searchResult={this.state.searchResults}
                searchErrorMessage={this.state.searchErrorMessage}
                onAddUser={this.onAddUser}
                onDeleteGroup={ this.onDeleteGroup }
                showDelete ={ this.state.showDelete }
                onMouseEnterDelete={this.onMouseEnterDelete}
                onMouseLeaveDelete={this.onMouseLeaveDelete}
                handleRemoveMember={this.handleRemoveMember}
                authUser = { getAuthUser() }
                />
              </div>
            <div className="col s12 m8 l9">
              {
                (messageIsLoading) ? (<Loader/>) : ('')
              }
                <GroupHeader
                  headerText={ group ? group.name : '' }
                  onExitGroup={ this.onExitGroup }
                  onDeleteGroup={ this.onDeleteGroup }/>

                <div id="messages" className="messageOverflow">
                  <ul>
                    {
                      messages.map((message, i) =>
                        <SingleGroupMessage message={message}
                        key={i} i={i}/>)
                    }
                    {
                      (messages.length === 0) ?
                      (<div className="col s6 offset-s2 not-found center-align">
                          <h5>No messages in this group</h5>
                          <p>Post a message now</p>
                      </div>)
                      : ''
                    }
                  </ul>
                </div>

                <div className="messaging-area">
                  <NewMessage
                    groupId={this.props.params.id}
                    {...this.props}/>
                </div>

            </div>
        </div>

      </div>


    );
  }
}
export default Group;
