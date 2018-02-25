import React, { Component } from "react";
import Header from "./containers/Header/Header.js";
import Video from "./containers/Video/Video.js";
import About from "./containers/About/About.js";
import Stack from "./containers/Stack/Stack.js";
import Projects from "./containers/Projects/Projects.js";
import Contact from "./containers/Contact/Contact.js";
import Footer from "./containers/Footer/Footer.js";
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
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Landing;
