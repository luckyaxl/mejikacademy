import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="home container main-content">
          <div className="row px-2">
            <div className="col-6 col-lg-3 px-2 mb-3">
              <Link to="/course/1">
                <div className="course-card">
                  <img
                    className="course-img"
                    src="https://udemycouponcodes.com/wp-content/uploads/2018/09/node-with-react.jpg"
                    alt="..."
                  />
                  <div className="desc">
                    <h6>The Complete 2020 Web Development Bootcamp</h6>
                    <p className="mb-0">lkjsdlf kjl sdf. s adui hy asdfas dfasd sadf fas asdf asdf asdf asd asdf fas..</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-6 col-lg-3 px-2 mb-3">
              <Link to="/course/1">
                <div className="course-card">
                  <img
                    className="course-img"
                    src="https://udemycouponcodes.com/wp-content/uploads/2018/09/node-with-react.jpg"
                    alt="..."
                  />
                  <div className="desc">
                    <h6>The Complete 2020 Web Development Bootcamp</h6>
                    <p className="mb-0">lkjsdlf kjl sdf. s adui hy asdfas dfasd sadf fas asdf asdf asdf asd asdf fas..</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-6 col-lg-3 px-2 mb-3">
              <Link to="/course/1">
                <div className="course-card">
                  <img
                    className="course-img"
                    src="https://udemycouponcodes.com/wp-content/uploads/2018/09/node-with-react.jpg"
                    alt="..."
                  />
                  <div className="desc">
                    <h6>The Complete 2020 Web Development Bootcamp</h6>
                    <p className="mb-0">lkjsdlf kjl sdf. s adui hy asdfas dfasd sadf fas asdf asdf asdf asd asdf fas..</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-6 col-lg-3 px-2 mb-3">
              <Link to="/course/1">
                <div className="course-card">
                  <img
                    className="course-img"
                    src="https://udemycouponcodes.com/wp-content/uploads/2018/09/node-with-react.jpg"
                    alt="..."
                  />
                  <div className="desc">
                    <h6>The Complete 2020 Web Development Bootcamp</h6>
                    <p className="mb-0">lkjsdlf kjl sdf. s adui hy asdfas dfasd sadf fas asdf asdf asdf asd asdf fas..</p>
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

export default Home;
