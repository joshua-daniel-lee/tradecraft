import React, { Component } from "react";
import "./Inspiration.css";

class Inspiration extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="inspiration">
        <div className="inspirationCallout" />
        <div className="inspirationImageCover" />
      </div>
    );
  }
}

export default Inspiration;
