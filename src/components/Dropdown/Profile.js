import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

import {removeToken } from "../../utils/auth"

class Profile extends Component {

  handleSignOut = () => {
    removeToken();
    window.location.href = "/";
  }

  render() {
    return (
      <div>
        <Dropdown className="pr-0">
          <Dropdown.Toggle
            className="nav-link dropdown-toggle p-0 mr-0"
            style={{ borderRadius: "45px" }}
          >
            <img
              className="profile"
              src="https://pngimage.net/wp-content/uploads/2018/06/user-png-images-4.png"
              alt="..."
            />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-right mt-3">
            <Link to="/profile" className="dropdown-item">
              Profile
            </Link>
            <div className="divider"></div>
            <div
              style={{ cursor: "pointer" }}
              onClick={this.handleSignOut}
              className="dropdown-item"
            >
              Logout
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default Profile;
