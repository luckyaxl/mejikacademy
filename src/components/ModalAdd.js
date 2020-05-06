import React, { Component } from "react";
import { Modal } from "react-bootstrap";

import { Mutation } from "@apollo/react-components";
import gql from "graphql-tag";

const CREATE = gql`
  mutation createCourse(
    $title: String!
    $cover: Upload!
    $description: String!
  ) {
    createCourse(
      input: { title: $title, cover: $cover, description: $description }
    ) {
      title
      cover
      description
    }
  }
`;

class ModalAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      select: false,
      data: {
        title: "",
        cover: "",
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
    
    this.setState({
      data: { cover: URL.createObjectURL(event.target.files[0]) }
    });

    console.log(this.state.data.cover)
  };

  handleSubmit = async (createCourse, e) => {
    e.preventDefault();
    this.setState({ loading: true });

    const variables = this.state.data;

    console.log(variables.cover)

    try {
      if (variables.cover !== "") {
        const data = await createCourse({
          variables
        });
        console.log(data)
        this.props.history.replace("/curriculum");
      } else {
        console.error(
          `not an image, the image file is a ${typeof variables.cover}`
        );
      }
    } catch (error) {
      console.log("Failed To Create");
      this.setState({ loading: false });
    }
  };

  render() {
    const { state } = this;
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
                    style={{ paddingTop: 10, height: 100 }}
                    className="main-form"
                    placeholder="Briefly describe this course.."
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label className="small bold">Cover</label>
                  <br />
                  {!this.state.select ? (
                    <input
                      className="upload-img"
                      type="file"
                      onChange={this.handleFile}
                    />
                  ) : (
                    <img
                      className="course-img"
                      src={state.data.cover}
                      alt="..."
                    />
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
                    Create Course
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

export default ModalAdd;
