import React, { Component } from "react";
import { Link } from "react-router-dom";
import logosm from "../assets/images/logo-sm.svg";
//import search from "../assets/images/search.svg";

import Menu from "./Menu";

class Navbar extends Component {
  render() {
    return (
      <nav style={{ height: 55 }} className="navbar bg-white fixed-top shadows">
        <div className="d-flex align-items-center logo">
          <Link to="/">
            <img style={{ height: 40 }} src={logosm} alt="..." />
          </Link>
          <input
            type="text"
            className="searchbar lectures"
            placeholder="Search Course Here"
          />
        </div>
        <Menu/>
        {/**
        <div className="d-flex align-items-center lectures">
          <Link to="/login">
            <button className="btn main-btn-outline mr-2">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn main-btn">Register</button>
          </Link>
        </div>
         */}
      </nav>
    );
  }
}

export default Navbar;
