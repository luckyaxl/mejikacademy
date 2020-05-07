import React, { Component } from "react";
import { Link } from "react-router-dom";
import logosm from "../assets/images/logo-sm.svg";

import Menu from "./Menu";

import { getToken } from "../utils/auth";

class Navbar extends Component {
  render() {
    const { title } = this.props;
    const login = getToken();

    return (
      <nav style={{ height: 55 }} className="navbar bg-white fixed-top shadows">
        <div className="d-flex align-items-center logo">
          <Link to="/">
            <img style={{ height: 40 }} src={logosm} alt="..." />
          </Link>
          {title && title.length > 0 ? (
            <h5 className="titlebar lectures mb-0">{title}</h5>
          ) : (
            <input
              type="text"
              className="searchbar lectures"
              placeholder="Search Course Here"
            />
          )}
        </div>

        {login ? (
          <Menu />
        ) : (
          <div className="d-flex align-items-center lectures">
            <Link to="/login">
              <button className="btn main-btn-outline mr-2">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn main-btn">Register</button>
            </Link>
          </div>
        )}
      </nav>
    );
  }
}

export default Navbar;
