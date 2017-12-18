import React, { Component } from 'react';
import NavBar from '../common/NavBar.jsx';
import NavItem from '../common/NavItem.jsx';
import Logo from '../common/Logo.jsx';
import Logout from '../common/Logout.jsx';
import { isLoggedIn } from '../../utils/authservice';


/**
 * @description handles app navigation
 *
 * @class Navigation
 *
 * @extends Component
 */
class Navigation extends Component {
  /**
   * @constructor
   *
   * @param { object } props
   */
  constructor(props) {
    super(props);
    this.state = {
      navLinks: [],
    };
  }
  /**
   * @description initializes jquery element and nav state
   *
   * @return { * } null
   */
  componentDidMount() {
    $('.button-collapse').sideNav();

    const userNav = [
      { text: 'Home', link: '/' },
      { text: 'Login', link: '/signin' },
      { text: 'SignUp', link: '/signup' }
    ];

    const authUserNav = [
      { text: 'Groups', link: '/dashboard' }
    ];

    return isLoggedIn() ?
      this.setState({ navLinks: authUserNav })
      : this.setState({ navLinks: userNav });
  }
  /**
   * @description renders navigation
   *
   * @returns { jsx } jsx
   */
  render() {
    const navBarClassName = 'purple darken-4';
    const navBarWrapperClass = 'nav-wrapper';
    const navItemClass = 'white-text';
    const navItemActive = 'purple darken-3 white-text';
    const logoClassName = 'brand-logo';
    const logoText = 'PostIt';
    return (
       <NavBar
         navBarClassName = { navBarClassName }
         navBarWrapperClass = { navBarWrapperClass }>

         <Logo
         logoClassName={ logoClassName }
         logoText={logoText}/>

         <a href="#"
            data-activates="mobile-demo"
            className="button-collapse right">
            <i className="material-icons">menu</i>
         </a>

         <ul className="purple darken-4 side-nav" id="mobile-demo">
         {
            this.state.navLinks.map((nlink, i) =>
                <NavItem key={i} i={i}
                navLink ={ nlink.link }
                navClassName = { navItemClass }
                navActiveClass={ navItemActive }
                navText ={ nlink.text }/>)
         }


          {
            (isLoggedIn()) ?
              <Logout
              navItemClass={ navItemClass }
              navText ='Logout'/> : ''
          }
         </ul>
            <div className="container">
                <ul className="right hide-on-med-and-down">
                 {
                    this.state.navLinks.map((nlink, i) =>
                        <NavItem key={i} i={i}
                        navLink ={ nlink.link }
                        navClassName = { navItemClass }
                        navActiveClass={ navItemActive }
                        navText ={ nlink.text }/>)
                  }


                  {
                    (isLoggedIn()) ?
                      <Logout
                      navItemClass={ navItemClass }
                      navText ='Logout'/> : ''
                  }
                </ul>
          </div>
        </NavBar>
    );
  }
}


export default Navigation;

