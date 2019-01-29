import React from "react";
import "./H3.css";

const H3 = props => {
  return (
    <div className={`H3 ${props.addClass ? props.addClass : ""}`}>
      {props.title}
    </div>
  );
};

export default H3;
