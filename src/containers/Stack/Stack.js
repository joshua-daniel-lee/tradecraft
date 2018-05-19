import React, { Component } from "react";
import "./Stack.css";

class Stack extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="stack">
        <div className="stackIcon1" />
        <div className="stackIcon2" />
        <div className="stackIcon3" />
        <div className="stackIcon4" />
        <div className="stackIcon5" />
        <div className="stackIcon6" />
        <div className="stackIcon7" />
        <div className="stackIcon8" />
      </div>
    );
  }
}

export default Stack;
