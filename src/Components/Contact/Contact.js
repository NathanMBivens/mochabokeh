import React from 'react';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact" id="contact">
        <div className="container">
            <div className="contact-section">
            <h2> CONTACT </h2>
                <div className="contact-info">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <p>555-5555</p>
                </div>
                <div className="contact-info">
                  <i className="fa fa-envelope-o" aria-hidden="true"></i> <p>coffee@mochabokeh.com</p>
                </div>
            </div>

        </div>
      </div>
    )
  }
}
