import React, { Component } from "react";
import Navbar from "../components/Navbar";

class CourseCuriculum extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="main-content container">
          <div className="card p-3 mb-3">
            <div className="d-flex">
              <div className="mr-3">
                <img
                  className="course-img img-card"
                  src="https://udemycouponcodes.com/wp-content/uploads/2018/09/node-with-react.jpg"
                  alt="..."
                />
              </div>
              <div>
                <div style={{ maxWidth: "70%" }}>
                  <h5>Node with React: Fullstack Web Development</h5>
                  <p>
                    Build and deploy fullstack web apps with nodeJS, React,
                    Redux, Express, and MongoDB.
                  </p>
                </div>
                <button className="btn main-btn-sm main-btn-outline">
                  Edit Course
                </button>
              </div>
            </div>
          </div>
          <div className="card p-3">
            <div className="d-flex justify-content-between align-items-center">
              <h5>Curriculum</h5>
              <button className="btn main-btn">Submit Course</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CourseCuriculum;
