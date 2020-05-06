import React, { Component } from "react";
import AccordionItem from "../components/AccordionItem";

const paragraph =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.";

const data = [
  {
    title: "Pricing plans",
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

class Accordion extends Component {
  render() {
    return (
      <div className="wrapper">
        <ul className="accordion-list">
          {data.map((data, key) => {
            return (
              <li className="accordion-list__item" key={key}>
                <AccordionItem {...data} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Accordion;
