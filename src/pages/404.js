import React, { Component } from "react";
import Navbar from "../components/Navbar";

class ErrorPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="splash">
          <h3 className="pt-3">Oops! Page Not Found</h3>
          <small>The page you are request cannot be found</small>
        </div>
      </>
    );
  }
}

export default ErrorPage;
