import React, { Component } from "react";
import {
  sortableContainer,
  sortableElement,
  sortableHandle
} from "react-sortable-hoc";
import arrayMove from "array-move";
import sharp from "../../assets/images/sharp.svg";
import edit from "../../assets/images/edit.svg";
import remove from "../../assets/images/delete.svg";

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

const Lectures = sortableElement(({ value }) => (
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

class Dragndrop extends Component {
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

  onSortEnd = ({ oldIndex, newIndex }) => {
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
    return (
      <div>
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
                  <Lectures key={i} value={value.name} />
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
    );
  }
}

export default Dragndrop;
