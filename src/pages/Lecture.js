import React, { Component } from "react";
import Navbar from "../components/Navbar";

import { Query } from "@apollo/react-components";
import gql from "graphql-tag";

const GET_COURSE = gql`
  query course($id: String!) {
    course(id: $id) {
      title
      cover
      description
      createdAt
    }
  }
`;

const AddLectures = ({ id }) => (
  <Query query={GET_COURSE} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
        <div className="d-flex">
          <div className="mr-3">
            <img className="course-img img-card" src={data.course.cover} alt="..." />
          </div>
          <div>
            <div style={{ maxWidth: "70%" }}>
              <h5>{data.course.title}</h5>
              <p>{data.course.description}</p>
            </div>
            <button className="btn main-btn-sm main-btn-outline">
              Edit Course
            </button>
          </div>
        </div>
      );
    }}
  </Query>
);

class CourseCuriculum extends Component {
  render() {
    const id = this.props.match.params.id;
    return (
      <>
        <Navbar />
        <div className="main-content container">
          <div className="card p-3 mb-3">
            <AddLectures id={id} />
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
