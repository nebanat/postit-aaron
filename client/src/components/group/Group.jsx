/*  eslint-disable eqeqeq */
import React, { Component } from 'react';
import swal from 'sweetalert';
import SingleGroupMessage from '../message/SingleGroupMessage.jsx';
import GroupHeader from './GroupHeader.jsx';
import GroupSideBar from '../group/GroupSideBar.jsx';
import Loader from '../loaders/Loader.jsx';
import { searchUsersNotInGroup } from '../../utils/postItApi';
import NewMessage from '../message/NewMessage.jsx';
import { getAuthUser } from '../../utils/authservice';
import NotFound from '../common/NotFound.jsx';

/**
 * @description HOC for group components
 *
 * @class Group
 *
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
      showDelete: false,
      totalSearchResult: 0,
      totalSearchPages: 0,
      currentPaginatePage: 1
    };
    this.searchUsers = this.searchUsers.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.isSearchLoading = this.isSearchLoading.bind(this);
    this.onAddUser = this.onAddUser.bind(this);
    this.onExitGroup = this.onExitGroup.bind(this);
    this.onDeleteGroup = this.onDeleteGroup.bind(this);
    this.onMouseEnterDeleteMember = this.onMouseEnterDeleteMember.bind(this);
    this.onMouseLeaveDeleteMember = this.onMouseLeaveDeleteMember.bind(this);
    this.handleRemoveMember = this.handleRemoveMember.bind(this);
    this.onPaginateClick = this.onPaginateClick.bind(this);
  }
  /**
   * @description handles fetching group details
   *
   * @return { * } null
   */
  componentDidMount() {
    this.props.actions.messageActions.fetchGroupMessages(this.props.params.id);

    this.props.actions.groupActions.fetchGroupUsers(this.props.params.id);

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
   * @description handles removing a member from group
   *
   * @param { integer } userId
   * @param { integer} userIndex
   *
   * @return { object } members of the group
   */
  handleRemoveMember(userId, userIndex) {
    const groupId = this.props.params.id;

    swal({
      title: 'Are you sure?',
      text: 'You are about to remove this group member.',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((removeMember) => {
        if (removeMember) {
          this.props
            .actions
            .groupActions
            .deleteGroupMember(groupId, userId, userIndex);
        }
      });
  }
  /**
   * @description handles on mouse enter event
   *
   * @return { object } delete button
   */
  onMouseEnterDeleteMember() {
    return this.setState({ showDelete: true });
  }
  /**
   * @description handles on mouse leave event
   *
   * @return { newState} newState
   */
  onMouseLeaveDeleteMember() {
    return this.setState({ showDelete: false });
  }
  /**
   * @description handles on delete group event
   *
   * @return { object } delete message
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
   * @description handles on exit group event
   *
   * @returns { object } group
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
   * @description handles rendering search loader
   *
   * @param { boolean } bool
   *
   * @returns { object } search loader
   */
  isSearchLoading(bool) {
    return this.setState({ searchLoading: bool });
  }
  /**
   * @description handles adding a user to group event
   *
   * @param { integer } userId
   *
   * @return { object } user contains user details
   */
  onAddUser(userId) {
    const { searchResults } = this.state;
    const { id } = this.props.params;
    const newSearchResult = searchResults.filter(user => user.id !== userId);

    this.setState({ searchResults: newSearchResult });
    this.props.actions.groupActions.addUserToGroup(id, userId);
  }
  /**
   * @description on searching user
   *
   * @return { array } users
   */
  searchUsers() {
    const { id } = this.props.params;
    const offset = 5 * (this.state.currentPaginatePage - 1);

    this.isSearchLoading(true);
    searchUsersNotInGroup(id, this.state.search, offset)
      .then((response) => {
        this.setState({ searchResults: response.data.nUsers.rows });
        this.setState({ totalSearchPages: response.data.pages });
        this.setState({ totalSearchResult: response.data.nUsers.count });
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
   * @description handles on change event for search field
   *
   * @param { object } event
   * @param { integer } offset
   *
   * @return { state } state
   */
  onSearchChange(event) {
    event.preventDefault();
    this.setState({ search: event.target.value });
  }
  /**
   * @description handles click event with pagination
   *
   * @param {integer } page
   *
   * @return { object } currentPaginatePage
   */
  onPaginateClick(page) {
    this.setState({ currentPaginatePage: page }, () => {
      this.searchUsers();
    });
  }

  /**
   * @description renders group components
   *
   * @returns { jsx } jsx
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
                onSearch = { this.searchUsers }
                searchLoading ={this.state.searchLoading}
                searchResult={this.state.searchResults}
                searchErrorMessage={this.state.searchErrorMessage}
                onAddUser={this.onAddUser}
                onDeleteGroup={ this.onDeleteGroup }
                showDelete ={ this.state.showDelete }
                onMouseEnterDelete={this.onMouseEnterDeleteMember}
                onMouseLeaveDelete={this.onMouseLeaveDeleteMember}
                handleRemoveMember={this.handleRemoveMember}
                searchPages = {this.state.totalSearchPages}
                searchCount = {this.state.totalSearchResult}
                currentPaginatePage={ this.state.currentPaginatePage }
                onPaginateClick={ this.onPaginateClick }
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
                  <ul className="post">
                    {
                      messages.map((message, i) =>
                        <SingleGroupMessage message={message}
                        key={i} i={i}/>)
                    }
                    {
                      (messages.length === 0) ?
                      (<div className="col s8 offset-s2 center-align">
                          <NotFound header='No messages in this group'
                            body="Post a message now"/>
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
