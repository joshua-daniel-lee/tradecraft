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
          TradeCraft
        </a>
        <a href="/" className="aboutLink" className="link">
          About
        </a>
        <a href="/" className="stackLink" className="link">
          Stack
        </a>
        <a href="/" className="projectsLink" className="link">
          Projects
        </a>
        <a href="/" className="contactLink" className="link">
          Contact
        </a>
      </div>
    );
  }
}

export default Header;
