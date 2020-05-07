import React, { Component } from "react";
import splash from "../assets/images/splash.svg";

class Splash extends Component {
  render() {
    return (
      <div className="splash">
        <img style={{ width: 180 }} src={splash} alt="..." />
        <br />
        <div className="loader-dark"></div>
      </div>
    );
  }
}

export default Splash;
