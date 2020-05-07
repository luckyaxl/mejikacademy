import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import AddCourse from "../components/AddCourse";
import Empty from "../components/EmptyCourse";
import { getID } from "../utils/config";
import { Query } from "@apollo/react-components";
import gql from "graphql-tag";

const List = ({ createdById }) => (
  <Query query={GET_COURSE} variables={{ createdById }}>
    {(error, loading, data) => {
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
                    src={
                      course.cover ||
                      "https://udemycouponcodes.com/wp-content/uploads/2018/09/node-with-react.jpg"
                    }
                    alt="..."
                  />
                  <div className="desc">
                    <h6>{course.title}</h6>
                    <p className="mb-0">{course.description}</p>
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

class Instructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["halo", "ini"],
      open: false
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
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
        <AddCourse
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
            <List createdById={getID()} />
          </div>
        </div>
      </>
    );
  }
}

const GET_COURSE = gql`
  query courses($createdById: String!) {
    courses(where: { id: $createdById }) {
      id
      title
      cover
    }
  }
`;

export default Instructor;
