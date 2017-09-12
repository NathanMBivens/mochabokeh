import React from 'react';


export default class Modal extends React.Component {
  render() {
    return (
      <div className="cupModal">
        <div className="modal-content">
          <span className="closeModal">&times;</span>
          <p className="modal-description"> Please enter your email so we can give you free coffee. </p>
          <input className="emailInput" type="email" name="enterEmail" />
        </div>
      </div>
    )
  }
}
