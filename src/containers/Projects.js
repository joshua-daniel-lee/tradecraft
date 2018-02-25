import React, { Component } from "react";

class Projects extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="projects">
        <figure class="snip1081 yellow">
          <i class="ion-ios-paw-outline" />
          <figcaption>
            <div class="header">
              <h2>Adventure</h2>
              <p>
                Mo - Fr 8.00 - 18.00<br />Sa - Su 9.00 - 12.00
              </p>
            </div>
            <p>
              My family is dysfunctional and my parents won't empower me.
              Consequently I'm not self actualized.
            </p>
            <a href="#" />
          </figcaption>
        </figure>
        <figure class="snip1081 red hover">
          <i class="ion-ios-people" />
          <figcaption>
            <div class="header">
              <h2>Night Life</h2>
              <p>
                Mo - Fr 8.00 - 18.00<br />Sa - Su 9.00 - 12.00
              </p>
            </div>
            <p>
              That's the difference between me and the rest of the world!
              Happiness isn't good enough for me! I demand euphoria!
            </p>
            <a href="#" />
          </figcaption>
        </figure>
        <figure class="snip1081 blue">
          <i class="ion-ios-camera-outline" />
          <figcaption>
            <div class="header">
              <h2>Day Trips</h2>
              <p>
                Mo - Fr 8.00 - 18.00<br />Sa - Su 9.00 - 12.00
              </p>
            </div>
            <p>
              You know what we need, Hobbes? We need an attitude. Yeah, you
              can't be cool if you don't have an attitude.
            </p>
            <a href="#" />
          </figcaption>
        </figure>
      </div>
    );
  }
}

export default Projects;
