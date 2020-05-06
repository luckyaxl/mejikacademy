import React, { Component } from "react";
import Add from "../components/ModalAdd";

class EmptyCourse extends Component {
  state = {
    open: false
  };

  render() {
    return (
      <div className="container">
        <Add
          show={this.state.open}
          onHide={() => this.setState({ open: !this.state.open })}
        />
        <div className="empty-instructor">
          <h1 className="mb-3">Your Course Is Empty</h1>
          <button
            onClick={() => this.setState({ open: !this.state.open })}
            className="btn main-btn"
          >
            Add Your Own Course Now!
          </button>
        </div>
      </div>
    );
  }
}

export default EmptyCourse;
