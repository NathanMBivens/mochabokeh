import React from 'react';
import MobileMenuBar from './MobileMenuBar';

export default class FixedNavigation extends React.Component {
  render() {
    return (
      <div>
      <div className="fixed-navigation-wrapper">
      <div className="fixed-navigation">
        <div className="fixed-nav animated fadeIn">
          <a className="navItem" href="#process">Process</a>
          <a className="navItem" href="#ourwhy">Our Why</a>
          <a className="navItem" href="#cuponus">Cup On Us</a>
          <a className="navItem" href="#contact">Contact</a>
        </div>
      </div>
      </div>
      </div>
    )
  }
}
