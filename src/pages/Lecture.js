import React, { Component } from "react";
import Navbar from "../components/Navbar";

import sharp from "../assets/images/sharp.svg";

import {
  sortableContainer,
  sortableElement,
  sortableHandle
} from "react-sortable-hoc";
import arrayMove from "array-move";

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
            <img
              className="course-img img-card"
              src={data.course.cover}
              alt="..."
            />
          </div>
          <div>
            <div style={{ maxWidth: "90%" }}>
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

const SortableContainer = sortableContainer(({ children }) => {
  return <div>{children}</div>;
});

const DragHandle = sortableHandle(() => (
  <span className="mr-2">
    <img src={sharp} alt="..." />{" "}
  </span>
));

const Section = sortableElement(({ value, cancel, children }) => {
  return (
    <div className="dnd-card shadows mb-3 p-2">
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <DragHandle />
          <h6 className="m-0">{value}</h6>
        </div>

        {/**
        <div className="d-flex align-items-center">
          <button
            id={value}
            onClick={cancel}
            className="btn main-btn-outline mr-2"
          >
            Cancel
          </button>
          <button className="btn main-btn">Add Section</button>
        </div>
         */}
      </div>
      <div>{children}</div>
    </div>
  );
});

const Lecture = sortableElement(({ value, cancel }) => (
  <div className="child-card ">
    <div className="d-flex align-items-center">
      <DragHandle className="mr-3" />
      <h6 className="m-0">{value}</h6>
    </div>

    <div className="row mt-3 ml-3">
      <div className="col-7">
        <input
          className="lecture-input"
          placeholder="e.g learn javascript from scratch"
        />
      </div>
      <div className="col">
        <input type="file" className="lecture-input" />
      </div>
    </div>
  </div>
));

class CourseCuriculum extends Component {
  state = {
    section: ["Section 1"],
    data: [
      {
        name: "Course 1",
        lectures: [
          {
            name: "Node Js",
            embed: "https://google.com"
          },
          {
            name: "PHP",
            embed: "https://google.com"
          }
        ]
      },
      {
        name: "Course 2",
        lectures: [
          {
            name: "Node Js",
            embed: "https://google.com"
          },
          {
            name: "PHP",
            embed: "https://google.com"
          }
        ]
      }
    ]
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ data }) => ({
      data: arrayMove(data, oldIndex, newIndex)
    }));
  };

  addSection = () => {
    const key = this.state.section.length;
    let section = this.state.section;
    section.push(`Section ${key + 1}`);
    this.setState({ section });
  };

  cancel = e => {
    console.log(e.target.id);
  };

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
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5>Curriculum</h5>
              <button className="btn main-btn">Submit Course</button>
            </div>
            <SortableContainer onSortEnd={this.onSortEnd} useDragHandle>
              {this.state.data.map((value, index) => (
                <Section
                  key={`item-${value}`}
                  index={index}
                  value={value.name}
                  cancel={this.cancel}
                >
                  {value.lectures.map((value, index) => (
                    <Lecture
                      key={`item-${index + 1}`}
                      index={index}
                      value={value.name}
                    />
                  ))}
                </Section>
              ))}
            </SortableContainer>
            <button onClick={this.addSection} className="btn add-new btn-block">
              Add New Section
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default CourseCuriculum;
