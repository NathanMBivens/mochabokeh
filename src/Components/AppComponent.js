import React from 'react';
import Navigation from './Navigation/Navigation';
import Banner from './Banner/Banner';
import ProcessSection from './Process/ProcessSection';
import SectionBanner from './Section/SectionBanner';
import FreeCoffee from './CupOnUs/FreeCoffee';
import Contact from './Contact/Contact';
import Style from '../styles/style.scss';

export default class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Banner />
        <ProcessSection />
        <SectionBanner />
        <FreeCoffee />
        <Contact />
      </div>
    )
  }
}
