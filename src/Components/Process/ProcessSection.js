import React from 'react';
import ProcessDescriptionBubble from './ProcessDescriptionBubble';
import SectionHeader from '../Section/Section';



export default class ProcessSection extends React.Component {
  render() {
    return (
      <div className="process" id="process">
        <SectionHeader text="PROCESS"/>
        <ProcessDescriptionBubble />
      </div>
    )
  }
}
