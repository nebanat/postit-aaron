import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description defines Section component
 *
 * @param { object } props  - contains Section properties
 *
 * @return { jsx } jsx - displays section component
 */
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
    </div>

  );
// proptype validation
Section.propTypes = {
  wrapperClass: PropTypes.string.isRequired,
  header: PropTypes.string,
};

export default Section;
