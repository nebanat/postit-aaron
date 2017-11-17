import React from 'react';
import Button from '../common/Button.jsx';
// import PropTypes from 'prop-types';


const GroupHeader = ({ headerText, onExitGroup }) => {
  const buttonClassName = 'btn-flat white-text exit-group';
  const buttonlabel = 'Exit Group';

  return (
    <div>
       <div className="row">
          <div className="col s11 sticky">
            <Button
              buttonClassName ={ buttonClassName }
              label = {buttonlabel}
              onClick={ onExitGroup }>

              <i className=" small material-icons">exit_to_app</i>

            </Button>
            <h5>{ headerText }</h5>
          </div>
      </div>
   </div>

  );
};

export default GroupHeader;
