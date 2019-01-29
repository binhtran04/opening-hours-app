import React from "react";
import "./H4.css";

const H4 = props => {
  return (
    <div className={`H4 ${props.addClass ? props.addClass : ""}`}>
      {props.title}
    </div>
  );
};

export default H4;
