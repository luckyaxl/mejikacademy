import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import { Query } from "@apollo/react-components";
import gql from "graphql-tag";

const GET_COURSE = gql`
  {
    courses(orderBy: createdAt_DESC) {
      id
      title
      cover
      description
      createdAt
    }
  }
`;
 
const Courses = () => (
  <Query query={GET_COURSE}>
    {({ error, loading, data }) => {
      if (error) return `Error! ${error.message}`;
      if (loading) return "Loading...";

      return (
        <>
          {data.courses.map((course, id) => (
            <div className="col-6 col-lg-3 px-2 mb-3" key={id}>
              <Link to={`/course/${course.id}`}>
                <div className="course-card">
                  <img
                    className="course-img"
                    src={course.cover || "https://udemycouponcodes.com/wp-content/uploads/2018/09/node-with-react.jpg"}
                    alt="..."
                  />
                  <div className="desc">
                    <h6>{course.title}</h6>
                    <p className="mb-0">{course.description || "no descriptions"}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </>
      );
    }}
  </Query>
);

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="home container main-content">
          <div className="row px-2">
            <Courses />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
