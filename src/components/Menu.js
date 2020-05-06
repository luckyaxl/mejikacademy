import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  handleClick = () => {
    localStorage.setItem("role", "instructor");
  };

  render() {
    const role = localStorage.getItem("role");
    const instructor = role === "instructor";

    return (
      <div className="d-flex lectures">
        <Link to="/mycourse">
          <button className="btn btn-link mr-3 text-dark">My Course</button>
        </Link>

        <Link to={instructor ? "/instructor" : "/mycourse"}>
          <button
            onClick={this.handleClick}
            className="btn main-btn-outline mr-3"
          >
            {instructor
              ? "Switch to Student  View"
              : "Switch to Insructor  View"}
          </button>
        </Link>
        <img
          className="profile"
          src="https://pngimage.net/wp-content/uploads/2018/06/user-png-images-4.png"
          alt="..."
        />
      </div>
    );
  }
}

export default Menu;
