import React from "react";
import "./Paragraph.css";

const Paragraph = props => {
  return <p className="Paragraph">{props.content}</p>;
};

export default Paragraph;
