import React, { Component } from "react";
import { Link } from "react-router-dom";
import Profile from "./Dropdown/Profile";

class Menu extends Component {
  componentDidMount() {
    localStorage.setItem("student", true);
  }

  handleClick = () => {
    const student = localStorage.getItem("student");
  };

  render() {
    const student = localStorage.getItem("student");
    //console.log(student)

    return (
      <div className="d-flex lectures">
        <Link to="/mycourse">
          <button className="btn btn-link mr-3 text-dark">My Course</button>
        </Link>

        <Link to={student ? "/mycourse" : "/instructor"}>
          <button
            onClick={this.handleClick}
            className="btn main-btn-outline mr-3"
          >
            {student ? "Switch to Intructor View" : "Switch to Student View"}
          </button>
        </Link>
        <Profile />
      </div>
    );
  }
}

export default Menu;
