import React from "react";
import plus from "../assets/images/plus.svg";
import minus from "../assets/images/minus.svg";
import play from "../assets/images/play.svg";

class Accordion extends React.Component {
  render() {
    const { title, expand, onClick } = this.props;

    return (
      <div className="mb-2">
        <div className={expand ? "title is-expanded" : "title"}>
          <div className="p-3" onClick={onClick}>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <img src={expand ? minus : plus} alt="..." />
                <h6 className="ml-2 mb-0">{title}</h6>
              </div>
              <div className="d-flex lectures">
                <span className="text-muted mr-5">
                  {!expand ? "10 lectures" : null}
                </span>
                <span className="text-muted">10:10:41</span>
              </div>
            </div>
          </div>

          <div className={expand ? "content is-expanded" : "content"}>
            <div className="bg-white border-top p-3">
              <div className="content-pl d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <img src={play} alt="..." />
                  <p className="ml-3">Lorem ipsum dolor sit amet</p>
                </div>
                <span className="text-muted lectures">06:10:10</span>
              </div>
            </div>

            <div className="bg-white border-top p-3">
              <div className="content-pl d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <img src={play} alt="..." />
                  <p className="ml-3">Lorem ipsum dolor sit amet</p>
                </div>
                <span className="text-muted lectures">06:10:10</span>
              </div>
            </div>

            <div className="bg-white border-top p-3">
              <div className="content-pl d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <img src={play} alt="..." />
                  <p className="ml-3">Lorem ipsum dolor sit amet</p>
                </div>
                <span className="text-muted lectures">06:10:10</span>
              </div>
            </div>

            <div className="bg-white border-top p-3">
              <div className="content-pl d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <img src={play} alt="..." />
                  <p className="ml-3">Lorem ipsum dolor sit amet</p>
                </div>
                <span className="text-muted lectures">06:10:10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
