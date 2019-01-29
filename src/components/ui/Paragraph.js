import React from "react";
import "./Paragraph.css";

const Paragraph = props => {
  return (
    <div className={`Paragraph ${props.addClass ? props.addClass : ""}`}>
      {props.content}
    </div>
  );
};

export default Paragraph;
