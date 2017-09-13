import React from 'react';


export default class Modal extends React.Component {
  render() {
    return (
      <div className="cupModal ">

        <div className="modal-content blur">
        <span className="closeModal">x</span>
          <p className="modal-description"> You know you want some. Enter that email for some Mocha Bokeh. </p>
          <div className="emailButtonCombo">
          <input className="emailInput" type="email" name="enterEmail" placeholder="EMAIL" />
          <button className="submitEmail" type="submit">Get Coffee</button>
          </div>
        </div>
      </div>
    )
  }
}
