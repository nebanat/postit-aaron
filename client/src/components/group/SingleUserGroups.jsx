import React from 'react';
import { Link } from 'react-router';
import Card from '../common/Card.jsx';

/**
 * @param { group } group object
 * @return { jsx } jsx
 */
const SingleUserGroup = ({ group }) => {
  const cardClass = 'card white purple-text darken-4';
  const cardWrapperClass = 'col s12 m4';
  const cardContentClass = 'card-content black-text';
  const cardTitleClass = 'card-title';

  return (
    <div>
        <Card
          cardClass ={ cardClass }
          wrapperClass= { cardWrapperClass }
          cardContentClass ={ cardContentClass }
          cardTitleClass = { cardTitleClass }>

              <span className="card-title">
                <Link to={`/group/${group.id}/messages`}
                  className="purple-text darken-4">{group.name}
                </Link>
             </span>

             <p>{ group.description }</p>

        </Card>
    </div>
  );
};


export default SingleUserGroup;
