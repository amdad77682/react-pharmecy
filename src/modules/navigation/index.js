import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import logo from "../../logo.svg";
import "./index.css";

export class Navigation extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="">
          <div className="flex flex-row justify-between bg-grey p-5 ">
            <div className=" items-center ml-20">
              <NavLink to="/">Home</NavLink>
            </div>
            <div className="items-center ">
              <NavLink to="/stuff">Products</NavLink>
            </div>
            <div className="items-center">
              <NavLink to="/contact">About Us</NavLink>
            </div>
            <div className="items-center">
              <NavLink to="/contact">Contact Us</NavLink>
            </div>
            <div className="items-center mr-20">
              <NavLink to="/contact">Gallary</NavLink>
            </div>
          </div>
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
