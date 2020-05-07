import React, { Component } from "react";
//import check from "../assets/images/check.svg";
import play from "../assets/images/play.svg";

class AccordionItem extends Component {
  state = {
    opened: false
  };

  render() {
    const {
      props: { title, lectures },
      state: { opened }
    } = this;

    return (
      <div className={`accordion-item, ${opened && "accordion-item--opened"}`}>
        <div
          className="accordion-item__line"
          onClick={() => {
            this.setState({ opened: !opened });
          }}
        >
          <div className="accordion-item__title">
            <h6>{title}</h6>
            <p>41 Mins • 1/10</p>
          </div>
          <span className="accordion-item__icon" />
        </div>
        <div className="accordion-item__inner">
          <div className="accordion-item__content">
            <p className="accordion-item__paragraph mt-3">
              <img alt="..." src={play} className="mr-2" />{lectures}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AccordionItem;
