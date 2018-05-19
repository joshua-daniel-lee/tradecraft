import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="header">
        <a href="/" className="logo">
          Joshua Lee
        </a>
      </div>
    );
  }
}

export default Header;
