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
          <div className="projectTitle">Project Title</div>
          <div className="projectContainer">
            <div className="projectImage" />
          </div>
        </div>
        <div className="projectTwo">
          <div className="projectTitle">Project Title</div>
          <div className="projectContainer">
            <div className="projectImage" />
          </div>
        </div>
        <div className="projectThree">
          <div className="projectTitle">Project Title</div>
          <div className="projectContainer">
            <div className="projectImage" />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
