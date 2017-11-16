import React, { Component } from 'react';
import SingleGroupMessage from './SingleGroupMessage.jsx';
import GroupSideBar from '../group/GroupSideBar.jsx';
import Loader from '../loaders/Loader.jsx';
import { searchUsersNotInGroup } from '../../utils/postItApi';


/**
 * @class
 * @extends component
 */
class GroupMessages extends Component {
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
      searchErrorMessage: ''
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    // this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.isSearchLoading = this.isSearchLoading.bind(this);
    this.onAddUser = this.onAddUser.bind(this);
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
    const { messageIsLoading } = this.props;


    return (
            <div>
                <div className="row">
                    <div className="col s8">
                      {
                        (messageIsLoading) ? (<Loader/>) : ('')
                      }
                        <h4>{group.name}</h4>
                        <ul className="collection">
                            {
                                this.props.messages.map((message, i) =>
                                    <SingleGroupMessage message={message}
                                    key={i} i={i}/>)
                            }
                        </ul>
                    </div>
                    <div className="col s4">
                      <GroupSideBar
                          groupUsers = {this.props.groupUsers}
                          search = {this.state.search}
                          onSearchChange={this.onSearchChange}
                          /* onSearchSubmit={this.onSearchSubmit} */
                          searchLoading ={this.state.searchLoading}
                          searchResult={this.state.searchResults}
                          searchErrorMessage={this.state.searchErrorMessage}
                          onAddUser={this.onAddUser}
                          group={group}/>
                    </div>
                </div>

            </div>


    );
  }
}
export default GroupMessages;
