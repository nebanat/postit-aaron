import React from 'react';
import NotFound from '../common/NotFound.jsx';
import Navigation from '../navigation/Navigation.jsx';

/**
 *@description handles 404
 *
 * @returns { jsx } jsx - renders 404 page
 */
const PageNotFound = () => {
  const header = '404';
  const body = 'The page you are requesting does not exist';
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

export default PageNotFound;
