import React from 'react';
import { Link } from 'react-router';
import Card from '../common/Card.jsx';

/**
 * @description displays a single group
 *
 * @param { object } props
 *
 * @return { jsx } jsx
 */
const SingleGroup = ({ group }) => {
  const cardClass = 'card white purple-text darken-4';
  const cardWrapperClass = 'col s12 m4';
  const cardContentClass = 'card-content black-text';
  const cardTitleClass = 'card-title';

  return (
    <div>
      <Link to={`group/${group.id}/messages`}>
          <Card
            cardClass ={ cardClass }
            wrapperClass= { cardWrapperClass }
            cardContentClass ={ cardContentClass }
            cardTitleClass = { cardTitleClass }>

                <span className="card-title">
                  <p className="purple-text darken-4">
                    { group.name }
                  </p>
              </span>

          </Card>
      </Link>
       
    </div>
  );
};


export default SingleGroup;
