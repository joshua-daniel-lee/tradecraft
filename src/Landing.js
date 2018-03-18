import React, { Component } from "react";
import SideNavigation from "./containers/sideNavigation/sideNavigation.js";
import Header from "./containers/Header/Header.js";
import Video from "./containers/Video/Video.js";
import Checker from "./containers/Checker/Checker.js";
import About from "./containers/About/About.js";
import Stack from "./containers/Stack/Stack.js";
import Inspiration from "./containers/Inspiration/Inspiration.js";
import Projects from "./containers/Projects/Projects.js";
import Contact from "./containers/Contact/Contact.js";
import Footer from "./containers/Footer/Footer.js";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <SideNavigation />
        <Header />
        <Video />
        <About />
        <Stack />
        <Inspiration />
        <Checker />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Landing;
