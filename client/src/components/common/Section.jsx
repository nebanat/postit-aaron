import React from 'react';
import PropTypes from 'prop-types';

const Section = ({
  wrapperClass, headerText, headerClass, children
}) =>
  (
    <div className = { wrapperClass }>
        <div className="container">
            <h4 className={ headerClass }>{ headerText }</h4>
            <div className="row clearfix">
                { children }
            </div>
        </div>
        <br/><br/><br/><br/><br/><br/>
   </div>

  );
// proptype validation
Section.propTypes = {
  wrapperClass: PropTypes.string.isRequired,
  header: PropTypes.string,
};

export default Section;
