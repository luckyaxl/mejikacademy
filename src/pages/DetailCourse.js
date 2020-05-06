import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Accordion from "../components/Accordion2";

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

const Detail = ({ id }) => (
  <Query query={GET_COURSE} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
        <div className="row">
          <div className="col-lg-7 mb-3">
            <div>
              <h4>{data.course.title}</h4>
              <p>{data.course.description}</p>
            </div>
            <button className="btn main-btn mt-3">Enroll This Course</button>
          </div>
          <div className="col">
            <img
              className="img-fluid card"
              src="https://i.ytimg.com/vi/DLX62G4lc44/maxresdefault.jpg"
              alt="..."
            />
          </div>
        </div>
      );
    }}
  </Query>
);

class DetailCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      block1: true,
      block2: false,
      block3: false,
      expand: false
    };
  }

  toggle = index => () => {
    this.setState({ [`block${index}`]: !this.state[`block${index}`] });
  };

  toggleExpand = expand => () => {
    this.setState({
      block1: expand,
      block2: expand,
      block3: expand,
      expand: expand
    });
  };

  render() {
    const accordionList = [
      { title: "Front End Development" },
      { title: "Introduction HTML" },
      { title: "Intermediate HTML" }
    ];

    const id = this.props.match.params.id;

    return (
      <>
        <Navbar />
        <div className="main-content container">
          <div className="card p-4 mb-3">
            <Detail id={id} />
          </div>
          <div className="card p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">Course Content</h5>
              <div className="d-flex align-items-center">
                <button
                  onClick={this.toggleExpand(!this.state.expand)}
                  className="btn btn-link p-0 mr-3"
                >
                  <small>
                    {this.state.expand ? "Collapse All" : "Expand all"}
                  </small>
                </button>
                <small>210 lectures</small>
              </div>
            </div>
            <div>
              <div className="accordion">
                {accordionList.map((item, index) => (
                  <Accordion
                    key={index}
                    title={item.title}
                    onClick={this.toggle(index + 1)}
                    expand={this.state[`block${index + 1}`]}
                  />
                ))}
              </div>
              <button className="btn btn-loadmore btn-block">
                17 more section
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DetailCourse;
