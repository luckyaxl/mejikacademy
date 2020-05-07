import React, { Component } from "react";
import { Query } from "@apollo/react-components";
import gql from "graphql-tag";

import ReactPlayer from "react-player";
import Navbar from "../components/Navbar";
import AccordionItem from "../components/AccordionItem";
const paragraph = "What You'll Get in This Course";

const data = [
  {
    title: "Front-End Web Development",
    paragraph
  },
  {
    title: "What You'll Get in This Course",
    paragraph
  },
  {
    title: "How to Get the Most Out of the Course",
    paragraph
  },
  {
    title: "How Does the Internet Actually Work?",
    paragraph
  },
  {
    title: "How Do Websites Actually Work?",
    paragraph
  },
  {
    title: "What You'll Need to Get Started",
    paragraph
  },
  {
    title: "How to Get Help When You're Stuck",
    paragraph
  },
  {
    title: "Introduction to HTML",
    paragraph
  },
  {
    title: "Intermediate HTML",
    paragraph
  }
];

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

class Course extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const id = this.props.match.params.id;
    return (
      <>
        <Query query={GET_COURSE} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            return <Navbar title={data.course.title} />;
          }}
        </Query>

        <div className="main-content container">
          <div className="row">
            <div className="col-lg-8">
              <div className="fixcard">
                <div className="shadows mb-3">
                  <ReactPlayer className="mv-player" width="100%" playing />
                </div>
                <div style={{ maxWidth: "90%" }}>
                  <h5>What You'll get in this Course</h5>
                  <p>
                    Become a full-stack web developer with just one course.
                    HTML, CSS, Javascript, Node, React, MongoDB and more!
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div>
                <div className="wrapper">
                  <ul className="accordion-list">
                    <div className="p-3">
                      <h5 className="mb-0" style={{ fontSize: 18 }}>
                        Course Content
                      </h5>
                    </div>
                    {data.map((data, key) => {
                      return (
                        <li className="accordion-list__item" key={key}>
                          <AccordionItem {...data} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Course;
