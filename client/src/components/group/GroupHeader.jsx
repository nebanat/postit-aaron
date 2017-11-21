import React from 'react';
import { Link } from 'react-router';
import Button from '../common/Button.jsx';
// import PropTypes from 'prop-types';


const GroupHeader = ({ headerText, onExitGroup, onDeleteGroup }) => {
  const exitButtonClass = 'btn-flat col s12 exit-group';
  const deleteButtonClass = 'btn-flat col s12';
  /**
   * @return { jsx } jsx
   */
  const showExitGroup = () => (
    <div>
      <Button
        buttonClassName ={ exitButtonClass}
        label = ' Exit Group'
        onClick={ onExitGroup }>

        <i className=" material-icons">exit_to_app</i>

      </Button><br/>

    </div>
  );
  /**
  * @return { jsx } jsx
  */
  const showDeleteGroup = () => (
    <Button
      buttonClassName={ deleteButtonClass }
      onClick = { onDeleteGroup }
      label =' Delete Group'>
      <i className="material-icons">delete_forever</i>

    </Button>
  );
  /**
   * @return { jsx } jsx
   */
  const showGroupLink = () => (
    <div>
      <Link to="/dashboard" className="btn-flat white-text">
           Groups
      </Link>
    </div>
  );

  return (
    <div>
       <div className="row">
          <div className="col s11 sticky">
              <span id="group-header-right">

                <i className='dropdown-button Large material-icons'
                    data-activates='dropdown1'>more_vert</i>
              </span>

              <span id="group-header-left">
                  { showGroupLink() }
              </span>

              <h4 className="group-header center-align">
                { headerText }
              </h4>

            <ul id='dropdown1' className='dropdown-content'>
              <li>
                  { showExitGroup() }
              </li>
              <li>
                  { showDeleteGroup() }
              </li>
           </ul>
        </div>
      </div>
   </div>

  );
};

export default GroupHeader;
