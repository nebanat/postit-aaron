import React from 'react';
import NotFound from '../common/NotFound.jsx';
import Navigation from '../navigation/Navigation.jsx';

const GenericNotFound = () => {
  const header = '404';
  const body = 'The page is you are requesting does not exist';
  return (
    <div className="row">
        <Navigation/>
        <div className="col s8 offset-s2">
          <NotFound header={ header }
                body={ body }/>
        </div>
    </div>
  );
};

export default GenericNotFound;
