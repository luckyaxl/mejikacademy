/** Docs https://www.apollographql.com/docs/react/networking/authentication/#header */

import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import upload from "../assets/images/upload.svg";

import { Mutation } from "@apollo/react-components";
import gql from "graphql-tag";

const CREATE = gql`
  mutation createCourse($title: String!, $cover: Upload, $description: String) {
    createCourse(
      input: { title: $title, cover: $cover, description: $description }
    ) {
      title
      cover
      description
    }
  }
`;

class AddCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: false,
      preview: "",
      data: {
        title: "",
        cover: null,
        description: ""
      }
    };
  }

  handleChange = e => {
    const { data } = this.state;
    const value = e.target.value;
    this.setState({
      data: { ...data, [e.target.name]: value }
    });
  };

  handleFile = event => {
    const { data } = this.state;
    this.setState({
      data: { ...data, cover: event.target.files[0] },
      select: !this.state.select,
      preview: URL.createObjectURL(event.target.files[0])
    });
  };

  handleSubmit = async (createCourse, e) => {
    e.preventDefault();
    this.setState({ loading: true });
    try {
      const variables = this.state.data;
      const data = await createCourse({
        variables
      });
      const id = data.data.createCourse.id;
      window.location.href = `/lecture/${id}`;
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  };

  onDrop = acceptedFiles => {
    console.log(acceptedFiles);

    const { data } = this.state;
    this.setState({
      data: { ...data, cover: acceptedFiles },
      select: !this.state.select,
      preview: URL.createObjectURL(acceptedFiles)
    });
  };

  render() {
    const { state } = this;

    console.log(this.state.data);
    return (
      <Modal centered {...this.props} className="custom-map-modal">
        <div className="p-3">
          <h5>Create New Course</h5>
          <Mutation mutation={CREATE}>
            {createCourse => (
              <form onSubmit={event => this.handleSubmit(createCourse, event)}>
                <div className="form-group">
                  <label className="small bold">Course Title</label>
                  <input
                    name="title"
                    onChange={this.handleChange}
                    value={state.data.title}
                    className="main-form"
                    placeholder="e.g Learn Javascript from Scratch"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label className="small bold">Description</label>
                  <textarea 
                    name="description"
                    onChange={this.handleChange}
                    value={state.data.description}
                    style={{ paddingTop: 10, height: 100, resize: 'none' }}
                    className="main-form"
                    placeholder="Briefly describe this course.."
                    type="text"
                  />
                </div>
                <div className="form-group inputDnD">
                  <label className="small bold">Cover</label>
                  <br />
                  {!this.state.select ? (
                    <>
                      <label className="covers" htmlFor="upload">
                        <img src={upload} alt="..." />
                        <p>Upload Cover Here</p>
                        <input
                          id="upload"
                          type="file"
                          onChange={this.handleFile}
                          encType="multipart/form-data"
                        />
                      </label>
                    </>
                  ) : (
                    <img className="course-img" src={state.preview} alt="..." />
                  )}
                </div>
                <div className="d-flex float-right">
                  <button
                    onClick={this.props.onHide}
                    type="button"
                    className="btn main-btn-outline mr-2"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn main-btn">
                    {this.state.loading && <div className="loader"></div>}
                    {!this.state.loading && <span>Create Course</span>}
                  </button>
                </div>
              </form>
            )}
          </Mutation>
        </div>
      </Modal>
    );
  }
}

export default AddCourse;
