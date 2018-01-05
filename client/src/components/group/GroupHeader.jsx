import React from 'react';
import { Link } from 'react-router';
import Button from '../common/Button.jsx';


/**
 * @description displays group header
 *
 * @param { object } props - contains group header properties
 *
 * @returns { jsx } jsx - renders group header
 */
const GroupHeader = ({ headerText, onExitGroup, onDeleteGroup }) => {
  const exitButtonClass = 'btn-flat col s12 exit-group';
  const deleteButtonClass = 'btn-flat col s12';
  /**
   * @return { jsx } jsx - renders exit group button
   */
  const showExitGroup = () => (
    <div>
      <Button
        id="exit-group"
        buttonClassName ={ exitButtonClass}
        label = ' Exit'
        onClick={ onExitGroup }>

        <i className=" material-icons">exit_to_app</i>

      </Button><br/>

    </div>
  );
  /**
   * @description shows delete button
   *
   * @return { jsx } jsx - shows delete group button
  */
  const showDeleteGroup = () => (
    <Button
      id="delete-group"
      buttonClassName={ deleteButtonClass }
      onClick = { onDeleteGroup }
      label =' Delete'>
      <i className="material-icons">delete_forever</i>

    </Button>
  );
  /**
   * @description shows group link
   *
   * @return { jsx } jsx - shows group link
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

              <h5 className="group-header center-align">
                { headerText }
              </h5>

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
