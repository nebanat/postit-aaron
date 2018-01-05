import React from 'react';
import Jumbotron from './Jumbotron.jsx';
import Navigation from '../../navigation/Navigation.jsx';

/**
 * @description shows home page
 *
 * @returns { jsx } jsx - renders home page
 */
const Home = () =>
  (
    <div>
        <Navigation/>
        <Jumbotron/>
    </div>
  );
export default Home;
