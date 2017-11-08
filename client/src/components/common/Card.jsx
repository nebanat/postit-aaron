import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  wrapperClass, children, title, cardContentClass, cardClass, cardTitleClass
}) =>
  (
    <div
        className = { wrapperClass }>
          <div className={ cardClass }>
            <div className={ cardContentClass }>

               <span className={ cardTitleClass}>
                  { title }
                </span>
                  { children }
              </div>
          </div>
      </div>

  );
// proptype validation
Card.propTypes = {
  wrapperClass: PropTypes.string.isRequired,
  title: PropTypes.string,
  cardClass: PropTypes.string.isRequired,
  cardContentClass: PropTypes.string.isRequired,
  cardTitleClass: PropTypes.string.isRequired
};

export default Card;
