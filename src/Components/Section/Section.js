import React from 'react';

export default class SectionHeader extends React.Component {
  render() {
    return (
      <div className="section-header">
        <div>
          <h4 className="section-h4"> {this.props.text}</h4>
        </div>
      </div>
    );
  }
}
