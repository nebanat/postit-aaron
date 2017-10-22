
import React, { Component } from 'react';
import SingleGroupMessage from './SingleGroupMessage.jsx';

/**
 * @class
 * @extends component
 */
class GroupMessages extends Component {
  /**
    * @returns {messages} messages
    */
  componentWillMount() {
    this.props.actions.messageActions.fetchGroupMessages(this.props.params.id);

    // this.props.fetchGroupUsers(this.props.params.id);
  }
  /**
   * @returns {jsx} jsx
   */
  render() {
    const { id } = this.props.params;
    const index = this.props.groups.findIndex(group => group.id ==
            id);

    const group = this.props.groups[index];


    return (
            <div>
                <div className="row">
                    <div className="col s8">
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
                      {/* <GroupSideBar {...this.props}
                                    group={group}/> */}
                    </div>
                </div>

            </div>


    );
  }
}
export default GroupMessages;
