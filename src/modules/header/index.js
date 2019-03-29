import React, { Component } from "react";
import logo from "../../logo.svg";
import "./index.css";

export class Header extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="header-left">
            <div>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div>
              <h1>Bio Care Agro Limited </h1>
            </div>
          </div>
          <div className="header-right">
            <div className="contact">{`+8801648899685  `} </div>
            <div className="contact">amdad77682@gmail.com</div>
          </div>
        </div>
      </div>
    );
  }
}
