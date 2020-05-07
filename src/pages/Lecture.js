import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Dragndrop from "../components/Dragndrop";
import { Query } from "@apollo/react-components";
import gql from "graphql-tag";

const Header = ({ id }) => (
  <Query query={GET_COURSE} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
        <div className="d-flex">
          <div className="mr-3">
            <img
              className="course-img img-card"
              src={
                data.course.cover ||
                "https://gotrips.lk/site/images/uploads/img.jpg"
              }
              alt="..."
            />
          </div>
          <div>
            <div style={{ maxWidth: "90%" }}>
              <h5>{data.course.title || "no title"}</h5>
              <p>{data.course.description || "no description"}</p>
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

class Lecture extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const id = this.props.match.params.id;
    return (
      <>
        <Navbar />
        <div className="main-content container">
          <div className="card p-3 mb-3">
            <Header id={id} />
          </div>
          <div className="card p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5>Curriculum</h5>
              <button className="btn main-btn">Submit Course</button>
            </div>
            <Dragndrop/>
          </div>
        </div>
      </>
    );
  }
}

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

export default Lecture;
