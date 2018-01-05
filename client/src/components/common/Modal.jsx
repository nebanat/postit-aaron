import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description defines Modal component
 *
 * @param { object } props - contains Modal properties
 *
 * @return { jsx } jsx - renders Modal component
 */
const Modal = ({ modalButtonClass, modalButtonText, children }) => (
    <div>
      <a className= { modalButtonClass } href="#modal1">
        { modalButtonText }
      </a>
        <div id="modal1" className="modal">
            <div className="modal-content">
              { children }
            </div>
            <div className="modal-footer">
              <a href="#!"
                className="modal-action modal-close waves-effect waves-green btn-flat">
                close
              </a>
            </div>
        </div>
    </div>
);

// proptype validation
Modal.propTypes = {
  modalButtonClass: PropTypes.string.isRequired,
  modalButtonText: PropTypes.string.isRequired
};

export default Modal;
