import React, { Component } from "react";
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
    title: "How to apply",
    paragraph
  },
  {
    title: "Purchasing process",
    paragraph
  },
  {
    title: "Usage guides",
    paragraph
  }
];

class Course extends Component {
  render() {
    return (
      <>
        <Navbar />
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
