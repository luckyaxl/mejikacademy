import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Add from "../components/ModalAdd";
import Empty from "../components/EmptyCourse";

class Instructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["halo", "ini"],
      open: false
    };
  }
  render() {
    const data = this.state.data;
    if (data.length < 1) {
      return (
        <>
          <Navbar />
          <Empty />
        </>
      );
    }

    return (
      <>
        <Add
          show={this.state.open}
          onHide={() => this.setState({ open: !this.state.open })}
        />
        <Navbar />
        <div className="main-content container">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>Created Course</h4>
            <button
              onClick={() => this.setState({ open: !this.state.open })}
              className="btn main-btn"
            >
              New Course
            </button>
          </div>
          <div className="row px-2">
            <div className="col-6 col-lg-3 px-2 mb-3">
              <Link to="/curriculum">
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

            <div className="col-6 col-lg-3 px-2 mb-3">
              <div className="course-card">
                <img
                  className="course-img"
                  src="https://miro.medium.com/max/1400/1*Qs-62pzrntZoFqRouAvTgg.png"
                  alt="..."
                />
                <div className="desc">
                  <h6>Node with React: Fullstack joej powe weij wepoj</h6>
                  <p className="mb-0">lkjsdlfkjlsdf...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Instructor;
