import React from "react";
import "./H1.css";

const H1 = props => {
  return (
    <div className={`H1 ${props.addClass ? props.addClass : ""}`}>
      {props.title}
    </div>
  );
};

export default H1;
