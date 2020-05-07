import React, { Component } from "react";
import { Link } from "react-router-dom";
import Profile from "./Dropdown/Profile";

class Menu extends Component {
  componentDidMount() {
    const active = localStorage.getItem("active");
    if (!active) {
      localStorage.setItem("active", "student");
    }
  }

  handleClick = () => {
    const active = localStorage.getItem("active");
    const rev = active === "student" ? "instructor" : "student";
    localStorage.setItem("active", rev);
    window.location.href = "/";
  };

  render() {
    const active = localStorage.getItem("active");

    return (
      <div className="d-flex lectures">
        {active === "student" ? (
          <Link to="/courses">
            <button className="btn btn-link mr-3 text-dark">My Course</button>
          </Link>
        ) : null}

        <button
          onClick={this.handleClick}
          className="btn main-btn-outline mr-3"
        >
          {active === "student"
            ? "Switch to Intructor View"
            : active === "instructor"
            ? "Switch to Student View"
            : null}
        </button>
        <Profile />
      </div>
    );
  }
}

export default Menu;
