import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import logo from "../../logo.svg";
import "./index.css";

export class Navigation extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <ul className="head">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/stuff">Products</NavLink>
            </li>
            <li>
              <NavLink to="/contact">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Gallary</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route path="/" />
            <Route path="/stuff" />
            <Route path="/contact" />
          </div>
        </div>
      </HashRouter>
    );
  }
}
