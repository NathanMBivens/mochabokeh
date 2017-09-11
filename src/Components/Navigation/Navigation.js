import React from 'react';
import MobileMenuBar from './MobileMenuBar';
import FixedNavigation from './Fixed-Nav';

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
      <div className="navigation-wrapper">
      <div className="topnavigation">
        <div className="nav animated fadeIn">
          <a className="navItem" href="#process">Process</a>
          <a className="navItem" href="#ourwhy">Our Why</a>
          <a className="navItem" href="#cuponus">Cup On Us</a>
          <a className="navItem" href="#contact">Contact</a>
        </div>
      </div>
      </div>
      <FixedNavigation />
      <MobileMenuBar />
      </div>
    )
  }
}
