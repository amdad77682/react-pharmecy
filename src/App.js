import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Riaz vai yor website is almost done </h2>
        </div>
        <p className="App-intro">
          To get started, <code>pass me the content of your company</code> and i
          would love to create this website .
        </p>
      </div>
    );
  }
}

export default App;
