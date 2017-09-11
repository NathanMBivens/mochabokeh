import React from 'react';

export default class Banner extends React.Component {
  render() {
    return (
        <div className="main-banner-background">
          <div className="container">
              <div  className="main-banner-text">
                <h1> MOCHA BOKEH COFFEE </h1>
              </div>
          </div>
          <div>
            <i id="scroll-icon" className="fa fa-angle-double-down fa-4x" aria-hidden="true"></i>
          </div>
        </div>
    )
  }
}
