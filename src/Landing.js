import React, { Component } from "react";
import Header from "./containers/Header.js";
import Video from "./containers/Video.js";
import About from "./containers/About.js";
import Stack from "./containers/Stack.js";
import Projects from "./containers/Projects.js";
import Footer from "./containers/Footer.js";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Video />
        <About />
        <Stack />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default Landing;
