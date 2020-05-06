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
  <span>
    <img src={sharp} alt="..." />{" "}
  </span>
));

const SortableItem = sortableElement(({ value, cancel }) => (
  <div className="d-flex dnd-card mb-3 p-3 shadows justify-content-between">
    <div className="d-flex align-items-center">
      <DragHandle className="mr-3" />
      <h6 className="m-0">{value}</h6>
    </div>

    <div className="d-flex align-items-center">
      <button onClick={cancel} className="btn main-btn-outline mr-2">Cancel</button>
      <button className="btn main-btn">Add Section</button>
    </div>
  </div>
));

class CourseCuriculum extends Component {
  state = {
    section: ["Section 1"]
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ section }) => ({
      section: arrayMove(section, oldIndex, newIndex)
    }));
  };

  addSection = () => {
    const key = this.state.section.length
    let section = this.state.section;
    section.push( `Section ${key + 1}` );
    this.setState({ section });
  };

  cancel = (e) => {
    console.log(e.target)
  }

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
              {this.state.section.map((value, index) => (
                <SortableItem
                  key={`item-${value}`}
                  index={index}
                  value={value}
                  cancel={this.cancel}
                />
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
