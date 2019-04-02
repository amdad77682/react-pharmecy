import React, { Component } from "react";
import logo from "../../logo.svg";
import "../../../src/css/main.css";

export class Header extends React.Component {
  render() {
    return (
      <div className="">
        <div className="flex flex-row justify-between pl-10 pt-10 ">
          <div className="flex flex-row justify-between ">
            <img className="" src={logo} alt="Logo" />

            <h1 className="">Bio Care Agro Limited</h1>
          </div>
          <div className="flex flex-row justify-between mr-20">
            <div className="">{`+8801648899685  `} </div>
            <div className="ml-5">amdad77682@gmail.com</div>
          </div>
        </div>
        {/* <div className="flex flex-row items-end mr-30">
          <div className="text-grey-darker text-center bg-grey-light px-4 py-2 m-2">
            1
          </div>
          <div className="text-grey-darker text-center bg-grey-light px-4 py-2 m-2">
            2
          </div>
          <div className="text-grey-darker text-center bg-grey-light px-4 py-2 m-2">
            3
          </div>
        </div> */}
      </div>
    );
  }
}
