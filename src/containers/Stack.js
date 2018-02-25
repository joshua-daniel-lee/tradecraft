import React, { Component } from "react";

class Stack extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="stack">
        <button className="snip0047">
          <span>Submit</span>
          <i className="ion-android-arrow-forward" />
        </button>
        <button className="snip0047 hover blue">
          <span>Read More</span>
          <i className="ion-android-arrow-forward" />
        </button>
        <button className="snip0047 red">
          <span>Add to Cart</span>
          <i className="ion-ios-cart" />
        </button>
        <button className="snip0047 yellow">
          <span>Subscribe</span>
          <i className="ion-android-arrow-forward" />
        </button>
      </div>
    );
  }
}

export default Stack;
