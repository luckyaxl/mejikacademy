import React, { Component } from "react";
import Navbar from "../components/Navbar";

import {
  sortableContainer,
  sortableElement,
  sortableHandle
} from "react-sortable-hoc";
import arrayMove from "array-move";

import { Query } from "@apollo/react-components";
import gql from "graphql-tag";

import sharp from "../assets/images/sharp.svg";
import edit from "../assets/images/edit.svg";
import remove from "../assets/images/delete.svg";

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
              src={data.course.cover || "https://gotrips.lk/site/images/uploads/img.jpg"}
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

          <div className="ml-3 d-flex">
            <img src={edit} alt="..." className="btn-icon mr-2" />
            <img
              id={value}
              onClick={cancel}
              src={remove}
              className="btn-icon"
              alt="..."
            />
          </div>
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

const Lecture = sortableElement(({ value }) => (
  <div className="child-card ">
    <div className="d-flex align-items-center">
      <DragHandle className="mr-3" />
      <h6 className="m-0">{value}</h6>
    </div>

    <div className="row mt-3 px-3">
      <div className="col-lg-7">
        <div className="form-group">
          <label>Lecture Title</label>
          <input
            className="lecture-input"
            placeholder="e.g learn javascript from scratch"
          />
        </div>
      </div>
      <div className="col">
        <div className="form-group">
          <label>Thumbnail</label>
          <input type="file" className="lecture-input" />
        </div>
      </div>
    </div>
    <div className="form-group px-3">
      <label>Embed Link Video</label>
      <input className="lecture-input" placeholder="Insert Embed Link Video" />
    </div>
    <div className="form-group px-3">
      <label>Description</label>
      <textarea
        style={{ height: 100, resize: "none" }}
        className="lecture-input pt-1"
        placeholder="Briefly describe this course"
      />
      <button className="btn main-btn">Save</button>
    </div>
  </div>
));

class CourseCuriculum extends Component {
  state = {
    show: false,
    data: [
      {
        name: "Section 1",
        lectures: [
          {
            name: "Node Js",
            embed: "https://google.com"
          }
        ]
      }
    ]
  };


  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ data }) => ({
      data: arrayMove(data, oldIndex, newIndex)
    }));
  };

  onSortLecture = ({ oldIndex, newIndex }) => {
    this.setState(({ data }) => ({
      data: arrayMove(data, oldIndex, newIndex)
    }));
  };

  addSection = () => {
    const key = this.state.data.length;
    let data = this.state.data;
    data.push({
      name: `Section ${key + 1}`,
      lectures: [
        {
          name: "Node Js",
          embed: "https://google.com"
        }
      ]
    });
    this.setState({ data });
  };

  cancel = e => {
    const value = e.target.value;
    var checked = this.state.data;
    var values = checked.indexOf(value);
    checked.splice(values, 1);
    this.setState({ data: checked });
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
                  key={`item-${index + 1}`}
                  index={index}
                  value={value.name}
                  cancel={this.cancel}
                >
                  <div>
                    {value.lectures.map((value, i) => (
                      <Lecture value={value.name} />
                    ))}

                    <div style={{ margin: 10 }}>
                      <button className="btn btn-addmore btn-block">
                        New Lecture
                      </button>
                    </div>
                  </div>
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
