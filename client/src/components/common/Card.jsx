import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description defines card component
 *
 * @param { object} props - contains card properties
 *
 * @return { jsx } jsx - renders card component
 */
const Card = ({
  wrapperClass, children, title,
  cardContentClass, cardClass, cardTitleClass
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
