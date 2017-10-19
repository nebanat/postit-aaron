import React, { Component } from 'react';
import { Link } from 'react-router';

/**
 * @class
 * @extends component
 */
class SingleUserGroup extends Component {
  /**
   * @return {jsx} jsx
   */
  render() {
    const { group } = this.props;
    return (
            <div>
                <div className="col s12 m6">
                    <div className="card white darken-1">
                        <div className="card-content black-text">
                            <span className="card-title">
                                <Link to={`/group/${group.id}/messages`} className="purple-text darken-4">{group.name}</Link>
                            </span>
                                <p>{group.description}</p>
                        </div>
                            <div className="card-action">
                                <div className="stats">
                                    <i className="tiny material-icons purple-text darken-4">access_time</i>  Created
                                        <span className="purple-text darken-4">{ new Date(group.createdAt).toDateString()} </span>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
    );
  }
}

export default SingleUserGroup;
