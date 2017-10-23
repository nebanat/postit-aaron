import React, { Component } from 'react';
import Loader from '../loaders/Loader.jsx';

/**
 * @class
 * @extends conponent
 */
class CreateGroup extends Component {
  /**
   *
   * @param {event} event
   * @return {group} group
   */
  handleGroupSubmit(event) {
    event.preventDefault();

    const name = this.refs.name.value;
    const description = this.refs.description.value;

    this.props.actions.groupActions.createGroup(name, description);

    this.refs.groupForm.reset();
  }
  /**
   * @return {jsx} jsx
   */
  render() {
    const { groupIsLoading } = this.props;
    return (
          <div className="container">

            {
                (groupIsLoading) ? (<Loader/>) : ('')
            }
                <h2>New Group</h2>

                <form
                  ref="groupForm"
                  onSubmit={this.handleGroupSubmit.bind(this)}
                  className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="content"
                                ref="name" type="text"
                                className="validate" required/>
                            <label>Name</label>
                        </div>
                    </div>
                     <div className="row">
                        <div className="input-field col s12">
                            <textarea
                                id="description"
                                ref='description'
                                className="materialize-textarea">
                            </textarea>
                            <label>Description (optional)</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col m3">
                            <button type='submit' name='action'
                                    className='purple darken-4 btn col s12'>
                                        Create Group
                            </button>
                        </div>

                    </div>
                </form>
            </div>
    );
  }
}
export default CreateGroup;
