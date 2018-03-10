import React, { Component } from "react";
import "./Video.css";

class Video extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="video">
        <div className="callout" />
        <div className="imageCover" />
      </div>
    );
  }
}

export default Video;
