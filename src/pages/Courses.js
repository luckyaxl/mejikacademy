import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import { Query } from "@apollo/react-components";
import gql from "graphql-tag";

const GET_COURSE = gql`
  query course($id: String!) {
    course(id: $id) {
      id
      title
      cover
      description
      createdAt
    }
  }
`;

class Courses extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Navbar />
        <div className="home container main-content">
          <div className="row px-2">
            <div className="col-6 col-lg-3 px-2 mb-3">
              <Link to="/course/sjsd">
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

export default Courses;
