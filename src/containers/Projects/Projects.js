import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="projects">
        <div className="projectOne">
          <div className="projectImage" />
        </div>
        <div className="projectTwo">
          <div className="projectImage" />
        </div>
        <div className="projectThree">
          <div className="projectImage" />
        </div>
      </div>
    );
  }
}

export default Projects;
