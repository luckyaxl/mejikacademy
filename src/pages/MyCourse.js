import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

class MyCourse extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="home container main-content">
          <div className="row px-2">
            <div className="col-6 col-lg-3 px-2 mb-3">
              <Link to="/course/lectures/1">
                <div className="course-card">
                  <img
                    className="course-img"
                    src="https://udemycouponcodes.com/wp-content/uploads/2018/09/node-with-react.jpg"
                    alt="..."
                  />
                  <div className="desc">
                    <h6>Node with React: Fullstack joej powe weij wepoj</h6>
                    <p className="mb-0">lkjsdlfkjlsdf...</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MyCourse;
